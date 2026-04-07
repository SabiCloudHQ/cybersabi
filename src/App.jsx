import { useState, useEffect } from 'react'

// APPSEC: Importing data from a separate file keeps your data layer separate from your UI.
// In a real app, this data comes from an API call to your backend — not hardcoded here.
// AppSec lesson: never trust data that comes from the client. Always validate on the server too.
import { questions } from './questions.js'

// ─── CSRF helper ──────────────────────────────────────────────────────────────
// APPSEC: Fetch a fresh CSRF token from the server on app load.
// The server sets it as a readable cookie AND returns it in the response body.
// We store it in React state and send it as X-CSRF-Token on every POST request.
// Browsers block cross-site requests from setting custom headers —
// so an attacker on evil.com cannot forge this header even if they know the endpoint.
async function fetchCsrfToken() {
  const res = await fetch("http://127.0.0.1:8000/csrf-token", {
    credentials: "include",
  })
  const data = await res.json()
  return data.csrf_token
}

const domains = [
  { id: 1, name: "Security & Risk Management" },
  { id: 2, name: "Asset Security" },
  { id: 3, name: "Security Architecture & Engineering" },
  { id: 4, name: "Network Security" },
  { id: 5, name: "Identity & Access Management" },
  { id: 6, name: "Security Assessment & Testing" },
  { id: 7, name: "Security Operations" },
  { id: 8, name: "Software Development Security" },
]

// ─── LoginScreen Component ────────────────────────────────────────────────────
// APPSEC: This is the authentication gate. Right now if you bypass this
// component client-side (e.g. by editing state in React DevTools), you can
// still access the domain picker. Real protection must live on the server.
function LoginScreen({ onLogin, csrfToken }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // APPSEC: Send the CSRF token as a custom header.
          // Browsers enforce CORS on cross-origin requests — an attacker on evil.com
          // cannot set custom headers, so they can't include this token.
          // The double-submit pattern works because only your own JS can read
          // the csrf_token cookie and include it here.
          "X-CSRF-Token": csrfToken,
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        // APPSEC: Show the server's error message — it's already intentionally vague.
        // Never expose raw server errors or stack traces.
        setError(data.detail || "Login failed")
        return
      }

      onLogin()

    } catch (err) {
      // APPSEC: Generic message — never expose internal error details.
      setError("Could not reach the server. Is the API running?")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-400 mb-2">🛡️ CyberSabi</h1>
          <p className="text-gray-400">Sign in to start studying</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-700 rounded-xl p-8 flex flex-col gap-4">
          <div>
            <label className="text-gray-300 text-sm font-medium block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="student@cybersabi.app"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm font-medium block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-medium transition-colors"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          <p className="text-gray-500 text-xs text-center">
            Demo: student@cybersabi.app / password123
          </p>
        </form>
      </div>
    </div>
  )
}

