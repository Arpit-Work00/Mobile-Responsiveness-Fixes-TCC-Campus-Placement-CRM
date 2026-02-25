"use client"

import { Button } from "@/components/ui/button"
import { FileText, Download, Upload, CheckCircle2, AlertTriangle, Eye, Edit } from "lucide-react"

export default function StudentResumePage() {
  const resumeStatus = {
    lastUpdated: "15 Sep 2024",
    version: "v3.2",
    aiScore: 85,
    reviewStatus: "Approved",
    feedbackPending: false,
  }

  const feedbackItems = [
    { section: "Summary", status: "approved", feedback: "Clear and impactful opening statement" },
    { section: "Experience", status: "approved", feedback: "Good use of action verbs and metrics" },
    { section: "Education", status: "approved", feedback: "Properly formatted" },
    { section: "Skills", status: "needs_improvement", feedback: "Consider adding more technical skills relevant to PM roles" },
    { section: "Projects", status: "approved", feedback: "Strong project descriptions with outcomes" },
  ]

  const previousVersions = [
    { version: "v3.2", date: "15 Sep 2024", status: "Current" },
    { version: "v3.1", date: "10 Sep 2024", status: "Archived" },
    { version: "v3.0", date: "5 Sep 2024", status: "Archived" },
    { version: "v2.0", date: "25 Aug 2024", status: "Archived" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">My Resume</h1>
          <p className="text-sm text-neutral-600">Manage and optimize your resume for placements</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button className="bg-black text-white hover:bg-neutral-800">
            <Upload className="w-4 h-4 mr-2" />
            Upload New Version
          </Button>
        </div>
      </div>

      {/* Resume Status Card */}
      <div className="border border-neutral-200 rounded-lg p-6 bg-white">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-20 bg-neutral-100 rounded flex items-center justify-center">
              <FileText className="w-8 h-8 text-neutral-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-black">Arjun_Mehta_Resume_{resumeStatus.version}.pdf</h2>
              <p className="text-sm text-neutral-600">Last updated: {resumeStatus.lastUpdated}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs bg-black text-white px-2 py-1 rounded">{resumeStatus.reviewStatus}</span>
                <span className="text-xs text-neutral-500">AI Score: {resumeStatus.aiScore}/100</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">
              <Eye className="w-4 h-4 mr-1" />
              Preview
            </Button>
            <Button variant="outline" size="sm" className="border-neutral-300 text-black hover:bg-neutral-100 bg-transparent">
              <Edit className="w-4 h-4 mr-1" />
              Edit
            </Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Section Feedback */}
        <div>
          <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Section Feedback</h2>
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
            {feedbackItems.map((item, idx) => (
              <div key={idx} className="px-4 py-3 flex items-start gap-3">
                {item.status === 'approved' ? (
                  <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="text-sm font-medium text-black">{item.section}</div>
                  <div className="text-xs text-neutral-600 mt-0.5">{item.feedback}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Version History */}
        <div>
          <h2 className="text-sm font-semibold text-black mb-3 uppercase tracking-wide">Version History</h2>
          <div className="border border-neutral-200 rounded-lg overflow-hidden bg-white divide-y divide-neutral-200">
            {previousVersions.map((version, idx) => (
              <div key={idx} className="px-4 py-3 flex items-center justify-between hover:bg-neutral-50">
                <div>
                  <div className="text-sm font-medium text-black">{version.version}</div>
                  <div className="text-xs text-neutral-500">{version.date}</div>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  version.status === 'Current' ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-600'
                }`}>
                  {version.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
