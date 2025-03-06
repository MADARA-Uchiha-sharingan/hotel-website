import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Bed, Users, Bath, Maximize, Wifi, Tv, Coffee } from "lucide-react"

const rooms = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    description: "Spacious and elegant room with modern amenities and a stunning view.",
    price: 299,
    size: 45, // in square meters
    capacity: 2,
    beds: "1 King Bed",
    bathrooms: 1,
    amenities: ["Free WiFi", "Smart TV", "Mini Bar", "Coffee Machine", "Safe", "Air Conditioning"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "premium",
    name: "Premium Room",
    description: "Enhanced comfort with additional space and premium amenities for a relaxing stay.",
    price: 399,
    size: 55,
    capacity: 2,
    beds: "1 King Bed or 2 Queen Beds",
    bathrooms: 1,
    amenities: [
      "Free WiFi",
      "Smart TV",
      "Mini Bar",
      "Coffee Machine",
      "Safe",
      "Air Conditioning",
      "Bathrobe & Slippers",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    description: "Luxurious suite with separate living area and premium amenities for the discerning traveler.",
    price: 499,
    size: 75,
    capacity: 3,
    beds: "1 King Bed",
    bathrooms: 1.5,
    amenities: [
      "Free WiFi",
      "Smart TV",
      "Mini Bar",
      "Coffee Machine",
      "Safe",
      "Air Conditioning",
      "Bathrobe & Slippers",
      "Separate Living Area",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "family-suite",
    name: "Family Suite",
    description: "Spacious suite designed for families with connecting rooms and child-friendly amenities.",
    price: 599,
    size: 90,
    capacity: 4,
    beds: "1 King Bed & 2 Twin Beds",
    bathrooms: 2,
    amenities: [
      "Free WiFi",
      "Smart TV",
      "Mini Bar",
      "Coffee Machine",
      "Safe",
      "Air Conditioning",
      "Bathrobe & Slippers",
      "Connecting Rooms",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    description: "Our most exclusive accommodation with unparalleled luxury, space, and personalized service.",
    price: 899,
    size: 120,
    capacity: 4,
    beds: "1 King Bed & 1 Queen Bed",
    bathrooms: 2.5,
    amenities: [
      "Free WiFi",
      "Smart TV",
      "Full Bar",
      "Espresso Machine",
      "Safe",
      "Air Conditioning",
      "Bathrobe & Slippers",
      "Dining Area",
      "Private Terrace",
      "Butler Service",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "penthouse",
    name: "Penthouse",
    description: "The ultimate luxury experience with panoramic views, multiple bedrooms, and exclusive amenities.",
    price: 1299,
    size: 200,
    capacity: 6,
    beds: "2 King Beds & 2 Queen Beds",
    bathrooms: 3,
    amenities: [
      "Free WiFi",
      "Smart TV",
      "Full Bar",
      "Espresso Machine",
      "Safe",
      "Air Conditioning",
      "Bathrobe & Slippers",
      "Dining Area",
      "Private Terrace",
      "Butler Service",
      "Private Jacuzzi",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function RoomsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Luxury hotel rooms"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="container text-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Rooms & Suites</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Discover our collection of luxurious accommodations designed for your comfort
            </p>
          </div>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12">
            {rooms.map((room) => (
              <div key={room.id} className="grid md:grid-cols-2 gap-8 border-b pb-12 last:border-b-0">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
                  <p className="text-muted-foreground mb-4">{room.description}</p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Bed className="h-5 w-5 text-primary" />
                      <span>{room.beds}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Up to {room.capacity} guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-5 w-5 text-primary" />
                      <span>
                        {room.bathrooms} {room.bathrooms === 1 ? "bathroom" : "bathrooms"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize className="h-5 w-5 text-primary" />
                      <span>{room.size} m²</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">Room Amenities</h3>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.amenities.slice(0, 6).map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {amenity.includes("WiFi") ? (
                          <Wifi className="h-4 w-4 text-muted-foreground" />
                        ) : amenity.includes("TV") ? (
                          <Tv className="h-4 w-4 text-muted-foreground" />
                        ) : amenity.includes("Coffee") ? (
                          <Coffee className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <div className="h-4 w-4 rounded-full bg-primary" />
                        )}
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                    {room.amenities.length > 6 && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">+{room.amenities.length - 6} more</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-2xl font-bold">${room.price}</span>
                      <span className="text-muted-foreground"> / night</span>
                    </div>
                    <div className="flex gap-4">
                      <Button asChild variant="outline">
                        <Link href={`/rooms/${room.id}`}>View Details</Link>
                      </Button>
                      <Button asChild>
                        <Link href={`/booking?room=${room.id}`}>Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our team is available to help you find the perfect accommodation for your needs
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

