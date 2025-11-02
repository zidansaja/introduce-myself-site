import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telepon",
      value: "+62 813 5727 8841",
      href: "tel:+6281357278841"
    },
    {
      icon: Mail,
      label: "Email",
      value: "zidan0516@gmail.com",
      href: "mailto:zidan0516@gmail.com"
    },
    {
      icon: MapPin,
      label: "Alamat",
      value: "Suratan Gg 6 No. 24., Kota Mojokerto",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Hubungi Saya
            </h2>
            <p className="text-muted-foreground text-lg">
              Mari berdiskusi tentang proyek atau kolaborasi Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {contact.label}
                      </p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 md:p-12 bg-gradient-hero shadow-elegant border-0 text-center animate-fade-in">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
              Mari Bekerja Sama!
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Saya selalu terbuka untuk proyek baru, peluang kolaborasi, dan diskusi menarik. 
              Jangan ragu untuk menghubungi saya!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant"
              >
                <a href="mailto:zidan0516@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Kirim Email
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
              >
                <a href="tel:+6281357278841">
                  <Phone className="mr-2 h-5 w-5" />
                  Telepon Saya
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
