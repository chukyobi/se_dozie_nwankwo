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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    town: "",
    lga: "",
    state: "",
    interest: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Volunteer data:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      town: "",
      lga: "",
      state: "",
      interest: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeartHandshake className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Join Our Movement
          </h1>
          <p className="text-gray-600 text-lg">
            Become a part of our growing campaign by volunteering in your area of interest.
            Together, we can make lasting change.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="shadow-lg border-none">
          <CardHeader>
            <CardTitle>Volunteer Registration</CardTitle>
            <CardDescription>
              Fill out your details below and select your preferred area of service.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email (Optional) */}
              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* Town */}
              <div className="space-y-2">
                <Label htmlFor="town">Town</Label>
                <Input
                  id="town"
                  name="town"
                  value={formData.town}
                  onChange={handleChange}
                  placeholder="Enter your town"
                  required
                />
              </div>

              {/* Local Government */}
              <div className="space-y-2">
                <Label htmlFor="lga">Local Government</Label>
                <Input
                  id="lga"
                  name="lga"
                  value={formData.lga}
                  onChange={handleChange}
                  placeholder="Enter your local government"
                  required
                />
              </div>

              {/* State of Origin */}
              <div className="space-y-2">
                <Label htmlFor="state">State of Origin</Label>
                <Input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter your state of origin"
                  required
                />
              </div>

              {/* Area of Interest */}
              <div className="space-y-2">
                <Label htmlFor="interest">Area of Interest</Label>
                <Select value={formData.interest} onValueChange={handleSelectChange}>
                  <SelectTrigger id="interest" className="w-full">
                    <SelectValue placeholder="Select an area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="media">Media & Publicity</SelectItem>
                    <SelectItem value="funding">Campaign Funding</SelectItem>
                    <SelectItem value="mobilization">Grassroot Mobilization</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
              >
                Submit
              </Button>

              {submitted && (
                <p className="text-green-600 text-center font-medium mt-2">
                  ✅ Thank you for volunteering! We’ll contact you soon.
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
