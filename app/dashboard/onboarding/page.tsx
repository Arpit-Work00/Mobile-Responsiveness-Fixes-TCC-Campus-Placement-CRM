"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Check,
  Upload,
  ArrowRight,
  ArrowLeft,
  Users,
  Building,
  FileSpreadsheet,
  Target,
  Link2,
  UserCheck,
  Mail,
  Rocket,
  Download,
  Plus,
  Trash2,
  ChevronDown,
  AlertTriangle,
  TrendingUp,
  BarChart3,
} from "lucide-react"

const STEPS = [
  { num: 1, label: "Team & Permissions", icon: Users },
  { num: 2, label: "Institute Timeline", icon: Building },
  { num: 3, label: "Historical Data", icon: FileSpreadsheet },
  { num: 4, label: "Target Universe", icon: Target },
  { num: 5, label: "Relationships", icon: Link2 },
  { num: 6, label: "Account Assignment", icon: UserCheck },
  { num: 7, label: "Communication Kit", icon: Mail },
  { num: 8, label: "Activate Outreach", icon: Rocket },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)

  // Step 1 state
  const [teamMembers, setTeamMembers] = useState([
    { name: "Dr. Raghav Menon", role: "Super Admin", sector: "All", permissions: ["view_all", "edit", "upload_history", "upload_outreach", "approve_comms", "analytics"], status: "Active" },
    { name: "Priya Sharma", role: "Manager", sector: "IT & Consulting", permissions: ["view_all", "edit", "upload_outreach"], status: "Active" },
    { name: "Rahul Verma", role: "Manager", sector: "FMCG & Manufacturing", permissions: ["view_assigned", "edit", "upload_outreach"], status: "Invited" },
  ])
  const [showAddMember, setShowAddMember] = useState(false)

  // Step 2 state
  const [instituteData, setInstituteData] = useState({
    established: "1973",
    firstPlacement: "1976",
    historyYears: "3",
    avgBatchSize: "420",
  })

  // Step 3 state
  const [historicalUploaded, setHistoricalUploaded] = useState(false)

  // Step 4 state
  const [universeMode, setUniverseMode] = useState<"upload" | "ai" | null>(null)
  const [universeUploaded, setUniverseUploaded] = useState(false)

  // Step 5 state
  const [relationshipsUploaded, setRelationshipsUploaded] = useState(false)

  // Step 6 state - assignments done
  const [assignmentsDone, setAssignmentsDone] = useState(false)

  // Step 7 state
  const [emailTemplateCreated, setEmailTemplateCreated] = useState(false)
  const [brochureUploaded, setBrochureUploaded] = useState(false)

  const allPermissions = [
    { key: "view_all", label: "View All Accounts" },
    { key: "view_assigned", label: "View Assigned Only" },
    { key: "edit", label: "Edit Account Details" },
    { key: "upload_history", label: "Upload Recruiter History" },
    { key: "upload_outreach", label: "Upload Outreach Progress" },
    { key: "approve_comms", label: "Approve Communications" },
    { key: "analytics", label: "View Analytics" },
  ]

  const next = () => setStep((s) => Math.min(s + 1, 8))
  const prev = () => setStep((s) => Math.max(s - 1, 1))

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-200 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
              <span className="font-bold text-white text-sm">TCC</span>
            </div>
            <span className="font-semibold text-lg text-black">Institute Onboarding</span>
          </div>
          <span className="text-sm text-neutral-500">Step {step} of 8</span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center gap-1 overflow-x-auto">
            {STEPS.map((s) => (
              <div key={s.num} className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={() => s.num <= step && setStep(s.num)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-medium transition-colors ${
                    s.num === step
                      ? "bg-black text-white"
                      : s.num < step
                        ? "bg-neutral-200 text-black cursor-pointer"
                        : "bg-neutral-100 text-neutral-400"
                  }`}
                >
                  {s.num < step ? (
                    <Check className="w-3 h-3" />
                  ) : (
                    <span>{s.num}</span>
                  )}
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
                {s.num < 8 && <div className="w-4 h-px bg-neutral-300 flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">

        {/* STEP 1 - Team & Permissions */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-black">Set Up Your Placement Team</h1>
              <p className="text-neutral-600 mt-1">Define team ownership before CRM data exists. Every account needs a clear owner.</p>
            </div>

            {/* Team Table */}
            <div className="border border-neutral-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th className="px-4 py-2.5 text-left text-xs font-semibold text-black">Name</th>
                    <th className="px-4 py-2.5 text-left text-xs font-semibold text-black">Role</th>
                    <th className="px-4 py-2.5 text-left text-xs font-semibold text-black">Assigned Sector</th>
                    <th className="px-4 py-2.5 text-left text-xs font-semibold text-black">Permissions</th>
                    <th className="px-4 py-2.5 text-left text-xs font-semibold text-black">Status</th>
                    <th className="px-4 py-2.5"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {teamMembers.map((member, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50">
                      <td className="px-4 py-3 text-sm font-medium text-black">{member.name}</td>
                      <td className="px-4 py-3">
                        <select
                          value={member.role}
                          onChange={(e) => {
                            const updated = [...teamMembers]
                            updated[idx].role = e.target.value
                            setTeamMembers(updated)
                          }}
                          className="text-sm border border-neutral-200 rounded px-2 py-1 bg-white text-black"
                        >
                          <option>Super Admin</option>
                          <option>Manager</option>
                          <option>Committee Member</option>
                        </select>
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-600">{member.sector}</td>
                      <td className="px-4 py-3">
                        <span className="text-xs text-neutral-600">{member.permissions.length} permissions</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                          member.status === "Active" ? "bg-black text-white" : "bg-neutral-200 text-neutral-600"
                        }`}>{member.status}</span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        {idx > 0 && (
                          <button
                            onClick={() => setTeamMembers(teamMembers.filter((_, i) => i !== idx))}
                            className="text-neutral-400 hover:text-black"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Member Form */}
            {showAddMember ? (
              <div className="border border-neutral-200 rounded-lg p-4 space-y-4">
                <h3 className="text-sm font-semibold text-black">Add Team Member</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <Label className="text-xs">Full Name</Label>
                    <Input placeholder="Enter name" className="h-9" />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Email</Label>
                    <Input placeholder="email@institute.ac.in" className="h-9" />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Role</Label>
                    <select className="w-full h-9 border border-neutral-200 rounded px-2 text-sm bg-white text-black">
                      <option>Manager</option>
                      <option>Committee Member</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-semibold">Permissions</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {allPermissions.map((perm) => (
                      <label key={perm.key} className="flex items-center gap-2 text-sm text-neutral-600">
                        <input type="checkbox" className="rounded border-neutral-300" />
                        {perm.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      setTeamMembers([...teamMembers, { name: "New Member", role: "Manager", sector: "Unassigned", permissions: ["view_assigned", "edit"], status: "Invited" }])
                      setShowAddMember(false)
                    }}
                    className="bg-black text-white hover:bg-neutral-800"
                    size="sm"
                  >
                    Send Invite
                  </Button>
                  <Button onClick={() => setShowAddMember(false)} variant="outline" size="sm" className="bg-transparent">Cancel</Button>
                </div>
              </div>
            ) : (
              <Button onClick={() => setShowAddMember(true)} variant="outline" className="bg-transparent border-neutral-300">
                <Plus className="w-4 h-4 mr-2" />
                Add Team Member
              </Button>
            )}

            {/* Permission Legend */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <h3 className="text-xs font-semibold text-black mb-2 uppercase tracking-wide">Permission Reference</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-neutral-600">
                {allPermissions.map((p) => (
                  <div key={p.key} className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    {p.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2 - Institute Timeline */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-black">Tell Us About Your Institution</h1>
              <p className="text-neutral-600 mt-1">This helps us calibrate analytics, benchmarks, and historical depth.</p>
            </div>

            <div className="border border-neutral-200 rounded-lg p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Year Established</Label>
                  <Input value={instituteData.established} onChange={(e) => setInstituteData({ ...instituteData, established: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>First Placement Year</Label>
                  <Input value={instituteData.firstPlacement} onChange={(e) => setInstituteData({ ...instituteData, firstPlacement: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Total Years of Placement History Available</Label>
                  <Input value={instituteData.historyYears} onChange={(e) => setInstituteData({ ...instituteData, historyYears: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Average Batch Size (Last 3 Years)</Label>
                  <Input value={instituteData.avgBatchSize} onChange={(e) => setInstituteData({ ...instituteData, avgBatchSize: e.target.value })} />
                </div>
              </div>

              {/* Dynamic prompt based on history */}
              <div className="border-t border-neutral-200 pt-4">
                <div className="bg-neutral-50 rounded-lg p-4">
                  <p className="text-sm text-black font-medium">
                    Based on your input, we will ask you to upload placement data for the last {instituteData.historyYears} year{Number(instituteData.historyYears) > 1 ? "s" : ""}.
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    This will populate your recruiter database, relationship scorecard, and historical analytics automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 - Upload Historical Placement Reports */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-black">Upload Historical Recruiter Data</h1>
              <p className="text-neutral-600 mt-1">Your CRM must start with institutional memory, not a blank screen.</p>
            </div>

            {/* Template Download */}
            <div className="border border-neutral-200 rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-black">Download Excel Template</p>
                <p className="text-xs text-neutral-500 mt-0.5">Pre-formatted with all required columns</p>
              </div>
              <Button variant="outline" size="sm" className="bg-transparent border-neutral-300">
                <Download className="w-4 h-4 mr-2" />
                Download Template
              </Button>
            </div>

            {/* Template Columns */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <h3 className="text-xs font-semibold text-black mb-3 uppercase tracking-wide">Template Columns</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-neutral-600">
                {["Year", "Company Name", "Sector", "Role Offered", "CTC", "Number of Offers", "PPO / Full-time", "Relationship Strength (1-5)", "Last Interaction Date", "Key Contact Name", "Key Contact Email", "Alumni Present? (Y/N)"].map((col) => (
                  <div key={col} className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                    {col}
                  </div>
                ))}
              </div>
            </div>

            {/* Upload Zone */}
            <label className={`block border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              historicalUploaded ? "border-black bg-neutral-50" : "border-neutral-300 hover:border-black"
            }`}>
              {historicalUploaded ? (
                <div>
                  <div className="w-12 h-12 rounded-full bg-black mx-auto mb-3 flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-black">placement_history_2022_2024.xlsx uploaded</p>
                  <p className="text-xs text-neutral-500 mt-1">142 companies | 3 years | Processing complete</p>
                </div>
              ) : (
                <div>
                  <Upload className="w-8 h-8 text-neutral-400 mx-auto mb-3" />
                  <p className="text-sm font-medium text-black">Upload Historical Placement Excel</p>
                  <p className="text-xs text-neutral-500 mt-1">Drag & drop or click to browse (.xlsx, .csv)</p>
                </div>
              )}
              <input type="file" className="hidden" accept=".xlsx,.csv" onChange={() => setHistoricalUploaded(true)} />
            </label>

            {/* Auto-generated Analytics Preview */}
            {historicalUploaded && (
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-black uppercase tracking-wide">Auto-Generated Analytics</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {[
                    { label: "Total Recruiters", value: "142" },
                    { label: "Repeat Recruiters", value: "67" },
                    { label: "Dormant (2+ yrs)", value: "38" },
                    { label: "Avg CTC", value: "18.5 LPA" },
                    { label: "Top Sector", value: "IT Services" },
                  ].map((stat) => (
                    <div key={stat.label} className="border border-neutral-200 rounded-lg p-3 text-center">
                      <div className="text-xl font-bold text-black">{stat.value}</div>
                      <div className="text-xs text-neutral-500 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Sector Distribution */}
                <div className="border border-neutral-200 rounded-lg p-4">
                  <h4 className="text-xs font-semibold text-black mb-3">SECTOR DISTRIBUTION</h4>
                  <div className="space-y-2">
                    {[
                      { sector: "IT Services & Consulting", count: 42, pct: 30 },
                      { sector: "FMCG", count: 22, pct: 15 },
                      { sector: "BFSI", count: 28, pct: 20 },
                      { sector: "Consulting", count: 18, pct: 13 },
                      { sector: "Manufacturing", count: 15, pct: 11 },
                      { sector: "Others", count: 17, pct: 12 },
                    ].map((s) => (
                      <div key={s.sector} className="flex items-center gap-3">
                        <span className="text-xs text-neutral-600 w-40 truncate">{s.sector}</span>
                        <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                          <div className="h-full bg-black rounded-full" style={{ width: `${s.pct}%` }} />
                        </div>
                        <span className="text-xs font-medium text-black w-8 text-right">{s.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTC Trend */}
                <div className="border border-neutral-200 rounded-lg p-4">
                  <h4 className="text-xs font-semibold text-black mb-3">CTC TREND (3-YEAR)</h4>
                  <div className="flex items-end gap-6 h-24">
                    {[
                      { year: "2022", median: "15.2 LPA", height: 60 },
                      { year: "2023", median: "17.0 LPA", height: 75 },
                      { year: "2024", median: "18.5 LPA", height: 90 },
                    ].map((y) => (
                      <div key={y.year} className="flex-1 flex flex-col items-center gap-1">
                        <span className="text-xs font-medium text-black">{y.median}</span>
                        <div className="w-full bg-black rounded-t" style={{ height: `${y.height}%` }} />
                        <span className="text-xs text-neutral-500">{y.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 4 - Target Universe */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-black">Build Your Target Company Universe</h1>
              <p className="text-neutral-600 mt-1">Companies should not just appear. Your universe must be intentional.</p>
            </div>

            {/* Mode Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setUniverseMode("upload")}
                className={`border-2 rounded-lg p-6 text-left transition-colors ${
                  universeMode === "upload" ? "border-black bg-neutral-50" : "border-neutral-200 hover:border-neutral-400"
                }`}
              >
                <Upload className="w-6 h-6 text-black mb-3" />
                <h3 className="text-sm font-semibold text-black">Mode A: Upload Target List</h3>
                <p className="text-xs text-neutral-500 mt-1">Upload your own Excel with Company, Sector, Priority, Target Role, Geography</p>
              </button>
              <button
                onClick={() => setUniverseMode("ai")}
                className={`border-2 rounded-lg p-6 text-left transition-colors ${
                  universeMode === "ai" ? "border-black bg-neutral-50" : "border-neutral-200 hover:border-neutral-400"
                }`}
              >
                <TrendingUp className="w-6 h-6 text-black mb-3" />
                <h3 className="text-sm font-semibold text-black">Mode B: System Intelligence</h3>
                <p className="text-xs text-neutral-500 mt-1">AI suggests companies based on similar institutes, past recruiters, alumni footprint</p>
              </button>
            </div>

            {/* Upload Mode */}
            {universeMode === "upload" && (
              <div className="space-y-4">
                <div className="border border-neutral-200 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-black">Download Universe Template</p>
                    <p className="text-xs text-neutral-500">Company | Sector | Priority | Target Role | Geography</p>
                  </div>
                  <Button variant="outline" size="sm" className="bg-transparent border-neutral-300">
                    <Download className="w-4 h-4 mr-2" />
                    Template
                  </Button>
                </div>

                <label className={`block border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                  universeUploaded ? "border-black bg-neutral-50" : "border-neutral-300 hover:border-black"
                }`}>
                  {universeUploaded ? (
                    <div>
                      <Check className="w-8 h-8 text-black mx-auto mb-2" />
                      <p className="text-sm font-medium text-black">target_universe_2025.xlsx uploaded</p>
                      <p className="text-xs text-neutral-500 mt-1">320 companies parsed</p>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-6 h-6 text-neutral-400 mx-auto mb-2" />
                      <p className="text-sm text-neutral-600">Upload Target Universe Excel</p>
                    </div>
                  )}
                  <input type="file" className="hidden" accept=".xlsx,.csv" onChange={() => setUniverseUploaded(true)} />
                </label>
              </div>
            )}

            {/* AI Suggestions Mode */}
            {universeMode === "ai" && (
              <div className="space-y-4">
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-black" />
                    <span className="text-xs font-semibold text-black uppercase tracking-wide">System Intelligence</span>
                  </div>
                  <p className="text-sm text-neutral-700">
                    Based on your historical data, similar institutions, and sector strength, we recommend adding these companies to your universe.
                  </p>
                </div>

                {/* Suggestions */}
                <div className="border border-neutral-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-neutral-50 border-b border-neutral-200">
                        <th className="px-4 py-2 text-left text-xs font-semibold text-black">Company</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-black">Sector</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-black">Reason</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-black">Tag</th>
                        <th className="px-4 py-2 text-center text-xs font-semibold text-black">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {[
                        { name: "Procter & Gamble", sector: "FMCG", reason: "Recruits at 8 of 10 similar institutes", tag: "Target New" },
                        { name: "JP Morgan", sector: "BFSI", reason: "Active campus recruiter, dormant at your campus since 2021", tag: "Dormant" },
                        { name: "Swiggy", sector: "Tech / Consumer", reason: "5 alumni in leadership roles", tag: "Strategic" },
                        { name: "Hindustan Unilever", sector: "FMCG", reason: "Historical recruiter, no visit in 2 years", tag: "Dormant" },
                        { name: "EY-Parthenon", sector: "Consulting", reason: "Expanding campus hiring; recruits at peer institutes", tag: "Target New" },
                        { name: "Reliance Retail", sector: "Retail", reason: "3 alumni present, high-volume roles", tag: "Strategic" },
                      ].map((company, idx) => (
                        <tr key={idx} className="hover:bg-neutral-50">
                          <td className="px-4 py-2.5 text-sm font-medium text-black">{company.name}</td>
                          <td className="px-4 py-2.5 text-sm text-neutral-600">{company.sector}</td>
                          <td className="px-4 py-2.5 text-xs text-neutral-500">{company.reason}</td>
                          <td className="px-4 py-2.5">
                            <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                              company.tag === "Target New" ? "bg-black text-white" :
                              company.tag === "Dormant" ? "bg-neutral-200 text-neutral-700" :
                              "bg-neutral-100 text-neutral-600"
                            }`}>{company.tag}</span>
                          </td>
                          <td className="px-4 py-2.5 text-center">
                            <Button size="sm" variant="outline" className="h-7 text-xs bg-transparent border-neutral-300">
                              <Plus className="w-3 h-3 mr-1" />
                              Add
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Universe Summary */}
            {(universeUploaded || universeMode === "ai") && (
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: "Historical Recruiter", count: 142, color: "bg-black text-white" },
                  { label: "Target New", count: 85, color: "bg-neutral-200 text-black" },
                  { label: "Dormant", count: 38, color: "bg-neutral-100 text-neutral-600" },
                  { label: "Strategic", count: 55, color: "bg-neutral-50 text-black border border-neutral-200" },
                ].map((cat) => (
                  <div key={cat.label} className={`rounded-lg p-3 text-center ${cat.color}`}>
                    <div className="text-2xl font-bold">{cat.count}</div>
                    <div className="text-xs mt-0.5">{cat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* STEP 5 - Relationship Mapping */}
        {step === 5 && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-black">Map Institutional Relationships</h1>
              <p className="text-neutral-600 mt-1">Outreach must be relationship-aware. Cold emails to warm contacts waste trust.</p>
            </div>

            <div className="border border-neutral-200 rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-black">Bulk Upload Relationships</p>
                <p className="text-xs text-neutral-500">Upload Excel with relationship types, contacts, alumni champions, last interaction</p>
              </div>
              <Button variant="outline" size="sm" className="bg-transparent border-neutral-300">
                <Download className="w-4 h-4 mr-2" />
                Download Template
              </Button>
            </div>

            <label className={`block border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
              relationshipsUploaded ? "border-black bg-neutral-50" : "border-neutral-300 hover:border-black"
            }`}>
              {relationshipsUploaded ? (
                <div>
                  <Check className="w-8 h-8 text-black mx-auto mb-2" />
                  <p className="text-sm font-medium text-black">relationships_mapped.xlsx uploaded</p>
                  <p className="text-xs text-neutral-500 mt-1">320 companies with relationship data</p>
                </div>
              ) : (
                <div>
                  <Upload className="w-6 h-6 text-neutral-400 mx-auto mb-2" />
                  <p className="text-sm text-neutral-600">Upload Relationship Mapping Excel</p>
                </div>
              )}
              <input type="file" className="hidden" accept=".xlsx,.csv" onChange={() => setRelationshipsUploaded(true)} />
            </label>

            {/* Manual Entry for Key Companies */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-black uppercase tracking-wide">Or Map Key Companies Manually</h3>
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-neutral-50 border-b border-neutral-200">
                      <th className="px-4 py-2 text-left text-xs font-semibold text-black">Company</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-black">Relationship Type</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-black">Key Contact</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-black">Alumni Champion</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-black">Strength</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {[
                      { company: "McKinsey", type: "Strong", contact: "Rajesh Menon (Partner)", alumni: "Arun Kapoor (2018)", strength: 5 },
                      { company: "Amazon", type: "Warm", contact: "Priya Desai (HR Lead)", alumni: "Vivek Sharma (2020)", strength: 4 },
                      { company: "Flipkart", type: "Cold", contact: "-", alumni: "Rahul Mehta (2019)", strength: 2 },
                      { company: "Deloitte", type: "Alumni Led", contact: "Suresh Iyer (Director)", alumni: "Suresh Iyer (2012)", strength: 5 },
                    ].map((r, idx) => (
                      <tr key={idx} className="hover:bg-neutral-50">
                        <td className="px-4 py-2.5 text-sm font-medium text-black">{r.company}</td>
                        <td className="px-4 py-2.5">
                          <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                            r.type === "Strong" ? "bg-black text-white" :
                            r.type === "Warm" ? "bg-neutral-200 text-black" :
                            r.type === "Alumni Led" ? "bg-black text-white" :
                            "bg-neutral-100 text-neutral-500"
                          }`}>{r.type}</span>
                        </td>
                        <td className="px-4 py-2.5 text-sm text-neutral-600">{r.contact}</td>
                        <td className="px-4 py-2.5 text-sm text-neutral-600">{r.alumni}</td>
                        <td className="px-4 py-2.5">
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((n) => (
                              <div key={n} className={`w-3 h-3 rounded-sm ${n <= r.strength ? "bg-black" : "bg-neutral-200"}`} />
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Relationship Summary */}
            {relationshipsUploaded && (
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: "Strong", count: 45 },
                  { label: "Warm", count: 82 },
                  { label: "Cold", count: 155 },
                  { label: "Alumni Led", count: 38 },
                ].map((r) => (
                  <div key={r.label} className="border border-neutral-200 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-black">{r.count}</div>
                    <div className="text-xs text-neutral-500 mt-0.5">{r.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* STEP 6 - Account Assignment */}
        {step === 6 && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-black">Assign Account Ownership</h1>
              <p className="text-neutral-600 mt-1">No diffused ownership. Every company needs a name against it.</p>
            </div>

            {/* Load Balance Overview */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Priya Sharma", accounts: 110, sectors: "IT, Consulting", load: "Balanced" },
                { name: "Rahul Verma", accounts: 105, sectors: "FMCG, Mfg", load: "Balanced" },
                { name: "Unassigned", accounts: 105, sectors: "-", load: "Needs Owner" },
              ].map((m) => (
                <div key={m.name} className={`border rounded-lg p-4 ${m.load === "Needs Owner" ? "border-black border-2" : "border-neutral-200"}`}>
                  <div className="text-sm font-semibold text-black">{m.name}</div>
                  <div className="text-2xl font-bold text-black mt-1">{m.accounts}</div>
                  <div className="text-xs text-neutral-500">accounts | {m.sectors}</div>
                  <div className={`text-xs font-medium mt-2 ${m.load === "Needs Owner" ? "text-black" : "text-neutral-500"}`}>
                    {m.load}
                  </div>
                </div>
              ))}
            </div>

            {/* Assignment Table */}
            <div className="border border-neutral-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th className="px-4 py-2 text-left text-xs font-semibold text-black">Company</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-black">Sector</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-black">Tag</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-black">Primary Manager</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-black">Secondary</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {[
                    { company: "McKinsey", sector: "Consulting", tag: "Historical", primary: "Priya Sharma", secondary: "-" },
                    { company: "Amazon", sector: "Tech", tag: "Historical", primary: "Priya Sharma", secondary: "Rahul Verma" },
                    { company: "P&G", sector: "FMCG", tag: "Target New", primary: "Rahul Verma", secondary: "-" },
                    { company: "EY-Parthenon", sector: "Consulting", tag: "Target New", primary: "Unassigned", secondary: "-" },
                    { company: "Swiggy", sector: "Tech", tag: "Strategic", primary: "Unassigned", secondary: "-" },
                  ].map((a, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50">
                      <td className="px-4 py-2.5 text-sm font-medium text-black">{a.company}</td>
                      <td className="px-4 py-2.5 text-sm text-neutral-600">{a.sector}</td>
                      <td className="px-4 py-2.5">
                        <span className="text-xs px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">{a.tag}</span>
                      </td>
                      <td className="px-4 py-2.5">
                        <select className="text-sm border border-neutral-200 rounded px-2 py-1 bg-white text-black">
                          <option>{a.primary}</option>
                          <option>Priya Sharma</option>
                          <option>Rahul Verma</option>
                        </select>
                      </td>
                      <td className="px-4 py-2.5">
                        <select className="text-sm border border-neutral-200 rounded px-2 py-1 bg-white text-black">
                          <option>{a.secondary}</option>
                          <option>Priya Sharma</option>
                          <option>Rahul Verma</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Button onClick={() => setAssignmentsDone(true)} className="bg-black text-white hover:bg-neutral-800">
              Confirm All Assignments
            </Button>
          </div>
        )}

        {/* STEP 7 - Marketing Communication Kit */}
        {step === 7 && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-black">Create Your Recruiter Communication Kit</h1>
              <p className="text-neutral-600 mt-1">Professional outreach collateral must exist before outreach begins.</p>
            </div>

            {/* Three Modules */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Email Builder */}
              <div className="border border-neutral-200 rounded-lg p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-black" />
                  <h3 className="text-sm font-semibold text-black">Email Templates</h3>
                </div>

                {emailTemplateCreated ? (
                  <div className="bg-neutral-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Check className="w-4 h-4 text-black" />
                      <span className="text-sm font-medium text-black">2 templates created</span>
                    </div>
                    <div className="space-y-1.5 text-xs text-neutral-600">
                      <div className="p-2 bg-white rounded border border-neutral-200">Initial Outreach - Cold</div>
                      <div className="p-2 bg-white rounded border border-neutral-200">Re-engagement - Dormant</div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <Label className="text-xs">Subject Line</Label>
                      <Input placeholder="Partnership with {{institute_name}} - Batch 2025" className="h-8 text-sm" />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Body</Label>
                      <Textarea
                        placeholder="Dear {{contact_name}}, We are writing from {{institute_name}} regarding campus hiring for our Batch 2025..."
                        className="text-sm min-h-[100px]"
                      />
                    </div>
                    <div className="bg-neutral-50 rounded p-2">
                      <p className="text-[10px] font-semibold text-neutral-500 mb-1">MERGE TAGS</p>
                      <div className="flex flex-wrap gap-1">
                        {["{{company_name}}", "{{contact_name}}", "{{role_type}}", "{{alumni_ref}}", "{{institute_name}}"].map((tag) => (
                          <span key={tag} className="text-[10px] bg-white border border-neutral-200 px-1.5 py-0.5 rounded text-neutral-600">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <Button size="sm" onClick={() => setEmailTemplateCreated(true)} className="w-full bg-black text-white hover:bg-neutral-800">
                      Save Template
                    </Button>
                  </div>
                )}
              </div>

              {/* Brochure Upload */}
              <div className="border border-neutral-200 rounded-lg p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-black" />
                  <h3 className="text-sm font-semibold text-black">Brochure Upload</h3>
                </div>

                <label className={`block border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
                  brochureUploaded ? "border-black bg-neutral-50" : "border-neutral-300 hover:border-black"
                }`}>
                  {brochureUploaded ? (
                    <div>
                      <Check className="w-6 h-6 text-black mx-auto mb-1" />
                      <p className="text-xs font-medium text-black">MBA_Brochure_2025.pdf</p>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-5 h-5 text-neutral-400 mx-auto mb-1" />
                      <p className="text-xs text-neutral-600">Upload PDF Brochure</p>
                    </div>
                  )}
                  <input type="file" className="hidden" accept=".pdf" onChange={() => setBrochureUploaded(true)} />
                </label>

                {brochureUploaded && (
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <Label className="text-xs">Program Type</Label>
                      <select className="w-full h-8 border border-neutral-200 rounded px-2 text-sm bg-white text-black">
                        <option>MBA</option>
                        <option>Engineering</option>
                        <option>EPGP</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Batch Year</Label>
                      <Input defaultValue="2025" className="h-8 text-sm" />
                    </div>
                  </div>
                )}
              </div>

              {/* Recruiter Landing Page */}
              <div className="border border-neutral-200 rounded-lg p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-black" />
                  <h3 className="text-sm font-semibold text-black">Recruiter Microsite</h3>
                </div>
                <p className="text-xs text-neutral-500">Auto-generated recruiter landing page from your data.</p>

                <div className="space-y-2">
                  <div className="space-y-1">
                    <Label className="text-xs">Program Overview</Label>
                    <Textarea placeholder="Our 2-year MBA program..." className="text-sm min-h-[60px]" />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Median CTC</Label>
                    <Input placeholder="18.5 LPA" className="h-8 text-sm" />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Top Recruiting Companies</Label>
                    <Input placeholder="McKinsey, Amazon, Deloitte..." className="h-8 text-sm" />
                  </div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 rounded p-2">
                  <p className="text-[10px] font-semibold text-neutral-500">MICROSITE URL</p>
                  <p className="text-xs text-black font-mono mt-0.5">iimb.tccaccess.com/recruiters</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 8 - Outreach Activation */}
        {step === 8 && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-black">Activate Outreach</h1>
              <p className="text-neutral-600 mt-1">Everything is set. Your CRM is loaded with institutional memory and clear ownership.</p>
            </div>

            {/* Readiness Checklist */}
            <div className="border border-neutral-200 rounded-lg p-6 space-y-4">
              <h3 className="text-sm font-semibold text-black uppercase tracking-wide">Activation Checklist</h3>
              <div className="space-y-3">
                {[
                  { label: "Team members added and permissions set", done: teamMembers.length >= 2 },
                  { label: "Institutional timeline defined", done: true },
                  { label: "Historical recruiter data uploaded", done: historicalUploaded },
                  { label: "Target universe created", done: universeUploaded || universeMode === "ai" },
                  { label: "Relationships mapped", done: relationshipsUploaded },
                  { label: "Account ownership assigned", done: assignmentsDone },
                  { label: "Communication kit prepared", done: emailTemplateCreated },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded flex items-center justify-center ${
                      item.done ? "bg-black" : "border-2 border-neutral-300"
                    }`}>
                      {item.done && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className={`text-sm ${item.done ? "text-black" : "text-neutral-400"}`}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outreach Preview */}
            <div className="border border-neutral-200 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide">Your Outreach Dashboard Will Show</h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {[
                  { label: "Total Targets", value: "320" },
                  { label: "Historical", value: "142" },
                  { label: "Relationships Mapped", value: "320" },
                  { label: "Accounts Assigned", value: "215" },
                  { label: "Templates Ready", value: "2" },
                  { label: "Managers Active", value: "2" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-xl font-bold text-black">{s.value}</div>
                    <div className="text-[10px] text-neutral-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Stage Reference */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <h3 className="text-xs font-semibold text-black mb-2 uppercase tracking-wide">Outreach Stages (Post Activation)</h3>
              <div className="flex flex-wrap gap-2">
                {["Not Contacted", "Contacted", "Meeting Done", "JD Expected", "JD Received", "Closed", "Dropped"].map((stage) => (
                  <span key={stage} className="text-xs px-2.5 py-1 rounded border border-neutral-200 text-neutral-600 bg-white">{stage}</span>
                ))}
              </div>
            </div>

            {/* Activate Button */}
            <Button
              onClick={() => router.push("/dashboard")}
              className="w-full bg-black text-white hover:bg-neutral-800 h-12 text-base font-semibold"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Activate CRM & Begin Outreach
            </Button>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-neutral-200">
          <Button
            onClick={prev}
            disabled={step === 1}
            variant="outline"
            className="bg-transparent border-neutral-300 disabled:opacity-30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {step < 8 ? (
            <Button onClick={next} className="bg-black text-white hover:bg-neutral-800">
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <div />
          )}
        </div>
      </main>
    </div>
  )
}
