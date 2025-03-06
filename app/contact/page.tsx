"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Luxury hotel contact"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="container text-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              We're here to assist you with any inquiries or special requests
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Our dedicated team is available to assist you with any inquiries, special requests, or to provide more
                information about our hotel and services.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <address className="not-italic text-muted-foreground">
                      123 Luxury Avenue
                      <br />
                      Paradise City, PC 12345
                      <br />
                      Country
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">Reservations: +1 (123) 456-7890</p>
                    <p className="text-muted-foreground">Front Desk: +1 (123) 456-7891</p>
                    <p className="text-muted-foreground">Concierge: +1 (123) 456-7892</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">Reservations: reservations@luxuryhotel.com</p>
                    <p className="text-muted-foreground">General Inquiries: info@luxuryhotel.com</p>
                    <p className="text-muted-foreground">Events: events@luxuryhotel.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Hours</h3>
                    <p className="text-muted-foreground">Front Desk: 24/7</p>
                    <p className="text-muted-foreground">Reservations: 8:00 AM - 10:00 PM</p>
                    <p className="text-muted-foreground">Concierge: 7:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-muted p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8">
                    <CheckCircle className="h-16 w-16 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-center text-muted-foreground">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone
                      </label>
                      <Input id="phone" type="tel" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Select>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="reservation">Reservation Inquiry</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="special-request">Special Request</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" rows={5} required />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Located in the heart of Paradise City, our hotel is easily accessible from major transportation hubs
            </p>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Hotel location map"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background p-6 rounded-lg shadow-lg max-w-md">
                <h3 className="text-xl font-bold mb-2">Luxury Hotel</h3>
                <p className="text-muted-foreground mb-4">
                  123 Luxury Avenue
                  <br />
                  Paradise City, PC 12345
                </p>
                <Button asChild>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our hotel and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What are the check-in and check-out times?</h3>
              <p className="text-muted-foreground">
                Check-in time is 3:00 PM and check-out time is 12:00 PM. Early check-in and late check-out can be
                arranged based on availability, subject to additional charges.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Is breakfast included in the room rate?</h3>
              <p className="text-muted-foreground">
                Breakfast is included in select room packages. Please check your reservation details or contact our
                reservations team for more information.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Do you offer airport transfers?</h3>
              <p className="text-muted-foreground">
                Yes, we offer airport transfers for an additional fee. Please provide your flight details at least 24
                hours in advance to arrange this service.
              </p>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Is there a cancellation fee?</h3>
              <p className="text-muted-foreground">
                Cancellation policies vary depending on the rate and dates of your reservation. Please refer to your
                booking confirmation for specific details.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Can't find the answer you're looking for?</p>
            <Button asChild>
              <a href="tel:+11234567890">Call Us: +1 (123) 456-7890</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Luxury?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your stay today and discover the perfect blend of luxury, comfort, and exceptional service
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/booking">Book Your Stay Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

