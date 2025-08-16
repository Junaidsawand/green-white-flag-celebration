import HeroSection from "@/components/ui/hero-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Culture = () => {
  const languages = ["Urdu", "Punjabi", "Sindhi", "Pashto", "Balochi", "English"];
  const festivals = ["Eid ul-Fitr", "Eid ul-Adha", "Pakistan Day", "Independence Day", "Shab-e-Barat", "Shab-e-Qadr"];
  const foods = ["Biryani", "Karahi", "Nihari", "Haleem", "Chapli Kebab", "Seekh Kebab", "Lassi", "Kulfi"];
  const sports = ["Cricket", "Hockey", "Squash", "Football", "Polo", "Wrestling"];

  return (
    <>
      <HeroSection
        title="Rich Cultural Heritage"
        subtitle="Exploring Pakistan's diverse traditions, languages, and customs"
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Languages</CardTitle>
                <CardDescription>Pakistan's linguistic diversity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Pakistan is home to over 70 languages, with Urdu as the national language and English as the official language.
                </p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <Badge key={language} variant="secondary">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Traditional Dress</CardTitle>
                <CardDescription>National and regional attire</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The national dress includes Shalwar Kameez for both men and women, with regional variations like 
                  the Sindhi Ajrak, Balochi embroidery, and Punjabi Phulkari adding cultural richness to our heritage.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Festivals & Celebrations</CardTitle>
                <CardDescription>Religious and national celebrations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Pakistan celebrates various religious and national festivals that bring communities together.
                </p>
                <div className="flex flex-wrap gap-2">
                  {festivals.map((festival) => (
                    <Badge key={festival} variant="outline">
                      {festival}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Traditional Cuisine</CardTitle>
                <CardDescription>Flavors that define Pakistan</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Pakistani cuisine is known for its rich flavors, aromatic spices, and diverse regional specialties.
                </p>
                <div className="flex flex-wrap gap-2">
                  {foods.map((food) => (
                    <Badge key={food} variant="secondary">
                      {food}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Sports & Recreation</CardTitle>
                <CardDescription>National sports and pastimes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cricket is the most popular sport, but Pakistan has excelled in various sports internationally.
                </p>
                <div className="flex flex-wrap gap-2">
                  {sports.map((sport) => (
                    <Badge key={sport} variant="outline">
                      {sport}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Arts & Crafts</CardTitle>
                <CardDescription>Traditional Pakistani handicrafts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pakistan is renowned for its traditional arts including carpet weaving, pottery, woodwork, 
                  metalwork, and intricate embroidery that showcase centuries-old craftsmanship skills.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Cultural Values</CardTitle>
              <CardDescription className="text-primary-foreground/80">The essence of Pakistani society</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Pakistani culture is built on the foundations of hospitality, respect for elders, family values, 
                and religious tolerance. The concept of "Mehman Nawazi" (hospitality) is deeply ingrained in our 
                society, making Pakistan known worldwide for its warm and welcoming people.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Culture;