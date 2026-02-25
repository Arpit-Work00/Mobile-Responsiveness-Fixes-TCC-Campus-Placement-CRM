import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Edit, MapPin, GraduationCap } from "lucide-react"

export default function Profile() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
          <p className="text-gray-600">Keep your profile updated to get better matches</p>
        </div>

        {/* Profile Header */}
        <Card className="p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold">
                RS
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">Rahul Sharma</h2>
                <p className="text-gray-600 mb-3">Final Year MBA Student</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <GraduationCap className="h-4 w-4" />
                    <span>IIM Ahmedabad</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Bangalore</span>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="outline">
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>
        </Card>

        {/* Profile Strength */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Profile Strength</h3>
            <Badge className="bg-green-100 text-green-700">85% Complete</Badge>
          </div>
          <Progress value={85} className="h-3 mb-4" />
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Add 2 more skills to reach 100%</span>
              <Button variant="link" className="h-auto p-0 text-sm">
                Add Skills
              </Button>
            </div>
          </div>
        </Card>

        {/* Education */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Education</h3>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">MBA (Master of Business Administration)</p>
              <p className="text-gray-600">IIM Ahmedabad</p>
              <p className="text-sm text-gray-500">2023 - 2025 (Expected)</p>
            </div>
            <div>
              <p className="font-semibold">B.Tech in Computer Science</p>
              <p className="text-gray-600">NIT Trichy</p>
              <p className="text-sm text-gray-500">2017 - 2021</p>
            </div>
          </div>
        </Card>

        {/* Experience */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Work Experience</h3>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <p className="font-semibold">Product Manager</p>
            <p className="text-gray-600">TechCorp India</p>
            <p className="text-sm text-gray-500">2021 - 2023 (2 years)</p>
            <p className="text-sm mt-2">Led product development for mobile app with 1M+ users</p>
          </div>
        </Card>

        {/* Skills */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Skills</h3>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Product Management",
              "Data Analysis",
              "SQL",
              "Python",
              "Agile",
              "User Research",
              "Market Analysis",
              "Strategy",
            ].map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Career Interests */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Career Interests</h3>
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 mb-2">Primary Interest</p>
              <Badge className="bg-blue-100 text-blue-700">Product Management</Badge>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Secondary Interest</p>
              <Badge className="bg-blue-100 text-blue-700">Consulting</Badge>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Preferred Locations</p>
              <div className="flex gap-2">
                <Badge variant="outline">Bangalore</Badge>
                <Badge variant="outline">Mumbai</Badge>
                <Badge variant="outline">Delhi NCR</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
