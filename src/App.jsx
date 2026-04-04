import { useState } from 'react'

// APPSEC: Importing data from a separate file keeps your data layer separate from your UI.
// In a real app, this data comes from an API call to your backend — not hardcoded here.
// AppSec lesson: never trust data that comes from the client. Always validate on the server too.
import { questions } from './questions.js'

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

// ─── DomainPicker Component ───────────────────────────────────────────────────
// APPSEC: This is a "presentational" component — it only displays data and fires events.
// It has no idea what happens when a card is clicked. That logic lives in the parent (App).
// This separation is good security design: each piece does one thing and nothing more.
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
            // APPSEC: onClick passes the full domain object up to the parent via onSelect.
            // In a real app, you'd pass only the domain ID, then fetch the full object
            // from the server — never trust the client to send unmodified data.
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
  // APPSEC: useState tracks which question index the user is on.
  // This state only lives in the browser (client-side). If someone refreshes,
  // they lose their progress — that's why real apps persist state to a database.
  const [currentIndex, setCurrentIndex] = useState(0)

  // APPSEC: useState tracks what the user selected. Notice we store the index (a number),
  // not the full answer string. Storing minimal data reduces exposure if state is inspected.
  const [selected, setSelected] = useState(null)

  // APPSEC: tracks whether the answer has been revealed.
  // In a real exam app, the correct answer must NEVER be sent to the browser before
  // the user submits — otherwise anyone can read it from the network tab. We'll fix
  // this when we add the FastAPI backend.
  const [revealed, setRevealed] = useState(false)

  // Filter questions for this domain only
  // APPSEC: .filter() on the client is fine for a static dataset.
  // In production, this filtering happens on the server via a SQL WHERE clause —
  // you never send all 80 questions to the browser just to filter to 10.
  const domainQuestions = questions.filter(q => q.domain === domain.id)

  const current = domainQuestions[currentIndex]
  const isLast = currentIndex === domainQuestions.length - 1

  function handleSelect(index) {
    // APPSEC: Only allow selection before the answer is revealed.
    // This prevents changing your answer after seeing the correct one.
    // On a real exam backend, the server would reject any answer submitted
    // after the reveal endpoint was already called.
    if (!revealed) setSelected(index)
  }

  function handleReveal() {
    // Only reveal if user has selected an answer
    if (selected !== null) setRevealed(true)
  }

  function handleNext() {
    // Reset state for the next question
    setSelected(null)
    setRevealed(false)
    setCurrentIndex(i => i + 1)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">

        {/* Back button */}
        <button
          onClick={onBack}
          className="text-blue-400 hover:text-blue-300 mb-8 flex items-center gap-2"
        >
          ← Back to domains
        </button>

        {/* Domain header */}
        <span className="text-blue-400 font-bold text-sm">Domain {domain.id}</span>
        <h1 className="text-3xl font-bold text-white mt-1 mb-2">{domain.name}</h1>

        {/* Progress indicator */}
        {/* APPSEC: Showing progress (x of y) is good UX, but also reveals how many
            questions exist. In a real adaptive exam, you don't reveal total count. */}
        <p className="text-gray-500 text-sm mb-6">
          Question {currentIndex + 1} of {domainQuestions.length}
        </p>

        {/* Question card */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
          <p className="text-white text-lg font-medium mb-6">{current.question}</p>

          {/* Answer options */}
          <div className="grid grid-cols-1 gap-3">
            {current.options.map((option, i) => {

              // APPSEC: We determine the visual style of each button based on state.
              // Notice we never expose `current.correct` in the DOM until revealed === true.
              // A determined attacker can still read it from the JS bundle — which is why
              // the correct answer must come from the server after submission in production.
              let style = "border-gray-700 text-gray-300 hover:border-blue-500 hover:bg-gray-800"

              if (revealed) {
                if (i === current.correct) {
                  style = "border-green-500 bg-green-900/30 text-green-300" // correct answer
                } else if (i === selected) {
                  style = "border-red-500 bg-red-900/30 text-red-300"       // wrong selection
                }
              } else if (i === selected) {
                style = "border-blue-500 bg-blue-900/30 text-blue-300"      // currently selected
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

          {/* Reveal / Next button */}
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
              // APPSEC: The explanation only renders AFTER the answer is revealed.
              // This pattern — "reveal on demand" — is used in real exam platforms
              // to prevent users from reading explanations before answering.
              !isLast && (
                <button
                  onClick={handleNext}
                  className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
                >
                  Next question →
                </button>
              )
            )}
          </div>

          {/* Explanation — only shown after reveal */}
          {revealed && (
            <div className="mt-6 p-4 bg-gray-800 border border-gray-600 rounded-lg">
              <p className="text-blue-400 font-semibold text-sm mb-1">Explanation</p>
              {/* APPSEC: We render text content using JSX, not dangerouslySetInnerHTML.
                  Never inject raw HTML strings from a database into the DOM — that's
                  a stored XSS vulnerability. Always render as plain text. */}
              <p className="text-gray-300 text-sm leading-relaxed">{current.explanation}</p>
            </div>
          )}

          {/* Completion message */}
          {revealed && isLast && (
            <div className="mt-6 p-4 bg-green-900/30 border border-green-600 rounded-lg text-center">
              <p className="text-green-400 font-semibold">Domain complete!</p>
              <button
                onClick={onBack}
                className="mt-3 px-6 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white font-medium transition-colors"
              >
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
  // APPSEC: This is the top-level state for the entire app.
  // Later, this is where we'll check if a user is authenticated before
  // allowing access to the study content. Right now there's no auth —
  // anyone can access everything. That's the vulnerability we'll fix in Phase 3.
  const [selectedDomain, setSelectedDomain] = useState(null)

  // APPSEC: Conditional rendering based on state.
  // This is client-side "access control" — which is NOT real security.
  // Hiding a component doesn't protect the data behind it.
  // Real access control lives on the server (we'll build that with FastAPI).
  if (selectedDomain) {
    return <StudyScreen domain={selectedDomain} onBack={() => setSelectedDomain(null)} />
  }

  return <DomainPicker onSelect={setSelectedDomain} />
}

export default App