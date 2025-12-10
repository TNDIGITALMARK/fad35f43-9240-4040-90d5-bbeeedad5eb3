import { Header } from "@/components/Header";
import { CrisisFAB } from "@/components/CrisisFAB";
import { Users, MessageSquare, Heart, Calendar, UserPlus, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'force-dynamic'

// Mock mentor profiles
const mentors = [
  {
    name: "Mike Torres",
    branch: "Marine Corps",
    specialty: "Combat Veteran & Peer Mentor",
    yearsPostService: "5 years post-service",
    description: "Served 2 tours in Afghanistan. Now helping fellow Marines and veterans navigate civilian life with compassion and understanding.",
    availability: "Available"
  },
  {
    name: "Sarah Chen",
    branch: "Army",
    specialty: "Medical Veteran & PTSD Support",
    yearsPostService: "8 years post-service",
    description: "Army nurse with extensive experience in trauma care. Specializes in PTSD support and family advocacy programs.",
    availability: "Available"
  },
  {
    name: "Robert Williams",
    branch: "Navy",
    specialty: "Career Transition Coordinator",
    yearsPostService: "15 years post-service",
    description: "Retired Navy Chief with expertise in job placement and career development for transitioning veterans.",
    availability: "Available"
  }
];

const supportGroups = [
  {
    title: "Combat Veterans Support Circle",
    schedule: "Tuesdays & Thursdays, 7:00 PM MT",
    format: "Virtual & In-Person",
    participants: "12-15 active members",
    focus: "Processing combat experiences, PTSD management, peer support"
  },
  {
    title: "Family Reintegration Group",
    schedule: "Wednesdays, 6:00 PM MT",
    format: "Virtual",
    participants: "20+ families",
    focus: "Supporting families through veteran reintegration challenges"
  },
  {
    title: "Career Transition Workshop",
    schedule: "Mondays, 5:00 PM MT",
    format: "In-Person (Sanctuary)",
    participants: "8-10 veterans",
    focus: "Resume building, interview skills, job placement support"
  }
];

const successStories = [
  {
    name: "James M.",
    branch: "Army Veteran",
    story: "After struggling with PTSD for 3 years, I found hope through the peer mentorship program. My mentor understood what I was going through because he'd been there. Today, I'm employed, stable, and paying it forward by mentoring others.",
    outcome: "Now employed and mentoring others"
  },
  {
    name: "Maria R.",
    branch: "Air Force Veteran",
    story: "The family support group saved my marriage. My spouse and I learned how to communicate again, and I found the tools to manage my anxiety. Gratitude Farm gave us our life back.",
    outcome: "Restored family relationships"
  }
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CrisisFAB />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight !text-gray-900">
                Connect with <span className="!text-blue-600">Fellow Veterans</span>
              </h1>
              <p className="text-xl !text-gray-800 mb-8 leading-relaxed font-medium">
                You don't have to face the challenges of reintegration alone. Join a community
                of veterans who understand your journey and are here to support you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#mentorship"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-5 h-5" />
                  Find a Mentor
                </a>
                <a
                  href="#support-groups"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Join a Group
                </a>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/generated/community-support.png"
                alt="Veterans supporting each other in community space"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold !text-blue-600 mb-2">150+</div>
              <div className="!text-gray-800 font-bold">Active Mentors</div>
            </div>
            <div>
              <div className="text-5xl font-bold !text-green-600 mb-2">24/7</div>
              <div className="!text-gray-800 font-bold">Support Available</div>
            </div>
            <div>
              <div className="text-5xl font-bold !text-red-600 mb-2">500+</div>
              <div className="!text-gray-800 font-bold">Veterans Connected</div>
            </div>
            <div>
              <div className="text-5xl font-bold !text-blue-900 mb-2">12</div>
              <div className="!text-gray-800 font-bold">Support Groups</div>
            </div>
          </div>
        </div>
      </section>

      {/* Peer Mentorship Section */}
      <section id="mentorship" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 !text-gray-900">Peer Mentorship Network</h2>
            <p className="text-xl !text-gray-800 max-w-3xl mx-auto font-medium">
              Connect one-on-one with veterans who have successfully navigated reintegration
              and are dedicated to helping others on the same journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{mentor.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{mentor.branch}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-2">{mentor.specialty}</p>
                <p className="text-sm text-gray-600 mb-3">{mentor.yearsPostService}</p>
                <p className="text-gray-700 mb-4 leading-relaxed">{mentor.description}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-sm text-green-600 font-semibold">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    {mentor.availability}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2">
              <UserPlus className="w-5 h-5" />
              Request a Mentor Match
            </button>
          </div>
        </div>
      </section>

      {/* Support Groups Section */}
      <section id="support-groups" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 !text-gray-900">Support Groups</h2>
            <p className="text-xl !text-gray-800 max-w-3xl mx-auto font-medium">
              Join structured support groups led by experienced facilitators who understand
              the unique challenges veterans face.
            </p>
          </div>

          <div className="space-y-6">
            {supportGroups.map((group, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{group.title}</h3>
                    <div className="grid sm:grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span className="text-sm">{group.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <MessageSquare className="w-5 h-5 text-green-600" />
                        <span className="text-sm">{group.format}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span className="text-sm">{group.participants}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{group.focus}</p>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
                    Join Group
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 !text-gray-900">Success Stories</h2>
            <p className="text-xl !text-gray-800 max-w-3xl mx-auto font-medium">
              Real veterans sharing how community connection transformed their lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{story.story}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{story.name}</p>
                  <p className="text-sm text-blue-600 font-medium mb-2">{story.branch}</p>
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    <Heart className="w-4 h-4" />
                    {story.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-20 bg-blue-900 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 !text-white">
            Want to Give Back?
          </h2>
          <p className="text-xl mb-8 !text-blue-100 font-medium">
            If you've found stability and healing, consider becoming a peer mentor
            or volunteer to help other veterans on their journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white !text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 !text-blue-900" />
              Become a Mentor
            </button>
            <button className="bg-green-600 hover:bg-green-700 !text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2">
              <Users className="w-5 h-5 !text-white" />
              Volunteer Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Gratitude Farm</h3>
              <p className="text-gray-400">
                Aspen Veterans Project provides comprehensive sanctuary and lifelong reintegration support for combat veterans at our protected mountain retreat in southern New Mexico.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
                <li><Link href="/programs" className="hover:text-white transition-colors">Programs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Crisis Resources</h3>
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
