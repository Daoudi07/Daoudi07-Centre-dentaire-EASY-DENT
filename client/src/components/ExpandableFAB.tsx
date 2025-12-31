import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, Plus, X } from "lucide-react";

export function ExpandableFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);

  const fabVariants = {
    closed: { rotate: 0 },
    open: { rotate: 135 }
  };

  const optionVariants = {
    closed: { opacity: 0, y: 20, scale: 0.8 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    })
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] md:hidden flex flex-col items-center gap-4">
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={ { opacity: 0, y: 10 } }
            animate={ { opacity: 1, y: 0 } }
            exit={ { opacity: 0 } }
            className="absolute bottom-16 right-0 bg-white border border-accent/30 text-secondary text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap"
          >
            Besoin d'aide ?
            <div className="absolute -bottom-1 right-5 w-2 h-2 bg-white border-r border-b border-accent/30 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-center gap-4 mb-2">
            <motion.button
              custom={1}
              variants={optionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => window.open('https://www.doctolib.fr/cabinet-dentaire/port-de-bouc/centre-dentaire-port-de-bouc', '_blank')}
              className="w-14 h-14 bg-white border border-accent/30 rounded-full flex items-center justify-center shadow-lg text-accent active:scale-95 will-change-transform"
            >
              <Calendar className="w-6 h-6" />
              <span className="absolute right-16 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase text-secondary border border-accent/20 shadow-sm">RDV</span>
            </motion.button>
            <motion.button
              custom={0}
              variants={optionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => window.open('tel:0442752471', '_self')}
              className="w-14 h-14 bg-[#E63946] rounded-full flex items-center justify-center shadow-lg text-white active:scale-95 will-change-transform"
            >
              <Phone className="w-6 h-6" />
              <span className="absolute right-16 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase text-[#E63946] border border-red-200 shadow-sm">Urgence</span>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        variants={fabVariants}
        animate={isOpen ? "open" : "closed"}
        className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(212,175,55,0.4)] text-secondary transition-colors active:scale-95 will-change-transform"
      >
        <Plus className="w-8 h-8" />
      </motion.button>
    </div>
  );
}
