import { Header } from "@/components/Header";
import { CrisisFAB } from "@/components/CrisisFAB";
import {
  Briefcase,
  Home,
  Heart,
  GraduationCap,
  Users,
  MapPin,
  Check,
  Download,
  ArrowRight,
  Building
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic'

const programs = [
  {
    icon: Briefcase,
    title: "Career Bridge Initiative",
    description: "Comprehensive job placement support with veteran-friendly employers",
    features: [
      "Resume building and interview preparation",
      "Skills translation from military to civilian",
      "Direct connections with hiring partners",
      "Ongoing career mentorship"
    ],
    stats: { label: "Placement Rate", value: "78%" },
    color: "blue"
  },
  {
    icon: Home,
    title: "Housing & Stability Support",
    description: "Secure housing assistance and pathways to stable living arrangements",
    features: [
      "Temporary housing at Gratitude Farm sanctuary",
      "Rental assistance and deposit support",
      "Homeownership preparation programs",
      "Long-term housing navigation"
    ],
    stats: { label: "Veterans Housed", value: "150+" },
    color: "green"
  },
  {
    icon: Heart,
    title: "Mental Health & Wellness",
    description: "Comprehensive mental health support tailored for veterans",
    features: [
      "Individual counseling with veteran specialists",
      "PTSD and trauma-informed care",
      "Group therapy sessions",
      "Holistic wellness programs"
    ],
    stats: { label: "Counseling Hours", value: "10K+" },
    color: "red"
  },
  {
    icon: GraduationCap,
    title: "Education & Skills Training",
    description: "Educational resources and vocational training programs",
    features: [
      "GI Bill navigation and support",
      "Vocational skills training",
      "Certification programs",
      "College application assistance"
    ],
    stats: { label: "Certifications Earned", value: "200+" },
    color: "blue"
  },
  {
    icon: Users,
    title: "Family Support Services",
    description: "Resources for veterans and their families during reintegration",
    features: [
      "Family counseling sessions",
      "Relationship support programs",
      "Childcare assistance",
      "Educational workshops for families"
    ],
    stats: { label: "Families Served", value: "300+" },
    color: "green"
  }
];

const sanctuaryFeatures = [
  "24 private resident rooms with shared communal spaces",
  "Daily individual and group counseling sessions",
  "Job training workshops and career development",
  "Recreational therapy and outdoor activities",
  "Nutritious meals and wellness programs",
  "Transportation assistance to appointments"
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
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Comprehensive <span className="text-green-600">Support Programs</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                From crisis intervention to long-term stability, our programs provide
                veterans with the resources, support, and pathways they need to thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#programs"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  Explore Programs
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#enroll"
                  className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  Enroll Today
                </a>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/generated/programs-services.png"
                alt="Veteran receiving skills training and job placement support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="programs" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive support services designed specifically for veterans and their families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const colorClasses = {
                blue: "bg-blue-100 text-blue-600",
                green: "bg-green-100 text-green-600",
                red: "bg-red-100 text-red-600"
              };

              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 ${colorClasses[program.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>

                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{program.stats.label}</p>
                        <p className="text-2xl font-bold text-blue-900">{program.stats.value}</p>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sanctuary Facility */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-green-600">Gratitude Farm</span> Sanctuary
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Our peaceful Colorado mountain sanctuary provides a safe, supportive environment
                where veterans can heal, learn, and rebuild their lives.
              </p>

              <div className="space-y-4 mb-8">
                {sanctuaryFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Location</h4>
                    <p className="text-gray-700">
                      Nestled in the Colorado mountains, our sanctuary offers breathtaking views,
                      fresh mountain air, and a peaceful environment conducive to healing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Facility Capacity</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Building className="w-6 h-6 text-blue-600" />
                    <span className="font-semibold text-gray-700">Resident Capacity</span>
                  </div>
                  <span className="text-2xl font-bold text-blue-900">24</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-green-600" />
                    <span className="font-semibold text-gray-700">Staff Members</span>
                  </div>
                  <span className="text-2xl font-bold text-green-900">12+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-red-600" />
                    <span className="font-semibold text-gray-700">Success Rate</span>
                  </div>
                  <span className="text-2xl font-bold text-red-900">85%</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section id="enroll" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How to Enroll</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Getting started is simple. Follow these four steps to begin your journey with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {enrollmentSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200 text-center h-full">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < enrollmentSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Our team is standing by to answer your questions and help you access the support you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Application
              </button>
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">
                Contact Enrollment Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Download helpful guides and resources for veterans and their families.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <Download className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Program Guide</h3>
              <p className="text-gray-600 text-sm mb-4">Comprehensive overview of all available programs and services</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                Download PDF <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <Download className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">VA Benefits Guide</h3>
              <p className="text-gray-600 text-sm mb-4">Navigate VA benefits and healthcare services effectively</p>
              <button className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center gap-1">
                Download PDF <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <Download className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Crisis Resources</h3>
              <p className="text-gray-600 text-sm mb-4">Emergency contacts and immediate support resources</p>
              <button className="text-red-600 hover:text-red-700 font-semibold text-sm flex items-center gap-1">
                Download PDF <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Gratitude Farm</h3>
              <p className="text-gray-400">
                A sanctuary for veterans in Colorado, providing comprehensive support for reintegration and healing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/programs" className="hover:text-white transition-colors">Programs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Crisis Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="tel:988" className="hover:text-white transition-colors">Veterans Crisis Line: 988</a></li>
                <li><a href="sms:838255" className="hover:text-white transition-colors">Text: 838255</a></li>
                <li><a href="https://www.veteranscrisisline.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Online Chat</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Gratitude Farm & Aspen Veterans Project. All rights reserved.</p>
            <p className="mt-2">Supporting our veterans with dignity, respect, and comprehensive care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
