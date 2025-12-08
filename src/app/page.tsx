import { Header } from "@/components/Header";
import { CrisisFAB } from "@/components/CrisisFAB";
import { Phone, MessageCircle, Heart, Users, Home, ArrowRight, Shield, CheckCircle, Calendar, BookOpen, AlertCircle } from "lucide-react";
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
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                24/7 Crisis Support Available
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
                Supporting veterans through comprehensive decompression and reintegration programs.
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
                  <div className="text-3xl font-bold text-red-600">24/7</div>
                  <div className="text-sm font-medium text-gray-700">Crisis Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-sm font-medium text-gray-700">Free Services</div>
                </div>
              </div>

              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#crisis-support"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Get Help Now
                </a>
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

      {/* Crisis Support Section */}
      <section id="crisis-support" className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          {/* Alert Banner */}
          <div className="bg-red-600 text-white rounded-2xl p-8 mb-12 max-w-5xl mx-auto shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">In Crisis? You Are Not Alone.</h3>
                <p className="text-red-50 text-lg font-medium">
                  Immediate, confidential support is available right now. Trained professionals
                  who understand military service are standing by 24/7.
                </p>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 !text-red-900">
              Immediate Crisis Support
            </h2>
            <p className="text-xl font-semibold !text-red-800">
              If you or someone you know is in crisis, help is available 24/7.
              You are not alone.
            </p>
          </div>

          {/* Crisis Cards - Enhanced */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a
              href="tel:988"
              className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-red-200 hover:border-red-400 hover:scale-105 transform duration-300"
            >
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold !text-gray-900 mb-3 text-center">
                Veterans Crisis Line
              </h3>
              <p className="text-4xl font-bold !text-red-600 mb-4 text-center">
                988
              </p>
              <p className="!text-gray-800 text-center font-semibold mb-2">
                Press 1 for immediate support
              </p>
              <p className="!text-gray-700 text-center text-sm font-medium">
                Available 24/7/365
              </p>
            </a>

            <a
              href="sms:838255"
              className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-blue-200 hover:border-blue-400 hover:scale-105 transform duration-300"
            >
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold !text-gray-900 mb-3 text-center">
                Text Support
              </h3>
              <p className="text-4xl font-bold !text-blue-600 mb-4 text-center">
                838255
              </p>
              <p className="!text-gray-800 text-center font-semibold mb-2">
                24/7 confidential text support
              </p>
              <p className="!text-gray-700 text-center text-sm font-medium">
                Anonymous & secure
              </p>
            </a>

            <a
              href="https://www.veteranscrisisline.net/get-help-now/chat/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-green-200 hover:border-green-400 hover:scale-105 transform duration-300"
            >
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold !text-gray-900 mb-3 text-center">
                Online Chat
              </h3>
              <p className="text-2xl font-bold !text-green-600 mb-4 text-center">
                Start Chat Now
              </p>
              <p className="!text-gray-800 text-center font-semibold mb-2">
                Confidential support available
              </p>
              <p className="!text-gray-700 text-center text-sm font-medium">
                Instant connection
              </p>
            </a>
          </div>

          {/* Testimonial / Reassurance */}
          <div className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl p-10 shadow-xl border border-gray-200">
            <blockquote className="text-center">
              <p className="text-xl text-gray-800 italic mb-4 leading-relaxed font-medium">
                "When I called, I felt heard for the first time in years. They understood
                where I was coming from and helped me find hope again."
              </p>
              <footer className="text-sm text-gray-700 font-bold">
                - Anonymous Veteran, Colorado
              </footer>
            </blockquote>
          </div>

          {/* Statistics */}
          <div className="mt-12 text-center max-w-4xl mx-auto bg-white/90 rounded-2xl p-8 shadow-lg">
            <p className="text-red-900 font-bold text-2xl mb-3">
              Combatting the crisis: 29% of veterans face daily struggles with suicide ideation or homelessness.
            </p>
            <p className="text-red-800 text-lg font-bold">
              Together, we can change this statistic. Reach out today.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <Image
                src="/avp-logo.png"
                alt="AVP Logo"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <h2 className="text-5xl font-bold mb-6 !text-gray-900">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8" />
            <p className="text-xl !text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
              Gratitude Farm & Aspen Veterans Project provides a comprehensive sanctuary
              for veterans struggling with decompression and reintegration into civilian life.
              We honor your service through dedicated support, community, and pathways to healing.
            </p>
          </div>

          {/* Three Column Layout */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-10 rounded-2xl shadow-xl text-center border border-gray-200 hover:shadow-2xl transition-shadow hover:scale-105 transform duration-300">
              <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 !text-blue-900">Crisis Support</h3>
              <p className="!text-gray-800 leading-relaxed mb-4 font-medium">
                Immediate access to trained professionals who understand military service and the unique challenges veterans face.
              </p>
              <ul className="text-left space-y-2 text-sm font-semibold !text-gray-900">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>24/7 Crisis Line Access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Peer Support Matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Emergency Resources</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl text-center border border-gray-200 hover:shadow-2xl transition-shadow hover:scale-105 transform duration-300">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 !text-blue-900">Community</h3>
              <p className="!text-gray-800 leading-relaxed mb-4 font-medium">
                Connect with fellow veterans who share your experiences. Peer mentorship and support groups foster healing.
              </p>
              <ul className="text-left space-y-2 text-sm font-semibold !text-gray-900">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Weekly Support Groups</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Veteran Mentorship</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Family Support Services</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl text-center border border-gray-200 hover:shadow-2xl transition-shadow hover:scale-105 transform duration-300">
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Home className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 !text-blue-900">Sanctuary</h3>
              <p className="!text-gray-800 leading-relaxed mb-4 font-medium">
                A peaceful Colorado mountain retreat offering housing, job training, counseling, and pathways to stability.
              </p>
              <ul className="text-left space-y-2 text-sm font-semibold !text-gray-900">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Safe Housing Options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Job Training Programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Mental Health Counseling</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="bg-blue-900 rounded-3xl p-12 shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6 !text-white">Our Vision for the Future</h3>
              <p className="text-lg !text-blue-100 leading-relaxed font-medium">
                Creating a nationwide network of veteran sanctuaries where healing,
                growth, and reintegration are not just possible, but inevitable. Every veteran
                deserves a place to decompress, heal, and rebuild their life with dignity and support.
              </p>
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
              href="/community"
              className="bg-white !text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Join Our Community
              <Users className="w-5 h-5 !text-blue-900" />
            </Link>
            <Link
              href="/programs"
              className="bg-green-600 hover:bg-green-700 !text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5 !text-white" />
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