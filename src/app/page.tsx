import { Header } from "@/components/Header";
import { CrisisFAB } from "@/components/CrisisFAB";
import { ContactForm } from "@/components/ContactForm";
import { Phone, MessageCircle, Heart, Users, Home, ArrowRight, Shield, CheckCircle, Calendar, BookOpen, Target, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <CrisisFAB />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50 opacity-60" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                Comprehensive Veteran Reintegration Programs
              </div>

              {/* Headline with animation */}
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight !text-gray-900">
                A Sanctuary for{" "}
                <span className="!text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-900">
                  Heroes
                </span>
              </h1>

              {/* Enhanced description */}
              <p className="text-xl !text-gray-800 leading-relaxed max-w-xl font-medium">
                Guiding veterans through comprehensive systems to combat issues rooted in a need for
                decompression and reintegration in their post-service lives—all the way home.
                You served with honor, courage, and sacrifice. Now let us serve you with the care,
                dignity, and respect you've earned.
              </p>

              {/* Statistics Row */}
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-300">
                <div>
                  <div className="text-3xl font-bold text-blue-900">500+</div>
                  <div className="text-sm font-medium text-gray-700">Veterans Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">4</div>
                  <div className="text-sm font-medium text-gray-700">Program Stages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm font-medium text-gray-700">Free Services</div>
                </div>
              </div>

              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/apply"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Apply to Join
                </Link>
                <Link
                  href="/programs"
                  className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  View Programs
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative">
              {/* Main image */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/generated/hero-sanctuary.png"
                  alt="Gratitude Farm sanctuary with mountain backdrop"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-200 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900">Safe Haven</div>
                    <div className="text-sm font-medium text-gray-700">Mountain Retreat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Resources Section - Compact */}
      <section id="crisis-support" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold !text-gray-900 mb-2">Support Resources</h3>
              <p className="!text-gray-700 font-medium">
                Veterans Crisis Line available 24/7 for immediate support
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="tel:988"
                className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-200"
              >
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold !text-gray-900">Call 988</p>
                  <p className="text-sm !text-gray-600">Press 1 for Veterans</p>
                </div>
              </a>
              <a
                href="sms:838255"
                className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold !text-gray-900">Text 838255</p>
                  <p className="text-sm !text-gray-600">24/7 Text Support</p>
                </div>
              </a>
              <a
                href="https://www.veteranscrisisline.net/get-help-now/chat/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-200"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold !text-gray-900">Online Chat</p>
                  <p className="text-sm !text-gray-600">Confidential Support</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <Image
                src="/aspen-veterans-project-logo.png"
                alt="Aspen Veterans Project Logo"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <h2 className="text-5xl font-bold mb-6 !text-gray-900">
              Our Vision
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          </div>

          {/* Concise Vision */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 shadow-2xl text-center">
              <p className="text-3xl font-bold !text-white leading-relaxed">
                A world where no veteran is lost to CPTSD, isolation, homelessness, or suicide—where every veteran receives the decompression and reintegration support needed to return to a life of purpose, connection, productivity, and emotional stability.
              </p>
            </div>
          </div>

          {/* Mid-Length Vision */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-xl border border-gray-200">
              <h3 className="text-3xl font-bold mb-6 !text-blue-900 text-center">The Aspen Grove: Strength Through Connection</h3>
              <p className="text-xl !text-gray-800 leading-relaxed font-medium">
                Veterans are grounded in lifelong community, mirroring the interconnected strength of an aspen grove—where individual trees appear separate above ground, but are connected through a vast root system beneath the surface. This vision centers on helping veterans return to a state of renewed creativity, emotional stability, purpose, and deep connection with peers who understand their lived reality.
              </p>
            </div>
          </div>

          {/* Rallying-Cry Vision */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-10 lg:p-16 shadow-2xl border-2 border-blue-200">
              <h3 className="text-3xl font-bold mb-8 !text-green-900 text-center flex items-center justify-center gap-3">
                <Shield className="w-10 h-10" />
                Never Again Lost
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg !text-gray-800 leading-relaxed font-medium mb-6">
                  The Aspen Veteran's Project sees a world where veterans are never again lost to suicide, addiction, or homelessness. CPTSD no longer steals their breath or futures; isolation is impossible because every veteran is held within a living, interconnected community—mirroring the strength of an aspen grove.
                </p>
                <p className="text-lg !text-gray-800 leading-relaxed font-medium mb-6">
                  AVP imagines veterans raising families, building careers, creating art, sleeping peacefully, and living fully again after decompression and trauma recovery. The organization aims to help the nation honour its veterans not only with gratitude but with deep transformation, returning them whole, grounded, and equipped for long-term thriving.
                </p>
                <div className="bg-white rounded-2xl p-8 shadow-lg mt-8">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <Heart className="w-12 h-12 text-red-600 mx-auto mb-3" />
                      <p className="font-bold !text-gray-900">Raising Families</p>
                    </div>
                    <div>
                      <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                      <p className="font-bold !text-gray-900">Creating Art</p>
                    </div>
                    <div>
                      <Home className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <p className="font-bold !text-gray-900">Living Fully</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 !text-gray-900">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8" />
          </div>

          {/* Concise Mission */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-3xl p-12 shadow-2xl text-center">
              <p className="text-3xl font-bold !text-white leading-relaxed">
                AVP guides combat veterans from survival to thriving through multi-modal healing, deep nature immersion, physical and creative challenge, philosophical dialogue, and peer bonding on a protected mountain sanctuary in southern New Mexico—followed by lifelong support and brotherhood. This is not a retreat but a permanent reintegration pathway.
              </p>
            </div>
          </div>

          {/* Mid-Length Mission */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-xl border border-gray-200">
              <h3 className="text-3xl font-bold mb-6 !text-blue-900 text-center">
                The Aspen Grove Metaphor
              </h3>
              <p className="text-xl !text-gray-800 leading-relaxed font-medium mb-6">
                The organization moves veterans through preparation, immersion, reflection, creative challenge, and peer connection in a protected wilderness environment. AVP offers nature-based healing, philosophical exploration, physical challenge, and team rebuilding—followed by ongoing support that extends for life.
              </p>
              <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-600">
                <p className="text-lg !text-blue-900 leading-relaxed font-semibold italic">
                  The aspen grove metaphor reflects AVP's core belief: veterans appear separate, but beneath the surface they are connected through shared roots, shared experience, and a shared pathway to healing.
                </p>
              </div>
            </div>
          </div>

          {/* Long-Form Mission - Journey Steps */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-10 lg:p-16 shadow-2xl text-white">
              <h3 className="text-3xl font-bold mb-8 !text-white text-center">
                More Than Survival—Reclaim Your Life
              </h3>
              <p className="text-xl !text-blue-100 leading-relaxed font-medium mb-10 text-center">
                AVP exists because every veteran who carried war home deserves more than survival—they deserve to reclaim their life. The project guides small cohorts of combat veterans through a proven multi-modal process:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 !text-white text-center">Preparation</h4>
                  <p className="!text-blue-100 text-center font-medium">Intention-setting and readiness assessment</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 !text-white text-center">Immersion</h4>
                  <p className="!text-blue-100 text-center font-medium">Deep nature connection and healing</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 !text-white text-center">Dialogue</h4>
                  <p className="!text-blue-100 text-center font-medium">Philosophical inquiry and reflection</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 !text-white text-center">Challenge</h4>
                  <p className="!text-blue-100 text-center font-medium">Physical and creative growth</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 !text-white text-center">Connection</h4>
                  <p className="!text-blue-100 text-center font-medium">Rebuilding trust with peers</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 !text-white text-center">Purpose</h4>
                  <p className="!text-blue-100 text-center font-medium">Renewed self and lifelong support</p>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
                <p className="text-xl !text-white text-center leading-relaxed font-semibold">
                  This journey culminates in renewed purpose and the rediscovery of self. AVP is not a retreat; it is the gateway to a lifelong circle of support, including peer groups, reunions, mentorship, and ongoing connection rooted in the sanctuary land.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Introduction */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 !text-gray-900">
              Founded on Clinical Excellence
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 lg:p-16 shadow-2xl border border-gray-200">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold !text-blue-900 mb-2">Erica Angell</h3>
                  <p className="text-sm font-semibold !text-gray-700">Founder & Clinical Director</p>
                  <div className="mt-4 pt-4 border-t border-gray-300">
                    <div className="text-3xl font-bold text-blue-900">30+</div>
                    <div className="text-xs font-medium text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 space-y-6">
                <p className="text-xl !text-gray-800 leading-relaxed font-medium">
                  Erica Angell, a clinician with <span className="font-bold !text-blue-900">30+ years of experience</span> in somatic, energetic, and trauma-aware therapeutic practices, founded AVP to fill a critical gap in the military system: <span className="font-bold !text-red-600">veterans are trained for combat but not decompressed or reintegrated after service.</span>
                </p>

                <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-600">
                  <h4 className="text-lg font-bold !text-blue-900 mb-3">Clinical Background</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="!text-gray-800 font-medium">Reiki Master</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="!text-gray-800 font-medium">Therapeutic Bodywork</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="!text-gray-800 font-medium">Energy-Based Modalities</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="!text-gray-800 font-medium">Trauma-Informed Life Coaching</span>
                    </div>
                  </div>
                </div>

                <p className="!text-gray-700 leading-relaxed font-medium italic">
                  Her background shapes AVP's integrative, evidence-informed approach to helping veterans reclaim their lives after service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Design & Clinical Framework */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 !text-gray-900">
              Program Model
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8" />
            <p className="text-xl !text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium">
              AVP's programs are designed around a structured, evidence-informed, trauma-aware methodology shaped by decades of clinical experience and veteran-facing practice.
            </p>
          </div>

          {/* Clinical Components */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Individualized Clinical Design */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold !text-blue-900 mb-2">Individualized</h3>
                  <p className="!text-gray-700 font-medium">Customized reintegration plans for each veteran</p>
                </div>
              </div>
              <p className="!text-gray-800 leading-relaxed font-medium mb-4">
                Each veteran receives an assessment-based, customized reintegration plan informed by their service history, trauma profile, symptoms, goals, and unique reintegration needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Physiological dysregulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Emotional burnout</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Cognitive overload</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Relational disconnection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Post-deployment identity fragmentation</span>
                </li>
              </ul>
            </div>

            {/* Multi-Modal Healing Model */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold !text-green-900 mb-2">Multi-Modal</h3>
                  <p className="!text-gray-700 font-medium">Integrated therapeutic approaches</p>
                </div>
              </div>
              <p className="!text-gray-800 leading-relaxed font-medium mb-4">
                Somatic work, energy-based care, trauma-aware coaching, nature immersion, physical challenge, creative expression, and facilitated group dialogue.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Somatic regulation techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Therapeutic touch and bodywork</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Energy-based modalities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Trauma-aware life coaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Nature immersion and physical challenge</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Creative expression</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Philosophical dialogue and group processing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Trauma-Informed Principles */}
          <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-3xl p-12 shadow-2xl mb-12">
            <h3 className="text-3xl font-bold mb-8 !text-white text-center">
              Trauma-Informed
            </h3>
            <p className="text-lg !text-purple-100 text-center mb-8 font-medium max-w-4xl mx-auto">
              Safety, choice, trust, collaboration, empowerment; culturally respectful practices inform but do not replace clinical methods.
            </p>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <p className="text-xl font-bold !text-white mb-2">Safety</p>
                <p className="!text-purple-200 font-medium text-sm">Physical and emotional security</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <p className="text-xl font-bold !text-white mb-2">Choice</p>
                <p className="!text-purple-200 font-medium text-sm">Autonomy and decision-making</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <p className="text-xl font-bold !text-white mb-2">Collaboration</p>
                <p className="!text-purple-200 font-medium text-sm">Shared power and partnership</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <p className="text-xl font-bold !text-white mb-2">Trustworthiness</p>
                <p className="!text-purple-200 font-medium text-sm">Transparency and consistency</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <p className="text-xl font-bold !text-white mb-2">Empowerment</p>
                <p className="!text-purple-200 font-medium text-sm">Skill-building and hope</p>
              </div>
            </div>
            <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <p className="!text-white text-center font-medium">
                AVP also incorporates culturally and spiritually respectful practices; Erica's background includes study of Native American shamanic and medicine traditions, which inform but never replace clinical methods.
              </p>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mt-12 max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
            <h3 className="text-3xl font-bold mb-6 !text-blue-900 text-center">Leadership & Quality Assurance</h3>
            <p className="text-lg !text-gray-800 leading-relaxed font-medium mb-6 text-center">
              Erica Angell oversees strategy, program development, clinical quality, assessment protocols, and staff training to ensure a consistent, evidence-informed reintegration model.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-200">
                <Target className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold !text-blue-900 mb-2">Strategy & Development</h4>
                <p className="text-sm !text-gray-700">Organizational vision and program growth</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-200">
                <Shield className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold !text-green-900 mb-2">Clinical Quality</h4>
                <p className="text-sm !text-gray-700">Maintaining therapeutic integrity</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6 text-center border border-purple-200">
                <Users className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <h4 className="font-bold !text-purple-900 mb-2">Staff Training</h4>
                <p className="text-sm !text-gray-700">Evidence-informed team supervision</p>
              </div>
            </div>
          </div>

          {/* Outcome-Focused & Lifelong Support */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold !text-orange-900 mb-2">Outcome-Focused</h3>
                  <p className="!text-gray-700 font-medium">Measurable goals, trackable progress, long-term reintegration markers</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Measurable goals for each veteran</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Standardized outcome metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Periodic reassessment and adjustments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Documentation of symptom reduction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Long-term reintegration indicators</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold !text-teal-900 mb-2">Lifelong</h3>
                  <p className="!text-gray-700 font-medium">Continued peer support, mentor check-ins, and reunions anchored to the land</p>
                </div>
              </div>
              <p className="!text-gray-800 leading-relaxed font-medium mb-4">
                After the core immersion, veterans receive:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Ongoing cohort support groups</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Regular mentor check-ins</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Annual reunions at the sanctuary</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">Continued nature-based grounding opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="!text-gray-800 font-medium">A sustained network of veteran peers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics & Impact Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Making a Measurable Difference</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Real impact on veteran lives across Colorado and beyond
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-blue-200 text-lg">Veterans Served</div>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-blue-200 text-lg">Successful Placements</div>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-blue-200 text-lg">Crisis Support</div>
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-blue-200 text-lg">Free to Veterans</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <div className="text-center">
              <div className="text-6xl text-yellow-400 mb-4">"</div>
              <p className="text-2xl text-white mb-6 leading-relaxed">
                Gratitude Farm gave me a second chance at life. The support, understanding,
                and brotherhood I found here made all the difference.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-2xl">
                  JM
                </div>
                <div className="text-left">
                  <div className="font-bold text-white">James M.</div>
                  <div className="text-blue-200 text-sm">Army Veteran, Program Graduate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 !text-white">
            You Served with Honor. Let Us Honor Your Service.
          </h2>
          <p className="text-xl mb-8 !text-blue-100 font-medium">
            Whether you need immediate support, are looking for community connection,
            or want to learn about our sanctuary programs, we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 !text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5 !text-white" />
              Apply to Join
            </Link>
            <Link
              href="/community"
              className="bg-white !text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Join Our Community
              <Users className="w-5 h-5 !text-blue-900" />
            </Link>
            <Link
              href="/programs"
              className="bg-blue-700 hover:bg-blue-800 !text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5 !text-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 !text-gray-900">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-xl !text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
              Have questions about our programs or need support? We're here to help.
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="mb-6 bg-white p-4 rounded-lg inline-block">
                <Image
                  src="/aspen-veterans-project-logo.png"
                  alt="Aspen Veterans Project - Gratitude Farm"
                  width={180}
                  height={72}
                />
              </div>
              <p className="!text-gray-300 mb-6 leading-relaxed font-medium">
                Aspen Veterans Project provides comprehensive sanctuary and lifelong reintegration support for combat veterans at our protected mountain retreat in southern New Mexico. We honor your service through dedicated care, multi-modal healing, and enduring brotherhood.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/programs" className="hover:text-white transition-colors">Programs</Link></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Crisis Resources - Always accessible */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">24/7 Crisis Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="tel:988" className="text-red-400 hover:text-red-300 transition-colors font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Crisis Line: 988
                  </a>
                </li>
                <li>
                  <a href="sms:838255" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Text: 838255
                  </a>
                </li>
                <li>
                  <a href="https://www.veteranscrisisline.net" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Online Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-800 pt-12 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="text-gray-400 mb-6">
                Get updates on programs, events, and resources for veterans
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} Gratitude Farm & Aspen Veterans Project. All rights reserved.
            </p>
            <p className="text-gray-500 mb-4">
              501(c)(3) Non-Profit Organization | Supporting our veterans with dignity, respect, and comprehensive care.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}