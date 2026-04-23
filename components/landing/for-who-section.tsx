import { Scale, ShieldCheck, Building, FileSearch, Landmark, Users } from "lucide-react"

const segments = [
  {
    icon: Scale,
    title: "Escritórios Jurídicos",
    description:
      "Monitore publicações relevantes para seus clientes e casos em andamento.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Corporativo",
    description:
      "Mantenha-se à frente de mudanças regulatórias que impactam sua organização.",
  },
  {
    icon: Building,
    title: "Fornecedores do Governo",
    description:
      "Acompanhe licitações, contratos e editais de interesse em tempo real.",
  },
  {
    icon: FileSearch,
    title: "Consultorias Regulatórias",
    description:
      "Ofereça inteligência regulatória como serviço diferenciado aos seus clientes.",
  },
  {
    icon: Landmark,
    title: "Órgãos Públicos",
    description:
      "Monitore publicações de interesse institucional com rastreabilidade completa.",
  },
]

export function ForWhoSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B2433] border border-[#1F2937] mb-6">
            <Users className="h-4 w-4 text-[#22C55E]" />
            <span className="text-sm text-[#9CA3AF]">Para Quem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Feito para quem{" "}
            <span className="text-gradient-green">não pode perder uma publicação.</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            LEXORA foi desenvolvido para profissionais e organizações onde a informação oficial é crítica para o negócio.
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="group relative bg-[#1B2433] rounded-2xl border border-[#1F2937] p-8 hover:border-[#22C55E]/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#22C55E]/10 flex items-center justify-center mb-6 group-hover:bg-[#22C55E]/20 transition-colors">
                <segment.icon className="h-7 w-7 text-[#22C55E]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {segment.title}
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                {segment.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="group relative bg-gradient-to-br from-[#3B82F6]/10 to-[#8B5CF6]/10 rounded-2xl border border-[#3B82F6]/30 p-8 flex flex-col justify-center items-center text-center hover:border-[#3B82F6]/50 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">
              Seu segmento não está aqui?
            </h3>
            <p className="text-[#9CA3AF] mb-6">
              Converse conosco sobre como LEXORA pode atender sua necessidade específica.
            </p>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-lg font-medium transition-colors"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
