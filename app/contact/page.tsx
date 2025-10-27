"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

// --- Custom Component Stubs (to replace external imports) ---
// Note: These stubs are for demonstration purposes and use simple Tailwind styling.

const Button = ({ children, className = "", onClick, type = "button", disabled = false }: { children: React.ReactNode, className?: string, onClick?: () => void, type?: "button" | "submit", disabled?: boolean }) => (
    <button 
        type={type} 
        onClick={onClick}
        disabled={disabled}
        className={`px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center text-sm shadow-lg transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
    >
        {children}
    </button>
)

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`rounded-xl border border-gray-200 bg-white shadow-xl ${className}`}>
        {children}
    </div>
)

const CardHeader = ({ children }: { children: React.ReactNode }) => (
    <div className="p-6 pb-2">
        {children}
    </div>
)

const CardTitle = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <h3 className={`text-2xl font-bold ${className}`}>{children}</h3>
)

const CardDescription = ({ children }: { children: React.ReactNode }) => (
    <p className="text-gray-500 mt-1">{children}</p>
)

const CardContent = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`p-6 ${className}`}>
        {children}
    </div>
)

// --- Main Component ---

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    })

    // State for asynchronous submission feedback
    const [isSending, setIsSending] = useState(false)
    const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSending(true)
        setSubmitMessage(null) // Clear previous messages

        // IMPORTANT NOTE: NodeMailer runs on a secure backend server. 
        // This client-side code simulates the API call (fetch) to that server.
        // In a production app, you would replace the simulation below with a real fetch call.

        try {
            // --- SIMULATING API CALL (REPLACE THIS IN PRODUCTION) ---
            await new Promise(resolve => setTimeout(resolve, 1500)); 
            
            // Assuming successful submission
            const success = true; 

            if (success) {
                const subjectLine = `[${formData.subject || 'General Inquiry'}] - Message from ${formData.name}`;

                setSubmitMessage({
                    type: 'success',
                    text: `Message sent successfully! The server has initiated email delivery to hello@dozienwankwo.org with the subject: "${subjectLine}"`,
                });
                
                // Clear form after success
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            } else {
                 setSubmitMessage({
                    type: 'error',
                    text: 'Failed to send message via server. Please try again later.',
                });
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitMessage({
                type: 'error',
                text: 'An unexpected error occurred during submission.',
            });
        } finally {
            setIsSending(false);
            // Clear message after 8 seconds
            setTimeout(() => setSubmitMessage(null), 8000); 
        }
    }

    // Define Tailwind color mapping for primary color (blue-600) for stubs
    const primaryColorClasses = {
        primary: 'text-blue-600',
        'primary/10': 'bg-blue-100',
        'bg-primary': 'bg-blue-600',
        'hover:bg-primary-dark': 'hover:bg-blue-700',
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-4">
                        <p className={`${primaryColorClasses.primary} font-semibold text-lg`}>Get in Touch</p>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">Contact Us</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Have questions or want to get involved? We'd love to hear from you. Reach out to our team today.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16 justify-center items-center">
                        {/* Email */}
                        <Card className="border-gray-200 text-center">
                            <CardContent className="pt-6 space-y-3">
                                <div className={`w-12 h-12 ${primaryColorClasses['primary/10']} rounded-lg flex items-center justify-center mx-auto`}>
                                    <Mail className={`h-6 w-6 ${primaryColorClasses.primary}`} />
                                </div>
                                <h3 className="font-bold text-gray-900">Email</h3>
                                <p className="text-gray-600 text-sm">hello@dozienwankwo.org</p> 
                                <p className="text-gray-500 text-xs">We respond within 24 hours</p>
                            </CardContent>
                        </Card>

                        {/* Address */}
                        <Card className="border-gray-200 text-center">
                            <CardContent className="pt-6 space-y-3">
                                <div className={`w-12 h-12 ${primaryColorClasses['primary/10']} rounded-lg flex items-center justify-center mx-auto`}>
                                    <MapPin className={`h-6 w-6 ${primaryColorClasses.primary}`} />
                                </div>
                                <h3 className="font-bold text-gray-900">Address</h3>
                                <p className="text-gray-600 text-sm">Enugwu Ukwu</p>
                                <p className="text-gray-500 text-xs">Anambra State, NG</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-2xl mx-auto">
                        <Card className="border-gray-200">
                            <CardHeader>
                                <CardTitle className="text-gray-900">Send us a Message</CardTitle>
                                <CardDescription>
                                    Your message will be securely delivered via our server to hello@dozienwankwo.org.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {/* Submission Status Message */}
                                {submitMessage && (
                                    <div className={`p-4 mb-4 rounded-xl text-center font-medium ${submitMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {submitMessage.text}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
                                                placeholder="Okonkwo Emmanuel"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
                                                placeholder="okonkwo@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
                                                placeholder="+234 8000000000"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-900 mb-2">Subject</label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600`}
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="Volunteer Inquiry">Volunteer Inquiry</option>
                                                <option value="Donation Question">Donation Question</option>
                                                <option value="Event Information">Event Information</option>
                                                <option value="Media Inquiry">Media Inquiry</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none`}
                                            placeholder="Tell us how we can help..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <Button 
                                        type="submit" 
                                        className={`w-full ${primaryColorClasses['bg-primary']} ${primaryColorClasses['hover:bg-primary-dark']} text-white`}
                                        disabled={isSending}
                                    >
                                        {isSending ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-5 w-5" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    )
}
