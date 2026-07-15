import { useState } from "react";
import { Focus, Infinity, Heart, Menu, ArrowLeft, ArrowRight, ChevronDown, X, MessageCircle, Send, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TestimonialsColumn } from "./components/ui/testimonials-columns-1";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<{title: string, text: string, span?: string, bg?: string} | null>(null);
  const [modalType, setModalType] = useState<"impressum" | "datenschutz" | "agb" | null>(null);

  const sliderImages = [
    { url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop", className: "w-[250px] md:w-[300px] aspect-[4/5]" },
    { url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=800&auto=format&fit=crop", className: "w-[320px] md:w-[400px] aspect-square" },
    { url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop", className: "w-[280px] md:w-[350px] aspect-[3/4]" },
    { url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop", className: "w-[380px] md:w-[480px] aspect-[5/4]" },
    { url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=800&auto=format&fit=crop", className: "w-[300px] md:w-[360px] aspect-square" },
  ];

const testimonials = [
    { text: "Sehr zufrieden. Bis jetzt hat alles super geklappt,ich fühle mich gut aufgehoben und freue mich auf das was kommt.", name: "Silvia N." },
    { text: "Hallo Rijam Danke Noch mal für deine positive Energie nur deine Analyse. Was du bei mir gemacht hat, ging mir sofort gut.", name: "Valon M." },
    { text: "Rijam ist ein tolles empathisches Medium der stets freundlich und liebevoll mit Menschenseelen umgeht. Er findet Lösungen und ist super engagiert und verlässlich.", name: "Lina" },
    { text: "Sehr empathisch und tolle Zusammenarbeit. Gibt mir sehr gute Hilfestellung. Vielen Dank für alles.", name: "Simone R." },
    { text: "Wirkungsvolle Hilfe bekommen. Das schon mehrfach. Gerne wieder.", name: "Anke H." },
    { text: "Rijam ist sehr sympathisch und einfühlsam. Ich hoffe sehr, dass wir gemeinsam die Erfolge meißtern werden.", name: "Katharina H." },
    { text: "Er hat mein Vertrauen Es geht schnell und unkompliziert Ich arbeite gerne mit ihn. Gruß Seki", name: "Dennis S." },
    { text: "Meine Erfahrungen bis jetzt sind sehr positiv eine sehr nette angenehme und zufällige Zusammenarbeit.", name: "Jasmin S." },
    { text: "Sehr zufrieden.", name: "Sabrina" }
  ];

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <div className="bg-black font-sans text-white w-full overflow-x-hidden min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden flex flex-col">
        {/* Background Image with Zoom Out Animation */}
      <motion.div
        initial={{ scale: 1.4 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://s1.directupload.eu/images/260715/rp5nqrcq.png')`,
          }}
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_120%)] pointer-events-none" />
        {/* Bottom Fade to Black Gradient */}
        <div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-black via-black/80 to-transparent" />
      </motion.div>

      {/* Top Navigation - Just Burger Menu */}
      <header className="absolute top-6 right-6 md:top-10 md:right-10 z-50">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center justify-center p-2 text-white hover:opacity-80 transition-opacity cursor-pointer"
        >
          <Menu className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
        </button>
      </header>

      {/* UI Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
        className="relative z-10 flex flex-col justify-end h-full w-full px-6 py-8 md:px-16 md:py-12 max-w-[1400px] mx-auto"
      >
        {/* Bottom Section */}
        <footer className="w-full mt-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 pb-4">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-medium leading-tight text-white tracking-tight">
                Dein Weg zu Klarheit, Trost <br className="hidden md:block" />
                und spiritueller Verbindung.
              </h1>
              <p className="mt-2 text-gray-400 text-sm">Begleitung in Lebenskrisen, Jenseitskontakte und Aura-Analysen.</p>
            </div>

            <div className="flex-1 flex justify-start md:justify-center items-center gap-8 md:gap-12 text-gray-300">
              <div className="flex flex-col items-center gap-2">
                <Focus className="w-6 h-6 font-light" strokeWidth={1} />
                <span className="text-[11px] font-semibold text-white tracking-wide">
                  Aura-Analyse
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Infinity className="w-6 h-6 font-light" strokeWidth={1} />
                <span className="text-[11px] font-semibold text-white tracking-wide">
                  Jenseitskontakt
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Heart className="w-6 h-6 font-light" strokeWidth={1} />
                <span className="text-[11px] font-semibold text-white tracking-wide">
                  Trauerbegleitung
                </span>
              </div>
            </div>

            <div className="flex-1 flex justify-start md:justify-end">
              <button 
                onClick={() => {
                  const element = document.getElementById("kontakt");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-black px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg active:scale-95 cursor-pointer"
              >
                Erstgespräch vereinbaren
              </button>
            </div>
          </div>
        </footer>
      </motion.div>
      </div>

      {/* Slider Section */}
      <section className="pt-24 pb-16 w-full">
        <div className="w-full overflow-hidden fade-edges py-8">
          <div className="flex w-max animate-[scroll_40s_linear_infinite]">
            <div className="flex gap-6 pr-6 items-center">
              {sliderImages.map((img, i) => (
                <img
                  key={`set1-${i}`}
                  src={img.url}
                  className={`${img.className} object-cover flex-shrink-0`}
                  alt={`Cabin interior ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-6 pr-6 items-center">
              {sliderImages.map((img, i) => (
                <img
                  key={`set2-${i}`}
                  src={img.url}
                  className={`${img.className} object-cover flex-shrink-0`}
                  alt={`Cabin interior ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Center text section */}
      <section id="philosophie" className="py-16 px-8 text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-[40px] font-medium tracking-tight">Meine Philosophie: Mit Herz und Empathie für dich da.</h2>
        <p className="text-gray-400/80 text-sm md:text-base leading-relaxed max-w-[420px]">
          Ich biete dir einen geschützten Raum, um Antworten zu finden und Trauer zu bewältigen.<br className="hidden md:block" /> Mit meiner langjährigen Erfahrung als Medium begleite ich dich auf deinem Weg zu innerem Frieden.
        </p>
      </section>

      {/* About Me Section */}
      <section id="ueber-mich" className="bg-black text-white py-24 px-4 md:px-8 w-full border-t border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 md:order-1 relative">
            <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260713_185214_e9985fee-b8a1-42e1-8489-b316bdf17a5c.png&w=1280&q=85" alt="Rijam Portrait" className="w-full h-auto max-h-[700px] object-cover rounded-sm opacity-90" />
          </div>
          <div className="order-1 md:order-2 flex flex-col items-start gap-6">
            <h2 className="text-3xl md:text-[44px] font-medium tracking-tight leading-tight">Hallo, ich bin Rijam.</h2>
            <div className="text-gray-400 font-medium leading-relaxed text-sm md:text-base space-y-4">
              <p>
                Als spirituelles Medium und Buchautor mit über 15 Jahren Erfahrung begleite ich Menschen auf ihrem einzigartigen spirituellen Weg. Vor einigen Jahren bin ich ins Ausland ausgewandert – zunächst in die Türkei, dann auf die Philippinen und jetzt in Bulgarien, wo ich meinen festen Wohnsitz habe.
              </p>
              <p>
                Diese Reise hat meine Sichtweise auf das Leben erweitert und meine Fähigkeit, Menschen in ihrer spirituellen Entwicklung zu unterstützen, bereichert. Ich freue mich darauf, dich auf deiner Reise zu begleiten und dir wertvolle Einsichten zu bieten!
              </p>
              <p>
                Aktuell absolviere ich eine Ausbildung zum Heilpraktiker für Psychotherapie und werde nach Erhalt der Erlaubnisurkunde mein Angebot um psychotherapeutische Tätigkeiten erweitern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="bg-white text-black py-24 md:py-32 px-4 md:px-8 w-full border-t border-black/5">
        <div className="max-w-[1350px] mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-[44px] font-display font-medium tracking-tight leading-tight mb-4">Lass uns in Kontakt treten.</h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mb-16">
            Ob du Fragen hast oder einen Termin vereinbaren möchtest – ich bin über verschiedene Kanäle für dich erreichbar. Wähle den Weg, der dir am liebsten ist.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <a href="https://wa.me/4915226190100?text=Hallo%20Rijam%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20spirituelle%20Beratung." target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-10 bg-gray-50 rounded-[2rem] border border-black/5 hover:bg-gray-100 transition-colors group cursor-pointer">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-black/5 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6 text-[#25D366]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium mb-2">WhatsApp</h3>
              <span className="text-gray-500 text-sm">Direkt schreiben</span>
            </a>
            
            <a href="https://t.me/RijamMedium" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-10 bg-gray-50 rounded-[2rem] border border-black/5 hover:bg-gray-100 transition-colors group cursor-pointer">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-black/5 group-hover:scale-110 transition-transform duration-300">
                <Send className="w-6 h-6 text-[#229ED9] ml-[-2px] mt-[2px]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium mb-2">Telegram</h3>
              <span className="text-gray-500 text-sm">Schnell & sicher</span>
            </a>

            <a href="mailto:kontakt@rijam.de?subject=Anfrage%20spirituelle%20Beratung" className="flex flex-col items-center justify-center p-10 bg-gray-50 rounded-[2rem] border border-black/5 hover:bg-gray-100 transition-colors group cursor-pointer">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-black/5 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-black" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium mb-2">E-Mail</h3>
              <span className="text-gray-500 text-sm">Für ausführliche Anfragen</span>
            </a>

            <a href="tel:+4915226190100" className="flex flex-col items-center justify-center p-10 bg-gray-50 rounded-[2rem] border border-black/5 hover:bg-gray-100 transition-colors group cursor-pointer">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-black/5 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-black" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium mb-2">Telefon</h3>
              <span className="text-gray-500 text-sm">Persönliches Gespräch</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Bento Grid Section */}
      <section id="leistungen" className="bg-white text-black pb-24 px-4 md:px-8 w-full border-t border-black/5 pt-24">
        <div className="max-w-[1350px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
            {[
              { title: "Partnerrückführung", text: "Die Partnerrückführung ist ein kraftvoller Prozess, der dir hilft, verloren geglaubte Beziehungen wiederherzustellen. Ich unterstütze dich dabei, die emotionalen und energetischen Verbindungen zu deinem Seelenpartner zu stärken, damit ihr wieder zueinander findet. Mit meiner einfühlsamen Anleitung erforschen wir gemeinsam, wie alte Muster durchbrochen werden können, um eine liebevolle und harmonische Wiedervereinigung zu ermöglichen.", span: "md:col-span-2 md:row-span-2", bg: "bg-gray-100 text-black" },
              { title: "Kartenlegen", text: "Beim Kartenlegen erhalte ich wertvolle Einblicke in deine Lebenssituation und die Herausforderungen, vor denen du stehst. Die Karten bieten eine klare Perspektive auf deine Fragen und helfen dir, Entscheidungen mit mehr Klarheit zu treffen. Ich begleite dich durch die Deutung der Karten und enthülle die Botschaften, die das Universum für dich bereithält. Lass uns gemeinsam die Antworten finden, die du suchst.", span: "md:col-span-1 md:row-span-1", bg: "bg-[#181818] text-white" },
              { title: "Blockadenauflösung", text: "Die Blockadenauflösung ist ein entscheidender Schritt, um emotionale und energetische Hindernisse in deinem Leben zu beseitigen. Ich helfe dir, die Ursachen dieser Blockaden zu identifizieren und zu transformieren, damit du wieder frei und unbeschwert leben kannst. Mit gezielten Methoden unterstütze ich dich, um alte Muster loszulassen und Raum für neues Wachstum und positive Veränderungen zu schaffen.", span: "md:col-span-1 md:row-span-1", bg: "bg-gray-200 text-black" },
              { title: "Partnerzusammenführung", text: "Die Partnerzusammenführung zielt darauf ab, dich mit deinem Wunschpartner zusammenzubringen und eine glückliche, harmonische Beziehung zu ermöglichen. Ich arbeite mit verschiedenen spirituellen Techniken, um die energetischen Blockaden zu identifizieren, die zwischen euch stehen könnten. Gemeinsam schaffen wir die Voraussetzungen für eine tiefe Verbindung und eine erfüllte Partnerschaft, die auf Liebe und Vertrauen basiert.", span: "md:col-span-1 md:row-span-1", bg: "bg-gray-100 text-black" },
              { title: "Handlesung", text: "Das Handlesen ist eine alte Kunst, die dir wertvolle Informationen über deine Lebenslinie und deine zukünftigen Möglichkeiten bietet. Durch die Analyse deiner Handlinien und -merkmale erkenne ich wichtige Aspekte deiner Persönlichkeit und deines Lebensweges. Diese Einblicke können dir helfen, besser zu verstehen, wo deine Stärken und Herausforderungen liegen und wie du dein volles Potenzial entfalten kannst.", span: "md:col-span-2 md:row-span-1", bg: "bg-gray-100 text-black" }
            ].map((svc) => (
              <motion.div 
                layoutId={`card-${svc.title}`}
                key={svc.title}
                onClick={() => setSelectedService(svc)}
                className={`${svc.bg} ${svc.span} p-6 sm:p-8 lg:p-10 rounded-3xl cursor-pointer hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-end overflow-hidden relative group`}
              >
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.h3 layoutId={`title-${svc.title}`} className="text-xl sm:text-2xl lg:text-3xl font-display font-medium relative z-10 tracking-tight leading-tight">{svc.title}</motion.h3>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity relative z-10">
                  <span>Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-24 px-4 md:px-8 w-full border-t border-black/5 relative overflow-hidden">
        <div className="container z-10 mx-auto">
          <div className="flex justify-center gap-6 mt-16 md:mt-24 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 text-black py-24 px-4 md:px-8 w-full border-t border-black/5">
        <div className="max-w-[800px] mx-auto flex flex-col gap-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-[40px] font-medium tracking-tight">Häufig gestellte Fragen</h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "Wie läuft eine spirituelle Sitzung ab?", a: "In einem geschützten Rahmen verbinden wir uns mit der geistigen Welt. Ich arbeite ohne Vorabinformationen, um einen reinen und authentischen Kontakt herzustellen. Jede Sitzung wird individuell auf deine Bedürfnisse abgestimmt." },
              { q: "Brauche ich Vorkenntnisse für eine Beratung?", a: "Nein, du brauchst keinerlei Vorkenntnisse. Das Wichtigste ist, dass du offen für den Prozess bist und dich auf die Erfahrung einlassen möchtest." },
              { q: "Bietest du Sitzungen auch online an?", a: "Ja, da ich in Bulgarien lebe, biete ich meine Sitzungen weltweit per Video-Call an. Die Energie und Qualität des Kontakts ist dabei genauso intensiv wie bei einem Treffen vor Ort." },
              { q: "Kann ein Jenseitskontakt garantiert werden?", a: "Ein Kontakt mit der geistigen Welt lässt sich nicht erzwingen, jedoch ist meine Erfahrung sehr positiv. Die geistige Welt entscheidet, wer sich meldet und welche Botschaften gerade wichtig für dich sind." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center p-6 md:p-8 font-medium text-lg md:text-xl text-left cursor-pointer outline-none"
                >
                  {faq.q}
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-600 leading-relaxed text-base md:text-lg">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section & Footer */}
      <section className="relative w-full h-[85vh] min-h-[680px] flex flex-col justify-between py-12">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('https://s1.directupload.eu/images/260715/q5ztgf6g.webp')` }}
        >
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
        
        {/* Spacer to push quote to center and footer to bottom */}
        <div />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 my-auto">
          <div className="max-w-xl">
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-white mb-6">
              "Rijam hat mir in einer dunklen Zeit Licht und Hoffnung geschenkt. Ihre Worte waren ein unschätzbarer Trost."
            </p>
            <p className="text-gray-400 text-sm font-medium">
              Anna M. (Klientin)
            </p>
          </div>
        </div>

        {/* Minimal Footer overlayed transparently over the image background */}
        <footer className="relative z-10 text-gray-400 text-xs px-6 w-full mt-auto">
          <div className="max-w-[1350px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="tracking-tight text-gray-400/80">
              &copy; {new Date().getFullYear()} Rijam. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6 text-gray-400/80">
              <button onClick={() => setModalType("impressum")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 outline-none">
                Impressum
              </button>
              <button onClick={() => setModalType("datenschutz")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 outline-none">
                Datenschutz
              </button>
              <button onClick={() => setModalType("agb")} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 outline-none">
                AGB
              </button>
            </div>
          </div>
        </footer>
      </section>

      {/* Services Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedService(null)}
            />
            <motion.div 
              layoutId={`card-${selectedService.title}`}
              className="bg-white text-black p-8 md:p-12 rounded-[2rem] w-full max-w-3xl relative z-10 overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.h3 layoutId={`title-${selectedService.title}`} className="text-3xl md:text-4xl font-medium mb-6 pr-12">
                {selectedService.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-gray-600 leading-relaxed text-lg md:text-xl"
              >
                {selectedService.text}
              </motion.p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Legal Modals */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
              onClick={() => setModalType(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#181818] text-white p-8 md:p-12 rounded-[2rem] w-full max-w-2xl relative z-10 overflow-y-auto max-h-[85vh] border border-white/10 shadow-2xl"
            >
              <button 
                onClick={() => setModalType(null)}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {modalType === "impressum" && (
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">Impressum</h3>
                  <div className="text-gray-300 space-y-4 leading-relaxed text-sm md:text-base font-normal">
                    <p className="font-semibold text-white text-lg">Angaben gemäß § 5 TMG</p>
                    <p>
                      Rijam Medium & Autor<br />
                      Sitz und Anschrift: Bulgarien<br />
                      (Vollständige Anschrift auf Anfrage)<br />
                      E-Mail: <span className="text-white hover:underline">kontakt@rijam.de</span>
                    </p>
                    <p className="font-semibold text-white mt-6">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</p>
                    <p>
                      Rijam<br />
                      Bulgarien
                    </p>
                    <p className="font-semibold text-white mt-6">Streitschlichtung</p>
                    <p>
                      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#e3c48f] hover:underline">https://ec.europa.eu/consumers/odr</a>.<br />
                      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                  </div>
                </div>
              )}

              {modalType === "datenschutz" && (
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">Datenschutzerklärung</h3>
                  <div className="text-gray-300 space-y-4 leading-relaxed text-sm md:text-base font-normal">
                    <p className="font-semibold text-white text-lg">1. Datenschutz auf einen Blick</p>
                    <p>
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>
                    <p className="font-semibold text-white mt-6">2. Datenerfassung auf unserer Website</p>
                    <p>
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie uns per E-Mail, WhatsApp, Telegram oder Telefon übermitteln.
                    </p>
                    <p>
                      Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
                    </p>
                    <p className="font-semibold text-white mt-6">3. Drittanbieter & Messenger-Dienste</p>
                    <p>
                      Wenn Sie mit uns über WhatsApp, Telegram, E-Mail oder Telefon in Kontakt treten, werden Ihre Kontaktdaten (wie Telefonnummer, Benutzername oder E-Mail-Adresse) zur Bearbeitung Ihrer Anfrage gespeichert. Wir geben diese Daten niemals ohne Ihre ausdrückliche Einwilligung an Dritte weiter.
                    </p>
                  </div>
                </div>
              )}

              {modalType === "agb" && (
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-6 text-white tracking-tight">Allgemeine Geschäftsbedingungen</h3>
                  <div className="text-gray-300 space-y-4 leading-relaxed text-sm md:text-base font-normal">
                    <p className="font-semibold text-white text-lg">1. Geltungsbereich & Dienstleistung</p>
                    <p>
                      Diese Allgemeinen Geschäftsbedingungen gelten für alle spirituellen Beratungen, Jenseitskontakte, Aura-Analysen und sonstigen medialen Dienstleistungen von Rijam.
                    </p>
                    <p className="font-semibold text-white mt-6">2. Wichtiger rechtlicher Hinweis & Haftungsausschluss</p>
                    <p className="text-[#e3c48f] font-medium">
                      Die angebotenen Leistungen sind rein spiritueller Natur und dienen der persönlichen Orientierung und Selbsterfahrung. Sie ersetzen in keinem Fall eine medizinische, psychiatrische, psychotherapeutische oder rechtliche Beratung, Diagnose oder Behandlung durch einen approbierten Arzt oder Heilpraktiker.
                    </p>
                    <p>
                      Es werden keine Heilungsversprechen abgegeben oder Garantien für bestimmte Lebensereignisse gegeben.
                    </p>
                    <p className="font-semibold text-white mt-6">3. Stornierungsbedingungen</p>
                    <p>
                      Termine können bis zu 24 Stunden vor dem vereinbarten Zeitpunkt kostenfrei verschoben oder storniert werden. Bei einer späteren Absage oder Nichterscheinen behalten wir uns vor, das vereinbarte Honorar vollständig in Rechnung zu stellen.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Fullscreen Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#121212] text-white flex flex-col"
          >
            <div className="flex items-center justify-between p-6 md:p-12 max-w-[1400px] w-full mx-auto">
              <span className="text-xl font-medium tracking-wide">Rijam</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer p-4 -mr-4"
              >
                <span className="text-sm font-medium tracking-wide uppercase">Close</span>
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 flex items-center justify-center pb-24">
              <nav className="flex flex-col items-center gap-8 md:gap-12 text-center">
                {[
                  { label: "Über mich", id: "ueber-mich" },
                  { label: "Leistungen", id: "leistungen" },
                  { label: "Philosophie", id: "philosophie" },
                  { label: "Kontakt", id: "kontakt" }
                ].map((item, i) => (
                  <motion.a 
                    key={item.label}
                    href={`#${item.id}`}
                    onClick={(e) => { 
                      e.preventDefault(); 
                      setIsMenuOpen(false);
                      const element = document.getElementById(item.id);
                      if (element) {
                        setTimeout(() => {
                          element.scrollIntoView({ behavior: "smooth" });
                        }, 400); // Warten bis das Menü schließt
                      }
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-6xl font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
