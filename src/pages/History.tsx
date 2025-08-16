import HeroSection from "@/components/ui/hero-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const History = () => {
  const timelineEvents = [
    {
      year: "1857",
      title: "War of Independence",
      description: "The first major uprising against British colonial rule, marking the beginning of organized resistance."
    },
    {
      year: "1906",
      title: "All India Muslim League Founded",
      description: "Formation of the political party that would lead the struggle for Pakistan's independence."
    },
    {
      year: "1930",
      title: "Lahore Resolution",
      description: "Historic resolution demanding separate states for Muslims in the Indian subcontinent."
    },
    {
      year: "1940",
      title: "Pakistan Resolution",
      description: "The formal demand for the creation of Pakistan as an independent nation."
    },
    {
      year: "1947",
      title: "Independence Day",
      description: "Pakistan gained independence on August 14, 1947, becoming a sovereign nation."
    }
  ];

  return (
    <>
      <HeroSection
        title="Pakistan's Independence Journey"
        subtitle="The struggle for freedom and the birth of a nation"
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Path to Freedom</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pakistan's independence story is one of determination, sacrifice, and unwavering commitment to the dream of a 
              separate homeland for Muslims in the Indian subcontinent. Under the visionary leadership of Quaid-e-Azam 
              Muhammad Ali Jinnah and the All India Muslim League, millions of people united to achieve the impossible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">The Two-Nation Theory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  The philosophical foundation of Pakistan was based on the Two-Nation Theory, which asserted that 
                  Hindus and Muslims were two distinct nations with different cultures, religions, and ways of life, 
                  requiring separate homelands to preserve their identities and interests.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Quaid-e-Azam's Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Muhammad Ali Jinnah envisioned Pakistan as a democratic, progressive state where people of all 
                  faiths could live freely. His famous words "Unity, Work, and Progress" became the guiding 
                  principles for the new nation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Timeline of Independence</h3>
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <Badge variant="default" className="mt-1 shrink-0">
                    {event.year}
                  </Badge>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{event.title}</h4>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">August 14, 1947</CardTitle>
              <CardDescription className="text-primary-foreground/80">The Birth of Pakistan</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                On this historic day, Pakistan emerged as an independent nation, fulfilling the dreams of millions. 
                The flag was hoisted, and Quaid-e-Azam became the first Governor-General of Pakistan. This day marked 
                the end of centuries of struggle and the beginning of a new chapter in the region's history.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default History;