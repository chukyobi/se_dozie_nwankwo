import { Calendar, MapPin, Users } from "lucide-react"

const events = [
  {
    date: "July 25, 2025",
    time: "6:00 PM",
    title: "Community Town Hall",
    location: "City Convention Center",
    attendees: 250,
    description: "Join us for an open discussion about our campaign priorities and vision for the future.",
  },
  {
    date: "August 1, 2025",
    time: "10:00 AM",
    title: "Volunteer Training",
    location: "Campaign Headquarters",
    attendees: 100,
    description: "Learn how to effectively campaign and engage with voters in your community.",
  },
  {
    date: "August 8, 2025",
    time: "7:00 PM",
    title: "Campaign Rally",
    location: "Central Park",
    attendees: 500,
    description: "A celebration of our campaign with speeches, music, and community engagement.",
  },
]

export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-12">Upcoming Events</h1>

      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="flex items-center gap-2 text-primary font-bold mb-2">
                  <Calendar className="w-5 h-5" />
                  {event.date}
                </div>
                <p className="text-gray-600">{event.time}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-5 h-5" />
                  {event.location}
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
              <div className="flex items-center justify-end">
                <div className="text-center">
                  <div className="flex items-center gap-2 justify-center text-primary font-bold mb-2">
                    <Users className="w-5 h-5" />
                    {event.attendees}
                  </div>
                  <p className="text-sm text-gray-600">Expected Attendees</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
