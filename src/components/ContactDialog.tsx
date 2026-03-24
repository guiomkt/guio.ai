import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Form schema using zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().regex(
    /^\(\d{2}\) \d{5}-\d{4}$/, 
    { message: "Telefone deve estar no formato (XX) XXXXX-XXXX" }
  ),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  buttonText?: string;
}

const ContactDialog = ({ open, onOpenChange, buttonText = "Conversar com agente GUIO.AI" }: ContactDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // Build Calendly URL with prefilled data
  const calendlyUrl = submittedData
    ? `https://calendly.com/2bemkt/guio-ai-reuniao-estrategica?hide_event_type_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=ff0000&name=${encodeURIComponent(submittedData.name)}&email=${encodeURIComponent(submittedData.email)}&a1=${encodeURIComponent(submittedData.phone)}`
    : "";

  // Load / unload Calendly widget script
  useEffect(() => {
    if (showCalendly) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showCalendly]);

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    
    if (digits.length <= 2) {
      return `(${digits}`;
    } else if (digits.length <= 7) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    form.setValue("phone", formattedValue);
  };

  const handleCloseCalendly = () => {
    setShowCalendly(false);
    setSubmittedData(null);
    form.reset();
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Send data to webhook
      const webhookResponse = await fetch("https://n8nweb.2be.com.br/webhook/d90b1a57-ac3c-4070-be9f-8c770cbf0a85", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          source: window.location.href,
          timestamp: new Date().toISOString(),
          contact_email: "rafael@2be.com.br"
        }),
      });
      
      if (!webhookResponse.ok) {
        console.error("Webhook error:", webhookResponse.statusText);
        throw new Error("Falha ao enviar dados. Por favor, tente novamente.");
      }
      
      // Close the form dialog and open Calendly
      onOpenChange(false);
      setSubmittedData(data);
      setShowCalendly(true);
      
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Ocorreu um erro inesperado",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Form Dialog */}
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md bg-guio-darkgray border-guio-lightgray/30 text-guio-white">
          <DialogHeader>
            <DialogTitle className="text-guio-white">Entre em contato conosco</DialogTitle>
            <DialogDescription className="text-guio-white/70">
              Preencha seus dados para falar com um de nossos especialistas
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-guio-white">Nome</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Seu nome completo" 
                        {...field} 
                        className="bg-guio-black/50 border-guio-lightgray/30 text-guio-white" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-guio-white">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="seu.email@exemplo.com" 
                        type="email"
                        {...field} 
                        className="bg-guio-black/50 border-guio-lightgray/30 text-guio-white" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-guio-white">Telefone / WhatsApp</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="(XX) XXXXX-XXXX" 
                        {...field} 
                        onChange={(e) => handlePhoneChange(e)}
                        className="bg-guio-black/50 border-guio-lightgray/30 text-guio-white" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter className="mt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-guio-red hover:bg-guio-red/80 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {buttonText}
                    </>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Calendly Dialog */}
      <Dialog open={showCalendly} onOpenChange={handleCloseCalendly}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] p-0 overflow-hidden border-guio-lightgray/30">
          <div 
            className="calendly-inline-widget" 
            data-url={calendlyUrl}
            style={{ minWidth: "320px", height: "700px" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactDialog;
