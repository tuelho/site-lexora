import {
  Search,
  Bell,
  History,
  Webhook,
  Building2,
  Brain,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Consultas Inteligentes",
    description:
      "Monitoramentos customizados com filtros avançados e operadores booleanos.",
    available: true,
  },
  {
    icon: Bell,
    title: "Alertas em Tempo Real",
    description:
      "Notificações imediatas assim que uma publicação relevante é detectada.",
    available: true,
  },
  {
    icon: History,
    title: "Histórico Auditável",
    description:
      "Rastreabilidade completa de todas as buscas e resultados encontrados.",
    available: true,
  },
  {
    icon: Webhook,
    title: "Webhooks e APIs",
    description:
      "Integração nativa com seus fluxos internos e sistemas existentes.",
    available: true,
  },
  {
    icon: Building2,
    title: "Watchlists por CNPJ",
    description:
      "Monitoramento orientado por entidades específicas do seu interesse.",
    available: false,
    badge: "Em breve",
  },
  {
    icon: Brain,
    title: "Classificação por IA",
    description:
      "Priorização semântica de resultados com inteligência artificial.",
    available: false,
    badge: "Em breve",
  },
]

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="relative py-24 md:py-32 bg-[#111827]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-glow-bottom" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B2433] border border-[#1F2937] mb-6">
            <Zap className="h-4 w-4 text-[#F59E0B]" />
            <span className="text-sm text-[#9CA3AF]">Funcionalidades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Desenvolvido para{" "}
            <span className="text-gradient">ambientes críticos.</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Cada funcionalidade foi pensada para atender às exigências de compliance, jurídico e operações regulatórias.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-[#1B2433] rounded-2xl border p-8 transition-all duration-300 ${
                feature.available
                  ? "border-[#1F2937] hover:border-[#3B82F6]/50"
                  : "border-[#1F2937] border-dashed opacity-80"
              }`}
            >
              {/* Badge */}
              {feature.badge && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs bg-[#8B5CF6]/20 text-[#8B5CF6] rounded-full border border-[#8B5CF6]/30">
                    {feature.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all ${
                  feature.available
                    ? "bg-[#3B82F6]/10 group-hover:bg-[#3B82F6]/20"
                    : "bg-[#9CA3AF]/10"
                }`}
              >
                <feature.icon
                  className={`h-7 w-7 ${
                    feature.available ? "text-[#3B82F6]" : "text-[#9CA3AF]"
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                {feature.description}
              </p>

              {/* Available Indicator */}
              {feature.available && (
                <div className="mt-6 flex items-center gap-2 text-sm text-[#22C55E]">
                  <div className="w-2 h-2 bg-[#22C55E] rounded-full" />
                  Disponível agora
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
