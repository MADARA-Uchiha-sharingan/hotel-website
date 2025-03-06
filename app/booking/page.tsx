"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CheckCircle, Users, CreditCard, Lock } from "lucide-react"

const rooms = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    description: "Spacious and elegant room with modern amenities and a stunning view.",
    price: 299,
    capacity: 2,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "premium",
    name: "Premium Room",
    description: "Enhanced comfort with additional space and premium amenities for a relaxing stay.",
    price: 399,
    capacity: 2,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    description: "Luxurious suite with separate living area and premium amenities for the discerning traveler.",
    price: 499,
    capacity: 3,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "family-suite",
    name: "Family Suite",
    description: "Spacious suite designed for families with connecting rooms and child-friendly amenities.",
    price: 599,
    capacity: 4,
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: undefined,
    to: undefined,
  })
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
  })
  const [bookingComplete, setBookingComplete] = useState(false)

  const handleRoomSelect = (roomId: string) => {
    setSelectedRoom(roomId)
    setStep(2)
  }

  const handleDateSelect = () => {
    if (dateRange.from && dateRange.to) {
      setStep(3)
    }
  }

  const handleGuestSelect = () => {
    setStep(4)
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the booking submission here
    setBookingComplete(true)
  }

  const selectedRoomData = rooms.find((room) => room.id === selectedRoom)
  const nights =
    dateRange.from && dateRange.to
      ? Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))
      : 0
  const totalPrice = selectedRoomData ? selectedRoomData.price * nights : 0

  if (bookingComplete) {
    return (
      <div className="flex flex-col min-h-screen py-16">
        <div className="container max-w-4xl">
          <div className="bg-muted p-8 rounded-lg text-center">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for choosing Luxury Hotel. Your booking has been confirmed and a confirmation email has been
              sent to your email address.
            </p>
            <div className="bg-background p-6 rounded-lg mb-8 max-w-md mx-auto">
              <h2 className="text-xl font-bold mb-4">Booking Details</h2>
              <div className="space-y-2 text-left">
                <p>
                  <span className="font-semibold">Room:</span> {selectedRoomData?.name}
                </p>
                <p>
                  <span className="font-semibold">Check-in:</span> {dateRange.from ? format(dateRange.from, "PPP") : ""}
                </p>
                <p>
                  <span className="font-semibold">Check-out:</span> {dateRange.to ? format(dateRange.to, "PPP") : ""}
                </p>
                <p>
                  <span className="font-semibold">Guests:</span> {guests.adults} Adults, {guests.children} Children
                </p>
                <p>
                  <span className="font-semibold">Total:</span> ${totalPrice}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">Return to Homepage</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px]">
        <Image
          src="/placeholder.svg?height=800&width=1920"
          alt="Luxury hotel booking"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="container text-center text-white p-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Book Your Stay</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Reserve your perfect accommodation and enjoy a luxurious experience
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Booking Process</h2>
              <div className="hidden md:flex items-center gap-2">
                <div className={`flex items-center gap-2 ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-primary text-white" : "bg-muted-foreground/20 text-muted-foreground"}`}
                  >
                    1
                  </div>
                  <span>Select Room</span>
                </div>
                <div className={`w-8 h-1 ${step >= 2 ? "bg-primary" : "bg-muted-foreground/20"}`}></div>
                <div className={`flex items-center gap-2 ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-primary text-white" : "bg-muted-foreground/20 text-muted-foreground"}`}
                  >
                    2
                  </div>
                  <span>Select Dates</span>
                </div>
                <div className={`w-8 h-1 ${step >= 3 ? "bg-primary" : "bg-muted-foreground/20"}`}></div>
                <div className={`flex items-center gap-2 ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-primary text-white" : "bg-muted-foreground/20 text-muted-foreground"}`}
                  >
                    3
                  </div>
                  <span>Guest Details</span>
                </div>
                <div className={`w-8 h-1 ${step >= 4 ? "bg-primary" : "bg-muted-foreground/20"}`}></div>
                <div className={`flex items-center gap-2 ${step >= 4 ? "text-primary" : "text-muted-foreground"}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? "bg-primary text-white" : "bg-muted-foreground/20 text-muted-foreground"}`}
                  >
                    4
                  </div>
                  <span>Payment</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Step 1: Select Room */}
              {step === 1 && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Select Your Room</h3>
                  <div className="space-y-6">
                    {rooms.map((room) => (
                      <div
                        key={room.id}
                        className={`border rounded-lg overflow-hidden transition-all ${
                          selectedRoom === room.id ? "border-primary ring-2 ring-primary/20" : "hover:border-primary/50"
                        }`}
                      >
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="relative h-48 md:h-full">
                            <Image
                              src={room.image || "/placeholder.svg"}
                              alt={room.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-4 md:col-span-2">
                            <h4 className="text-xl font-bold mb-2">{room.name}</h4>
                            <p className="text-muted-foreground mb-4">{room.description}</p>
                            <div className="flex items-center gap-2 mb-4">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">Up to {room.capacity} guests</span>
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                              <div>
                                <span className="text-2xl font-bold">${room.price}</span>
                                <span className="text-muted-foreground"> / night</span>
                              </div>
                              <Button onClick={() => handleRoomSelect(room.id)}>Select Room</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Select Dates */}
              {step === 2 && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Select Your Dates</h3>
                  <div className="bg-muted p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Choose Check-in and Check-out Dates</h4>
                        <div className="bg-background p-4 rounded-lg">
                          <Calendar
                            mode="range"
                            selected={dateRange}
                            onSelect={setDateRange as any}
                            numberOfMonths={1}
                            disabled={{ before: new Date() }}
                            className="rounded-md border"
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Your Stay Details</h4>
                        <div className="space-y-4">
                          <div className="bg-background p-4 rounded-lg">
                            <div className="text-sm text-muted-foreground mb-2">Check-in Date</div>
                            <div className="font-semibold">
                              {dateRange.from ? format(dateRange.from, "PPP") : "Select a date"}
                            </div>
                          </div>
                          <div className="bg-background p-4 rounded-lg">
                            <div className="text-sm text-muted-foreground mb-2">Check-out Date</div>
                            <div className="font-semibold">
                              {dateRange.to ? format(dateRange.to, "PPP") : "Select a date"}
                            </div>
                          </div>
                          <div className="bg-background p-4 rounded-lg">
                            <div className="text-sm text-muted-foreground mb-2">Length of Stay</div>
                            <div className="font-semibold">
                              {nights > 0 ? `${nights} night${nights > 1 ? "s" : ""}` : "Select dates"}
                            </div>
                          </div>
                        </div>
                        <Button
                          onClick={handleDateSelect}
                          className="w-full mt-6"
                          disabled={!dateRange.from || !dateRange.to}
                        >
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Guest Details */}
              {step === 3 && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Guest Details</h3>
                  <div className="bg-muted p-6 rounded-lg">
                    <div className="grid gap-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Number of Guests</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="adults">Adults</Label>
                            <Select
                              value={guests.adults.toString()}
                              onValueChange={(value) => setGuests({ ...guests, adults: Number.parseInt(value) })}
                            >
                              <SelectTrigger id="adults">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                {[1, 2, 3, 4].map((num) => (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num} {num === 1 ? "Adult" : "Adults"}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="children">Children (0-12 years)</Label>
                            <Select
                              value={guests.children.toString()}
                              onValueChange={(value) => setGuests({ ...guests, children: Number.parseInt(value) })}
                            >
                              <SelectTrigger id="children">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                {[0, 1, 2, 3].map((num) => (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num} {num === 1 ? "Child" : "Children"}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4">Guest Information</h4>
                        <div className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name</Label>
                              <Input id="firstName" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input id="lastName" required />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" type="tel" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                            <textarea
                              id="specialRequests"
                              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>
                      </div>

                      <Button onClick={handleGuestSelect} className="w-full">
                        Continue to Payment
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Payment */}
              {step === 4 && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Payment Details</h3>
                  <div className="bg-muted p-6 rounded-lg">
                    <Tabs defaultValue="credit-card">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="credit-card">Credit Card</TabsTrigger>
                        <TabsTrigger value="paypal">PayPal</TabsTrigger>
                      </TabsList>
                      <TabsContent value="credit-card">
                        <form onSubmit={handleBookingSubmit} className="space-y-4 mt-6">
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input id="cardName" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <div className="relative">
                              <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                              <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiryDate">Expiry Date</Label>
                              <Input id="expiryDate" placeholder="MM/YY" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <div className="relative">
                                <Input id="cvv" placeholder="123" required />
                                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="billingAddress">Billing Address</Label>
                            <Input id="billingAddress" required />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="city">City</Label>
                              <Input id="city" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="zipCode">Zip Code</Label>
                              <Input id="zipCode" required />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Select>
                              <SelectTrigger id="country">
                                <SelectValue placeholder="Select a country" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="us">United States</SelectItem>
                                <SelectItem value="ca">Canada</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                                <SelectItem value="au">Australia</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="pt-4">
                            <Button type="submit" className="w-full">
                              Complete Booking
                            </Button>
                          </div>
                        </form>
                      </TabsContent>
                      <TabsContent value="paypal">
                        <div className="flex flex-col items-center justify-center py-8">
                          <Image
                            src="/placeholder.svg?height=60&width=200"
                            alt="PayPal"
                            width={200}
                            height={60}
                            className="mb-6"
                          />
                          <p className="text-center text-muted-foreground mb-6">
                            You will be redirected to PayPal to complete your payment securely.
                          </p>
                          <Button onClick={handleBookingSubmit} className="w-full max-w-md">
                            Continue to PayPal
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              )}
            </div>

            {/* Booking Summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                  <CardDescription>Review your booking details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedRoomData && (
                    <div className="space-y-4">
                      <div className="relative h-40 rounded-lg overflow-hidden">
                        <Image
                          src={selectedRoomData.image || "/placeholder.svg"}
                          alt={selectedRoomData.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{selectedRoomData.name}</h4>
                        <p className="text-sm text-muted-foreground">{selectedRoomData.description}</p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Check-in</span>
                      <span className="font-medium">{dateRange.from ? format(dateRange.from, "PPP") : "-"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Check-out</span>
                      <span className="font-medium">{dateRange.to ? format(dateRange.to, "PPP") : "-"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Nights</span>
                      <span className="font-medium">{nights > 0 ? nights : "-"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Guests</span>
                      <span className="font-medium">
                        {guests.adults} Adults, {guests.children} Children
                      </span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Room Rate</span>
                      <span className="font-medium">
                        ${selectedRoomData?.price || 0} x {nights} nights
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Taxes & Fees</span>
                      <span className="font-medium">${Math.round(selectedRoomData?.price * nights * 0.15) || 0}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${totalPrice + (Math.round(selectedRoomData?.price * nights * 0.15) || 0)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2">Cancellation Policy:</p>
                    <p>
                      Free cancellation up to 48 hours before check-in. After that, the first night is non-refundable.
                    </p>
                  </div>
                </CardFooter>
              </Card>

              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setStep(step > 1 ? step - 1 : 1)}
                  disabled={step === 1}
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Booking Policies</h3>
              <p className="text-muted-foreground">
                Learn about our check-in/check-out times, cancellation policies, and payment terms.
              </p>
              <Button asChild variant="link" className="mt-2">
                <Link href="/policies">View Policies</Link>
              </Button>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Special Requests</h3>
              <p className="text-muted-foreground">
                Have special requirements? Let us know and we'll do our best to accommodate your needs.
              </p>
              <Button asChild variant="link" className="mt-2">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-muted-foreground">
                Our reservations team is available 24/7 to assist you with your booking.
              </p>
              <Button asChild variant="link" className="mt-2">
                <a href="tel:+11234567890">Call +1 (123) 456-7890</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

