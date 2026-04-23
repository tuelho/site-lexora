import { AlertTriangle, Clock, Scale, FileWarning } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Perda de prazos críticos",
    description:
      "Publicações não monitoradas podem gerar prejuízos operacionais e jurídicos irreversíveis.",
  },
  {
    icon: AlertTriangle,
    title: "Risco regulatório",
    description:
      "Mudanças normativas e atos oficiais podem passar despercebidos, expondo sua organização a sanções.",
  },
  {
    icon: FileWarning,
    title: "Monitoramento manual não escala",
    description:
      "Planilhas e leitura humana não acompanham o volume e a velocidade das publicações oficiais.",
  },
]

export function ProblemSection() {
  return (
    <section id="problema" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B2433] border border-[#1F2937] mb-6">
            <Scale className="h-4 w-4 text-[#EF4444]" />
            <span className="text-sm text-[#9CA3AF]">O Desafio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            O risco não está em não buscar.
            <br />
            <span className="text-[#EF4444]">Está em descobrir tarde demais.</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Organizações perdem oportunidades e enfrentam riscos diariamente por não terem visibilidade em tempo real sobre o que é publicado.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-[#1B2433] rounded-2xl border border-[#1F2937] p-8 hover:border-[#EF4444]/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#EF4444]/10 flex items-center justify-center mb-6 group-hover:bg-[#EF4444]/20 transition-colors">
                <problem.icon className="h-7 w-7 text-[#EF4444]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                {problem.description}
              </p>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#EF4444]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-[#1F2937]">
          {[
            { value: "2.500+", label: "Publicações/dia no DOU" },
            { value: "72h", label: "Prazo médio de resposta" },
            { value: "R$ 50K+", label: "Custo médio de uma multa" },
            { value: "85%", label: "Empresas sem monitoramento" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-[#9CA3AF]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
