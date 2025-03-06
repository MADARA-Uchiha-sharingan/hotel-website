"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ImageSlider from "@/components/image-slider"
import { Bed, Utensils, Wifi, MapPin, ShoppingBag, Music } from "lucide-react"

const heroImages = [
  {
    src: "/annapurna-1.jpg",
    alt: "Scenic view of Annapurna mountains",
  },
  {
    src: "/marsyangdi-river.jpg",
    alt: "Marsyangdi River flowing through Lamjung",
  },
  {
    src: "/hotel-exterior.jpg",
    alt: "Hotel Path Annapurna exterior",
  },
]

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px]">
        <ImageSlider images={heroImages} />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="container text-center text-white p-4">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              Welcome to Hotel Path Annapurna
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              Experience the perfect blend of modern comfort and nature's serenity
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Button asChild size="lg" className="text-lg bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/booking">Book Your Stay</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/rooms">Explore Rooms</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-800">Discover Our Cozy Retreat</h2>
              <p className="text-lg text-stone-700 mb-6">
                Nestled beside the Annapurna Conservation Area Project (ACAP) Checkpost and the serene Marsyangdi River,
                Hotel Path Annapurna offers a unique city business hotel experience with the charm of a cozy cottage.
              </p>
              <p className="text-lg text-stone-700 mb-8">
                Immerse yourself in the beauty of Lamjung, Nepal, while enjoying modern amenities and warm hospitality.
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
            <div
              className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl transition-all duration-1000 delay-500 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <Image src="/hotel-interior.jpg" alt="Hotel Path Annapurna interior" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-stone-100">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-amber-800">
            Experience Nature's Luxury
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Bed}
              title="Cozy Rooms"
              description="Comfortable cottage-style rooms with modern amenities and rustic charm."
            />
            <FeatureCard
              icon={Utensils}
              title="Fine Dining"
              description="Savor traditional Nepalese cuisine and international dishes in our restaurant."
            />
            <FeatureCard
              icon={Wifi}
              title="Modern Amenities"
              description="Stay connected with free Wi-Fi and enjoy 24/7 concierge service."
            />
            <FeatureCard
              icon={MapPin}
              title="Prime Location"
              description="Situated near ACAP Checkpost, perfect for trekkers and nature enthusiasts."
            />
            <FeatureCard
              icon={ShoppingBag}
              title="Local Products"
              description="Shop for authentic Nepalese honey, alcohol, and handicrafts on-site."
            />
            <FeatureCard
              icon={Music}
              title="Entertainment"
              description="Enjoy a vibrant atmosphere with our integrated sound system."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for an Unforgettable Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay today and discover the perfect blend of nature, comfort, and Nepalese hospitality
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-amber-700"
          >
            <Link href="/booking">Book Your Stay Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <Icon className="h-12 w-12 text-amber-600 mb-4" />
      <h3 className="text-xl font-bold mb-2 text-amber-800">{title}</h3>
      <p className="text-stone-600">{description}</p>
    </div>
  )
}

