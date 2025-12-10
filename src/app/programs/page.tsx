import { Header } from "@/components/Header";
import { CrisisFAB } from "@/components/CrisisFAB";
import {
  Heart,
  Users,
  MapPin,
  Check,
  Download,
  ArrowRight,
  Building,
  Target,
  Shield,
  Award,
  Leaf,
  Mountain,
  BookOpen,
  Calendar,
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic'

const programComponents = [
  {
    icon: Target,
    title: "Individualized Care Plans",
    description: "Each veteran receives an assessment-based, customized reintegration plan",
    features: [
      "Comprehensive intake assessment",
      "Service history and trauma profile evaluation",
      "Symptom mapping and goal setting",
      "Personalized reintegration roadmap",
      "Addressing physiological, emotional, and cognitive needs"
    ],
    color: "blue"
  },
  {
    icon: Heart,
    title: "Multi-Modal Healing",
    description: "Integrated therapeutic approaches for comprehensive healing",
    features: [
      "Somatic regulation techniques",
      "Therapeutic touch and bodywork",
      "Energy-based modalities (Reiki)",
      "Trauma-aware life coaching",
      "Nature immersion and physical challenge",
      "Creative expression and philosophical dialogue"
    ],
    color: "green"
  },
  {
    icon: Shield,
    title: "Trauma-Informed Care",
    description: "Safety, choice, trust, collaboration, and empowerment guide every interaction",
    features: [
      "Physical and emotional safety protocols",
      "Veteran autonomy and choice",
      "Collaborative care planning",
      "Transparent communication",
      "Skill-building and empowerment focus",
      "Culturally respectful practices"
    ],
    color: "purple"
  },
  {
    icon: Award,
    title: "Outcome-Focused",
    description: "Measurable goals, trackable progress, and long-term reintegration markers",
    features: [
      "Individualized measurable goals",
      "Standardized outcome metrics",
      "Periodic reassessment and adjustments",
      "Documentation of symptom reduction",
      "Long-term reintegration indicators"
    ],
    color: "orange"
  },
  {
    icon: Users,
    title: "Lifelong Support",
    description: "Continued peer support, mentor check-ins, and reunions anchored to the land",
    features: [
      "Ongoing cohort support groups",
      "Regular mentor check-ins",
      "Annual reunions at the sanctuary",
      "Continued nature-based grounding opportunities",
      "Sustained network of veteran peers"
    ],
    color: "teal"
  }
];

const sanctuaryFeatures = [
  "Protected mountain sanctuary in southern New Mexico",
  "Deep nature immersion and wilderness healing",
  "Physical and creative challenge programs",
  "Philosophical dialogue and group processing",
  "Peer bonding and team rebuilding",
  "Multi-modal healing in a safe environment"
];

const journeyPhases = [
  {
    icon: Target,
    title: "Preparation",
    description: "Intention-setting and readiness assessment before immersion"
  },
  {
    icon: Mountain,
    title: "Immersion",
    description: "Deep nature connection and multi-modal healing at the sanctuary"
  },
  {
    icon: BookOpen,
    title: "Dialogue",
    description: "Philosophical inquiry, reflection, and group processing"
  },
  {
    icon: Calendar,
    title: "Challenge",
    description: "Physical and creative growth through structured activities"
  },
  {
    icon: Users,
    title: "Connection",
    description: "Rebuilding trust and forming lifelong bonds with peers"
  },
  {
    icon: Heart,
    title: "Purpose",
    description: "Renewed self-discovery and ongoing support network"
  }
];

const enrollmentSteps = [
  {
    step: 1,
    title: "Initial Contact",
    description: "Reach out via phone, email, or our online form to express interest in our programs."
  },
  {
    step: 2,
    title: "Intake Assessment",
    description: "Complete a confidential assessment to understand your needs and match you with appropriate services."
  },
  {
    step: 3,
    title: "Program Matching",
    description: "Our team recommends specific programs and creates a personalized support plan for you."
  },
  {
    step: 4,
    title: "Enrollment & Support",
    description: "Begin your program with dedicated case management and ongoing support throughout your journey."
  }
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CrisisFAB />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-6">
                <Leaf className="w-4 h-4" />
                Evidence-Informed, Trauma-Aware Care
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight !text-gray-900">
                The AVP{" "}
                <span className="!text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-900">
                  Reintegration Model
                </span>
              </h1>
              <p className="text-xl !text-gray-800 mb-8 leading-relaxed font-medium">
                A comprehensive, individualized pathway from survival to thriving through multi-modal
                healing, nature immersion, and lifelong peer support on our protected mountain sanctuary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#program-model"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Explore Our Model
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#enroll"
                  className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Begin Your Journey
                </a>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/generated/hero-sanctuary.png"
                alt="Aspen Veterans Project mountain sanctuary for healing and reintegration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Program Model Components */}
      <section id="program-model" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 !text-gray-900">
              Five Pillars of the AVP Model
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6" />
            <p className="text-xl !text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium">
              Our evidence-informed program is built on five interconnected pillars, each designed
              to support veterans through comprehensive, lasting reintegration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programComponents.map((component, index) => {
              const Icon = component.icon;
              const colorClasses = {
                blue: "bg-blue-600",
                green: "bg-green-600",
                purple: "bg-purple-600",
                orange: "bg-orange-600",
                teal: "bg-teal-600"
              };

              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
                  <div className={`w-16 h-16 ${colorClasses[component.color as keyof typeof colorClasses]} rounded-full flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold !text-gray-900 mb-3">{component.title}</h3>
                  <p className="!text-gray-700 mb-6 leading-relaxed font-medium">{component.description}</p>

                  <ul className="space-y-3">
                    {component.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 !text-gray-800">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Phases */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 !text-white">
              The Reintegration Journey
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6" />
            <p className="text-xl !text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
              Veterans move through six interconnected phases, each building on the last to create
              lasting transformation and lifelong connection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journeyPhases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold !text-white mb-3">{phase.title}</h3>
                  <p className="!text-blue-100 leading-relaxed font-medium">{phase.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white/20 backdrop-blur-lg rounded-3xl p-10 border border-white/30 text-center">
            <p className="text-2xl !text-white leading-relaxed font-semibold">
              This journey culminates in renewed purpose and the rediscovery of self. AVP is not
              a retreat; it is the gateway to a lifelong circle of support, including peer groups,
              reunions, mentorship, and ongoing connection rooted in the sanctuary land.
            </p>
          </div>
        </div>
      </section>

      {/* Sanctuary Facility */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 !text-gray-900">
              The Sanctuary
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6" />
            <p className="text-xl !text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium">
              A protected mountain sanctuary in southern New Mexico where veterans find safety, connection,
              and the space to heal through deep nature immersion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-6 mb-8">
                {sanctuaryFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="!text-gray-800 font-medium text-lg">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-900 rounded-2xl p-8 text-white">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold !text-white mb-3 text-xl">Southern New Mexico</h4>
                    <p className="!text-blue-100 leading-relaxed font-medium">
                      Nestled in the mountains of southern New Mexico, our sanctuary offers breathtaking views,
                      fresh mountain air, and a peaceful environment designed specifically for healing and reintegration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/generated/hero-sanctuary.png"
                alt="Mountain sanctuary in southern New Mexico"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-2xl border border-gray-200">
            <h3 className="text-3xl font-bold mb-8 !text-gray-900 text-center">
              The Aspen Grove Metaphor
            </h3>
            <p className="text-xl !text-gray-800 leading-relaxed font-medium text-center max-w-4xl mx-auto mb-8">
              Like the aspen grove—where individual trees appear separate above ground but are connected
              through a vast root system beneath the surface—veterans at AVP discover they are part of
              an interconnected community. This living metaphor reflects our core belief: veterans may
              appear separate, but beneath the surface they are connected through shared roots, shared
              experience, and a shared pathway to healing.
            </p>
            <div className="flex justify-center">
              <Image
                src="https://77e93381c682217fcef0325458269ad5.r2.cloudflarestorage.com/phoenix/users/DxnmDi7kzHNtCxrnSWG6FJ4Bplz2/projects/fad35f43-9240-4040-90d5-bbeeedad5eb3/imageContext/e022b51c-a87f-482d-a64e-5aa92c656079.png"
                alt="Aspen Veterans Project Logo"
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section id="enroll" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 !text-gray-900">Begin Your Journey</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-xl !text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
              Starting with AVP is straightforward. Our intake process ensures you receive personalized
              care from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {enrollmentSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-blue-200 text-center h-full hover:shadow-2xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold !text-gray-900 mb-3">{item.title}</h3>
                  <p className="!text-gray-700 text-sm leading-relaxed font-medium">{item.description}</p>
                </div>
                {index < enrollmentSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 !text-white">Ready to Begin Your Reintegration?</h3>
            <p className="text-xl mb-8 !text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
              Our team is ready to guide you through the intake process and answer any questions
              about the AVP program model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white !text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                <Download className="w-5 h-5 !text-blue-900" />
                Download Information Packet
              </button>
              <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
                Contact Our Team
              </button>
            </div>
          </div>
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
                  src="https://77e93381c682217fcef0325458269ad5.r2.cloudflarestorage.com/phoenix/users/DxnmDi7kzHNtCxrnSWG6FJ4Bplz2/projects/fad35f43-9240-4040-90d5-bbeeedad5eb3/imageContext/e022b51c-a87f-482d-a64e-5aa92c656079.png"
                  alt="Aspen Veterans Project - Gratitude Farm"
                  width={180}
                  height={72}
                />
              </div>
              <p className="!text-gray-300 mb-6 leading-relaxed font-medium">
                Aspen Veterans Project provides comprehensive sanctuary and lifelong reintegration support for combat veterans at our protected mountain retreat in southern New Mexico. We honor your service through dedicated care, multi-modal healing, and enduring brotherhood.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/programs" className="hover:text-white transition-colors">Programs</Link></li>
              </ul>
            </div>

            {/* Crisis Resources */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">24/7 Crisis Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="tel:988" className="text-red-400 hover:text-red-300 transition-colors font-semibold flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Crisis Line: 988
                  </a>
                </li>
                <li>
                  <a href="sms:838255" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Text: 838255
                  </a>
                </li>
                <li>
                  <a href="https://www.veteranscrisisline.net" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Online Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} Gratitude Farm & Aspen Veterans Project. All rights reserved.
            </p>
            <p className="text-gray-500">
              501(c)(3) Non-Profit Organization | Supporting our veterans with dignity, respect, and comprehensive care.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
