import { Shield, Server, Clock, CheckCircle } from "lucide-react"

const credibilityItems = [
  {
    icon: Shield,
    title: "Segurança e Auditoria",
    description:
      "Logs completos, criptografia em trânsito e em repouso, e controles de acesso granulares.",
  },
  {
    icon: Server,
    title: "Arquitetura Escalável",
    description:
      "Infraestrutura cloud-native preparada para processar milhões de publicações.",
  },
  {
    icon: Clock,
    title: "SLA e Disponibilidade",
    description:
      "99.9% de uptime garantido com monitoramento 24/7 e suporte técnico dedicado.",
  },
  {
    icon: CheckCircle,
    title: "Compliance by Design",
    description:
      "Desenvolvido com privacidade e conformidade regulatória desde a concepção.",
  },
]

export function CredibilitySection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B2433] border border-[#1F2937] mb-6">
            <Shield className="h-4 w-4 text-[#3B82F6]" />
            <span className="text-sm text-[#9CA3AF]">Confiança</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pensado para ambientes onde{" "}
            <span className="text-gradient">falhar custa caro.</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Infraestrutura enterprise-grade para organizações que exigem máxima confiabilidade.
          </p>
        </div>

        {/* Credibility Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {credibilityItems.map((item, index) => (
            <div
              key={index}
              className="group bg-[#1B2433] rounded-2xl border border-[#1F2937] p-8 hover:border-[#3B82F6]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center shrink-0 group-hover:bg-[#3B82F6]/20 transition-colors">
                  <item.icon className="h-7 w-7 text-[#3B82F6]" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges / Logos Placeholder */}
        <div className="border-t border-[#1F2937] pt-12">
          <p className="text-center text-sm text-[#9CA3AF] mb-8">
            Em breve: logos de clientes e parceiros
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-30">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-32 h-12 bg-[#1B2433] rounded-lg flex items-center justify-center"
              >
                <span className="text-[#9CA3AF] text-sm">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
