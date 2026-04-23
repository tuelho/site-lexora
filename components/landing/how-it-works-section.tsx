import { Settings, Radar, BellRing, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "Cadastre consultas",
    description:
      "Configure palavras-chave, filtros avançados e defina a recorrência do monitoramento.",
  },
  {
    number: "02",
    icon: Radar,
    title: "Lexora monitora automaticamente",
    description:
      "Buscas recorrentes inteligentes detectam novas ocorrências em tempo real no DOU.",
  },
  {
    number: "03",
    icon: BellRing,
    title: "Receba alertas acionáveis",
    description:
      "Notificações imediatas via Email, WhatsApp e integrações com seus sistemas.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B2433] border border-[#1F2937] mb-6">
            <Radar className="h-4 w-4 text-[#3B82F6]" />
            <span className="text-sm text-[#9CA3AF]">Como Funciona</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Configure uma vez.{" "}
            <span className="text-gradient">Monitore continuamente.</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Em três passos simples, automatize completamente seu monitoramento regulatório.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Card */}
              <div className="bg-[#1B2433] rounded-2xl border border-[#1F2937] p-8 hover:border-[#3B82F6]/50 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-[#1F2937] group-hover:text-[#3B82F6]/20 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[#9CA3AF] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow Connector (mobile hidden) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-[#0B0F19] border border-[#1F2937] flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-[#3B82F6]" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[#9CA3AF] mb-4">
            Pronto para automatizar seu monitoramento?
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-[#60A5FA] transition-colors font-medium"
          >
            Ver planos disponíveis
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
