import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Editor Video, Fotografer, Videografer",
    company: "Tebuireng Online",
    period: "2021 - 2025",
    description: "Bertugas mengolah dan menyunting rekaman video mentah menjadi produk akhir yang menarik dan sesuai standar, meliputi pemilihan klip, penyesuaian warna, serta penambahan efek visual dan audio. Selain itu, bertanggung jawab merekam berbagai kegiatan dengan kamera, mengatur pencahayaan dan suara untuk menghasilkan video berkualitas tinggi."
  },
  {
    title: "Pemilik dan Pengelola",
    company: "SKYWASH (Cuci Sepatu)",
    period: "2024",
    description: "Bertanggung jawab mengelola operasional harian mulai dari pelayanan pelanggan hingga proses pembersihan dan perawatan sepatu. Mengatur jadwal kerja, mengelola stok bahan dan peralatan, serta memastikan kelancaran layanan. Membangun hubungan baik dengan pelanggan untuk meningkatkan loyalitas, menangani pemasaran secara offline dan online."
  },
  {
    title: "Magang",
    company: "Diskominfo Jombang",
    period: "2023",
    description: "Berperan aktif dalam pengembangan aplikasi E-Presensi berbasis lokasi untuk meningkatkan akurasi dan kemudahan absensi. Menangani respons cepat terhadap panggilan darurat, memastikan koordinasi dan solusi tepat waktu. Bertanggung jawab dalam pengaturan dan pengoptimalan tampilan konten di videotron."
  },
  {
    title: "Magang",
    company: "Studio 31 Malang",
    period: "2019",
    description: "Membantu edit foto wedding, maternity, family, dsb., membantu proses ambil foto di studio seperti set lighting, fitting baju, menyesuaikan background, melayani pelanggan dengan ramah."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Pengalaman
            </h2>
            <p className="text-muted-foreground text-lg">
              Perjalanan profesional dan pengalaman kerja saya
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-semibold text-xl text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
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

export default Experience;
