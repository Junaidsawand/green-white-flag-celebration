import HeroSection from "@/components/ui/hero-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Globe, Zap } from "lucide-react";

const Economy = () => {
  const sectors = [
    {
      title: "Agriculture",
      description: "Cotton, wheat, rice, sugarcane production",
      contribution: "18.9% of GDP",
      icon: "🌾"
    },
    {
      title: "Manufacturing",
      description: "Textiles, chemicals, food processing",
      contribution: "12.8% of GDP", 
      icon: "🏭"
    },
    {
      title: "Services",
      description: "Banking, telecommunications, IT",
      contribution: "61.2% of GDP",
      icon: "💼"
    },
    {
      title: "Mining",
      description: "Natural gas, coal, salt, limestone",
      contribution: "2.6% of GDP",
      icon: "⛏️"
    }
  ];

  const exports = ["Textiles", "Rice", "Leather goods", "Sports goods", "Surgical instruments", "Carpets"];
  const cpecProjects = ["Gwadar Port", "CPEC Highway", "Energy Projects", "Industrial Parks"];

  return (
    <>
      <HeroSection
        title="Pakistan's Growing Economy"
        subtitle="Agriculture, industry, and emerging sectors driving progress"
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Economic Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-gradient-card shadow-card text-center">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-card-foreground">230M+</div>
                <div className="text-sm text-muted-foreground">Population</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card text-center">
              <CardContent className="pt-6">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-card-foreground">5th</div>
                <div className="text-sm text-muted-foreground">Most Populous Country</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card text-center">
              <CardContent className="pt-6">
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-card-foreground">$375B</div>
                <div className="text-sm text-muted-foreground">GDP (nominal)</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card text-center">
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-card-foreground">63%</div>
                <div className="text-sm text-muted-foreground">Youth Population</div>
              </CardContent>
            </Card>
          </div>

          {/* Economic Sectors */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Economic Sectors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sectors.map((sector, index) => (
                <Card key={index} className="bg-gradient-card shadow-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{sector.icon}</span>
                        <CardTitle className="text-xl text-card-foreground">{sector.title}</CardTitle>
                      </div>
                      <Badge variant="default">{sector.contribution}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{sector.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Trade & Exports */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Major Exports</CardTitle>
                <CardDescription>Pakistan's key export products</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Pakistan exports various products globally, with textiles being the largest export sector.
                </p>
                <div className="flex flex-wrap gap-2">
                  {exports.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Workforce</CardTitle>
                <CardDescription>Human capital and employment</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pakistan has a large, young workforce with growing skills in technology, manufacturing, 
                  and services. The country is emerging as a hub for IT services and business process outsourcing.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CPEC Section */}
          <Card className="bg-gradient-primary text-primary-foreground mb-16">
            <CardHeader>
              <CardTitle className="text-2xl">China-Pakistan Economic Corridor (CPEC)</CardTitle>
              <CardDescription className="text-primary-foreground/80">A game-changer for Pakistan's economy</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">
                CPEC is a flagship project of China's Belt and Road Initiative, involving $62 billion in infrastructure 
                and energy projects. It aims to connect Gwadar Port in Pakistan to China's Xinjiang region.
              </p>
              <div className="flex flex-wrap gap-2">
                {cpecProjects.map((project) => (
                  <Badge key={project} variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                    {project}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Future Outlook */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Economic Future</CardTitle>
              <CardDescription>Growth prospects and opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Pakistan's economy is positioned for growth with its strategic location, young population, 
                natural resources, and ongoing infrastructure development. Key focus areas include digitalization, 
                renewable energy, tourism, and industrial modernization to achieve sustainable economic development.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Economy;