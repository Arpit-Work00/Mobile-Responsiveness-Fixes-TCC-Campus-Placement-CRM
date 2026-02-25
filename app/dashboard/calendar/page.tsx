"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar, ChevronLeft, ChevronRight, Plus, Clock, Building2, Users } from "lucide-react"

export default function CalendarPage() {
  const router = useRouter()
  const [currentDate] = useState(new Date())
  
  const events = [
    { id: 1, title: "Amazon Guest Session", company: "Amazon", companyId: "amazon", time: "2:00 PM", duration: "1h", type: "session", date: "Today" },
    { id: 2, title: "Deloitte Call", company: "Deloitte", companyId: "deloitte", time: "4:00 PM", duration: "30m", type: "call", date: "Today" },
    { id: 3, title: "Google Interview Panel", company: "Google", companyId: "google", time: "10:00 AM", duration: "3h", type: "interview", date: "Tomorrow" },
    { id: 4, title: "Microsoft PPT Presentation", company: "Microsoft", companyId: "microsoft", time: "11:00 AM", duration: "1h", type: "meeting", date: "Tomorrow" },
    { id: 5, title: "Flipkart Recruiter Meet", company: "Flipkart", companyId: "flipkart", time: "3:00 PM", duration: "45m", type: "meeting", date: "23 Sep" },
    { id: 6, title: "McKinsey Case Workshop", company: "McKinsey", companyId: "mckinsey", time: "10:00 AM", duration: "2h", type: "session", date: "24 Sep" },
    { id: 7, title: "BCG Final Interviews", company: "BCG", companyId: "bcg", time: "9:00 AM", duration: "4h", type: "interview", date: "25 Sep" },
    { id: 8, title: "Bain Info Session", company: "Bain", companyId: "bain", time: "2:00 PM", duration: "1.5h", type: "session", date: "26 Sep" },
  ]

  const todayEvents = events.filter(e => e.date === "Today")
  const tomorrowEvents = events.filter(e => e.date === "Tomorrow")
  const upcomingEvents = events.filter(e => e.date !== "Today" && e.date !== "Tomorrow")

  const getEventColor = (type: string) => {
    switch(type) {
      case 'session': return 'border-l-black bg-neutral-50'
      case 'call': return 'border-l-neutral-400 bg-white'
      case 'meeting': return 'border-l-neutral-600 bg-neutral-50'
      case 'interview': return 'border-l-black bg-neutral-100'
      default: return 'border-l-neutral-300 bg-white'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">Calendar</h1>
          <p className="text-sm text-neutral-600">Scheduled meetings, sessions, and interviews</p>
        </div>
        <Button className="bg-black text-white hover:bg-neutral-800">
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
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
              todayEvents.map(event => (
                <div 
                  key={event.id}
                  onClick={() => router.push(`/dashboard/companies/${event.companyId}`)}
                  className={`border border-neutral-200 rounded-lg p-4 cursor-pointer hover:border-neutral-400 transition-colors border-l-4 ${getEventColor(event.type)}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-black text-sm">{event.title}</h3>
                      <p className="text-xs text-neutral-600 mt-1">{event.company}</p>
                    </div>
                    <span className="text-xs bg-neutral-100 text-black px-2 py-1 rounded">{event.type}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-xs text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </span>
                    <span>{event.duration}</span>
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
            {tomorrowEvents.length === 0 ? (
              <p className="text-sm text-neutral-500 py-4 text-center border border-neutral-200 rounded-lg">No events tomorrow</p>
            ) : (
              tomorrowEvents.map(event => (
                <div 
                  key={event.id}
                  onClick={() => router.push(`/dashboard/companies/${event.companyId}`)}
                  className={`border border-neutral-200 rounded-lg p-4 cursor-pointer hover:border-neutral-400 transition-colors border-l-4 ${getEventColor(event.type)}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-black text-sm">{event.title}</h3>
                      <p className="text-xs text-neutral-600 mt-1">{event.company}</p>
                    </div>
                    <span className="text-xs bg-neutral-100 text-black px-2 py-1 rounded">{event.type}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-xs text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </span>
                    <span>{event.duration}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Upcoming */}
        <div>
          <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide flex items-center gap-2">
            <div className="w-2 h-2 bg-neutral-200 rounded-full" />
            Upcoming
          </h2>
          <div className="space-y-3">
            {upcomingEvents.map(event => (
              <div 
                key={event.id}
                onClick={() => router.push(`/dashboard/companies/${event.companyId}`)}
                className={`border border-neutral-200 rounded-lg p-4 cursor-pointer hover:border-neutral-400 transition-colors border-l-4 ${getEventColor(event.type)}`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-black text-sm">{event.title}</h3>
                    <p className="text-xs text-neutral-600 mt-1">{event.company}</p>
                  </div>
                  <span className="text-xs bg-neutral-100 text-black px-2 py-1 rounded">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 mt-3 text-xs text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {event.time}
                  </span>
                  <span>{event.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
