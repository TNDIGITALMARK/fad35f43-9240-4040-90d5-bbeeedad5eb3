import { Header } from "@/components/Header";
import { CrisisFAB } from "@/components/CrisisFAB";
import { Phone, MessageCircle, Heart, Users, Home, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <CrisisFAB />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                A Sanctuary for <span className="text-red-600">Veterans</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Supporting veterans through decompression and reintegration. You served with honor.
                Now let us serve you with the care and respect you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#crisis-support"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Get Help Now
                </a>
                <Link
                  href="/programs"
                  className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  View Programs
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/generated/hero-sanctuary.png"
                alt="Gratitude Farm sanctuary with mountain backdrop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Support Section */}
      <section id="crisis-support" className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-red-900">
              Immediate Crisis Support
            </h2>
            <p className="text-lg text-red-800">
              If you or someone you know is in crisis, help is available 24/7.
              You are not alone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a
              href="tel:988"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-red-200 hover:border-red-400"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                Veterans Crisis Line
              </h3>
              <p className="text-3xl font-bold text-red-600 mb-3 text-center">
                988
              </p>
              <p className="text-gray-600 text-center text-sm">
                Press 1 for immediate support
              </p>
            </a>

            <a
              href="sms:838255"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-blue-200 hover:border-blue-400"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                Text Support
              </h3>
              <p className="text-3xl font-bold text-blue-600 mb-3 text-center">
                838255
              </p>
              <p className="text-gray-600 text-center text-sm">
                24/7 confidential text support
              </p>
            </a>

            <a
              href="https://www.veteranscrisisline.net/get-help-now/chat/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-green-200 hover:border-green-400"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                Online Chat
              </h3>
              <p className="text-lg font-semibold text-green-600 mb-3 text-center">
                Start Chat
              </p>
              <p className="text-gray-600 text-center text-sm">
                Confidential support available now
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-red-900 font-semibold text-lg">
              Combatting the crisis: 29% of veterans face daily struggles with suicide ideation or homelessness.
            </p>
            <p className="text-red-800 mt-2">
              Together, we can change this statistic. Reach out today.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Gratitude Farm & Aspen Veterans Project provides a comprehensive sanctuary
              for veterans struggling with decompression and reintegration into civilian life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-200">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Crisis Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Immediate access to trained professionals who understand military service and the unique challenges veterans face.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-200">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Community</h3>
              <p className="text-gray-700 leading-relaxed">
                Connect with fellow veterans who share your experiences. Peer mentorship and support groups foster healing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-gray-200">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Home className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Sanctuary</h3>
              <p className="text-gray-700 leading-relaxed">
                A peaceful Colorado mountain retreat offering housing, job training, counseling, and pathways to stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            You Served with Honor. Let Us Honor Your Service.
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you need immediate support, are looking for community connection,
            or want to learn about our sanctuary programs, we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/community"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              Join Our Community
              <Users className="w-5 h-5" />
            </Link>
            <Link
              href="/programs"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
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