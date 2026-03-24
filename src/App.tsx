import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  FlaskConical, 
  Recycle, 
  Globe2, 
  ChevronDown, 
  Droplets, 
  Factory, 
  Package, 
  AlertTriangle, 
  Lightbulb,
  Info,
  Menu,
  X,
  MessageCircle,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Hourglass,
  Waves,
  Microscope,
  Fish
} from 'lucide-react';
import { polymers } from './data';

function App() {
  const [showPresentation, setShowPresentation] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <AnimatePresence>
        {showPresentation && <PresentationModal onClose={() => setShowPresentation(false)} />}
      </AnimatePresence>
      <Header />
      <main>
        <Hero />
        <PolymersSection />
        <ImpactSection />
        <RecyclingSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-emerald-600">
          <FlaskConical className="w-6 h-6" />
          <span className="font-bold text-xl tracking-tight">QuímicaEduc</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <a href="#introducao" className="hover:text-emerald-600 transition-colors">Introdução</a>
          <a href="#tipos" className="hover:text-emerald-600 transition-colors">Tipos de Polímeros</a>
          <a href="#impacto" className="hover:text-emerald-600 transition-colors">Impacto Ambiental</a>
          <a href="#reciclagem" className="hover:text-emerald-600 transition-colors">Reciclagem</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-emerald-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white shadow-md"
          >
            <nav className="flex flex-col px-4 py-4 space-y-4 text-sm font-medium text-slate-600">
              <a 
                href="#introducao" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-emerald-600 transition-colors block px-2 py-1"
              >
                Introdução
              </a>
              <a 
                href="#tipos" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-emerald-600 transition-colors block px-2 py-1"
              >
                Tipos de Polímeros
              </a>
              <a 
                href="#impacto" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-emerald-600 transition-colors block px-2 py-1"
              >
                Impacto Ambiental
              </a>
              <a 
                href="#reciclagem" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-emerald-600 transition-colors block px-2 py-1"
              >
                Reciclagem
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="introducao" className="relative pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-blue-50 -z-10" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6"
          >
            <FlaskConical className="w-4 h-4" />
            Trabalho Escolar de Química
          </motion.span>
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            Polímeros
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              Tipos, Produção e Impactos
            </span>
          </motion.h1>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Eles estão em quase tudo que usamos: nas garrafas, nas roupas, nos carros e nos celulares. 
            Mas o que exatamente são os polímeros?
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/40 max-w-4xl mx-auto text-left"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">O que são Polímeros?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                A palavra vem do grego: <strong>poli</strong> (muitas) e <strong>meros</strong> (partes). 
                Polímeros são macromoléculas (moléculas gigantes) formadas pela repetição de unidades menores chamadas <strong>monômeros</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Imagine um colar de pérolas: cada pérola é um monômero, e o colar inteiro é o polímero. 
                A reação química que une essas "pérolas" é chamada de <strong>polimerização</strong>.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-slate-50 rounded-2xl flex items-center justify-center p-6 shadow-sm">
              {/* Abstract representation of a polymer chain */}
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div 
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 shadow-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PresentationModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      icon: <MessageCircle className="w-10 h-10 text-emerald-100" />,
      title: "E aí, beleza? Bem-vindo! 👋",
      content: "Sabe aqueles plásticos que você usa todo dia e nem percebe? Da garrafinha de água ao isopor da sua lancheira, tem muita química envolvida nisso tudo!"
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-emerald-100" />,
      title: "Descomplicando a Química 🧪",
      content: "Nós decidimos descomplicar esse assunto para você. Preparamos esse material super dinâmico para você entender de vez o mundo dos polímeros: como eles nascem, onde vivem e seus impactos no planeta."
    },
    {
      icon: <Users className="w-10 h-10 text-emerald-100" />,
      title: "Quem somos nós? 🚀",
      content: "Esse projeto foi desenvolvido com muita dedicação pela equipe do 3TA:\n\nMateus Henrique, Gabriel Carramão, Fernanda Cristina e Marcos Adilson.\n\nBora começar?"
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
        className="bg-gradient-to-br from-emerald-600 to-teal-700 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-48 h-48 bg-teal-400/20 rounded-full blur-2xl" />

        <div className="relative z-10 p-8 md:p-10 flex flex-col min-h-[400px]">
          <div className="flex justify-center gap-2 mb-8">
            {steps.map((_, i) => (
              <div 
                key={i} 
                className={`h-2 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col items-center text-center"
            >
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md shadow-inner mb-6">
                {steps[step].icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                {steps[step].title}
              </h2>
              <p className="text-emerald-50 text-lg leading-relaxed whitespace-pre-line">
                {steps[step].content}
              </p>
              
              {step === steps.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <Sparkles className="w-8 h-8 text-yellow-300 opacity-90 drop-shadow-lg" />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              {step < steps.length - 1 ? (
                <>
                  Próximo
                  <ArrowRight className="w-5 h-5" />
                </>
              ) : (
                <>
                  Começar
                  <CheckCircle2 className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function PolymersSection() {
  return (
    <section id="tipos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Os 7 Principais Polímeros</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conheça os plásticos mais comuns do nosso dia a dia, como são feitos e onde são aplicados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {polymers.map((polymer) => (
            <PolymerCard key={polymer.id} polymer={polymer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PolymerCard({ polymer }: { polymer: typeof polymers[0] }) {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Efeito de paralaxe sutil para o fundo do card
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div 
      ref={cardRef}
      layout
      whileHover={{ scale: 1.02 }}
      className={`relative bg-white rounded-3xl shadow-lg shadow-slate-200/40 overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-slate-300/60 ${isOpen ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''}`}
    >
      {/* Fundo com Paralaxe */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
      >
        <div className={`w-full h-[130%] -mt-[15%] bg-gradient-to-b ${polymer.color} blur-3xl`} />
      </motion.div>

      <div 
        className="relative z-10 w-full h-56 cursor-pointer group flex shadow-none overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src={polymer.image} 
          alt={`Exemplo de ${polymer.name}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/10 transition-opacity duration-300 group-hover:opacity-90" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
          <div className="flex items-center gap-4">
            <motion.div 
              animate={{ 
                scale: isOpen ? 1.05 : 1,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${polymer.color} flex items-center justify-center text-white font-extrabold text-2xl shadow-lg ring-2 ring-white/20`}
            >
              {polymer.acronym}
            </motion.div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-md group-hover:text-emerald-300 transition-colors">{polymer.name}</h3>
              <p className="text-sm text-slate-300 font-medium drop-shadow">
                Símbolo de reciclagem: <span className="font-bold text-white">{polymer.number}</span>
              </p>
            </div>
          </div>
          <motion.div 
            animate={{ 
              rotate: isOpen ? 180 : 0,
              y: isOpen ? -2 : 0
            }} 
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
            className="text-white bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden relative z-10 bg-white"
          >
            <div className="p-6">
              <div className="flex items-center gap-2 text-slate-700 font-medium mb-6">
                <Package className="w-5 h-5 text-emerald-600" />
                Informações e Aplicações
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <InfoBlock icon={<Droplets />} title="Matéria-prima" content={polymer.rawMaterial} />
                <InfoBlock icon={<Factory />} title="Processo de Produção" content={polymer.process} />
                <InfoBlock icon={<Package />} title="Aplicações no Dia a Dia" content={polymer.applications} />
                <InfoBlock icon={<Info />} title="Exemplos de Produtos" content={polymer.products} />
                <InfoBlock icon={<AlertTriangle className="text-amber-500" />} title="Danos à Saúde e Ambiente" content={polymer.damages} />
                <InfoBlock icon={<Lightbulb className="text-yellow-500" />} title="Curiosidade" content={polymer.curiosity} className="bg-yellow-50/60" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function InfoBlock({ icon, title, content, className = "bg-slate-50" }: { icon: React.ReactNode, title: string, content: string, className?: string }) {
  return (
    <div className={`p-5 rounded-2xl ${className}`}>
      <div className="flex items-center gap-2 mb-3 text-slate-700 font-semibold">
        {React.cloneElement(icon as React.ReactElement, { className: `w-5 h-5 ${icon.props.className || 'text-emerald-600'}` })}
        <h4>{title}</h4>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">{content}</p>
    </div>
  );
}

function ImpactSection() {
  const particles = React.useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      y: [0, Math.random() * -40 - 20],
      x: [0, (Math.random() - 0.5) * 40],
      scale: [0, Math.random() * 1.5 + 0.5, 0],
      duration: Math.random() * 2 + 2,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <section id="impacto" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Image with better integration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621451537084-482c73073e0f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.04] mix-blend-luminosity" />
        {/* Gradient overlays to fade out the image and make text pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-slate-900" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <Globe2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Impacto Ambiental dos Plásticos</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A durabilidade que faz dos polímeros materiais incríveis é a mesma que os torna um grande problema ambiental.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Tempo de Decomposição */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 relative overflow-hidden group shadow-xl shadow-black/10"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-colors" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 bg-amber-500/20 rounded-2xl text-amber-400">
                <motion.div
                  animate={{ rotate: [0, 180, 180, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.5, 0.9] }}
                >
                  <Hourglass className="w-6 h-6" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-white">Tempo de Decomposição</h3>
            </div>
            
            <p className="text-slate-300 leading-relaxed relative z-10">
              Plásticos podem levar de <strong>100 a mais de 400 anos</strong> para se decompor na natureza. Uma garrafa PET que você usa por 10 minutos pode sobreviver a várias gerações.
            </p>
            
            {/* Visual Aid: Timeline/Progress */}
            <div className="mt-8 relative z-10">
              <div className="flex justify-between text-xs text-amber-400/70 mb-2 font-mono">
                <span>Hoje</span>
                <span>+400 anos</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 3, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-amber-500/50 to-amber-400"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Oceanos */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 relative overflow-hidden group shadow-xl shadow-black/10"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400">
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Waves className="w-6 h-6" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-white">Ameaça aos Oceanos</h3>
            </div>
            
            <p className="text-slate-300 leading-relaxed relative z-10">
              Formação de "ilhas de plástico" gigantescas. Animais marinhos confundem plástico com comida, causando asfixia, desnutrição e morte em larga escala.
            </p>
            
            {/* Visual Aid: Floating elements */}
            <div className="absolute bottom-4 right-4 opacity-30 flex gap-3 pointer-events-none">
              <motion.div animate={{ y: [0, -10, 0], x: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                <Fish className="w-8 h-8 text-blue-300" />
              </motion.div>
              <motion.div animate={{ y: [0, -15, 0], x: [0, -5, 0], rotate: [0, 20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                <Package className="w-6 h-6 text-slate-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Card 3: Microplásticos */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-md rounded-3xl p-8 relative overflow-hidden group shadow-xl shadow-black/10"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors" />
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Microscope className="w-6 h-6" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-white">Microplásticos</h3>
            </div>
            
            <p className="text-slate-300 leading-relaxed relative z-10">
              Com o tempo, o plástico não some, ele se fragmenta em partículas minúsculas que entram na cadeia alimentar, chegando até a nossa água e comida.
            </p>
            
            {/* Visual Aid: Floating particles */}
            <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
              {particles.map((particle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full"
                  style={{
                    left: particle.left,
                    top: particle.top,
                  }}
                  animate={{
                    y: particle.y,
                    x: particle.x,
                    opacity: [0, 1, 0],
                    scale: particle.scale
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* A Solução */}
        <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-2xl shadow-emerald-900/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
                <Recycle className="w-8 h-8" /> A Solução e Nosso Papel
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    Importância da Reciclagem
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Economiza petróleo (matéria-prima não renovável), reduz o volume de lixo nos aterros e diminui drasticamente a emissão de gases do efeito estufa.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    Como reduzir o uso
                  </h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      Usar ecobags para compras.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      Evitar copos, canudos e talheres descartáveis.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      Preferir embalagens de vidro, papel ou papelão.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">•</span>
                      Separar o lixo reciclável em casa.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/4 flex justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 rounded-full border-4 border-dashed border-emerald-500/30 flex items-center justify-center relative"
              >
                <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl" />
                <Recycle className="w-16 h-16 text-emerald-400 relative z-10" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecyclingSection() {
  return (
    <section id="reciclagem" className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Reciclagem de Polímeros</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Você já reparou em um triângulo com um número dentro nas embalagens plásticas? 
              Esse é o símbolo de identificação da resina, criado para facilitar a separação e a reciclagem.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg shadow-emerald-100/50">
                <h3 className="font-bold text-slate-800 mb-2">O Processo de Reciclagem Mecânica</h3>
                <ol className="list-decimal pl-5 text-slate-600 space-y-2 text-sm">
                  <li><strong>Coleta e Separação:</strong> Os plásticos são separados por tipo (número) e cor.</li>
                  <li><strong>Moagem:</strong> O material é triturado em pequenos pedaços (flakes).</li>
                  <li><strong>Lavagem e Separação:</strong> Lavados com água para tirar sujeira e rótulos.</li>
                  <li><strong>Secagem e Extrusão:</strong> Os flakes são secos, derretidos e transformados em fios, que são cortados formando pequenos grãos (pellets).</li>
                  <li><strong>Novo Produto:</strong> Os pellets são vendidos para indústrias fazerem novos produtos.</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 grid grid-cols-3 gap-4">
            {[
              { num: 1, name: 'PET', fullName: 'Polietileno Tereftalato' },
              { num: 2, name: 'PEAD', fullName: 'Polietileno de Alta Densidade' },
              { num: 3, name: 'PVC', fullName: 'Policloreto de Vinila' },
              { num: 4, name: 'PEBD', fullName: 'Polietileno de Baixa Densidade' },
              { num: 5, name: 'PP', fullName: 'Polipropileno' },
              { num: 6, name: 'PS', fullName: 'Poliestireno' },
              { num: 7, name: 'OUTROS', fullName: 'Outros (PU, ABS, PC, etc.)' },
            ].map((item) => (
              <div key={item.num} className="group relative bg-white aspect-square rounded-2xl shadow-md shadow-emerald-100/50 flex flex-col items-center justify-center p-4 hover:shadow-lg hover:shadow-emerald-200/50 transition-shadow">
                <Recycle className="w-10 h-10 text-emerald-600 mb-2" strokeWidth={1.5} />
                <span className="text-2xl font-black text-slate-800 leading-none">{item.num}</span>
                <span className="text-xs font-bold text-slate-500 mt-1">{item.name}</span>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 w-max max-w-[200px] text-center">
                  <div className="bg-slate-800 text-white text-xs py-1.5 px-3 rounded-lg shadow-xl">
                    {item.fullName}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 text-emerald-600 mb-4">
          <FlaskConical className="w-6 h-6" />
          <span className="font-bold text-xl tracking-tight">QuímicaEduc</span>
        </div>
        <p className="text-slate-500 text-sm">
          Material educativo desenvolvido para trabalho escolar de Química sobre Polímeros.
        </p>
        <p className="text-slate-400 text-xs mt-2">
          © {new Date().getFullYear()} - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default App;