// ─── DomainPicker Component ───────────────────────────────────────────────────
// APPSEC: Presentational component — displays data and fires events only.
// No logic about what happens when clicked — that lives in the parent (App).
function DomainPicker({ onSelect }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-400 mb-2">🛡️ CyberSabi</h1>
        <p className="text-gray-400">Your CISSP study platform. Built by a SWE, for security engineers.</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Choose a domain to study</h2>
        <div className="grid grid-cols-2 gap-4">
          {domains.map((domain) => (
            // APPSEC: onClick passes the domain object to the parent.
            // In production, pass only the ID and fetch the full object server-side.
            <div
              key={domain.id}
              onClick={() => onSelect(domain)}
              className="border-2 rounded-xl p-5 cursor-pointer hover:scale-105 transition-transform bg-gray-900 border-gray-700 hover:border-blue-500"
            >
              <span className="text-blue-400 font-bold text-sm">Domain {domain.id}</span>
              <p className="text-white font-medium mt-1">{domain.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── StudyScreen Component ────────────────────────────────────────────────────
function StudyScreen({ domain, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)

  const domainQuestions = questions.filter(q => q.domain === domain.id)
  const current = domainQuestions[currentIndex]
  const isLast = currentIndex === domainQuestions.length - 1

  function handleSelect(index) {
    if (!revealed) setSelected(index)
  }

  function handleReveal() {
    if (selected !== null) setRevealed(true)
  }

  function handleNext() {
    setSelected(null)
    setRevealed(false)
    setCurrentIndex(i => i + 1)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <button onClick={onBack} className="text-blue-400 hover:text-blue-300 mb-8 flex items-center gap-2">
          ← Back to domains
        </button>

        <span className="text-blue-400 font-bold text-sm">Domain {domain.id}</span>
        <h1 className="text-3xl font-bold text-white mt-1 mb-2">{domain.name}</h1>
        <p className="text-gray-500 text-sm mb-6">Question {currentIndex + 1} of {domainQuestions.length}</p>

        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
          <p className="text-white text-lg font-medium mb-6">{current.question}</p>

          <div className="grid grid-cols-1 gap-3">
            {current.options.map((option, i) => {
              let style = "border-gray-700 text-gray-300 hover:border-blue-500 hover:bg-gray-800"
              if (revealed) {
                if (i === current.correct) style = "border-green-500 bg-green-900/30 text-green-300"
                else if (i === selected) style = "border-red-500 bg-red-900/30 text-red-300"
              } else if (i === selected) {
                style = "border-blue-500 bg-blue-900/30 text-blue-300"
              }
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`text-left px-4 py-3 rounded-lg border transition-colors ${style}`}
                >
                  {String.fromCharCode(65 + i)}. {option}
                </button>
              )
            })}
          </div>

          <div className="mt-6 flex gap-3">
            {!revealed ? (
              <button
                onClick={handleReveal}
                disabled={selected === null}
                className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium transition-colors"
              >
                Check answer
              </button>
            ) : (
              !isLast && (
                <button onClick={handleNext} className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors">
                  Next question →
                </button>
              )
            )}
          </div>

          {revealed && (
            <div className="mt-6 p-4 bg-gray-800 border border-gray-600 rounded-lg">
              <p className="text-blue-400 font-semibold text-sm mb-1">Explanation</p>
              {/* APPSEC: Render as plain text, never dangerouslySetInnerHTML — that's XSS */}
              <p className="text-gray-300 text-sm leading-relaxed">{current.explanation}</p>
            </div>
          )}

          {revealed && isLast && (
            <div className="mt-6 p-4 bg-green-900/30 border border-green-600 rounded-lg text-center">
              <p className="text-green-400 font-semibold">Domain complete!</p>
              <button onClick={onBack} className="mt-3 px-6 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white font-medium transition-colors">
                Back to domains
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── App (Root Component) ─────────────────────────────────────────────────────
function App() {
  // null = still checking, false = not logged in, true = logged in
  const [loggedIn, setLoggedIn] = useState(null)
  const [selectedDomain, setSelectedDomain] = useState(null)
  // APPSEC: CSRF token stored in React state — not localStorage.
  // It's fetched fresh on every app load and passed down to any component
  // that makes state-changing requests.
  const [csrfToken, setCsrfToken] = useState(null)

  useEffect(() => {
    // APPSEC: Fetch CSRF token and check auth session in parallel on app load.
    // Both are needed before showing any UI — we wait for both to complete.
    Promise.all([
      fetchCsrfToken(),
      fetch("http://127.0.0.1:8000/me", { credentials: "include" })
    ]).then(([token, meRes]) => {
      setCsrfToken(token)
      // APPSEC: /me returning 200 means the httpOnly cookie is valid.
      // We don't need to read the cookie ourselves — the server confirms it.
      setLoggedIn(meRes.ok)
    }).catch(() => {
      setLoggedIn(false)
    })
  }, [])

  // Still loading — avoid flashing the login screen
  if (loggedIn === null) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }

  // APPSEC: Client-side auth check — NOT real security.
  // This just controls which component renders.
  // Real access control lives on the server via the httpOnly cookie check.
  if (!loggedIn) {
    return <LoginScreen onLogin={() => setLoggedIn(true)} csrfToken={csrfToken} />
  }

  if (selectedDomain) {
    return <StudyScreen domain={selectedDomain} onBack={() => setSelectedDomain(null)} />
  }

  return <DomainPicker onSelect={setSelectedDomain} />
}

export default App
