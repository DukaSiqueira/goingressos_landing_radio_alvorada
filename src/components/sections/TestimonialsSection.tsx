import { Quote, Camera, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import cloudSky from "@/assets/cloudy-sky.jpg";

export function TestimonialsSection() {
  return (
    <section className="w-full py-16 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${cloudSky.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="container px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Depoimentos e Histórias de Fé
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Essas são algumas histórias reais de fé e transformação de quem já faz parte do Clube do Ouvinte Coração Missionário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-[#123e73] mb-4" />
                <p className="text-[#123e73] italic mb-6 leading-relaxed text-lg">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-2 text-[#123e73]">
                  <Heart className="h-4 w-4" />
                  <p className="font-medium">{testimonial.author}</p>
                  <span className="text-[#123e73]/60">•</span>
                  <p className="text-[#123e73]/60">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Camera className="h-6 w-6 text-[#123e73]" />
            <h3 className="text-2xl font-bold text-[#123e73]">
              Vídeos de Testemunhos
            </h3>
          </div>
          <p className="text-[#123e73] leading-relaxed mb-8">
            Veja registros emocionantes de nossos eventos, missas mensais e prêmios entregues aos ouvintes.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={video.url}
                  title={`Testemunho ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    content: "Minha vida mudou desde que comecei a contribuir com o Clube. Acompanhar as missas e receber as bênçãos de Deus me trouxe paz e esperança!",
    author: "Maria Aparecida",
    location: "Londrina-PR"
  },
  {
    content: "Participar do Clube me aproximou ainda mais de Deus. As missas mensais são momentos de verdadeira renovação espiritual.",
    author: "João Paulo",
    location: "Maringá-PR"
  }
];

const videos = [
  {
    url: "https://drive.google.com/file/d/19pDO5XvTqC8aCZbo826LaUikK_e7QTSK/preview",
    title: "Testemunho 1",
    thumbnail: ""
  },
  {
    url: "https://drive.google.com/file/d/1_ZNDbDUqLcECAVQxlwE3pMKVUdHD8CmC/preview",
    title: "Testemunho 2",
    thumbnail: ""
  }
]; 