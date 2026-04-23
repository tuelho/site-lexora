import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Start",
    description: "Para times pequenos iniciando o monitoramento.",
    price: "R$ 497",
    period: "/mês",
    queries: "Até 1.000 consultas",
    features: [
      "Monitoramento recorrente",
      "Alertas por email",
      "Histórico de 30 dias",
      "Suporte por email",
    ],
    cta: "Começar agora",
    popular: false,
  },
  {
    name: "Professional",
    description: "Para equipes que precisam escalar.",
    price: "R$ 1.490",
    period: "/mês",
    queries: "Até 5.000 consultas",
    features: [
      "Tudo do Start",
      "Alertas WhatsApp",
      "Histórico de 90 dias",
      "Webhooks",
      "Suporte prioritário",
    ],
    cta: "Começar agora",
    popular: true,
  },
  {
    name: "Business",
    description: "Para operações complexas de compliance.",
    price: "R$ 3.900",
    period: "/mês",
    queries: "Até 20.000 consultas",
    features: [
      "Tudo do Professional",
      "APIs dedicadas",
      "Histórico ilimitado",
      "Multi-usuários",
      "Onboarding dedicado",
      "SLA garantido",
    ],
    cta: "Começar agora",
    popular: false,
  },
]

const enterprise = {
  name: "Enterprise",
  description: "Para grandes organizações com necessidades específicas.",
  features: [
    "Volume customizado",
    "Integrações sob medida",
    "Suporte 24/7",
    "Contrato personalizado",
    "Account Manager dedicado",
  ],
}

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-[#111827]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-glow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B2433] border border-[#1F2937] mb-6">
            <Sparkles className="h-4 w-4 text-[#F59E0B]" />
            <span className="text-sm text-[#9CA3AF]">Planos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Planos escaláveis conforme{" "}
            <span className="text-gradient">volume monitorado.</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta à sua operação. Todos incluem acesso à plataforma completa.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#1B2433] rounded-2xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-[#3B82F6] scale-105 shadow-xl shadow-[#3B82F6]/10"
                  : "border-[#1F2937] hover:border-[#3B82F6]/30"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-[#3B82F6] text-white text-sm font-medium rounded-full">
                    Mais popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-[#9CA3AF]">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-[#9CA3AF]">{plan.period}</span>
                </div>
                <p className="text-sm text-[#3B82F6] mt-2">{plan.queries}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-[#22C55E] shrink-0" />
                    <span className="text-[#9CA3AF]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full py-6 ${
                  plan.popular
                    ? "bg-[#3B82F6] hover:bg-[#2563EB] text-white"
                    : "bg-[#1F2937] hover:bg-[#374151] text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Enterprise Card */}
        <div className="bg-gradient-to-r from-[#1B2433] to-[#232D3F] rounded-2xl border border-[#1F2937] p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {enterprise.name}
              </h3>
              <p className="text-[#9CA3AF] mb-6">{enterprise.description}</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {enterprise.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-[#22C55E] shrink-0" />
                    <span className="text-[#9CA3AF]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[#9CA3AF] mb-4">Sob proposta personalizada</p>
              <Button
                size="lg"
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8"
              >
                Solicitar demonstração
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
