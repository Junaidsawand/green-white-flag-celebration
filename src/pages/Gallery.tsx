import { useState } from "react";
import HeroSection from "@/components/ui/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react";

// Import all landmark images
import minarEPakistan from "@/assets/minar-e-pakistan.jpg";
import faisalMosque from "@/assets/faisal-mosque.jpg";
import badshahiMosque from "@/assets/badshahi-mosque.jpg";
import pakistanMonument from "@/assets/pakistan-monument.jpg";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const landmarks = [
    {
      image: minarEPakistan,
      title: "Minar-e-Pakistan",
      location: "Lahore, Punjab",
      year: "1968",
      description: "A national monument marking the place where the Pakistan Resolution was passed in 1940.",
      significance: "Symbol of Pakistan's independence movement"
    },
    {
      image: faisalMosque,
      title: "Faisal Mosque",
      location: "Islamabad",
      year: "1986",
      description: "One of the largest mosques in the world, designed by Turkish architect Vedat Dalokay.",
      significance: "Modern Islamic architecture masterpiece"
    },
    {
      image: badshahiMosque,
      title: "Badshahi Mosque",
      location: "Lahore, Punjab",
      year: "1673",
      description: "Historic mosque commissioned by Mughal Emperor Aurangzeb, showcasing Mughal architecture.",
      significance: "Mughal era architectural heritage"
    },
    {
      image: pakistanMonument,
      title: "Pakistan Monument",
      location: "Islamabad",
      year: "2007",
      description: "National monument representing the four provinces and three territories of Pakistan.",
      significance: "Symbol of national unity and diversity"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % landmarks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + landmarks.length) % landmarks.length);
  };

  return (
    <>
      <HeroSection
        title="Pakistan's Iconic Landmarks"
        subtitle="Exploring the architectural wonders and historical sites that define our nation"
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Carousel */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Featured Landmarks</h2>
            <div className="relative bg-gradient-card rounded-xl shadow-elegant overflow-hidden">
              <div className="aspect-[16/9] relative">
                <img
                  src={landmarks[currentSlide].image}
                  alt={landmarks[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Navigation Buttons */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-4 mb-2">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      {landmarks[currentSlide].location}
                    </Badge>
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {landmarks[currentSlide].year}
                    </Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {landmarks[currentSlide].title}
                  </h3>
                  <p className="text-sm md:text-base opacity-90 mb-2 max-w-2xl">
                    {landmarks[currentSlide].description}
                  </p>
                  <p className="text-xs md:text-sm opacity-75 italic">
                    {landmarks[currentSlide].significance}
                  </p>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {landmarks.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-white' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Landmarks Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">All Landmarks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {landmarks.map((landmark, index) => (
                <Card 
                  key={index} 
                  className="group bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer overflow-hidden"
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={landmark.image}
                      alt={landmark.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                      {landmark.title}
                    </h4>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <MapPin className="h-3 w-3 mr-1" />
                      {landmark.location}
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {landmark.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Information Section */}
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Discover Pakistan's Heritage</h3>
              <p className="text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                These landmarks represent Pakistan's rich architectural heritage, from ancient Mughal monuments 
                to modern Islamic architecture. Each site tells a unique story of our nation's history, culture, 
                and artistic achievements, making them essential destinations for understanding Pakistan's identity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="text-xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Historical Sites</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="text-xl font-bold">6</div>
                  <div className="text-sm opacity-90">UNESCO World Heritage</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="text-xl font-bold">5000+</div>
                  <div className="text-sm opacity-90">Years of History</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="text-xl font-bold">Multiple</div>
                  <div className="text-sm opacity-90">Architectural Styles</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Gallery;