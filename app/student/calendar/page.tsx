"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Clock, Video, FileText, BookOpen, Users } from "lucide-react"

export default function StudentCalendarPage() {
  const todayEvents = [
    { time: "10:00 AM", title: "Case Interview Module - Session 4", type: "module", duration: "1h" },
    { time: "2:00 PM", title: "AI Mock Interview - Behavioral", type: "interview", duration: "30m" },
  ]

  const tomorrowEvents = [
    { time: "11:00 AM", title: "Resume Review Deadline", type: "deadline", duration: "-" },
    { time: "3:00 PM", title: "Expert Mock with Rajiv Sharma", type: "expert", duration: "45m" },
  ]

  const upcomingEvents = [
    { date: "20 Oct", time: "10:00 AM", title: "McKinsey Application Deadline", type: "deadline" },
    { date: "22 Oct", time: "11:00 AM", title: "Mentor Session - Priya Kapoor", type: "expert" },
    { date: "25 Oct", time: "9:00 AM", title: "Amazon Campus Interview", type: "interview" },
    { date: "28 Oct", time: "2:00 PM", title: "Bain Info Session", type: "event" },
  ]

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'module': return <BookOpen className="w-4 h-4" />
      case 'interview': return <Video className="w-4 h-4" />
      case 'expert': return <Users className="w-4 h-4" />
      case 'deadline': return <FileText className="w-4 h-4" />
      case 'event': return <Calendar className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const getEventStyle = (type: string) => {
    switch (type) {
      case 'module': return 'border-l-black bg-neutral-50'
      case 'interview': return 'border-l-neutral-600 bg-white'
      case 'expert': return 'border-l-black bg-neutral-100'
      case 'deadline': return 'border-l-neutral-400 bg-white'
      case 'event': return 'border-l-neutral-300 bg-neutral-50'
      default: return 'border-l-neutral-200 bg-white'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">My Calendar</h1>
          <p className="text-sm text-neutral-600">Upcoming sessions, deadlines, and events</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today */}
        <div>
          <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide flex items-center gap-2">
            <div className="w-2 h-2 bg-black rounded-full" />
            Today
          </h2>
          <div className="space-y-3">
            {todayEvents.length === 0 ? (
              <p className="text-sm text-neutral-500 py-4 text-center border border-neutral-200 rounded-lg">No events today</p>
            ) : (
              todayEvents.map((event, idx) => (
                <div key={idx} className={`border border-neutral-200 rounded-lg p-4 border-l-4 ${getEventStyle(event.type)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center text-black">
                        {getEventIcon(event.type)}
                      </div>
                      <div>
                        <h3 className="font-medium text-black text-sm">{event.title}</h3>
                        <div className="flex items-center gap-2 mt-1 text-xs text-neutral-500">
                          <Clock className="w-3 h-3" />
                          {event.time} ({event.duration})
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Tomorrow */}
        <div>
          <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide flex items-center gap-2">
            <div className="w-2 h-2 bg-neutral-400 rounded-full" />
            Tomorrow
          </h2>
          <div className="space-y-3">
            {tomorrowEvents.map((event, idx) => (
              <div key={idx} className={`border border-neutral-200 rounded-lg p-4 border-l-4 ${getEventStyle(event.type)}`}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center text-black">
                    {getEventIcon(event.type)}
                  </div>
                  <div>
                    <h3 className="font-medium text-black text-sm">{event.title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-xs text-neutral-500">
                      <Clock className="w-3 h-3" />
                      {event.time} {event.duration !== '-' && `(${event.duration})`}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <div>
          <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide flex items-center gap-2">
            <div className="w-2 h-2 bg-neutral-200 rounded-full" />
            Upcoming
          </h2>
          <div className="space-y-3">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className={`border border-neutral-200 rounded-lg p-4 border-l-4 ${getEventStyle(event.type)}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center text-black">
                      {getEventIcon(event.type)}
                    </div>
                    <div>
                      <h3 className="font-medium text-black text-sm">{event.title}</h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-neutral-500">
                        <Calendar className="w-3 h-3" />
                        {event.date}, {event.time}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
