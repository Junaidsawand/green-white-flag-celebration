import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
  showBadge?: boolean;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  children, 
  showBadge = false 
}: HeroSectionProps) => {
  return (
    <section 
      className="relative bg-gradient-hero text-primary-foreground py-20 md:py-32"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(20, 100, 50, 0.8), rgba(20, 100, 50, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            {subtitle}
          </p>
        )}
        
        {showBadge && (
          <Badge 
            variant="secondary" 
            className="bg-background/20 text-primary-foreground border-primary-foreground/30 hover:bg-background/30 transition-colors duration-300"
          >
            Designed & Developed by Junaid Ahmed
          </Badge>
        )}
        
        {children && (
          <div className="mt-8 animate-fade-in">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;