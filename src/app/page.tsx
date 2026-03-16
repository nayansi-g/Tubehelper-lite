// app/page.tsx
import { Phone, Menu, Star, ArrowRight, Check, Clock, Users, TrendingUp, MessageCircle, Globe, Zap, BarChart, Award, MapPin, Calendar, ThumbsUp, Mail } from 'lucide-react';
import Hero from "@/components/Hero"
import IndustriesSection from "@/components/Industries"
import ServicesSection from "@/components/ServicesSection"
import ProcessSection from "@/components/ProcessSection"
import Testimonals from "@/components/Testimonals"
import CTASection from "@/components/CTASection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />
      <IndustriesSection />
      <ServicesSection />
      <ProcessSection />
      <Testimonals />
     <section id='BookDemo'><CTASection /></section> 
     <section id='Contact'><ContactSection /></section> 
    </div>
  );
}