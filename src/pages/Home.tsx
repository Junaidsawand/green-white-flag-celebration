import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/ui/hero-section";
import independenceHero from "@/assets/independence-hero.jpg";
import { 
  BookOpen, 
  Palette, 
  TrendingUp, 
  Building, 
  Trophy, 
  Camera 
} from "lucide-react";

const Home = () => {
  const pages = [
    {
      title: "History",
      description: "Discover Pakistan's independence struggle and formation in 1947",
      icon: BookOpen,
      path: "/history",
      color: "text-primary"
    },
    {
      title: "Culture",
      description: "Explore our rich traditions, languages, festivals, and heritage",
      icon: Palette,
      path: "/culture",
      color: "text-primary-light"
    },
    {
      title: "Economy",
      description: "Learn about Pakistan's agriculture, industries, and economic growth",
      icon: TrendingUp,
      path: "/economy",
      color: "text-primary"
    },
    {
      title: "Cities",
      description: "Tour major cities from Karachi to Islamabad and beyond",
      icon: Building,
      path: "/cities",
      color: "text-primary-dark"
    },
    {
      title: "Achievements",
      description: "Celebrate Pakistan's accomplishments in sports, science, and more",
      icon: Trophy,
      path: "/achievements",
      color: "text-primary"
    },
    {
      title: "Gallery",
      description: "View stunning images of Pakistan's iconic landmarks",
      icon: Camera,
      path: "/gallery",
      color: "text-primary-light"
    }
  ];

  return (
    <>
      <HeroSection
        title="Happy Independence Day Pakistan"
        subtitle="Celebrating 78 years of freedom, unity, and progress"
        backgroundImage={independenceHero}
        showBadge={true}
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Pakistan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Journey through our nation's rich history, vibrant culture, economic progress, 
              beautiful cities, remarkable achievements, and stunning landmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => {
              const IconComponent = page.icon;
              return (
                <Link key={page.path} to={page.path}>
                  <Card className="h-full bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border">
                    <CardHeader className="text-center pb-4">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-accent rounded-lg">
                          <IconComponent className={`h-8 w-8 ${page.color}`} />
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-card-foreground">
                        {page.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-muted-foreground mb-4">
                        {page.description}
                      </CardDescription>
                      <Button variant="outline" className="w-full">
                        Explore {page.title}
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;