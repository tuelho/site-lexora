import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Clock } from "lucide-react"

export function CtaSection() {
  return (
    <section
      id="cta"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#111827] to-[#0B0F19] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-glow" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[#8B5CF6]/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B2433] border border-[#1F2937] mb-8">
          <Zap className="h-4 w-4 text-[#F59E0B]" />
          <span className="text-sm text-[#9CA3AF]">Comece agora</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
          Comece a monitorar{" "}
          <span className="text-gradient">o que importa.</span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[#9CA3AF] mb-10 max-w-2xl mx-auto text-pretty">
          Reduza risco, automatize vigilância regulatória e transforme publicações em vantagem competitiva.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-6 text-base group"
          >
            Solicitar Acesso
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#1F2937] bg-transparent text-white hover:bg-[#1B2433] px-8 py-6 text-base"
          >
            Agendar demonstração
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-[#9CA3AF]">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-[#22C55E]" />
            <span>Dados seguros</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#3B82F6]" />
            <span>Setup em minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-[#F59E0B]" />
            <span>Sem cartão de crédito</span>
          </div>
        </div>
      </div>
    </section>
  )
}
