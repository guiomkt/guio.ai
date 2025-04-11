
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center text-2xl font-bold font-space", className)}>
      <span className="text-guio-red">GUIO</span>
      <span className="text-guio-white">.AI</span>
    </div>
  );
};

export default Logo;
