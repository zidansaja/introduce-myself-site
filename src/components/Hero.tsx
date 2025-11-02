import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-glow rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-slide-in">
            <div className="space-y-4">
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight">
                Zidni Zidan M
              </h1>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
                  Video Editor & Web Developer
                </p>
                <p className="text-lg text-primary-foreground/80">
                  Photographer | Videographer | Entrepreneur
                </p>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-primary-foreground/70 max-w-xl mx-auto lg:mx-0">
              Creative professional with expertise in multimedia production, web development, 
              and digital content creation. Currently pursuing Computer Science at Universitas Hasyim Asy'ari Tebuireng.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button 
                onClick={() => scrollToSection('experience')}
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
              >
                View Experience
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-foreground/20 rounded-full blur-2xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-foreground/30 shadow-elegant">
                <img 
                  src={profileImg} 
                  alt="Zidni Zidan M"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
