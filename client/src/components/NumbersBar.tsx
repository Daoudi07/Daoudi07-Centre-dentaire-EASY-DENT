import { motion } from "framer-motion";

export function NumbersBar() {
  const stats = [
    { label: "Années d'expérience", value: "12+" },
    { label: "Patients satisfaits", value: "6000+" },
    { 
      label: "sur", 
      value: "4.4 Stars", 
      isGoogle: true 
    }
  ];

  const googleColors = [
    "text-[#4285F4]", // Blue
    "text-[#EA4335]", // Red
    "text-[#FBBC05]", // Yellow
    "text-[#34A853]"  // Green
  ];

  return (
    <div className="w-full bg-secondary py-12 border-y border-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={ { opacity: 0, y: 20 } }
              whileInView={ { opacity: 1, y: 0 } }
              viewport={ { once: true } }
              transition={ { delay: idx * 0.1 } }
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-display font-black text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white/70 uppercase tracking-widest font-medium">
                {stat.label} {stat.isGoogle && (
                  <span className="font-bold ml-1">
                    <span className={googleColors[0]}>G</span>
                    <span className={googleColors[1]}>o</span>
                    <span className={googleColors[2]}>o</span>
                    <span className={googleColors[0]}>g</span>
                    <span className={googleColors[3]}>l</span>
                    <span className={googleColors[1]}>e</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
