import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Sarjana Teknik Informatika",
    school: "Universitas Hasyim Asy'ari Tebuireng",
    period: "2021 - 2025",
    level: "S1"
  },
  {
    degree: "SMK (Sekolah Menengah Kejuruan)",
    school: "SMK plus Khoiriyah Hasyim Tebuireng",
    period: "2018 - 2021",
    level: "Kejuruan"
  },
  {
    degree: "SMP (Sekolah Menengah Pertama)",
    school: "SMPN 4 Kota Mojokerto",
    period: "2015 - 2018",
    level: "Menengah"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Pendidikan
            </h2>
            <p className="text-muted-foreground text-lg">
              Latar belakang pendidikan formal
            </p>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-display font-semibold text-xl text-foreground">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium">
                          {edu.school}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
