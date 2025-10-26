"use client";

import { useState, useEffect } from "react";

export default function VolunteerPage() {
  const [states, setStates] = useState<string[]>([]);
  const [lgas, setLgas] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    town: "",
    lga: "",
    state: "",
    category: "",
  });

  // Fetch all states
  useEffect(() => {
    fetch("https://nga-states-lga.vercel.app/api/states")
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((err) => console.error("Error fetching states:", err));
  }, []);

  // Fetch LGAs when state changes
  useEffect(() => {
    if (selectedState) {
      fetch(`https://nga-states-lga.vercel.app/api/lgas/${selectedState}`)
        .then((res) => res.json())
        .then((data) => setLgas(data))
        .catch((err) => console.error("Error fetching LGAs:", err));
    } else {
      setLgas([]);
    }
  }, [selectedState]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "state") {
      setSelectedState(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for volunteering! Your form has been submitted successfully.");
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10 mb-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Volunteer Registration</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email (Optional)</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Town */}
        <div>
          <label className="block font-medium mb-1">Town</label>
          <input
            type="text"
            name="town"
            value={formData.town}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* State */}
        <div>
          <label className="block font-medium mb-1">State of Origin</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Local Government */}
        {lgas.length > 0 && (
          <div>
            <label className="block font-medium mb-1">Local Government Area</label>
            <select
              name="lga"
              value={formData.lga}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Select an LGA</option>
              {lgas.map((lga) => (
                <option key={lga} value={lga}>
                  {lga}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Select Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Choose one</option>
            <option value="Media and Publicity">Media and Publicity</option>
            <option value="Campaign Funding">Campaign Funding</option>
            <option value="Grass Root Mobilization">Grass Root Mobilization</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
