"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {

  const [showModal, setShowModal] = useState(false);
  const [subForm, setSubForm] = useState({ name: "", email: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Function to handle the join movement click
  const handleJoinClick = () => {
    // Redirects to the volunteer page
    window.location.href = "/volunteer";
  };

  // Function to handle the subscribe click
  const handleSubscribeClick = () => {
    setShowModal(true);
  };

  const submitSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subForm.name || !subForm.email) return;
    setSubmitting(true);
    try {
      await fetch("/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: subForm.name,
          email: subForm.email,
          phoneNo: "00000000000",
          town: "Newsletter",
          lga: "Newsletter",
          stateOfOrigin: "N/A",
          interests: ["Media and Publicity"], // Map to an existing interest so it looks right on dashboard
        }),
      });
      setSuccess(true);
      setTimeout(() => { setShowModal(false); setSuccess(false); setSubForm({ name: "", email: "" }); }, 3000);
    } finally {
      setSubmitting(false);
    }
  };
  
  // Define a type for the component props to satisfy the TypeScript compiler
  // This fixes the "implicitly has an 'any' type" error
  type ButtonProps = {
    size: string;
    variant?: string;
    className: string;
    children: any; // Using 'any' for children to keep dependencies minimal
    onClick: () => void;
  };

  // Custom Button component simulation using Tailwind for styling, 
  // replacing the missing "@/components/ui/button" import.
  const Button = ({ size, variant, className, children, onClick }: ButtonProps) => {
    // Base classes for the button look and feel
    const baseClasses = "font-semibold rounded-full px-6 py-3 transition-colors flex items-center justify-center text-sm shadow-lg transform active:scale-95";
    
    // Simulate size="lg"
    const sizeClasses = "text-base"; 
    
    let variantClasses = "";
    if (variant === "outline") {
        // Styling for the Subscribe button (outline variant)
        variantClasses = "border-2 border-white text-white hover:bg-white/10 bg-transparent";
    } else {
        // Styling for the Join button (default/primary variant)
        variantClasses = "bg-white text-red-600 hover:bg-green-200";
    }

    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      >
        {children}
      </button>
    );
  };


  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-green-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">Ready to Make a Difference?</h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Join thousands of supporters who believe in our vision for a better future. Together, we can create real
            change.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Button 1: Join The Movement - Clickable to /volunteer */}
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-green-200"
            onClick={handleJoinClick}
          >
            Join The Movement
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          {/* Button 2: Subscribe to Updates - Clickable to /subscribe */}
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 bg-transparent"
            onClick={handleSubscribeClick}
          >
            <Mail className="mr-2 h-5 w-5" />
            Subscribe to Updates
          </Button>
        </div>

        <p className="text-sm text-white/80">
          No spam, just important updates about our campaign and community initiatives.
        </p>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative text-gray-900">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900">✕</button>
            <h3 className="text-2xl font-bold mb-2">Subscribe to Updates</h3>
            <p className="text-sm text-gray-500 mb-6">Enter your details to receive important campaign updates.</p>
            {success ? (
              <div className="text-green-600 bg-green-50 p-4 rounded-lg font-medium text-center">
                Subscribed successfully! Thank you.
              </div>
            ) : (
              <form onSubmit={submitSubscribe} className="space-y-4">
                <input
                  type="text" required placeholder="Your Name"
                  value={subForm.name} onChange={e => setSubForm({...subForm, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                />
                <input
                  type="email" required placeholder="Your Email"
                  value={subForm.email} onChange={e => setSubForm({...subForm, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
                />
                <button type="submit" disabled={submitting} className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition">
                  {submitting ? "Submitting..." : "Subscribe Now"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
