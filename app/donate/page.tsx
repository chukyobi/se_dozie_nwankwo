"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, TrendingUp, Award } from "lucide-react"

const donationTiers = [
  {
    amount: 5,000,
    label: "Supporter",
    description: "Help us reach more voters",
    benefits: ["Campaign updates", "Event invitations"],
  },
  {
    amount: 100,000,
    label: "Advocate",
    description: "Make a meaningful impact",
    benefits: ["All Supporter benefits", "Monthly newsletter", "Exclusive content"],
    featured: true,
  },
  {
    amount: 500,000,
    label: "Champion",
    description: "Drive real change",
    benefits: ["All Advocate benefits", "VIP event access", "Direct campaign updates"],
  },
  {
    amount: 1,000,000,
    label: "Leader",
    description: "Be part of our leadership",
    benefits: ["All Champion benefits", "Private briefings", "Recognition on website"],
  },
]



// const impactStats = [
//   {
//     icon: Users,
//     number: "50K+",
//     label: "Supporters",
//   },
//   {
//     icon: TrendingUp,
//     number: "$500K+",
//     label: "Raised",
//   },
//   {
//     icon: Award,
//     number: "25+",
//     label: "Districts",
//   },
// ]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50)
  const [customAmount, setCustomAmount] = useState("")
  const [donationFrequency, setDonationFrequency] = useState("one-time")
  const [submitted, setSubmitted] = useState(false)

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would process the donation
    console.log({
      amount: selectedAmount || customAmount,
      frequency: donationFrequency,
    })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-primary font-semibold text-lg">Support Our Campaign</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">Make a Donation</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your contribution helps us reach more voters and build the future we believe in. Every donation makes a
              difference.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="border-gray-200 text-center">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-3xl font-bold text-primary">{stat.number}</p>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* Donation Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Tiers */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">Choose Your Donation Amount</CardTitle>
                  <CardDescription>Select a preset amount or enter a custom amount.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Donation Frequency */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3">Donation Frequency</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="frequency"
                          value="one-time"
                          checked={donationFrequency === "one-time"}
                          onChange={(e) => setDonationFrequency(e.target.value)}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-gray-700">One-time</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="frequency"
                          value="monthly"
                          checked={donationFrequency === "monthly"}
                          onChange={(e) => setDonationFrequency(e.target.value)}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-gray-700">Monthly</span>
                      </label>
                    </div>
                  </div>

                  {/* Preset Amounts */}
                   <div>

                    <label className="block text-sm font-medium text-gray-900 mb-3">Select Amount</label>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

                      {[25, 50, 100, 250].map((amount) => (

                        <button

                          key={amount}

                          onClick={() => {

                            setSelectedAmount(amount)

                            setCustomAmount("")

                          }}

                          className={`p-3 rounded-lg border-2 font-semibold transition-all ${

                            selectedAmount === amount

                              ? "border-primary bg-primary/10 text-primary"

                              : "border-gray-300 text-gray-900 hover:border-primary"

                          }`}

                        >

                          ${amount}

                        </button>

                      ))}

                    </div>

                  </div>

                  {/* Custom Amount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Custom Amount</label>
                    <div className="flex gap-2">
                      <span className="flex items-center px-3 bg-gray-100 rounded-lg text-gray-600">$</span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value)
                          setSelectedAmount(null)
                        }}
                        placeholder="Enter amount"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Donor Info */}
                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <h3 className="font-bold text-gray-900">Donor Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Donate Button */}
                  <Button
                    onClick={handleDonate}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-dark text-white"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Donate ${selectedAmount || customAmount || "0"}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Your donation is secure and encrypted. We accept all major credit cards.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Donation Tiers Sidebar */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 text-lg">Membership Tiers</h3>
              {donationTiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`border-2 cursor-pointer transition-all ${
                    tier.featured ? "border-primary bg-primary/5" : "border-gray-200 hover:border-primary"
                  }`}
                  onClick={() => {
                    setSelectedAmount(tier.amount)
                    setCustomAmount("")
                  }}
                >
                  {tier.featured && <Badge className="absolute top-3 right-3 bg-primary text-white">Popular</Badge>}
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">{tier.label}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-2xl font-bold text-primary">${tier.amount}</p>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-primary mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Why Your Donation Matters</h2>
            <p className="text-xl text-gray-600">Every contribution directly supports our campaign efforts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Reach More Voters",
                description: "Your donation helps us reach more people with our message of change and hope.",
              },
              {
                title: "Build Community",
                description: "We invest in grassroots organizing and community engagement programs.",
              },
              {
                title: "Drive Change",
                description: "Together, we can create the future we believe in for our community.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Transparency & Accountability</h2>
          <p className="text-xl text-gray-600">
            We believe in complete transparency about how campaign funds are used. All donations are reported in
            accordance with campaign finance laws.
          </p>
          <Button variant="outline" className="border-gray-300 text-gray-900 bg-transparent">
            View Campaign Finance Reports
          </Button>
        </div>
      </section>
    </main>
  )
}
