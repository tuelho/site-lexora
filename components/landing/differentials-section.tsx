import { Check, X, Layers } from "lucide-react"

const comparisons = [
  {
    aspect: "Abordagem",
    manual: "Reativo",
    lexora: "Proativo",
  },
  {
    aspect: "Natureza",
    manual: "Operacional",
    lexora: "Inteligente",
  },
  {
    aspect: "Escala",
    manual: "Limitado",
    lexora: "Escalável",
  },
  {
    aspect: "Rastreabilidade",
    manual: "Sem histórico",
    lexora: "Auditável",
  },
  {
    aspect: "Alertas",
    manual: "Manual",
    lexora: "Automático",
  },
  {
    aspect: "Integração",
    manual: "Nenhuma",
    lexora: "APIs & Webhooks",
  },
]

export function DifferentialsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#111827]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B2433] border border-[#1F2937] mb-6">
            <Layers className="h-4 w-4 text-[#3B82F6]" />
            <span className="text-sm text-[#9CA3AF]">Diferenciais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Não é clipping.{" "}
            <span className="text-gradient">É infraestrutura regulatória.</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Veja como LEXORA se diferencia do monitoramento manual tradicional.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1B2433] rounded-2xl border border-[#1F2937] overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-[#1F2937] bg-[#0B0F19]">
              <div className="text-[#9CA3AF] font-medium">Aspecto</div>
              <div className="text-center">
                <span className="text-[#9CA3AF] font-medium">Manual</span>
              </div>
              <div className="text-center">
                <span className="text-white font-medium">LEXORA</span>
              </div>
            </div>

            {/* Table Rows */}
            {comparisons.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 p-6 ${
                  index < comparisons.length - 1 ? "border-b border-[#1F2937]" : ""
                } hover:bg-[#232D3F] transition-colors`}
              >
                <div className="text-white font-medium flex items-center">
                  {row.aspect}
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2 text-[#EF4444]">
                    <X className="h-4 w-4" />
                    <span className="text-sm">{row.manual}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2 text-[#22C55E]">
                    <Check className="h-4 w-4" />
                    <span className="text-sm">{row.lexora}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-8 text-center">
            <p className="text-[#9CA3AF]">
              LEXORA não substitui seu time.{" "}
              <span className="text-white">Potencializa sua capacidade de resposta.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
