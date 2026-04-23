import { Rocket, Eye, Brain, Puzzle, Globe } from "lucide-react"

const roadmapItems = [
  {
    icon: Eye,
    title: "Monitoramento DOU",
    status: "active",
    description: "Buscas automatizadas e alertas em tempo real.",
  },
  {
    icon: Rocket,
    title: "Watchlists",
    status: "next",
    description: "Monitoramento por CNPJs e entidades.",
  },
  {
    icon: Brain,
    title: "IA Semântica",
    status: "planned",
    description: "Classificação inteligente de publicações.",
  },
  {
    icon: Puzzle,
    title: "APIs Regulatórias",
    status: "planned",
    description: "Integrações programáticas avançadas.",
  },
  {
    icon: Globe,
    title: "Regulatory Intelligence Platform",
    status: "vision",
    description: "Ecossistema completo de inteligência.",
  },
]

export function VisionSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B2433] border border-[#1F2937] mb-6">
            <Rocket className="h-4 w-4 text-[#8B5CF6]" />
            <span className="text-sm text-[#9CA3AF]">Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Hoje monitoramento.{" "}
            <span className="text-gradient">Amanhã inteligência regulatória.</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Nossa visão é construir a plataforma definitiva de inteligência regulatória para o Brasil.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6] to-[#1F2937]" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  } pl-20 md:pl-0`}
                >
                  <div
                    className={`inline-block bg-[#1B2433] rounded-2xl border border-[#1F2937] p-6 ${
                      item.status === "active" ? "border-[#3B82F6]/50" : ""
                    } ${item.status === "vision" ? "border-[#8B5CF6]/50" : ""}`}
                  >
                    {/* Status Badge */}
                    <div className="mb-3">
                      {item.status === "active" && (
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#22C55E]/20 text-[#22C55E] text-xs rounded-full">
                          <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-pulse" />
                          Disponível
                        </span>
                      )}
                      {item.status === "next" && (
                        <span className="px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] text-xs rounded-full">
                          Próximo
                        </span>
                      )}
                      {item.status === "planned" && (
                        <span className="px-3 py-1 bg-[#8B5CF6]/20 text-[#8B5CF6] text-xs rounded-full">
                          Planejado
                        </span>
                      )}
                      {item.status === "vision" && (
                        <span className="px-3 py-1 bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 text-white text-xs rounded-full">
                          Visão
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#9CA3AF]">{item.description}</p>
                  </div>
                </div>

                {/* Icon Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-[#0B0F19] border-4 border-[#1B2433] flex items-center justify-center z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.status === "active"
                        ? "bg-[#3B82F6]"
                        : item.status === "next"
                        ? "bg-[#3B82F6]/50"
                        : item.status === "vision"
                        ? "bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6]"
                        : "bg-[#8B5CF6]/30"
                    }`}
                  >
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
