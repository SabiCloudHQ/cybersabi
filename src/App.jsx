import { useState } from 'react'

const domains = [
  { id: 1, name: "Security & Risk Management" },
  { id: 2, name: "Asset Security" },
  { id: 3, name: "Security Architecture" },
  { id: 4, name: "Network Security" },
  { id: 5, name: "Identity & Access Management" },
  { id: 6, name: "Security Assessment & Testing" },
  { id: 7, name: "Security Operations" },
  { id: 8, name: "Software Development Security" },
]

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

function StudyScreen({ domain, onBack }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="text-blue-400 hover:text-blue-300 mb-8 flex items-center gap-2"
        >
          ← Back to domains
        </button>
        <span className="text-blue-400 font-bold text-sm">Domain {domain.id}</span>
        <h1 className="text-3xl font-bold text-white mt-1 mb-6">{domain.name}</h1>
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
          <p className="text-gray-400 text-sm mb-1">Question 1 of 10</p>
          <p className="text-white text-lg font-medium">
            What is the primary goal of information security?
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3">
            {["Prevent all cyberattacks", "Protect confidentiality, integrity, and availability", "Ensure compliance with regulations", "Block unauthorized users"].map((option, i) => (
              <button
                key={i}
                className="text-left px-4 py-3 rounded-lg border border-gray-700 hover:border-blue-500 hover:bg-gray-800 text-gray-300 transition-colors"
              >
                {String.fromCharCode(65 + i)}. {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [selectedDomain, setSelectedDomain] = useState(null)

  if (selectedDomain) {
    return <StudyScreen domain={selectedDomain} onBack={() => setSelectedDomain(null)} />
  }

  return <DomainPicker onSelect={setSelectedDomain} />
}

export default App