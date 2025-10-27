"use client";

import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {

  // Function to handle the join movement click
  const handleJoinClick = () => {
    // Redirects to the volunteer page
    window.location.href = "/volunteer";
  };

  // Function to handle the subscribe click
  const handleSubscribeClick = () => {
    // Redirects to a subscription page
    window.location.href = "/subscribe";
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
    </section>
  )
}
