const domains = [
  { id: 1, name: "Security & Risk Management", color: "bg-blue-100 border-blue-400" },
  { id: 2, name: "Asset Security", color: "bg-purple-100 border-purple-400" },
  { id: 3, name: "Security Architecture", color: "bg-green-100 border-green-400" },
  { id: 4, name: "Network Security", color: "bg-yellow-100 border-yellow-400" },
  { id: 5, name: "Identity & Access Management", color: "bg-red-100 border-red-400" },
  { id: 6, name: "Security Assessment & Testing", color: "bg-orange-100 border-orange-400" },
  { id: 7, name: "Security Operations", color: "bg-teal-100 border-teal-400" },
  { id: 8, name: "Software Development Security", color: "bg-indigo-100 border-indigo-400" },
]

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-400 mb-2">🛡️ CyberSabi</h1>
        <p className="text-gray-400">Your CISSP study platform. Built by a SWE, for security engineers.</p>
      </div>

      {/* Domain picker */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">Choose a domain to study</h2>
        <div className="grid grid-cols-2 gap-4">
          {domains.map((domain) => (
            <div
              key={domain.id}
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

export default App