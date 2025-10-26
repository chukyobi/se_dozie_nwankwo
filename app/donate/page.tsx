"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, TrendingUp, Award } from "lucide-react";

// Helper function to format Naira currency
const formatNaira = (amount: number) => {
  if (typeof amount !== "number" || isNaN(amount)) return "";

  return amount
    .toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace("NGN", "₦");
};

// Donation tiers
const donationTiers = [
  {
    amount: 5000,
    label: "Supporter",
    description: "Help us reach more voters",
    benefits: ["Campaign updates", "Event invitations"],
  },
  {
    amount: 100000,
    label: "Advocate",
    description: "Make a meaningful impact",
    benefits: [
      "All Supporter benefits",
      "Monthly newsletter",
      "Exclusive content",
    ],
    featured: true,
  },
  {
    amount: 500000,
    label: "Champion",
    description: "Drive real change",
    benefits: [
      "All Advocate benefits",
      "VIP event access",
      "Direct campaign updates",
    ],
  },
  {
    amount: 1000000,
    label: "Leader",
    description: "Be part of our leadership",
    benefits: [
      "All Champion benefits",
      "Private briefings",
      "Recognition on website",
    ],
  },
];

// ✅ Impact statistics section data
const impactStats = [
  {
    icon: Users,
    number: "1M+",
    label: "Supporters Nationwide",
  },
  {
    icon: TrendingUp,
    number: "85%",
    label: "Campaign Growth Rate",
  },
  {
    icon: Award,
    number: "1000+",
    label: "Community Projects",
  },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(10000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationFrequency, setDonationFrequency] = useState("one-time");
  const [submitted, setSubmitted] = useState(false);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      amount: selectedAmount || customAmount,
      frequency: donationFrequency,
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const parseCustomAmount = customAmount ? parseFloat(customAmount) : 0;
  const displayAmount =
    selectedAmount !== null ? selectedAmount : parseCustomAmount;

  return (
    <main className="min-h-screen bg-white font-['Inter']">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-blue-600 font-semibold text-lg">
              Support Our Campaign
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Make a Donation
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your contribution helps us reach more voters and build the future
              we believe in. Every donation makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="border-gray-200 shadow-lg rounded-xl overflow-hidden"
                >
                  <CardContent className="pt-6 space-y-3 text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                      <Icon className="h-6 w-6 text-red-600" />
                    </div>
                    <p className="text-3xl font-extrabold text-red-600">
                      {stat.number}
                    </p>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Tiers */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-gray-200 shadow-2xl rounded-xl">
                <CardHeader className="bg-gray-50/50 border-b">
                  <CardTitle className="text-gray-900">
                    Choose Your Donation Amount
                  </CardTitle>
                  <CardDescription>
                    Select a preset amount or enter a custom amount.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 p-6 sm:p-8">
                  {/* Donation Frequency */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                      Donation Frequency
                    </label>
                    <div className="flex gap-4">
                      <label
                        className={`flex items-center gap-2 cursor-pointer p-2 border rounded-lg transition-colors ${
                          donationFrequency === "one-time"
                            ? "border-red-500 bg-blue-50"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="frequency"
                          value="one-time"
                          checked={donationFrequency === "one-time"}
                          onChange={(e) => setDonationFrequency(e.target.value)}
                          className="w-4 h-4 text-red-600"
                        />
                        <span className="text-gray-700 font-medium">
                          One-time
                        </span>
                      </label>
                      <label
                        className={`flex items-center gap-2 cursor-pointer p-2 border rounded-lg transition-colors ${
                          donationFrequency === "monthly"
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="frequency"
                          value="monthly"
                          checked={donationFrequency === "monthly"}
                          onChange={(e) => setDonationFrequency(e.target.value)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-gray-700 font-medium">
                          Monthly
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Preset Amounts */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                      Select Amount (₦)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[5000, 10000, 25000, 50000].map((amount) => (
                        <button
                          key={amount}
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount("");
                          }}
                          className={`p-3 rounded-xl border-2 font-bold transition-all shadow-sm ${
                            selectedAmount === amount
                              ? "border-red-600 bg-blue-100 text-green-700 ring-2 ring-green-500"
                              : "border-gray-300 text-gray-900 hover:border-blue-500 hover:bg-gray-50"
                          }`}
                        >
                          {formatNaira(amount)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Custom Amount
                    </label>
                    <div className="flex gap-2">
                      <span className="flex items-center px-4 bg-gray-100 border border-gray-300 rounded-lg text-gray-600 font-bold">
                        ₦
                      </span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(null);
                        }}
                        placeholder="e.g., 75000"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  {/* Donor Info */}
                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <h3 className="font-bold text-lg text-gray-900">
                      Donor Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Address (Street, City, State)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  {/* Donate Button */}
                  <Button
                    onClick={handleDonate}
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3 rounded-xl shadow-lg transition-colors"
                    disabled={displayAmount === 0}
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Donate {formatNaira(displayAmount)}
                  </Button>

                  {submitted && (
                    <p className="text-center text-sm text-green-600 font-medium animate-pulse">
                      Thank you for your generous donation!
                    </p>
                  )}

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Your donation is secure and encrypted. We accept all major
                    credit cards.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Donation Tiers Sidebar */}
            <div className="space-y-4 lg:col-span-1">
              <h3 className="font-extrabold text-gray-900 text-xl border-b pb-2">
                Membership Tiers
              </h3>
              {donationTiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`border-2 relative rounded-xl cursor-pointer transition-all shadow-md ${
                    tier.featured
                      ? "border-green-500 bg-green-50 shadow-xl"
                      : "border-gray-200 hover:border-green-400"
                  }`}
                  onClick={() => {
                    setSelectedAmount(tier.amount);
                    setCustomAmount("");
                  }}
                >
                  {tier.featured && (
                    <Badge className="absolute top-3 right-3 bg-green-600 text-white font-bold px-3 py-1 text-sm rounded-full shadow-lg">
                      Popular
                    </Badge>
                  )}
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl text-gray-900">
                      {tier.label}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    <p className="text-3xl font-extrabold text-blue-600">
                      {formatNaira(tier.amount)}
                    </p>
                    <ul className="space-y-2 list-none p-0">
                      {tier.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <span className="text-blue-500 font-extrabold mt-0.5">
                            ✓
                          </span>
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
            <h2 className="text-4xl font-bold text-gray-900">
              Why Your Donation Matters
            </h2>
            <p className="text-xl text-gray-600">
              Every contribution directly supports our campaign efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Reach More Voters",
                description:
                  "Your donation helps us reach more people with our message of change and hope.",
              },
              {
                title: "Build Community",
                description:
                  "We invest in grassroots organizing and community engagement programs.",
              },
              {
                title: "Drive Change",
                description:
                  "Together, we can create the future we believe in for our community.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-gray-200 shadow-md rounded-xl">
                <CardHeader>
                  <CardTitle className="text-blue-600 text-xl">
                    {item.title}
                  </CardTitle>
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
          <h2 className="text-4xl font-bold text-gray-900">
            Transparency & Accountability
          </h2>
          <p className="text-xl text-gray-600">
            We believe in complete transparency about how campaign funds are
            used. All donations are reported in accordance with campaign finance
            laws.
          </p>
          <Button
            variant="outline"
            className="border-blue-500 text-blue-600 bg-transparent hover:bg-blue-50 transition-colors rounded-lg"
          >
            View Campaign Finance Reports
          </Button>
        </div>
      </section>
    </main>
  );
}
