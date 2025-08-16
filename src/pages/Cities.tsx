import HeroSection from "@/components/ui/hero-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Building } from "lucide-react";

const Cities = () => {
  const cities = [
    {
      name: "Karachi",
      province: "Sindh",
      population: "16.1 million",
      description: "Pakistan's largest city and economic hub, home to the country's main seaport and financial center.",
      highlights: ["Port city", "Economic capital", "Diverse population", "Industrial center"],
      icon: "🏙️"
    },
    {
      name: "Lahore",
      province: "Punjab",
      population: "13.1 million",
      description: "Cultural capital of Pakistan, known for its rich history, architecture, and educational institutions.",
      highlights: ["Cultural capital", "Historical sites", "Educational hub", "Food paradise"],
      icon: "🏛️"
    },
    {
      name: "Islamabad",
      province: "Federal Capital",
      population: "2.4 million",
      description: "The planned capital city, known for its modern infrastructure and beautiful landscape.",
      highlights: ["Capital city", "Modern planning", "Green spaces", "Government center"],
      icon: "🏢"
    },
    {
      name: "Peshawar",
      province: "Khyber Pakhtunkhwa",
      population: "4.7 million",
      description: "Ancient city with rich history, gateway to Afghanistan and Central Asia.",
      highlights: ["Ancient heritage", "Strategic location", "Cultural diversity", "Trade center"],
      icon: "⛰️"
    },
    {
      name: "Quetta",
      province: "Balochistan",
      population: "2.3 million",
      description: "Capital of Balochistan, known for its fruits and strategic importance.",
      highlights: ["Provincial capital", "Fruit valley", "Mining region", "Border city"],
      icon: "🍎"
    },
    {
      name: "Faisalabad",
      province: "Punjab",
      population: "3.8 million",
      description: "Industrial city known as the 'Manchester of Pakistan' for its textile industry.",
      highlights: ["Textile hub", "Industrial center", "Agricultural trade", "Manufacturing"],
      icon: "🏭"
    },
    {
      name: "Multan",
      province: "Punjab",
      population: "2.8 million",
      description: "Historic city known as the 'City of Saints' for its numerous Sufi shrines.",
      highlights: ["City of Saints", "Sufi heritage", "Ancient culture", "Handicrafts"],
      icon: "🕌"
    },
    {
      name: "Rawalpindi",
      province: "Punjab",
      population: "2.3 million",
      description: "Twin city of Islamabad, military headquarters and commercial center.",
      highlights: ["Military HQ", "Commercial hub", "Historical bazaars", "Twin city"],
      icon: "🏪"
    }
  ];

  return (
    <>
      <HeroSection
        title="Major Cities of Pakistan"
        subtitle="Exploring the diverse urban centers from Karachi to Quetta"
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Urban Centers</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pakistan's cities represent a blend of ancient heritage and modern development, each with its 
              unique character, culture, and contribution to the nation's progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cities.map((city, index) => (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{city.icon}</span>
                      <div>
                        <CardTitle className="text-xl text-card-foreground">{city.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {city.province}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {city.population}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {city.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {city.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card text-center">
              <CardContent className="pt-6">
                <Building className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Urban Growth</h3>
                <p className="text-muted-foreground text-sm">
                  Pakistan's urbanization rate is rapidly increasing, with cities expanding to accommodate growing populations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card text-center">
              <CardContent className="pt-6">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Strategic Location</h3>
                <p className="text-muted-foreground text-sm">
                  Pakistani cities serve as gateways to Central Asia, the Middle East, and provide access to international trade routes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card text-center">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Cultural Diversity</h3>
                <p className="text-muted-foreground text-sm">
                  Each city reflects Pakistan's rich cultural tapestry with unique traditions, languages, and architectural styles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cities;