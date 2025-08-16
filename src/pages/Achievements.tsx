import HeroSection from "@/components/ui/hero-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Atom, Shield, Globe, Satellite, Medal } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      category: "Sports Excellence",
      icon: Trophy,
      color: "text-primary",
      items: [
        "Cricket World Cup Champions (1992)",
        "Hockey World Cup Champions (1971, 1978, 1982, 1994)",
        "Olympic Hockey Gold Medals (1960, 1968, 1984)",
        "Squash World Champions (Jahangir Khan, Jansher Khan)",
        "World Snooker Champions",
        "Asian Games Gold Medals"
      ]
    },
    {
      category: "Nuclear Technology",
      icon: Atom,
      color: "text-primary-light",
      items: [
        "Nuclear power capability (1998)",
        "Nuclear energy programs",
        "Medical isotope production",
        "Nuclear medicine research",
        "Peaceful nuclear technology",
        "International atomic cooperation"
      ]
    },
    {
      category: "Defense & Military",
      icon: Shield,
      color: "text-primary-dark",
      items: [
        "UN Peacekeeping contributions",
        "Counter-terrorism operations",
        "Defense technology development",
        "Military aviation industry",
        "Strategic defense capabilities",
        "Regional security leadership"
      ]
    },
    {
      category: "Science & Technology",
      icon: Satellite,
      color: "text-primary",
      items: [
        "Space program (SUPARCO)",
        "Satellite technology",
        "IT industry growth",
        "Software exports",
        "Scientific research institutes",
        "Innovation in agriculture"
      ]
    },
    {
      category: "International Recognition",
      icon: Globe,
      color: "text-primary-light",
      items: [
        "UN Security Council membership",
        "Islamic world leadership",
        "South-South cooperation",
        "Regional diplomatic initiatives",
        "International humanitarian aid",
        "Cultural diplomacy"
      ]
    },
    {
      category: "Cultural Exports",
      icon: Medal,
      color: "text-primary-dark",
      items: [
        "Sufi music worldwide recognition",
        "Pakistani cinema growth",
        "Literature and poetry",
        "Traditional crafts exports",
        "Culinary influence globally",
        "Fashion and textiles"
      ]
    }
  ];

  const notablePersonalities = [
    { name: "Dr. Abdul Qadeer Khan", field: "Nuclear Science", achievement: "Father of Pakistan's nuclear program" },
    { name: "Malala Yousafzai", field: "Education", achievement: "Nobel Peace Prize winner" },
    { name: "Jahangir Khan", field: "Squash", achievement: "World Champion for 5 consecutive years" },
    { name: "Imran Khan", field: "Cricket", achievement: "World Cup winning captain" },
    { name: "Dr. Atta-ur-Rahman", field: "Chemistry", achievement: "International science leadership" },
    { name: "Arfa Karim", field: "Technology", achievement: "Youngest Microsoft Certified Professional" }
  ];

  return (
    <>
      <HeroSection
        title="Pakistan's Remarkable Achievements"
        subtitle="Celebrating our contributions to sports, science, culture, and global peace"
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">National Pride</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pakistan has made significant contributions across various fields, from sports championships 
              to scientific breakthroughs, earning recognition and respect on the global stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {achievements.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-accent rounded-lg">
                        <IconComponent className={`h-6 w-6 ${category.color}`} />
                      </div>
                      <CardTitle className="text-lg text-card-foreground">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Notable Personalities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notablePersonalities.map((person, index) => (
                <Card key={index} className="bg-gradient-card shadow-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-card-foreground">{person.name}</CardTitle>
                    <Badge variant="outline" className="w-fit">{person.field}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{person.achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Global Impact</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Pakistan's contributions to world peace and progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">
                Pakistan has consistently contributed to global peace through UN peacekeeping missions, 
                humanitarian aid, and diplomatic initiatives. Our scientists, athletes, and artists 
                have brought honor to the nation while contributing to human knowledge and culture.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">200K+</div>
                  <div className="text-sm opacity-90">UN Peacekeepers Deployed</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">1st</div>
                  <div className="text-sm opacity-90">Islamic Nuclear Power</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="text-2xl font-bold">3rd</div>
                  <div className="text-sm opacity-90">Largest Military</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Achievements;