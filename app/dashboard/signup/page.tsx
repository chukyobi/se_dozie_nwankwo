"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function SignupPage() {
  const router = useRouter()
  const [form, setForm]     = useState({ name: "", email: "", password: "", confirm: "" })
  const [error, setError]   = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (form.password !== form.confirm) { setError("Passwords do not match."); return }
    if (form.password.length < 8) { setError("Password must be at least 8 characters."); return }

    setLoading(true)
    try {
      const res  = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || "Signup failed."); return }
      router.push("/dashboard")
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center p-4">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 shadow-2xl mb-5 ring-4 ring-red-900/30">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Create account</h1>
          <p className="text-slate-400 mt-1.5 text-sm">Set up your admin access</p>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          {error && (
            <div className="mb-5 flex items-center gap-2.5 bg-red-500/15 border border-red-500/30 text-red-300 text-sm px-4 py-3 rounded-xl">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
              <input
                name="name" type="text" required
                value={form.name} onChange={handleChange}
                placeholder="e.g. Campaign Manager"
                className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Email address</label>
              <input
                name="email" type="email" required
                value={form.email} onChange={handleChange}
                placeholder="admin@dozienwankwo.org"
                className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
              <input
                name="password" type="password" required
                value={form.password} onChange={handleChange}
                placeholder="Min. 8 characters"
                className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Confirm Password</label>
              <input
                name="confirm" type="password" required
                value={form.confirm} onChange={handleChange}
                placeholder="Repeat password"
                className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition text-sm"
              />
            </div>

            {/* Password strength hints */}
            {form.password && (
              <ul className="grid grid-cols-2 gap-1 text-xs">
                {[
                  { label: "8+ characters", ok: form.password.length >= 8 },
                  { label: "Passwords match", ok: form.password === form.confirm && form.confirm.length > 0 },
                ].map(({ label, ok }) => (
                  <li key={label} className={`flex items-center gap-1.5 ${ok ? "text-green-400" : "text-slate-500"}`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {ok ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />}
                    </svg>
                    {label}
                  </li>
                ))}
              </ul>
            )}

            <button
              type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-red-900/30 transition-all active:scale-95 text-sm mt-1"
            >
              {loading ? (
                <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Creating account…</>
              ) : (
                <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Create Account</>
              )}
            </button>
          </form>

          <p className="text-center text-slate-500 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/dashboard/login" className="text-red-400 hover:text-red-300 font-semibold transition">
              Sign in
            </Link>
          </p>
        </div>

        <p className="text-center text-slate-600 text-xs mt-6">
          © {new Date().getFullYear()} Hon. Dozie Nwankwo Campaign. Admin portal.
        </p>
      </div>
    </div>
  )
}
