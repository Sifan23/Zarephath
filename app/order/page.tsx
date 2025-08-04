"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function OrderForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const productFromQuery = searchParams.get("product")?.toLowerCase() || ""

  const [selectedProduct, setSelectedProduct] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [quantity, setQuantity] = useState("")
  const [method, setMethod] = useState("")
  const [notes, setNotes] = useState("")

  useEffect(() => {
    if (productFromQuery) {
      setSelectedProduct(productFromQuery)
    }
  }, [productFromQuery])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Hello Zarephath Team! 👋\n\nI'd like to place an order:\n\n🛒 *Product*: ${selectedProduct}\n📦 *Quantity/Size*: ${quantity}\n🚚 *Delivery Method*: ${method}\n📍 *Address*: ${address}\n📞 *Phone*: ${phone}\n📧 *Email*: ${email}\n🧑 *Name*: ${fullName}\n📝 *Notes*: ${notes || "None"}\n\nThank you! 🙏`

    const whatsappUrl = `https://wa.me/23276877246?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Optional: show alert or redirect
    alert("Redirecting to WhatsApp...")
    // router.push("/thank-you")
  }

  const handleGoBack = () => {
    router.back()
  }

  return (
    <section className="py-16 bg-gray-50" id="order">
      <div className="container max-w-2xl px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Place Your Order</h2>
        <p className="text-center text-black font-semibold">
          Please fill out the form below to place your order.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded shadow">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <Label htmlFor="product">Product</Label>
            <Select value={selectedProduct} onValueChange={setSelectedProduct} required>
              <SelectTrigger id="product" className="w-full">
                <SelectValue placeholder="Select Product" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="delta garri">Delta Garri</SelectItem>
                <SelectItem value="plantain flour">Plantain Flour</SelectItem>
                <SelectItem value="zarephath palm oil">Zarephath Palm Oil</SelectItem>
                <SelectItem value="cassava flour">Cassava Flour</SelectItem>
                <SelectItem value="red beans">Red Beans</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="quantity">Quantity / Size</Label>
            <Input
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="e.g. 2kg or 5 packs"
              required
            />
          </div>

          <div>
            <Label htmlFor="address">Delivery/Shipping Address</Label>
            <Textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="Enter your full delivery/shipping address"
            />
          </div>

          <div>
            <Label htmlFor="method">Preferred Delivery Method (Pickup / Delivery)</Label>
            <Input
              id="method"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              placeholder="e.g. Home Delivery"
              required
            />
          </div>

          <div>
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any special requests?"
            />
          </div>

          <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white text-lg mt-2">
            Place Your Order Now
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={handleGoBack}
            className="w-full border-green-700 text-green-700 hover:bg-green-100 mt-2"
          >
            Cancel & Go Back
          </Button>
        </form>
      </div>
    </section>
  )
}
