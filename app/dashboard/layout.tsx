"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"

interface Admin { name: string; email: string }

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router   = useRouter()
  const pathname = usePathname()
  const isAuth   = pathname === "/dashboard/login" || pathname === "/dashboard/signup"

  const [admin, setAdmin]       = useState<Admin | null>(null)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    if (isAuth) { setChecking(false); return }
    fetch("/api/auth/me")
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(d => setAdmin(d.admin))
      .catch(() => router.push("/dashboard/login"))
      .finally(() => setChecking(false))
  }, [pathname])

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/dashboard/login")
  }

  // Auth pages render without shell
  if (isAuth) return <>{children}</>

  if (checking) return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-400 text-sm">Verifying session…</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-extrabold text-gray-900 leading-none">Admin Dashboard</p>
              <p className="text-xs text-gray-400">Hon. Dozie Nwankwo Campaign</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-1">
            <a href="/dashboard" className={`px-4 py-2 rounded-lg text-sm font-medium transition ${pathname === "/dashboard" ? "bg-red-50 text-red-700" : "text-slate-600 hover:bg-slate-100"}`}>
              Volunteers
            </a>
            <a href="/" target="_blank" className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              View Site
            </a>
          </nav>

          {/* Admin info + logout */}
          {admin && (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{admin.name.charAt(0).toUpperCase()}</span>
                </div>
                <div className="text-right hidden lg:block">
                  <p className="text-xs font-semibold text-gray-800 leading-none">{admin.name}</p>
                  <p className="text-xs text-gray-400">{admin.email}</p>
                </div>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1">{children}</main>
    </div>
  )
}
