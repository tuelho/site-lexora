"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Bell, Search, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-glow" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse-slow opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-pulse-slow opacity-50" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse-slow opacity-40" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#3B82F6] rounded-full animate-pulse-slow opacity-70" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B2433] border border-[#1F2937] mb-8">
              <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
              <span className="text-sm text-[#9CA3AF]">Regulatory Intelligence Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
              Monitore o Diário Oficial com{" "}
              <span className="text-gradient">inteligência</span>, não manualmente.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#9CA3AF] mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              Automatize buscas no DOU, receba alertas em tempo real e transforme publicações oficiais em decisões acionáveis.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-6 text-base group"
              >
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#1F2937] bg-transparent text-white hover:bg-[#1B2433] px-8 py-6 text-base"
              >
                <Play className="mr-2 h-4 w-4" />
                Entrar na Lista de Espera
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="flex items-center gap-2 justify-center lg:justify-start text-sm text-[#9CA3AF]">
              <Shield className="h-4 w-4 text-[#22C55E]" />
              <span>Para jurídico, compliance e empresas que dependem de informação oficial crítica.</span>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative">
            <div className="relative animate-float">
              {/* Main Dashboard Card */}
              <div className="bg-[#1B2433] rounded-2xl border border-[#1F2937] p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center">
                      <Search className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Monitoramento Ativo</p>
                      <p className="text-xs text-[#9CA3AF]">12 consultas configuradas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
                    <span className="text-xs text-[#22C55E]">Online</span>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#111827] rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-white">847</p>
                    <p className="text-xs text-[#9CA3AF]">Publicações</p>
                  </div>
                  <div className="bg-[#111827] rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-[#3B82F6]">23</p>
                    <p className="text-xs text-[#9CA3AF]">Alertas hoje</p>
                  </div>
                  <div className="bg-[#111827] rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-[#22C55E]">99.9%</p>
                    <p className="text-xs text-[#9CA3AF]">Uptime</p>
                  </div>
                </div>

                {/* Recent Alerts */}
                <div className="space-y-3">
                  <p className="text-xs text-[#9CA3AF] uppercase tracking-wider">Alertas Recentes</p>
                  {[
                    { title: "Portaria nº 1.234/2026", type: "Licitação", time: "2min" },
                    { title: "Instrução Normativa RFB", type: "Tributário", time: "15min" },
                    { title: "Edital de Chamamento", type: "Contrato", time: "1h" },
                  ].map((alert, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-[#111827] rounded-lg border border-[#1F2937] hover:border-[#3B82F6]/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <Bell className="h-4 w-4 text-[#3B82F6]" />
                        <div>
                          <p className="text-sm text-white">{alert.title}</p>
                          <p className="text-xs text-[#9CA3AF]">{alert.type}</p>
                        </div>
                      </div>
                      <span className="text-xs text-[#9CA3AF]">{alert.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Notification Card */}
              <div className="absolute -top-4 -right-4 bg-[#1B2433] rounded-xl border border-[#1F2937] p-4 shadow-xl animate-pulse-slow">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                    <Bell className="h-4 w-4 text-[#22C55E]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#22C55E] font-medium">Nova Correspondência</p>
                    <p className="text-xs text-[#9CA3AF]">Termo: &quot;CNPJ 12.345...&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0F19] to-transparent" />
    </section>
  )
}
