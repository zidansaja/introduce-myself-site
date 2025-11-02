import { Card } from "@/components/ui/card";
import { Code, Video, Camera, Palette, TrendingUp, Share2 } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Pembuatan Web",
    description: "Pengembangan aplikasi web modern dan responsif"
  },
  {
    icon: Video,
    title: "Aplikasi Edit Video",
    description: "Editing video profesional dengan berbagai tools"
  },
  {
    icon: Palette,
    title: "Aplikasi Desain",
    description: "Desain grafis dan visual content creation"
  },
  {
    icon: Share2,
    title: "Konten Media Sosial",
    description: "Pembuatan konten engaging untuk berbagai platform"
  },
  {
    icon: TrendingUp,
    title: "Wirausaha",
    description: "Manajemen bisnis dan pengembangan usaha"
  },
  {
    icon: Camera,
    title: "Fotografi & Videografi",
    description: "Produksi multimedia berkualitas tinggi"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Keahlian
            </h2>
            <p className="text-muted-foreground text-lg">
              Kemampuan dan expertise yang saya miliki
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group border-border animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
