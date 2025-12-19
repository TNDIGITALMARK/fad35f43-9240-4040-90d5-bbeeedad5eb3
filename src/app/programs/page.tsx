import { Header } from "@/components/Header";
import { CrisisFAB } from "@/components/CrisisFAB";
import {
  Heart,
  Users,
  MapPin,
  ArrowRight,
  Target,
  Shield,
  Leaf,
  Mountain,
  CheckCircle,
  Home,
  Laptop,
  Phone,
  Video,
  Calendar,
  Mail
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic'

const programStages = [
  {
    stage: 1,
    title: "Evaluation",
    icon: Target,
    color: "blue",
    description: "Assessment and intake to understand your unique needs",
    details: [
      "Can take place at the end of your service time",
      "Come directly from service to us if possible",
      "Electronic evaluation available if in-person is not feasible",
      "Comprehensive assessment of your service history and current needs",
      "Personalized reintegration roadmap development"
    ],
    timing: "Before or immediately after service separation"
  },
  {
    stage: 2,
    title: "Arrival & Tailored Program",
    icon: Mountain,
    color: "green",
    description: "Immersion at the sanctuary with personalized healing modalities",
    details: [
      "Arrival at our protected mountain sanctuary in southern New Mexico",
      "Exploration of various healing modalities suited to your needs",
      "Program tailored specifically for your individual requirements",
      "Multi-modal healing: somatic work, energy-based care, nature immersion",
      "Trauma-informed coaching and peer support",
      "Physical challenge and creative expression opportunities"
    ],
    timing: "Duration based on individual needs"
  },
  {
    stage: 3,
    title: "Familial Connections",
    icon: Home,
    color: "purple",
    description: "Healing family relationships and preparing for reintegration",
    details: [
      "Identifying familial connections that may need support",
      "Therapeutic assistance for family members",
      "Support for moving forward after divorce, child custody, or family challenges",
      "Family members can visit the sanctuary for guided healing sessions",
      "Return home together with renewed connections",
      "Connection to employment opportunities and health resources in your community"
    ],
    timing: "When ready for family involvement"
  },
  {
    stage: 4,
    title: "Ongoing Support",
    icon: Heart,
    color: "teal",
    description: "Lifelong connection and continued resources",
    details: [
      "Return to the sanctuary for periodic retreats",
      "Temporary stays available if additional support is needed",
      "Email support and regular check-ins",
      "Zoom meetings and virtual group sessions",
      "Online peer support groups",
      "Annual reunions and community events"
    ],
    timing: "Lifelong availability"
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
                The Four Stages of{" "}
                <span className="!text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-900">
                  AVP Reintegration
                </span>
              </h1>
              <p className="text-xl !text-gray-800 mb-8 leading-relaxed font-medium">
                A comprehensive, individualized pathway guiding veterans through evaluation, healing,
                family reconnection, and lifelong support at our protected mountain sanctuary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#four-stages"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Explore the Four Stages
                  <ArrowRight className="w-5 h-5" />
                </a>
                <Link
                  href="/apply"
                  className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Begin Your Journey
                </Link>
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

      {/* Four Stages Section */}
      <section id="four-stages" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 !text-gray-900">
              The Four Stages of the AVP Program
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6" />
            <p className="text-xl !text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium">
              Our evidence-informed program guides veterans through four interconnected stages,
              each designed to support comprehensive, lasting reintegration.
            </p>
          </div>

          <div className="space-y-12">
            {programStages.map((stage, index) => {
              const Icon = stage.icon;
              const colorClasses = {
                blue: { bg: "bg-blue-600", light: "bg-blue-50", border: "border-blue-200", text: "text-blue-900" },
                green: { bg: "bg-green-600", light: "bg-green-50", border: "border-green-200", text: "text-green-900" },
                purple: { bg: "bg-purple-600", light: "bg-purple-50", border: "border-purple-200", text: "text-purple-900" },
                teal: { bg: "bg-teal-600", light: "bg-teal-50", border: "border-teal-200", text: "text-teal-900" }
              };
              const colors = colorClasses[stage.color as keyof typeof colorClasses];

              return (
                <div key={index} className={`${colors.light} rounded-3xl p-8 lg:p-12 border-2 ${colors.border} shadow-lg`}>
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Stage Number & Icon */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-4 mb-4 lg:mb-0">
                        <div className={`w-20 h-20 ${colors.bg} rounded-full flex items-center justify-center shadow-lg`}>
                          <span className="text-3xl font-bold text-white">{stage.stage}</span>
                        </div>
                        <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center shadow-lg lg:hidden`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className={`hidden lg:flex w-16 h-16 ${colors.bg} rounded-full items-center justify-center shadow-lg mt-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className={`text-3xl font-bold mb-3 ${colors.text}`}>
                        {stage.title}
                      </h3>
                      <p className="text-xl !text-gray-700 mb-6 font-medium">
                        {stage.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {stage.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                            <span className="!text-gray-800 font-medium">{detail}</span>
                          </div>
                        ))}
                      </div>

                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} text-white font-semibold text-sm`}>
                        <Calendar className="w-4 h-4" />
                        {stage.timing}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Visualization */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 !text-white">
              Your Complete Reintegration Journey
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6" />
            <p className="text-xl !text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
              From your first evaluation through lifelong support, AVP walks with you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {programStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all h-full">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <span className="text-sm font-bold text-blue-200 uppercase tracking-wider">Stage {stage.stage}</span>
                      <h3 className="text-xl font-bold !text-white mt-2 mb-3">{stage.title}</h3>
                      <p className="!text-blue-100 text-sm leading-relaxed font-medium">{stage.description}</p>
                    </div>
                  </div>
                  {index < programStages.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-white/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white/20 backdrop-blur-lg rounded-3xl p-10 border border-white/30 text-center">
            <p className="text-2xl !text-white leading-relaxed font-semibold">
              AVP is not a retreat—it is a permanent reintegration pathway. We honor your service by providing
              the comprehensive support needed to return to a life of purpose, connection, and stability.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Support Details */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 !text-gray-900">
              Ongoing Support Options
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-6" />
            <p className="text-xl !text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium">
              Stage 4 provides multiple avenues for continued connection and support, ensuring you're never alone on your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-teal-50 p-8 rounded-2xl border-2 border-teal-200 shadow-lg">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold !text-teal-900 mb-3">Sanctuary Retreats</h3>
              <p className="!text-gray-700 leading-relaxed font-medium">
                Return to the sanctuary for periodic retreats to reconnect with nature, peers, and yourself.
                Retreats are available throughout the year.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-200 shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold !text-blue-900 mb-3">Temporary Returns</h3>
              <p className="!text-gray-700 leading-relaxed font-medium">
                If you need additional assistance at any time, you can return to the sanctuary
                for temporary periods of intensive support.
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl border-2 border-purple-200 shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold !text-purple-900 mb-3">Email Support</h3>
              <p className="!text-gray-700 leading-relaxed font-medium">
                Stay connected through regular email check-ins with our staff and access to resources
                whenever you need them.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200 shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold !text-green-900 mb-3">Zoom Meetings</h3>
              <p className="!text-gray-700 leading-relaxed font-medium">
                Participate in virtual one-on-one sessions and group meetings from anywhere,
                maintaining connection with your support network.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 shadow-lg">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold !text-orange-900 mb-3">Peer Support Groups</h3>
              <p className="!text-gray-700 leading-relaxed font-medium">
                Join online peer support groups to connect with fellow veterans who understand
                your journey and share in your continued growth.
              </p>
            </div>

            <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-200 shadow-lg">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold !text-red-900 mb-3">Annual Reunions</h3>
              <p className="!text-gray-700 leading-relaxed font-medium">
                Gather annually with your cohort and the broader AVP community for reunions
                that strengthen lifelong bonds.
              </p>
            </div>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 !text-white">
            Ready to Begin Your Reintegration Journey?
          </h2>
          <p className="text-xl mb-8 !text-blue-100 font-medium leading-relaxed">
            Our team is ready to guide you through the evaluation process and answer any questions
            about the AVP four-stage program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="bg-white !text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5 !text-blue-900" />
              Apply Now
            </Link>
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Contact Our Team
            </Link>
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
                    <Phone className="w-4 h-4" />
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
