
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Percent, Clock, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface OfferCard {
  id: string;
  title: string;
  description: string;
  image: string;
  discount: number;
  link: string;
  color: string;
  icon: React.ReactNode;
}

const offers: OfferCard[] = [
  {
    id: "summer-sale",
    title: "تخفيضات الصيف",
    description: "خصم يصل إلى 40% على جميع الملحقات",
    image: "/lovable-uploads/8c2df3b9-50c3-4839-b072-91db82a03f1d.png",
    discount: 40,
    link: "/deals",
    color: "from-blue-50 to-indigo-100",
    icon: <Percent className="h-5 w-5" />,
  },
  {
    id: "flash-deals",
    title: "عروض فلاش",
    description: "عروض لفترة محدودة، تنتهي قريباً",
    image: "/lovable-uploads/8c2df3b9-50c3-4839-b072-91db82a03f1d.png",
    discount: 30,
    link: "/deals",
    color: "from-amber-50 to-orange-100",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    id: "premium-care",
    title: "عناية متميزة",
    description: "ضمان ممتد على العناصر المختارة",
    image: "/lovable-uploads/8c2df3b9-50c3-4839-b072-91db82a03f1d.png",
    discount: 25,
    link: "/deals",
    color: "from-emerald-50 to-green-100",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

const SpecialOffersSection: React.FC = () => {
  const navigate = useNavigate();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            العروض والصفقات الخاصة
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            خصومات حصرية وعروض محدودة الوقت لا تريد تفويتها
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br ${offer.color} border border-white/50`}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="default" className="px-3 py-1 rounded-full bg-white/80 text-primary font-medium">
                    {offer.discount}% خصم
                  </Badge>
                  <div className="h-10 w-10 rounded-full bg-white/80 flex items-center justify-center text-primary">
                    {offer.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-800">{offer.title}</h3>
                <p className="text-gray-600 mb-6">{offer.description}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="h-4 w-4 ml-1" />
                    <span>لفترة محدودة</span>
                  </div>
                </div>
                
                <div className="relative h-48 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4 w-2/3 h-2/3"></div>
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="max-h-full max-w-full object-contain relative z-10 mix-blend-multiply"
                  />
                </div>
                
                <Button 
                  onClick={() => navigate(offer.link)}
                  className="w-full gap-2"
                  variant="default"
                >
                  تسوق الآن
                  <ArrowRight className="mr-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            onClick={() => navigate('/deals')}
            className="rounded-full"
            size="lg"
          >
            عرض جميع الصفقات
            <ArrowRight className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
