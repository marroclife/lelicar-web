import { motion } from 'framer-motion'
import { Wrench, Zap, Disc3, ClipboardCheck, Cpu, MapPin, Phone, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'
import heroEngine from './assets/hero-engine.png'
import heroWorkshop from './assets/hero-workshop.png'
import logoImg from './assets/logo.png'
import './App.css'

const services = [
  {
    icon: Wrench,
    title: 'Mecânica Geral',
    desc: 'Soluções completas e precisas para motores e transmissões. Do ajuste fino à retífica, com rigor técnico absoluto.'
  },
  {
    icon: Zap,
    title: 'Elétrica Automotiva',
    desc: 'Diagnóstico inteligente e reparos complexos de sistemas elétricos e eletrônicos, eliminando falhas com precisão.'
  },
  {
    icon: Disc3,
    title: 'Suspensão e Freios',
    desc: 'Segurança máxima em cada curva e parada. Alinhamento, balanceamento e revisão de frenagem com padrão de fábrica.'
  },
  {
    icon: ClipboardCheck,
    title: 'Revisão Preventiva',
    desc: 'Antecipamos o problema para você não parar. Planos de manutenção personalizados para máxima performance e economia.'
  },
  {
    icon: Cpu,
    title: 'Diagnóstico Computadorizado',
    desc: 'Tecnologia de scanner avançada para leitura precisa de sensores e ECU. Detecção rápida e solução definitiva.'
  }
]

const differencials = [
  {
    title: 'Equipamentos de Elite',
    desc: 'Investimos nas ferramentas mais modernas do mercado para entregar diagnósticos que oficinas comuns não conseguem.'
  },
  {
    title: 'Transparência Técnica',
    desc: 'Você acompanha cada etapa. Orçamentos detalhados, sem "surpresas" e com explicação técnica clara.'
  },
  {
    title: 'Rigor e Certificação',
    desc: 'Nossa equipe é treinada nos mais altos padrões de engenharia automotiva, garantindo a integridade do seu veículo.'
  },
  {
    title: 'Agilidade Inteligente',
    desc: 'Processos otimizados para que seu carro volte à estrada no menor tempo possível, sem comprometer a qualidade.'
  }
]

const testimonials = [
  {
    text: 'Finalmente encontrei uma oficina que não tenta empurrar peças desnecessárias. A Lelicar foi honesta, técnica e resolveu o problema do meu carro de primeira. Recomendo!',
    author: 'Cliente Satisfeito',
    role: 'Proprietário de SUV'
  },
  {
    text: 'Levei meu carro para um diagnóstico que três oficinas não resolveram. Com o scanner da Lelicar, acharam a falha em 15 minutos. Profissionais de verdade.',
    author: 'Cliente Satisfeito',
    role: 'Proprietário de Sedan'
  },
  {
    text: 'Faço todas as revisões preventivas aqui. O atendimento é moderno, o ambiente é limpo e sinto que meu carro está sempre novo. Nota 10.',
    author: 'Cliente Satisfeito',
    role: 'Revisões Periódicas'
  }
]

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

export default function App() {
  return (
    <div className="min-h-screen bg-lelicar-dark text-lelicar-light overflow-x-hidden">
      {/* Background ambient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-lelicar-red/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-lelicar-red/3 rounded-full blur-[140px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 border-b border-white/5 bg-lelicar-dark/80 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="Lelicar Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold tracking-tight">Lelicar</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-lelicar-muted">
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
            <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>
          <a
            href="https://wa.me/5521990000000"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-2 bg-lelicar-red hover:bg-lelicar-red-glow text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4" /> Agendar agora
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-28 lg:pt-32 lg:pb-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lelicar-red/10 border border-lelicar-red/20 text-lelicar-red text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-lelicar-red animate-pulse" />
              Atendimento com precisão técnica
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              Precisão de <span className="text-lelicar-red">Engenharia</span>.<br />
              Confiança em cada quilômetro.
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg text-lelicar-muted leading-relaxed mb-8 max-w-xl">
              Especialistas em alta performance e manutenção automotiva. Unimos tecnologia de ponta e rigor técnico para garantir a segurança e a longevidade do seu veículo.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/5521990000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-lelicar-red hover:bg-lelicar-red-glow text-white px-7 py-3.5 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-lelicar-red/25"
              >
                Agendar diagnóstico <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white px-7 py-3.5 rounded-full font-semibold transition-all"
              >
                Conhecer serviços
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <img 
                src={heroEngine} 
                className="absolute inset-0 w-full h-full object-cover" 
                alt="High performance engine precision" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lelicar-dark via-lelicar-dark/20 to-transparent" />
              <div className="absolute inset-0 bg-lelicar-dark/30 hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-lelicar-graphite border border-white/10 rounded-2xl p-5 shadow-xl">
              <p className="text-3xl font-bold text-lelicar-red">15 min</p>
              <p className="text-sm text-lelicar-muted">Diagnóstico inicial</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-lelicar-graphite border border-white/10 rounded-2xl p-5 shadow-xl">
              <p className="text-3xl font-bold text-lelicar-red">98%</p>
              <p className="text-sm text-lelicar-muted">Taxa de resolução</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="relative z-10 py-24 bg-lelicar-graphite/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl font-bold mb-4">Serviços de <span className="text-lelicar-red">Engenharia</span></motion.h2>
            <motion.p variants={fadeIn} className="text-lelicar-muted text-lg">Da manutenção preventiva aos reparos mais complexos. Tudo com o padrão de qualidade que seu veículo merece.</motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="group relative p-7 rounded-2xl bg-lelicar-dark border border-white/10 hover:border-lelicar-red/40 transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lelicar-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-14 h-14 mb-5 rounded-xl bg-lelicar-red/10 border border-lelicar-red/20 flex items-center justify-center text-lelicar-red group-hover:bg-lelicar-red group-hover:text-white transition-colors">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-lelicar-muted leading-relaxed text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentials */}
      <section id="diferenciais" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl font-bold mb-6">Por que a <span className="text-lelicar-red">Lelicar</span>?</motion.h2>
              <motion.p variants={fadeIn} className="text-lelicar-muted text-lg mb-10">Não fazemos apenas reparos. Cuidamos da integridade do seu veículo com processos técnicos, transparência e respeito ao seu tempo.</motion.p>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-6">
                {differencials.map((diff, idx) => (
                  <motion.div key={idx} variants={fadeIn} className="flex gap-4">
                    <div className="mt-1 min-w-[24px]">
                      <CheckCircle2 className="w-6 h-6 text-lelicar-red" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{diff.title}</h4>
                      <p className="text-sm text-lelicar-muted leading-relaxed">{diff.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-lelicar-graphite aspect-[4/3] shadow-2xl shadow-black/40"
            >
              <img 
                src={heroWorkshop} 
                className="absolute inset-0 w-full h-full object-cover opacity-60" 
                alt="Futuristic Automotive Workshop" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-lelicar-dark via-transparent to-lelicar-dark" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center z-10 px-8">
                  <p className="text-5xl font-extrabold text-white mb-2">10+</p>
                  <p className="text-lelicar-muted">anos de experiência técnica</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="relative z-10 py-24 bg-lelicar-graphite/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl font-bold mb-4">Quem confia, <span className="text-lelicar-red">recomenda</span></motion.h2>
            <motion.p variants={fadeIn} className="text-lelicar-muted text-lg">A voz de quem já passou pela Lelicar e sentiu a diferença de um atendimento técnico de verdade.</motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="p-7 rounded-2xl bg-lelicar-dark border border-white/10"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-lelicar-red" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 000.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lelicar-muted leading-relaxed mb-6 text-sm">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-sm text-lelicar-red">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contato" className="relative z-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl font-bold mb-6">Pronto para cuidar do seu <span className="text-lelicar-red">veículo</span>?</motion.h2>
            <motion.p variants={fadeIn} className="text-lelicar-muted text-lg mb-8">Agende seu diagnóstico agora e sinta a diferença de uma oficina que entende de verdade.</motion.p>
            <motion.div variants={fadeIn}>
              <a
                href="https://wa.me/5521990000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-lelicar-red hover:bg-lelicar-red-glow text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-lelicar-red/25"
              >
                <Phone className="w-5 h-5" /> Falar pelo WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 py-12 border-y border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-lelicar-red/10 border border-lelicar-red/20 flex items-center justify-center text-lelicar-red shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Endereço</h4>
                <p className="text-lelicar-muted text-sm">Rua da Oficina, 123<br />Rio de Janeiro, RJ</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-lelicar-red/10 border border-lelicar-red/20 flex items-center justify-center text-lelicar-red shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Horário</h4>
                <p className="text-lelicar-muted text-sm">Seg - Sex: 08:00 às 18:00<br />Sáb: 08:00 às 12:00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-lelicar-red/10 border border-lelicar-red/20 flex items-center justify-center text-lelicar-red shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Contato</h4>
                <p className="text-lelicar-muted text-sm">(21) 90000-0000<br />contato@lelicar.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-lelicar-muted">
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="Lelicar Logo" className="w-8 h-8 object-contain" />
              <span className="font-semibold text-white">Lelicar</span>
            </div>
            <p>© 2026 Centro Automotivo Lelicar. Onde a precisão encontra a confiança.</p>
            <div className="flex gap-6">
              <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
              <a href="#contato" className="hover:text-white transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5521990000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all"
        aria-label="Agendar pelo WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </a>
    </div>
  )
}
