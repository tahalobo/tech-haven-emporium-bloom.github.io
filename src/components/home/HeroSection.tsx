import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
const HeroSection: React.FC = () => {
  return <section className="mt-16 hero-gradient overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-blue-100/60 to-white pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div className="space-y-6" initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }}>
          <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }}>
           طور <span className="text-gradient">تجربتك التقنية</span>
          </motion.h1>
          
          <motion.p className="text-lg text-gray-700 max-w-md" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.5
        }}>اكتشف الملحقات المتميزة التي تعزز أجهزتك وترتقي بأسلوب حياتك الرقمي.</motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.5
        }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white btn-hover-effect">
              <Link to="/shop">
         تسوق الان
                <ChevronRight className="mr-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-hover-effect">
              <Link to="/shop">
             الوافدون الجدد
              </Link>
            </Button>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.5
        }} className="flex items-center gap-4 mt-6 backdrop-blur-sm py-3 px-4 rounded-xl border border-blue-100 shadow-sm bg-transparent">
            <div className="flex -space-x-3 rtl:space-x-reverse">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=64&h=64&fit=crop" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=64&h=64&fit=crop" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=64&h=64&fit=crop" alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-semibold text-primary mr-1">+500</span>
                <span className="text-gray-700">عملاء سعداء</span>
              </div>
              <div className="text-xs text-gray-500 flex items-center">
                <ShieldCheck className="w-3 h-3 ml-1 text-green-500" />
                <span>جودة موثوقة ومضمونة</span>
              </div>
            </div>
            
          </motion.div>
        </motion.div>
        
        <motion.div className="relative flex justify-center" initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.6
      }}>
          <motion.div className="bg-white rounded-lg shadow-xl p-4 relative z-10 rotate-3" animate={{
          y: [0, -10, 0]
        }} transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut"
        }}>
            <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=500" alt="Featured Headphones" className="w-full h-auto rounded" />
          </motion.div>
          
          <motion.div className="absolute top-6 -left-4 bg-accent rounded-lg shadow-lg p-3 rotate-6" animate={{
          y: [0, 10, 0]
        }} transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
          delay: 0.5
        }}>
            <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=150" alt="Wireless Earbuds" className="w-24 h-24 object-cover rounded" />
          </motion.div>
          
          <motion.div className="absolute bottom-6 -right-4 bg-primary/10 rounded-lg shadow-lg p-3 -rotate-6" animate={{
          y: [0, -15, 0]
        }} transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "easeInOut",
          delay: 1
        }}>
            <img src="https://images.unsplash.com/photo-1612539342553-669c7626e666?q=80&w=150" alt="Lightning Cable" className="w-24 h-24 object-cover rounded" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute rounded-full bg-primary/5 backdrop-blur-sm" style={{
        width: Math.random() * 60 + 20,
        height: Math.random() * 60 + 20,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        y: [0, -(Math.random() * 100 + 50)],
        opacity: [0, 0.7, 0]
      }} transition={{
        repeat: Infinity,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        ease: "easeInOut"
      }} />)}
      </div>
    </section>;
};
export default HeroSection;