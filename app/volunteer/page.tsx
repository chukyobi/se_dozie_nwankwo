"use client";

import { useState } from "react";
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      {/* Header */}
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
            Become a part of our growing campaign by volunteering in your area
            of interest. Together, we can make lasting change.
          </p>
        </motion.div>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Volunteer Registration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email (optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Town */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Town
            </label>
            <input
              type="text"
              name="town"
              value={formData.town}
              onChange={handleChange}
              required
              placeholder="Enter your town"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Local Government */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Local Government
            </label>
            <input
              type="text"
              name="lga"
              value={formData.lga}
              onChange={handleChange}
              required
              placeholder="Enter your local government area"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* State of Origin */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State of Origin
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              placeholder="Enter your state of origin"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Interest Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Area of Interest
            </label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an area</option>
              <option value="media">Media & Publicity</option>
              <option value="funding">Campaign Funding</option>
              <option value="mobilization">Grassroot Mobilization</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>

          {submitted && (
            <p className="text-green-600 text-center font-medium mt-3">
              ✅ Thank you for volunteering! We’ll contact you soon.
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
}
