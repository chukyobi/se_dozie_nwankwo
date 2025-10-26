"use client"

import { useState, useEffect } from "react"
// Assuming these component imports are available in the user's project structure
// Note: We'll use the same UI components as the Donate page for consistency
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, Award, Zap, MapPin, Mail, Phone } from "lucide-react"

// --- Constants for Form Data ---

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", 
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", 
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", 
  "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT",
];

const INTEREST_OPTIONS = [
  "Media and Publicity",
  "Campaign Funding", // Although related to donations, this is a volunteer role for securing funds
  "Grass Root Mobilization",
  "Logistics and Operations",
  "Data Entry and Analysis",
];

const volunteerStats = [
  {
    icon: Users,
    number: "5K+",
    label: "Active Volunteers",
  },
  {
    icon: TrendingUp,
    number: "1M+", 
    label: "Voters Mobilized",
  },
  {
    icon: Award,
    number: "75%",
    label: "Success Rate",
  },
]

// --- Volunteer Page Component ---

export default function VolunteerPage() {
  const [fullName, setFullName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phoneNo, setPhoneNo] = useState<string>("")
  const [town, setTown] = useState<string>("")
  const [lga, setLga] = useState<string>("") // Selected LGA
  const [stateOfOrigin, setStateOfOrigin] = useState<string>("")
  const [interests, setInterests] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  
  // NEW STATES for dynamic LGA loading
  const [lgas, setLgas] = useState<string[]>([])
  const [isLgaLoading, setIsLgaLoading] = useState<boolean>(false)


  // Effect to fetch LGAs when stateOfOrigin changes
  useEffect(() => {
    const fetchLgas = async (state: string) => {
        if (!state) {
            setLgas([]);
            setLga("");
            return;
        }

        setIsLgaLoading(true);
        setLga(""); // Reset LGA while fetching new list

        // Use the structure provided by the user for the API endpoint
        const apiUrl = `/api/lgas?state=${encodeURIComponent(state)}`; 

        try {
            // Implementing simple exponential backoff for robustness
            const MAX_RETRIES = 3;
            let response = null;
            for (let i = 0; i < MAX_RETRIES; i++) {
                try {
                    response = await fetch(apiUrl);
                    if (response.ok) break;
                } catch (error) {
                    if (i === MAX_RETRIES - 1) throw error;
                    // Wait for 1s, 2s, 4s...
                    await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
                }
            }

            if (!response || !response.ok) {
                throw new Error(`Failed to fetch LGAs for ${state} after multiple retries.`);
            }

            const data = await response.json();
            
            if (data.lgas && Array.isArray(data.lgas)) {
                // Assuming the API returns { lgas: ["LGA1", "LGA2", ...] }
                setLgas(data.lgas.sort()); // Sort the LGAs alphabetically
            } else {
                setLgas([]);
                console.error("API response structure unexpected or empty LGAs returned:", data);
                setErrorMessage("Could not load local government areas. Please try again or type manually.");
            }
        } catch (error) {
            console.error("Error fetching LGAs:", error);
            setLgas([]); 
            setErrorMessage("Network error fetching LGAs. Please ensure your connection is stable.");
        } finally {
            setIsLgaLoading(false);
        }
    };

    if (stateOfOrigin) {
        fetchLgas(stateOfOrigin);
        setErrorMessage(null); // Clear previous errors on new state selection
    } else {
        setLgas([]);
        setLga("");
    }
  }, [stateOfOrigin]); // Dependency array: run when stateOfOrigin changes


  const handleInterestChange = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest) 
        : [...prev, interest]
    )
  }

  const handleStateChange = (state: string) => {
    setStateOfOrigin(state);
    setLga(""); // Clear LGA selection when state changes
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    if (!fullName || !phoneNo || !town || !lga || !stateOfOrigin || interests.length === 0) {
      setErrorMessage("Please fill out all required fields (Full Name, Phone No, Location, and select at least one Interest).")
      return
    }

    // In a real app, this would send data to a backend (e.g., Firestore)
    console.log({
      fullName,
      email: email || "Not Provided",
      phoneNo,
      town,
      lga,
      stateOfOrigin,
      interests,
    })
    
    // Reset form fields
    setFullName("")
    setEmail("")
    setPhoneNo("")
    setTown("")
    setLga("")
    setStateOfOrigin("")
    setInterests([])

    // Show success message
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const isFormValid = fullName && phoneNo && town && lga && stateOfOrigin && interests.length > 0;

  return (
    <main className="min-h-screen bg-white font-['Inter']">
      {/* Hero Section - Adapted for Volunteering */}
      <section className="bg-gradient-to-br from-red-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <p className="text-red-600 font-semibold text-lg">Join Our Movement</p>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">Become a Volunteer</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lend your skill, time, and passion. Together, we can mobilize our communities and achieve our goals.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Impact Stats */}
     

      {/* Volunteer Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-gray-200 shadow-2xl rounded-xl">
            <CardHeader className="bg-gray-50/50 border-b">
              <CardTitle className="text-gray-900">Volunteer Application</CardTitle>
              <CardDescription>Fill out the form below to register your interest in volunteering.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 p-6 sm:p-8">
              <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-bold text-lg text-gray-900 border-b pb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-red-500" />
                    Personal Details
                  </h3>
                  <input
                    type="text"
                    placeholder="Full Name (Required)"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address (Optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (Required)"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {/* Location Information */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-lg text-gray-900 border-b pb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-500" />
                    Location Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Town / City (Required)"
                      value={town}
                      onChange={(e) => setTown(e.target.value)}
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    {/* LGA SELECTOR: Now dynamic based on stateOfOrigin */}
                    <select
                        value={lga}
                        onChange={(e) => setLga(e.target.value)}
                        required
                        // Disable if no state is selected or if LGAs are loading
                        disabled={!stateOfOrigin || isLgaLoading || lgas.length === 0}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white appearance-none"
                    >
                        <option value="" disabled>
                            {isLgaLoading 
                                ? "Loading LGAs..." 
                                : stateOfOrigin && lgas.length > 0
                                    ? "Select Local Government Area (Required)"
                                    : "Select State first"
                            }
                        </option>
                        {lgas.map(lgaOption => (
                        <option key={lgaOption} value={lgaOption}>{lgaOption}</option>
                        ))}
                    </select>
                  </div>
                  
                  {/* State of Origin Selector */}
                  <select
                    value={stateOfOrigin}
                    onChange={(e) => handleStateChange(e.target.value)} // Use new handler
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white appearance-none"
                  >
                    <option value="" disabled>Select State of Origin (Required)</option>
                    {NIGERIAN_STATES.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                {/* Areas of Interest */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-bold text-lg text-gray-900 border-b pb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-red-500" />
                    Areas of Interest (Select all that apply)
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {INTEREST_OPTIONS.map((interest) => (
                      <label 
                        key={interest} 
                        className={`flex items-center gap-3 cursor-pointer p-4 border-2 rounded-xl transition-all shadow-sm ${
                          interests.includes(interest) 
                            ? "border-red-600 bg-red-50 text-red-700 ring-2 ring-red-500" 
                            : "border-gray-200 text-gray-800 hover:border-red-400"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="w-4 h-4 text-red-600 rounded"
                        />
                        <span className="font-medium text-sm">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                {errorMessage && (
                  <p className="text-center text-sm text-red-600 font-medium">⚠️ {errorMessage}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3 rounded-xl shadow-lg transition-colors"
                  disabled={!isFormValid}
                >
                  <Users className="mr-2 h-5 w-5" />
                  Sign Up to Volunteer
                </Button>
                
                {submitted && (
                  <p className="text-center text-sm text-green-600 font-medium animate-pulse">Thank you! We've received your application and will be in touch soon.</p>
                )}
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  Your contact information will only be used for campaign-related coordination.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section - Adapted */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Have Questions? Get in Touch!</h2>
          <p className="text-xl text-gray-600">
            If you need more information about specific volunteer roles or commitments, please contact our team.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button className="bg-red-600 hover:bg-red-700 rounded-lg">
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
            <Button variant="outline" className="border-red-500 text-red-600 bg-transparent hover:bg-red-100 transition-colors rounded-lg">
              <Phone className="w-4 h-4 mr-2" />
              Call Coordinator
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
