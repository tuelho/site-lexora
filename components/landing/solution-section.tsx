import { Search, RefreshCw, Bell, History, Users, Brain, CheckCircle2 } from "lucide-react"

const features = [
  {
    icon: Search,
    text: "Buscas automatizadas por palavras-chave",
  },
  {
    icon: RefreshCw,
    text: "Recorrência configurável",
  },
  {
    icon: Bell,
    text: "Alertas multicanal",
  },
  {
    icon: History,
    text: "Histórico e rastreabilidade",
  },
  {
    icon: Users,
    text: "Watchlists e inteligência regulatória",
    badge: "Roadmap",
  },
  {
    icon: Brain,
    text: "Classificação por IA",
    badge: "Roadmap",
  },
]

export function SolutionSection() {
  return (
    <section id="solucao" className="relative py-24 md:py-32 bg-[#111827]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B2433] border border-[#1F2937] mb-6">
              <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
              <span className="text-sm text-[#9CA3AF]">A Solução</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Uma nova camada de{" "}
              <span className="text-gradient">inteligência</span> sobre o Diário Oficial.
            </h2>

            <p className="text-lg text-[#9CA3AF] mb-10 max-w-lg">
              LEXORA transforma a forma como você monitora publicações oficiais, automatizando buscas e entregando insights acionáveis em tempo real.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-[#1B2433] rounded-xl border border-[#1F2937] hover:border-[#3B82F6]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-[#3B82F6]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white">{feature.text}</span>
                    {feature.badge && (
                      <span className="px-2 py-0.5 text-xs bg-[#8B5CF6]/20 text-[#8B5CF6] rounded-full">
                        {feature.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Mockup */}
          <div className="relative">
            <div className="bg-[#1B2433] rounded-2xl border border-[#1F2937] overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1F2937]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-[#9CA3AF]">LEXORA Dashboard</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                {/* Search Bar */}
                <div className="flex items-center gap-3 p-3 bg-[#111827] rounded-lg border border-[#1F2937] mb-6">
                  <Search className="h-5 w-5 text-[#9CA3AF]" />
                  <span className="text-[#9CA3AF]">Buscar publicações...</span>
                </div>

                {/* Active Monitors */}
                <div className="mb-6">
                  <p className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-3">
                    Monitoramentos Ativos
                  </p>
                  <div className="space-y-2">
                    {[
                      { term: "CNPJ 12.345.678/0001-90", status: "active", matches: 3 },
                      { term: "Licitação + Tecnologia", status: "active", matches: 12 },
                      { term: "Instrução Normativa RFB", status: "active", matches: 5 },
                    ].map((monitor, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-[#0B0F19] rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
                          <span className="text-sm text-white">{monitor.term}</span>
                        </div>
                        <span className="text-xs text-[#3B82F6] bg-[#3B82F6]/10 px-2 py-1 rounded">
                          {monitor.matches} correspondências
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="bg-[#111827] rounded-lg p-4">
                  <div className="flex items-end justify-between h-32 gap-2">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-[#3B82F6] to-[#8B5CF6] rounded-t opacity-60 hover:opacity-100 transition-opacity"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-3">
                    <span className="text-xs text-[#9CA3AF]">Seg</span>
                    <span className="text-xs text-[#9CA3AF]">Ter</span>
                    <span className="text-xs text-[#9CA3AF]">Qua</span>
                    <span className="text-xs text-[#9CA3AF]">Qui</span>
                    <span className="text-xs text-[#9CA3AF]">Sex</span>
                    <span className="text-xs text-[#9CA3AF]">Sáb</span>
                    <span className="text-xs text-[#9CA3AF]">Dom</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#3B82F6]/10 to-[#8B5CF6]/10 rounded-3xl blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
