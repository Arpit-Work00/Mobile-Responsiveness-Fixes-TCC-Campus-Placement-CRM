import { Button } from "@/components/ui/button"
import { UserCheck, Briefcase, MapPin, GraduationCap } from "lucide-react"

const profiles = [
  {
    id: 1,
    name: "Aditya Kumar",
    role: "Product Manager",
    experience: "6 years",
    company: "Ex-Flipkart",
    campus: "IIM Bangalore (2018)",
    location: "Bangalore",
    skills: ["Product Strategy", "Growth", "Analytics"],
  },
  {
    id: 2,
    name: "Megha Joshi",
    role: "Strategy Consultant",
    experience: "5 years",
    company: "Ex-McKinsey",
    campus: "IIM Ahmedabad (2019)",
    location: "Mumbai",
    skills: ["Strategy", "Due Diligence", "Market Entry"],
  },
  {
    id: 3,
    name: "Saurabh Mishra",
    role: "Engineering Manager",
    experience: "8 years",
    company: "Ex-Google",
    campus: "IIT Delhi (2016)",
    location: "Bangalore",
    skills: ["System Design", "Team Leadership", "Backend"],
  },
]

export default function LateralsPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-black mb-2">Hire from Alumni & Experienced Talent</h1>
        <p className="text-neutral-600">We currently have a limited pool of vetted profiles. Quality over quantity.</p>
      </div>

      {/* Info Banner */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-neutral-600">
          <strong className="text-black">Limited Supply:</strong> These profiles are pre-screened alumni from top
          campuses with 3-10 years of experience. New profiles are added weekly.
        </p>
      </div>

      {/* Profiles */}
      <div className="space-y-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="border border-neutral-200 rounded-lg p-5">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-neutral-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-black">{profile.name}</h3>
                  <p className="text-sm text-neutral-600">
                    {profile.role} • {profile.experience}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {profile.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3 h-3" />
                      {profile.campus}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {profile.location}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {profile.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Button variant="outline" className="bg-transparent">
                View Profile
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 p-6 bg-black text-white rounded-lg">
        <h3 className="font-semibold mb-2">Need more profiles?</h3>
        <p className="text-neutral-300 text-sm mb-4">
          Tell us your requirements and we&apos;ll match you with relevant candidates from our network.
        </p>
        <Button variant="secondary" className="bg-white text-black hover:bg-neutral-100">
          Submit Requirements
        </Button>
      </div>
    </div>
  )
}
