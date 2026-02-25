"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Video, MessageSquare, Star, Clock, User, Briefcase } from "lucide-react"

export default function StudentMentorsPage() {
  const upcomingSessions = [
    { mentor: "Rajiv Sharma", company: "ex-McKinsey", date: "18 Oct 2024", time: "3:00 PM", type: "Case Interview", duration: "45 min" },
    { mentor: "Priya Kapoor", company: "ex-Amazon", date: "22 Oct 2024", time: "11:00 AM", type: "Product Sense", duration: "45 min" },
  ]

  const pastSessions = [
    { mentor: "Rajiv Sharma", company: "ex-McKinsey", date: "10 Oct 2024", type: "Case Interview", rating: 4.5, feedback: "Strong structuring, needs work on synthesis" },
    { mentor: "Vikram Mehta", company: "ex-Google", date: "5 Oct 2024", type: "Behavioral", rating: 4.0, feedback: "Good STAR stories, add more impact metrics" },
    { mentor: "Anita Desai", company: "ex-Bain", date: "28 Sep 2024", type: "Resume Review", rating: 5.0, feedback: "Excellent resume, minor formatting tweaks applied" },
  ]

  const availableMentors = [
    { name: "Rajiv Sharma", company: "ex-McKinsey", expertise: ["Case Interview", "Consulting"], rating: 4.8, sessions: 120, nextSlot: "Tomorrow 2 PM" },
    { name: "Priya Kapoor", company: "ex-Amazon", expertise: ["Product Sense", "PM Interview"], rating: 4.9, sessions: 85, nextSlot: "20 Oct 10 AM" },
    { name: "Vikram Mehta", company: "ex-Google", expertise: ["Behavioral", "Tech PM"], rating: 4.7, sessions: 95, nextSlot: "19 Oct 4 PM" },
    { name: "Anita Desai", company: "ex-Bain", expertise: ["Case Interview", "Strategy"], rating: 4.9, sessions: 110, nextSlot: "21 Oct 11 AM" },
    { name: "Rohit Kumar", company: "ex-Microsoft", expertise: ["PM Interview", "System Design"], rating: 4.6, sessions: 72, nextSlot: "22 Oct 3 PM" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Mentor Sessions</h1>
          <p className="text-sm text-neutral-600">Book and manage your expert mock interview sessions</p>
        </div>
        <Button className="bg-black text-white hover:bg-neutral-800">
          <Calendar className="w-4 h-4 mr-2" />
          Book Session
        </Button>
      </div>

      {/* Upcoming Sessions */}
      {upcomingSessions.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Upcoming Sessions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {upcomingSessions.map((session, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-lg p-4 bg-white">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-medium text-black">{session.mentor}</h3>
                    <p className="text-xs text-neutral-500">{session.company}</p>
                  </div>
                  <span className="text-xs bg-black text-white px-2 py-1 rounded">{session.type}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-600 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {session.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {session.time} ({session.duration})
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-black text-white hover:bg-neutral-800 flex-1">
                    <Video className="w-4 h-4 mr-1" />
                    Join
                  </Button>
                  <Button size="sm" variant="outline" className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">
                    Reschedule
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Past Sessions */}
      <div>
        <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Past Sessions</h2>
        <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Mentor</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Type</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Date</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-black uppercase">Rating</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-black uppercase">Feedback</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {pastSessions.map((session, idx) => (
                <tr key={idx} className="hover:bg-neutral-50">
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-black">{session.mentor}</div>
                    <div className="text-xs text-neutral-500">{session.company}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{session.type}</td>
                  <td className="px-4 py-3 text-sm text-neutral-600">{session.date}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="flex items-center justify-center gap-1 text-sm text-black">
                      <Star className="w-4 h-4 fill-black" />
                      {session.rating}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-neutral-600 max-w-[200px] truncate">{session.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Available Mentors */}
      <div>
        <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Available Mentors</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableMentors.map((mentor, idx) => (
            <div key={idx} className="border border-neutral-200 rounded-lg p-4 bg-white hover:border-neutral-400 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-neutral-400" />
                </div>
                <div>
                  <h3 className="font-medium text-black">{mentor.name}</h3>
                  <p className="text-xs text-neutral-500">{mentor.company}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {mentor.expertise.map((skill, i) => (
                  <span key={i} className="text-xs bg-neutral-100 text-black px-2 py-0.5 rounded">{skill}</span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-black text-black" />
                  {mentor.rating} ({mentor.sessions} sessions)
                </span>
                <span>Next: {mentor.nextSlot}</span>
              </div>
              <Button size="sm" className="w-full bg-black text-white hover:bg-neutral-800">
                Book Session
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
