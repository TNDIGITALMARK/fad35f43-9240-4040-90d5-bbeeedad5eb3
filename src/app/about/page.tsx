import { Header } from "@/components/Header";
import { CrisisFAB } from "@/components/CrisisFAB";
import { Heart, Award, Target, Users, Shield, Leaf, Mountain, CheckCircle, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic'

export const metadata = {
  title: "About Us - Founder Erica Angell | Aspen Veterans Project",
  description: "Learn about Erica Angell, founder of the Aspen Veterans Project, and her 30+ years of clinical experience supporting veterans through trauma recovery and reintegration.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CrisisFAB />

      {/* Hero Section - Founder Introduction */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <Heart className="w-4 h-4" />
                30+ Years of Clinical Excellence
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight !text-gray-900">
                Meet{" "}
                <span className="!text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-green-700">
                  Erica Angell
                </span>
              </h1>

              <p className="text-2xl font-bold !text-blue-900">
                Founder & Principal Architect
              </p>

              <p className="text-xl !text-gray-800 leading-relaxed font-medium">
                Bringing more than three decades of clinical experience across multimodal somatic,
                energetic, and trauma-informed therapeutic practices to serve those who served.
              </p>

              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
                  <div className="text-3xl font-bold text-blue-900">30+</div>
                  <div className="text-sm font-medium text-gray-700">Years Experience</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm font-medium text-gray-700">Veterans Served</div>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/generated/hero-sanctuary.png"
                  alt="Erica Angell - Founder of Aspen Veterans Project"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 !text-gray-900">
              Clinical Expertise & Background
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-xl !text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium">
              Erica Angell's approach integrates somatic regulation, therapeutic bodywork, energy-based
              modalities, and evidence-informed coaching, enabling her to address the full spectrum of
              physiological, emotional, cognitive, and relational effects that often follow combat service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 !text-blue-900">Reiki Practitioner</h3>
              <p className="!text-gray-800 leading-relaxed font-medium">
                Advanced energy healing techniques for deep restoration and balance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 !text-green-900">Licensed Massage Therapist</h3>
              <p className="!text-gray-800 leading-relaxed font-medium">
                Therapeutic bodywork addressing trauma held in the physical body.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 !text-purple-900">Energy Healer</h3>
              <p className="!text-gray-800 leading-relaxed font-medium">
                Holistic healing modalities integrating mind, body, and spirit.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 !text-orange-900">Certified Life Coach</h3>
              <p className="!text-gray-800 leading-relaxed font-medium">
                Evidence-informed coaching for sustainable life transformation.
              </p>
            </div>
          </div>

          {/* Experience Highlight */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-12 shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6 !text-white">
                A Long History of Clinical Engagement
              </h3>
              <p className="text-lg !text-blue-100 leading-relaxed font-medium mb-8">
                With extensive direct clinical experience supporting individuals through acute stress,
                trauma, and long-term recovery challenges, Erica brings unparalleled depth and compassion
                to every veteran she serves. Her multimodal approach addresses not just symptoms, but the
                root causes of post-service struggles.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">Acute Stress Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">Trauma Recovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">Long-term Healing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Gap That Inspired AVP */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-blue-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 !text-gray-900">
                Identifying the Critical Gap
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
            </div>

            <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-2xl border border-gray-200">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl !text-gray-800 leading-relaxed font-medium mb-6">
                  Through years of supporting veterans, Erica identified a{" "}
                  <span className="font-bold !text-red-600">systemic gap</span>:{" "}
                  while military systems are highly effective at producing disciplined combatants,
                  they lack structured, clinically grounded pathways for decompression, reintegration,
                  and restoration after service.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-10">
                  <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-600">
                    <h3 className="text-2xl font-bold mb-4 !text-red-900 flex items-center gap-3">
                      <span className="text-4xl">⚠️</span>
                      The Problem
                    </h3>
                    <ul className="space-y-3 !text-gray-800 font-medium">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">•</span>
                        <span>No structured decompression pathways</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">•</span>
                        <span>Lack of clinical reintegration support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">•</span>
                        <span>Insufficient trauma-informed care</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">•</span>
                        <span>Veterans struggle alone with invisible wounds</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-600">
                    <h3 className="text-2xl font-bold mb-4 !text-green-900 flex items-center gap-3">
                      <span className="text-4xl">✓</span>
                      The Solution
                    </h3>
                    <ul className="space-y-3 !text-gray-800 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Individualized care plans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Measurable outcomes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Trauma-informed methodology</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Lifelong support network</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-900 rounded-2xl p-8 text-center">
                  <p className="text-2xl font-bold !text-white leading-relaxed">
                    "Aspen Veteran's Project (AVP) was created to fill this gap with individualized,
                    measurable, trauma-informed care designed specifically for veterans transitioning
                    back into civilian life."
                  </p>
                  <p className="text-blue-200 mt-4 font-semibold">- Erica Angell, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 !text-gray-900">
              Leadership & Organizational Vision
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-xl !text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium">
              Erica leads the organization with a commitment to measurable, client-centered,
              evidence-informed outcomes, ensuring every veteran receives structured support capable
              of enabling stable reintegration into personal, family, and community life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 !text-blue-900">
                Organizational Strategy & Growth
              </h3>
              <p className="!text-gray-800 leading-relaxed font-medium">
                Developing scalable models for veteran support that can serve communities nationwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 !text-green-900">
                Clinical Program Design
              </h3>
              <p className="!text-gray-800 leading-relaxed font-medium">
                Creating evidence-based programs that address the unique needs of combat veterans.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 !text-purple-900">
                Intake & Assessment
              </h3>
              <p className="!text-gray-800 leading-relaxed font-medium">
                Comprehensive screening processes ensuring personalized care for each veteran.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 !text-red-900">
                Staff Supervision & Training
              </h3>
              <p className="!text-gray-800 leading-relaxed font-medium">
                Maintaining the highest standards of trauma-informed care across all team members.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 !text-orange-900">
                Quality Assurance
              </h3>
              <p className="!text-gray-800 leading-relaxed font-medium">
                Ensuring clinical fidelity and therapeutic integrity across all program elements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 !text-teal-900">
                External Partnerships
              </h3>
              <p className="!text-gray-800 leading-relaxed font-medium">
                Building collaborative networks with stakeholders to expand veteran support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Philosophy */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 !text-white">
              A Personal Commitment
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8" />
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 lg:p-16 border border-white/20">
            <blockquote className="text-center">
              <p className="text-2xl lg:text-3xl !text-white leading-relaxed font-medium mb-8 italic">
                "Erica Angell has dedicated her 30+ year career to helping individuals—especially
                veterans—recover from trauma, life transitions, and chronic dysregulation. Her clinical
                expertise and deep awareness of the missing reintegration systems within the U.S. military
                inspired the founding of AVP."
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-1 bg-white/40" />
                <p className="text-xl !text-blue-200 font-semibold">
                  Leading with commitment to measurable, client-centered, evidence-informed outcomes
                </p>
              </div>
            </blockquote>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 !text-white">30+</div>
              <div className="text-blue-200 text-lg font-medium">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 !text-white">100%</div>
              <div className="text-blue-200 text-lg font-medium">Dedicated to Veterans</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-3 !text-white">∞</div>
              <div className="text-blue-200 text-lg font-medium">Lifelong Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 !text-gray-900">
            Experience the Difference of Expert, Compassionate Care
          </h2>
          <p className="text-xl mb-8 !text-gray-800 font-medium leading-relaxed">
            Under Erica's leadership, AVP provides the structured, evidence-informed support
            that veterans deserve. Whether you need immediate crisis support or are ready to
            begin your journey toward healing, we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#crisis-support"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Help Now
            </a>
            <Link
              href="/programs"
              className="bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Explore Our Programs
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
                  src="/avp-logo.png"
                  alt="Aspen Veterans Project - Gratitude Farm"
                  width={180}
                  height={72}
                />
              </div>
              <p className="!text-gray-300 mb-6 leading-relaxed font-medium">
                Gratitude Farm & Aspen Veterans Project provides comprehensive sanctuary
                and support for veterans across Colorado. We honor your service through dedicated care and community.
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
                    <MessageCircle className="w-4 h-4" />
                    Text: 838255
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
