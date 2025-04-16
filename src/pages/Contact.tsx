import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Sparkles, ChevronRight, MessageCircle, MessagesSquare, Headphones } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const contactInfo = {
  address: {
    street: "14 Ramadan Street",
    city: "Baghdad",
    country: "Iraq",
    mapUrl: "https://maps.google.com/?q=14+Ramadan+Street+Baghdad+Iraq"
  },
  phone: {
    sales: "+964 771 234 5678",
    support: "+964 780 987 6543"
  },
  email: {
    general: "info@mystore-iraq.com",
    support: "support@mystore-iraq.com",
    sales: "sales@mystore-iraq.com"
  },
  social: {
    facebook: "https://facebook.com/mystore.iraq",
    instagram: "https://instagram.com/mystore.iraq",
    twitter: "https://twitter.com/mystore_iraq"
  },
  hours: {
    weekdays: "Saturday - Thursday: 9:00 AM - 10:00 PM",
    weekend: "Friday: 2:00 PM - 10:00 PM"
  },
  company: {
    name: "MyStore Iraq",
    description: "Your premier destination for authentic tech products in Iraq. We offer the latest gadgets and accessories with reliable nationwide delivery."
  }
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setFormSubmitting(false);
    }, 1500);
  };

  const containerAnimation = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemAnimation = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/10 to-blue-50 py-20">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
                Have questions about our products or services? We're here to help!
              </p>
            </motion.div>
            
            <motion.div className="flex flex-wrap justify-center gap-4 mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Button size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                Call Us Now
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Mail className="h-5 w-5" />
                Email Us
              </Button>
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        </section>
        
        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div className="max-w-5xl mx-auto" variants={containerAnimation} initial="hidden" animate="visible">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Multiple Ways to Reach Us</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Choose your preferred way to contact us. We're here to assist you.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Phone className="h-6 w-6" />,
                    title: "Call Us",
                    description: "Speak directly with our support team",
                    info: contactInfo.phone.support,
                    color: "bg-green-50 text-green-600",
                    action: "Call now"
                  },
                  {
                    icon: <Mail className="h-6 w-6" />,
                    title: "Email Us",
                    description: "Send us a detailed message anytime",
                    info: contactInfo.email.support,
                    color: "bg-blue-50 text-blue-600",
                    action: "Send email"
                  },
                  {
                    icon: <MapPin className="h-6 w-6" />,
                    title: "Visit Us",
                    description: "Come to our store location",
                    info: contactInfo.address.street,
                    color: "bg-amber-50 text-amber-600",
                    action: "Get directions"
                  }
                ].map((item, index) => (
                  <motion.div key={index} variants={itemAnimation} className="bg-white rounded-xl shadow-md transition-all hover:shadow-lg border border-gray-100">
                    <div className="p-6">
                      <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-4`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <div className="font-medium text-gray-900 mb-4">{item.info}</div>
                      <Button variant="outline" size="sm" className="w-full">
                        {item.action}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div initial={{
                opacity: 0,
                x: -30
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.6
              }}>
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                  
                  <Tabs defaultValue="support" className="mb-8">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="support">Support</TabsTrigger>
                      <TabsTrigger value="sales">Sales</TabsTrigger>
                      <TabsTrigger value="feedback">Feedback</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="support" className="mt-4">
                      <p className="text-gray-600 mb-6">
                        Need help with your order or product? Our support team is ready to assist you with any technical issues or questions.
                      </p>
                    </TabsContent>
                    
                    <TabsContent value="sales" className="mt-4">
                      <p className="text-gray-600 mb-6">
                        Interested in bulk orders or business partnerships? Our sales team would love to discuss how we can work together.
                      </p>
                    </TabsContent>
                    
                    <TabsContent value="feedback" className="mt-4">
                      <p className="text-gray-600 mb-6">
                        We value your feedback! Let us know about your experience with our products or suggest improvements.
                      </p>
                    </TabsContent>
                  </Tabs>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Form</CardTitle>
                      <CardDescription>
                        Fill out the form below and we'll get back to you as soon as possible.
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                              Full Name
                            </label>
                            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" required />
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email Address
                            </label>
                            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" required />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                          </label>
                          <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="How can we help you?" required />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Message
                          </label>
                          <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Please provide as much detail as possible..." rows={5} required />
                        </div>
                        
                        <Button type="submit" className="w-full" disabled={formSubmitting}>
                          {formSubmitting ? <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </> : <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </>}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div initial={{
                opacity: 0,
                x: 30
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }} className="flex flex-col">
                  <div className="rounded-xl overflow-hidden bg-white shadow-lg border border-gray-100 mb-8">
                    <div className="p-6 border-b">
                      <h3 className="text-xl font-bold">Visit Our Store</h3>
                    </div>
                    <div className="aspect-video w-full">
                      <iframe src="https://www.google.pl/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D8%B3%D9%85%D8%A7+%D8%A7%D9%88%D8%B1+%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9+%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%E2%80%AD/@33.3074457,44.4512219,17z/data=!4m6!3m5!1s0x155781f525e1071d:0xd3e7eb7dc833043!8m2!3d33.3074457!4d44.448647!16s%2Fg%2F11rsv87jp7?entry=ttu&g_ep=EgoyMDI1MDQxMy4wIKXMDSoASAFQAw%3D%3D" className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="TechHaven Store Location"></iframe>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium">Address</h4>
                          <p className="text-gray-600">here are the addres</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-medium">Store Hours</h4>
                          <p className="text-gray-600">Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find quick answers to common questions about our products and services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {[{
              question: "What payment methods do you accept?",
              answer: "We accept payment Cash on delivery only."
            }, {
              question: "How long does shipping take?",
              answer: "Standard shipping typically takes 3-5 business days."
            }, {
              question: "What is your return policy?",
              answer: "We offer a 30-day return policy for most items. Products must be in original packaging and unused condition. Some exceptions apply for certain electronic components."
            }, {
              question: "Do you offer international shipping?",
              answer: "No , We deliver inside iraq only"
            }, ].map((faq, index) => <motion.div key={index} className="border-b border-gray-200 py-4" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }}>
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between py-2 font-medium">
                      {faq.question}
                      <span className="transition group-open:rotate-180">
                        <ChevronRight className="h-5 w-5" />
                      </span>
                    </summary>
                    <div className="pt-2 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </details>
                </motion.div>)}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
