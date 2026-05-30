"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Users, Search, Download, RefreshCw, MapPin, Phone, Mail,
  Calendar, Filter, ChevronDown, ChevronUp, Shield, LogIn,
  TrendingUp, Award, Eye, X, CheckCircle2
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────
interface Volunteer {
  id: number
  full_name: string
  email: string | null
  phone_no: string
  town: string
  lga: string
  state_of_origin: string
  interests: string[]
  created_at: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const INTEREST_COLORS: Record<string, string> = {
  "Media and Publicity":      "bg-purple-100 text-purple-700 border-purple-200",
  "Campaign Funding":         "bg-amber-100 text-amber-700 border-amber-200",
  "Grass Root Mobilization":  "bg-green-100 text-green-700 border-green-200",
  "Logistics and Operations": "bg-blue-100 text-blue-700 border-blue-200",
  "Data Entry and Analysis":  "bg-rose-100 text-rose-700 border-rose-200",
}

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-NG", {
    day: "2-digit", month: "short", year: "numeric",
  })

function exportCSV(volunteers: Volunteer[]) {
  const headers = ["ID","Full Name","Email","Phone","Town","LGA","State","Interests","Registered"]
  const rows = volunteers.map(v => [
    v.id, `"${v.full_name}"`, v.email || "", v.phone_no,
    v.town, v.lga, v.state_of_origin,
    `"${v.interests.join("; ")}"`, fmt(v.created_at),
  ])
  const csv = [headers, ...rows].map(r => r.join(",")).join("\n")
  const blob = new Blob([csv], { type: "text/csv" })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement("a"); a.href = url
  a.download = `volunteers_${new Date().toISOString().split("T")[0]}.csv`
  a.click(); URL.revokeObjectURL(url)
}

// ─── Login Screen ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: (secret: string) => void }) {
  const [secret, setSecret] = useState("")
  const [error, setError]   = useState("")

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!secret.trim()) { setError("Please enter the access key."); return }
    onLogin(secret.trim())
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo / Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 shadow-2xl mb-4">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Volunteer Dashboard</h1>
          <p className="text-slate-400 mt-1 text-sm">Hon. Dozie Nwankwo Campaign</p>
        </div>

        <form onSubmit={submit} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Admin Access Key</label>
            <input
              type="password"
              value={secret}
              onChange={e => { setSecret(e.target.value); setError("") }}
              placeholder="Enter your dashboard key..."
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-xl shadow-lg transition-all active:scale-95"
          >
            <LogIn className="w-4 h-4" /> Access Dashboard
          </button>
        </form>
      </div>
    </div>
  )
}

