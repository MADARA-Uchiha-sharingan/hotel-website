import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Utensils,
  Wine,
  Dumbbell,
  SpadeIcon as Spa,
  PocketIcon as Pool,
  Users,
  Car,
  ShoppingBag,
  Coffee,
  Wifi,
} from "lucide-react"

const services = [
  {
    id: "dining",
    name: "Fine Dining",
    description:
      "Experience culinary excellence at our award-winning restaurants offering a diverse range of international and local cuisines prepared by world-class chefs.",
    icon: Utensils,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "spa",
    name: "Luxury Spa",
    description:
      "Indulge in rejuvenating treatments and therapies at our luxury spa, designed to provide the ultimate relaxation experience for body and mind.",
    icon: Spa,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "fitness",
    name: "Fitness Center",
    description:
      "Stay active in our state-of-the-art fitness center equipped with the latest cardio and strength training equipment, with personal trainers available upon request.",
    icon: Dumbbell,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "pool",
    name: "Swimming Pools",
    description:
      "Relax and refresh in our stunning infinity pools with panoramic views, including dedicated children's pools and private cabanas.",
    icon: Pool,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "bar",
    name: "Bars & Lounges",
    description:
      "Unwind with premium cocktails, fine wines, and spirits at our elegant bars and lounges, offering both indoor and outdoor seating with spectacular views.",
    icon: Wine,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "events",
    name: "Events & Meetings",
    description:
      "Host memorable events in our versatile venues, from intimate gatherings to grand celebrations, with dedicated event planners to assist you.",
    icon: Users,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "transport",
    name: "Transportation",
    description:
      "Enjoy convenient transportation services including airport transfers, valet parking, and luxury car rentals for exploring the surrounding area.",
    icon: Car,
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "shopping",
    name: "Boutique Shopping",
    description:
      "Browse our curated selection of luxury boutiques offering designer fashion, jewelry, souvenirs, and essential items without leaving the hotel.",
    icon: ShoppingBag,
    image: "/placeholder.svg?height=600&width=800",
  },
]

const amenities = [
  { name: "Complimentary WiFi", icon: Wifi },
  { name: "24/7 Room Service", icon: Utensils },
  { name: "Concierge Services", icon: Users },
  { name: "Valet Parking", icon: Car },
  { name: "Business Center", icon: Coffee },
  { name: "Laundry & Dry Cleaning", icon: ShoppingBag },
  { name: "Childcare Services", icon: Users },
  { name: "Currency Exchange", icon: ShoppingBag },
  { name: "Multilingual Staff", icon: Users },
  { name: "Doctor on Call", icon: Users },
  { name: "Wake-up Service", icon: Coffee },
  { name: "Luggage Storage", icon: ShoppingBag },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Luxury hotel services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="container text-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Services & Amenities</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Discover our world-class facilities and exceptional services
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Exceptional Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a wide range of premium services to enhance your stay and create unforgettable experiences
            </p>
          </div>

          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                <div className={`relative h-[300px] rounded-lg overflow-hidden ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
                </div>
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{service.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button asChild variant="outline" className="self-start">
                    <Link href={`/services/${service.id}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hotel Amenities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enjoy these complimentary amenities designed to make your stay comfortable and convenient
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-background p-6 rounded-lg flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <amenity.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{amenity.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Special Packages</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enhance your stay with our curated packages combining accommodation and premium services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-muted rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Romantic Getaway Package"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Romantic Getaway</h3>
                <p className="text-muted-foreground mb-4">
                  Perfect for couples, including luxury accommodation, champagne, spa treatments, and a romantic dinner.
                </p>
                <Button asChild className="w-full">
                  <Link href="/booking?package=romantic">Book This Package</Link>
                </Button>
              </div>
            </div>

            {/* Package 2 */}
            <div className="bg-muted rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Family Fun Package"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Family Fun</h3>
                <p className="text-muted-foreground mb-4">
                  Designed for families with children, including spacious accommodation, kids' activities, and family
                  dining.
                </p>
                <Button asChild className="w-full">
                  <Link href="/booking?package=family">Book This Package</Link>
                </Button>
              </div>
            </div>

            {/* Package 3 */}
            <div className="bg-muted rounded-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Wellness Retreat Package"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Wellness Retreat</h3>
                <p className="text-muted-foreground mb-4">
                  Focus on relaxation and rejuvenation with spa treatments, yoga sessions, and healthy dining options.
                </p>
                <Button asChild className="w-full">
                  <Link href="/booking?package=wellness">Book This Package</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Services?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay today and enjoy our world-class amenities and exceptional service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/booking">Book Your Stay</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

