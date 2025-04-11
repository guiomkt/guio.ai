import React, { useState } from "react";
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
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
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
    form.setValue('phone', formattedValue);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Send data to webhook
      const webhookResponse = await fetch("https://hook.2be.com.br/webhook/9097ea84-506b-49bf-9d54-d047e18610ac", {
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
      
      // Check if webhook call was successful
      if (!webhookResponse.ok) {
        console.error("Webhook error:", webhookResponse.statusText);
        throw new Error("Falha ao enviar dados. Por favor, tente novamente.");
      }
      
      // Show success toast
      toast({
        title: "Dados enviados com sucesso!",
        description: "Redirecionando para o WhatsApp...",
      });
      
      // Close dialog
      onOpenChange(false);
      
      // Redirect to WhatsApp
      const whatsappUrl = "https://wa.me/5531986830483?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20os%20Agentes%20de%20IA!";
      window.open(whatsappUrl, "_blank");
      
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
                  <FormLabel className="text-guio-white">Telefone</FormLabel>
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
  );
};

export default ContactDialog;