// ─── Detail Modal ─────────────────────────────────────────────────────────────
function VolunteerModal({ v, onClose }: { v: Volunteer; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-5" onClick={e => e.stopPropagation()}>
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{v.full_name}</h2>
            <p className="text-sm text-gray-500">ID #{v.id} · Registered {fmt(v.created_at)}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 transition"><X className="w-5 h-5 text-gray-500" /></button>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          {[
            { icon: Phone,  label: "Phone",  val: v.phone_no },
            { icon: Mail,   label: "Email",  val: v.email || "Not provided" },
            { icon: MapPin, label: "Town",   val: v.town },
            { icon: MapPin, label: "LGA",    val: v.lga },
            { icon: MapPin, label: "State",  val: v.state_of_origin },
          ].map(({ icon: Icon, label, val }) => (
            <div key={label} className="bg-gray-50 rounded-xl p-3">
              <div className="flex items-center gap-1.5 text-gray-400 mb-1">
                <Icon className="w-3.5 h-3.5" /><span className="text-xs uppercase tracking-wide">{label}</span>
              </div>
              <p className="font-medium text-gray-800 truncate">{val}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Areas of Interest</p>
          <div className="flex flex-wrap gap-2">
            {v.interests.map(i => (
              <span key={i} className={`px-3 py-1 text-xs font-semibold rounded-full border ${INTEREST_COLORS[i] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>{i}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function VolunteerDashboard() {
  const [secret, setSecret]         = useState<string | null>(null)
  const [volunteers, setVolunteers] = useState<Volunteer[]>([])
  const [loading, setLoading]       = useState(false)
  const [authError, setAuthError]   = useState(false)
  const [error, setError]           = useState<string | null>(null)

  const [search, setSearch]         = useState("")
  const [stateFilter, setStateFilter] = useState("")
  const [interestFilter, setInterestFilter] = useState("")
  const [sortField, setSortField]   = useState<"created_at" | "full_name">("created_at")
  const [sortAsc, setSortAsc]       = useState(false)
  const [selected, setSelected]     = useState<Volunteer | null>(null)

  const fetchVolunteers = useCallback(async (key: string) => {
    setLoading(true); setError(null); setAuthError(false)
    try {
      const res = await fetch(`/api/volunteers?secret=${encodeURIComponent(key)}`)
      if (res.status === 401) { setAuthError(true); setSecret(null); return }
      if (!res.ok) throw new Error("Failed to load")
      const data = await res.json()
      setVolunteers(data.volunteers ?? [])
    } catch {
      setError("Could not load volunteers. Check your connection.")
    } finally {
      setLoading(false)
    }
  }, [])

  const handleLogin = (key: string) => {
    setSecret(key)
    fetchVolunteers(key)
  }

  // ── Filter + Sort ────────────────────────────────────────────────────────
  const allStates    = [...new Set(volunteers.map(v => v.state_of_origin))].sort()
  const allInterests = [...new Set(volunteers.flatMap(v => v.interests))].sort()

  const filtered = volunteers
    .filter(v => {
      const q = search.toLowerCase()
      return (
        (!q || v.full_name.toLowerCase().includes(q) || v.phone_no.includes(q) || (v.email ?? "").toLowerCase().includes(q) || v.town.toLowerCase().includes(q)) &&
        (!stateFilter    || v.state_of_origin === stateFilter) &&
        (!interestFilter || v.interests.includes(interestFilter))
      )
    })
    .sort((a, b) => {
      const va = sortField === "created_at" ? a.created_at : a.full_name
      const vb = sortField === "created_at" ? b.created_at : b.full_name
      return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va)
    })

  // ── Stats ─────────────────────────────────────────────────────────────────
  const topState    = allStates.reduce<string>("", (top, s) => {
    const cnt = volunteers.filter(v => v.state_of_origin === s).length
    const best = volunteers.filter(v => v.state_of_origin === top).length
    return cnt > best ? s : top
  })
  const topInterest = allInterests.reduce<string>("", (top, i) => {
    const cnt = volunteers.filter(v => v.interests.includes(i)).length
    const best = volunteers.filter(v => v.interests.includes(top)).length
    return cnt > best ? i : top
  })

  const toggleSort = (field: "created_at" | "full_name") => {
    if (sortField === field) setSortAsc(a => !a)
    else { setSortField(field); setSortAsc(true) }
  }

  if (!secret) return (
    <>
      {authError && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-xl shadow-xl text-sm font-medium z-50">
          ⚠️ Invalid access key. Please try again.
        </div>
      )}
      <LoginScreen onLogin={handleLogin} />
    </>
  )

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-gray-900 leading-none">Volunteer Dashboard</h1>
              <p className="text-xs text-gray-400">Hon. Dozie Nwankwo Campaign</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchVolunteers(secret)}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} /> Refresh
            </button>
            <button
              onClick={() => exportCSV(filtered)}
              disabled={filtered.length === 0}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl transition shadow-sm disabled:opacity-40"
            >
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* ── Stat Cards ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Users,       label: "Total Volunteers", value: volunteers.length,                   color: "from-red-500 to-red-700" },
            { icon: TrendingUp,  label: "Filtered Results", value: filtered.length,                     color: "from-blue-500 to-blue-700" },
            { icon: MapPin,      label: "Top State",        value: topState    || "—",                  color: "from-emerald-500 to-emerald-700" },
            { icon: Award,       label: "Top Interest",     value: topInterest ? topInterest.split(" ")[0]+"…" : "—", color: "from-purple-500 to-purple-700" },
          ].map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-400 uppercase tracking-wide">{label}</p>
                <p className="text-2xl font-extrabold text-slate-800 truncate">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Filters ────────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
            <Filter className="w-4 h-4" /> Filters & Search
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search name, phone, email…"
                className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              />
            </div>
            <select
              value={stateFilter}
              onChange={e => setStateFilter(e.target.value)}
              className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            >
              <option value="">All States</option>
              {allStates.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <select
              value={interestFilter}
              onChange={e => setInterestFilter(e.target.value)}
              className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            >
              <option value="">All Interests</option>
              {allInterests.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
          {(search || stateFilter || interestFilter) && (
            <button
              onClick={() => { setSearch(""); setStateFilter(""); setInterestFilter("") }}
              className="text-xs text-red-600 hover:underline flex items-center gap-1"
            >
              <X className="w-3 h-3" /> Clear all filters
            </button>
          )}
        </div>

        {/* ── Table ──────────────────────────────────────────────────── */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4 text-slate-400">
              <RefreshCw className="w-10 h-10 animate-spin text-red-400" />
              <p className="text-sm font-medium">Loading volunteers…</p>
            </div>
          ) : error ? (
            <div className="text-center py-24 text-red-500 text-sm">{error}</div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 gap-3 text-slate-400">
              <Users className="w-12 h-12 text-slate-200" />
              <p className="font-medium">No volunteers found</p>
              <p className="text-xs">Try adjusting your filters</p>
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      {[
                        { label: "#",        field: null },
                        { label: "Name",     field: "full_name" as const },
                        { label: "Contact",  field: null },
                        { label: "Location", field: null },
                        { label: "Interests",field: null },
                        { label: "Registered", field: "created_at" as const },
                        { label: "",         field: null },
                      ].map(({ label, field }) => (
                        <th
                          key={label}
                          onClick={() => field && toggleSort(field)}
                          className={`px-4 py-3 text-left font-semibold text-slate-500 uppercase tracking-wide text-xs ${field ? "cursor-pointer hover:text-slate-800 select-none" : ""}`}
                        >
                          <span className="flex items-center gap-1">
                            {label}
                            {field && sortField === field && (sortAsc ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />)}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {filtered.map((v, idx) => (
                      <tr key={v.id} className="hover:bg-slate-50/80 transition group">
                        <td className="px-4 py-3 text-slate-400 font-mono text-xs">{idx + 1}</td>
                        <td className="px-4 py-3">
                          <p className="font-semibold text-slate-800">{v.full_name}</p>
                        </td>
                        <td className="px-4 py-3 space-y-0.5">
                          <p className="text-slate-600 flex items-center gap-1.5"><Phone className="w-3 h-3 text-slate-400" />{v.phone_no}</p>
                          {v.email && <p className="text-slate-400 text-xs flex items-center gap-1.5"><Mail className="w-3 h-3" />{v.email}</p>}
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-slate-700 flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-400" />{v.town}, {v.lga}</p>
                          <p className="text-slate-400 text-xs mt-0.5">{v.state_of_origin}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {v.interests.map(i => (
                              <span key={i} className={`px-2 py-0.5 text-xs font-medium rounded-full border ${INTEREST_COLORS[i] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>
                                {i.split(" ")[0]}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-slate-400 text-xs whitespace-nowrap">
                          <div className="flex items-center gap-1"><Calendar className="w-3 h-3" />{fmt(v.created_at)}</div>
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => setSelected(v)}
                            className="opacity-0 group-hover:opacity-100 flex items-center gap-1 text-xs text-red-600 hover:underline transition"
                          >
                            <Eye className="w-3.5 h-3.5" /> View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden divide-y divide-slate-100">
                {filtered.map(v => (
                  <div key={v.id} className="p-4 space-y-3" onClick={() => setSelected(v)}>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-slate-800">{v.full_name}</p>
                      <span className="text-xs text-slate-400">{fmt(v.created_at)}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1"><Phone className="w-3 h-3" />{v.phone_no}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{v.state_of_origin}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {v.interests.map(i => (
                        <span key={i} className={`px-2 py-0.5 text-xs font-medium rounded-full border ${INTEREST_COLORS[i] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}>
                          {i.split(" ")[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 text-xs text-slate-400">
                Showing <span className="font-semibold text-slate-600">{filtered.length}</span> of <span className="font-semibold text-slate-600">{volunteers.length}</span> volunteers
              </div>
            </>
          )}
        </div>
      </main>

      {/* ── Detail Modal ────────────────────────────────────────────── */}
      {selected && <VolunteerModal v={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
