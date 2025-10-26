"use client";

import { useState } from "react";

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    town: "",
    localGovernment: "",
    stateOfOrigin: "",
    interest: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Volunteer Data:", formData);
    setSubmitted(true);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      town: "",
      localGovernment: "",
      stateOfOrigin: "",
      interest: "",
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-2">
          Become a Volunteer
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Join the Dozinized Movement — make an impact in your community.
        </p>

        {submitted ? (
          <div className="text-center text-green-600 font-medium">
            ✅ Thank you for volunteering! We’ll reach out to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Email (optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email (optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Town */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Town *
              </label>
              <input
                type="text"
                name="town"
                value={formData.town}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Local Government */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Local Government *
              </label>
              <input
                type="text"
                name="localGovernment"
                value={formData.localGovernment}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* State of Origin */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State of Origin *
              </label>
              <input
                type="text"
                name="stateOfOrigin"
                value={formData.stateOfOrigin}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            {/* Area of Interest */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Area of Interest *
              </label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none bg-white"
              >
                <option value="">-- Select an area --</option>
                <option value="media">Media and Publicity</option>
                <option value="funding">Campaign Funding</option>
                <option value="mobilization">Grassroot Mobilization</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 hover:bg-green-600 text-white px-6 py-3 font-bold rounded-full transition-all"
              >
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

