"use client";

import { Header } from "@/components/Header";
import { CrisisFAB } from "@/components/CrisisFAB";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Heart, CheckCircle, Shield, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ApplyPage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("mentee");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states for mentee
  const [menteeForm, setMenteeForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    militaryBranch: "",
    yearsOfService: "",
    deploymentHistory: "",
    currentSituation: "",
    supportNeeds: "",
    motivation: "",
    additionalInfo: ""
  });

  // Form states for mentor
  const [mentorForm, setMentorForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    militaryBranch: "",
    yearsOfService: "",
    deploymentHistory: "",
    availability: "",
    experience: "",
    motivation: "",
    additionalInfo: ""
  });

  const handleMenteeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Connect to Supabase for persistence
      // For now, we'll just show a success message
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

      toast({
        title: "Application Submitted!",
        description: "Thank you for applying to be a mentee. We'll review your application and get back to you soon.",
      });

      // Reset form
      setMenteeForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        militaryBranch: "",
        yearsOfService: "",
        deploymentHistory: "",
        currentSituation: "",
        supportNeeds: "",
        motivation: "",
        additionalInfo: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMentorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Connect to Supabase for persistence
      // For now, we'll just show a success message
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call

      toast({
        title: "Application Submitted!",
        description: "Thank you for applying to be a mentor. We'll review your application and get back to you soon.",
      });

      // Reset form
      setMentorForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        militaryBranch: "",
        yearsOfService: "",
        deploymentHistory: "",
        availability: "",
        experience: "",
        motivation: "",
        additionalInfo: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <CrisisFAB />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm mb-6">
            <Heart className="w-4 h-4" />
            Join Our Community
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-6 !text-gray-900">
            Apply to Join Aspen Veterans Project
          </h1>

          <p className="text-xl !text-gray-800 leading-relaxed max-w-3xl mx-auto font-medium mb-8">
            Whether you're seeking support or want to provide guidance, you're taking an important step.
            Join our community of veterans helping veterans thrive.
          </p>

          {/* Quick Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <Shield className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold !text-gray-900 mb-2">Safe Environment</h3>
              <p className="text-sm !text-gray-700">Confidential and respectful space for all veterans</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <Users className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold !text-gray-900 mb-2">Peer Connection</h3>
              <p className="text-sm !text-gray-700">Connect with those who understand your journey</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <Heart className="w-10 h-10 text-red-600 mx-auto mb-3" />
              <h3 className="font-bold !text-gray-900 mb-2">Lifelong Support</h3>
              <p className="text-sm !text-gray-700">Ongoing community and resources for growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Forms Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Tabs defaultValue="mentee" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="mentee" className="text-lg font-semibold">
                Apply as Mentee
              </TabsTrigger>
              <TabsTrigger value="mentor" className="text-lg font-semibold">
                Apply as Mentor
              </TabsTrigger>
            </TabsList>

            {/* Mentee Application Form */}
            <TabsContent value="mentee">
              <Card className="border-2 border-blue-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                  <CardTitle className="text-3xl !text-blue-900 flex items-center gap-3">
                    <Users className="w-8 h-8" />
                    Mentee Application
                  </CardTitle>
                  <CardDescription className="text-lg !text-gray-700 font-medium">
                    Seeking support, guidance, and connection from fellow veterans
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8">
                  <form onSubmit={handleMenteeSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold !text-gray-900 border-b-2 border-blue-200 pb-2">
                        Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="mentee-firstName">First Name *</Label>
                          <Input
                            id="mentee-firstName"
                            required
                            value={menteeForm.firstName}
                            onChange={(e) => setMenteeForm({ ...menteeForm, firstName: e.target.value })}
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="mentee-lastName">Last Name *</Label>
                          <Input
                            id="mentee-lastName"
                            required
                            value={menteeForm.lastName}
                            onChange={(e) => setMenteeForm({ ...menteeForm, lastName: e.target.value })}
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="mentee-email">Email Address *</Label>
                          <Input
                            id="mentee-email"
                            type="email"
                            required
                            value={menteeForm.email}
                            onChange={(e) => setMenteeForm({ ...menteeForm, email: e.target.value })}
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="mentee-phone">Phone Number *</Label>
                          <Input
                            id="mentee-phone"
                            type="tel"
                            required
                            value={menteeForm.phone}
                            onChange={(e) => setMenteeForm({ ...menteeForm, phone: e.target.value })}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Military Background */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold !text-gray-900 border-b-2 border-blue-200 pb-2">
                        Military Background
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="mentee-branch">Branch of Service</Label>
                          <Select
                            value={menteeForm.militaryBranch}
                            onValueChange={(value) => setMenteeForm({ ...menteeForm, militaryBranch: value })}
                          >
                            <SelectTrigger id="mentee-branch">
                              <SelectValue placeholder="Select your branch" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="army">Army</SelectItem>
                              <SelectItem value="navy">Navy</SelectItem>
                              <SelectItem value="air-force">Air Force</SelectItem>
                              <SelectItem value="marines">Marines</SelectItem>
                              <SelectItem value="coast-guard">Coast Guard</SelectItem>
                              <SelectItem value="space-force">Space Force</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="mentee-years">Years of Service</Label>
                          <Input
                            id="mentee-years"
                            type="number"
                            min="0"
                            value={menteeForm.yearsOfService}
                            onChange={(e) => setMenteeForm({ ...menteeForm, yearsOfService: e.target.value })}
                            placeholder="Number of years served"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="mentee-deployment">Deployment History (Optional)</Label>
                        <Textarea
                          id="mentee-deployment"
                          value={menteeForm.deploymentHistory}
                          onChange={(e) => setMenteeForm({ ...menteeForm, deploymentHistory: e.target.value })}
                          placeholder="Share your deployment experience if you're comfortable"
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Support Needs */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold !text-gray-900 border-b-2 border-blue-200 pb-2">
                        Current Situation & Support Needs
                      </h3>
                      <div>
                        <Label htmlFor="mentee-situation">Current Situation *</Label>
                        <Textarea
                          id="mentee-situation"
                          required
                          value={menteeForm.currentSituation}
                          onChange={(e) => setMenteeForm({ ...menteeForm, currentSituation: e.target.value })}
                          placeholder="Tell us about your current situation and what brings you here"
                          rows={4}
                        />
                      </div>

                      <div>
                        <Label htmlFor="mentee-needs">What kind of support are you looking for? *</Label>
                        <Textarea
                          id="mentee-needs"
                          required
                          value={menteeForm.supportNeeds}
                          onChange={(e) => setMenteeForm({ ...menteeForm, supportNeeds: e.target.value })}
                          placeholder="Describe the support, guidance, or resources you're seeking"
                          rows={4}
                        />
                      </div>

                      <div>
                        <Label htmlFor="mentee-motivation">Why do you want to join AVP? *</Label>
                        <Textarea
                          id="mentee-motivation"
                          required
                          value={menteeForm.motivation}
                          onChange={(e) => setMenteeForm({ ...menteeForm, motivation: e.target.value })}
                          placeholder="Share what motivated you to apply"
                          rows={4}
                        />
                      </div>

                      <div>
                        <Label htmlFor="mentee-additional">Additional Information (Optional)</Label>
                        <Textarea
                          id="mentee-additional"
                          value={menteeForm.additionalInfo}
                          onChange={(e) => setMenteeForm({ ...menteeForm, additionalInfo: e.target.value })}
                          placeholder="Anything else you'd like us to know?"
                          rows={3}
                        />
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg py-6 font-semibold shadow-lg"
                      >
                        {isSubmitting ? (
                          "Submitting Application..."
                        ) : (
                          <>
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Submit Mentee Application
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mentor Application Form */}
            <TabsContent value="mentor">
              <Card className="border-2 border-green-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                  <CardTitle className="text-3xl !text-green-900 flex items-center gap-3">
                    <Heart className="w-8 h-8" />
                    Mentor Application
                  </CardTitle>
                  <CardDescription className="text-lg !text-gray-700 font-medium">
                    Share your experience and help fellow veterans on their journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8">
                  <form onSubmit={handleMentorSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold !text-gray-900 border-b-2 border-green-200 pb-2">
                        Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="mentor-firstName">First Name *</Label>
                          <Input
                            id="mentor-firstName"
                            required
                            value={mentorForm.firstName}
                            onChange={(e) => setMentorForm({ ...mentorForm, firstName: e.target.value })}
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="mentor-lastName">Last Name *</Label>
                          <Input
                            id="mentor-lastName"
                            required
                            value={mentorForm.lastName}
                            onChange={(e) => setMentorForm({ ...mentorForm, lastName: e.target.value })}
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="mentor-email">Email Address *</Label>
                          <Input
                            id="mentor-email"
                            type="email"
                            required
                            value={mentorForm.email}
                            onChange={(e) => setMentorForm({ ...mentorForm, email: e.target.value })}
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="mentor-phone">Phone Number *</Label>
                          <Input
                            id="mentor-phone"
                            type="tel"
                            required
                            value={mentorForm.phone}
                            onChange={(e) => setMentorForm({ ...mentorForm, phone: e.target.value })}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Military Background */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold !text-gray-900 border-b-2 border-green-200 pb-2">
                        Military Background
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="mentor-branch">Branch of Service</Label>
                          <Select
                            value={mentorForm.militaryBranch}
                            onValueChange={(value) => setMentorForm({ ...mentorForm, militaryBranch: value })}
                          >
                            <SelectTrigger id="mentor-branch">
                              <SelectValue placeholder="Select your branch" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="army">Army</SelectItem>
                              <SelectItem value="navy">Navy</SelectItem>
                              <SelectItem value="air-force">Air Force</SelectItem>
                              <SelectItem value="marines">Marines</SelectItem>
                              <SelectItem value="coast-guard">Coast Guard</SelectItem>
                              <SelectItem value="space-force">Space Force</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="mentor-years">Years of Service</Label>
                          <Input
                            id="mentor-years"
                            type="number"
                            min="0"
                            value={mentorForm.yearsOfService}
                            onChange={(e) => setMentorForm({ ...mentorForm, yearsOfService: e.target.value })}
                            placeholder="Number of years served"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="mentor-deployment">Deployment History (Optional)</Label>
                        <Textarea
                          id="mentor-deployment"
                          value={mentorForm.deploymentHistory}
                          onChange={(e) => setMentorForm({ ...mentorForm, deploymentHistory: e.target.value })}
                          placeholder="Share your deployment experience if you're comfortable"
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Mentoring Experience */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold !text-gray-900 border-b-2 border-green-200 pb-2">
                        Mentoring Information
                      </h3>
                      <div>
                        <Label htmlFor="mentor-experience">Relevant Experience *</Label>
                        <Textarea
                          id="mentor-experience"
                          required
                          value={mentorForm.experience}
                          onChange={(e) => setMentorForm({ ...mentorForm, experience: e.target.value })}
                          placeholder="Describe your experience that would help you as a mentor (leadership, counseling, peer support, etc.)"
                          rows={4}
                        />
                      </div>

                      <div>
                        <Label htmlFor="mentor-availability">Availability *</Label>
                        <Textarea
                          id="mentor-availability"
                          required
                          value={mentorForm.availability}
                          onChange={(e) => setMentorForm({ ...mentorForm, availability: e.target.value })}
                          placeholder="How much time can you commit to mentoring? (e.g., 2-4 hours per week)"
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="mentor-motivation">Why do you want to be a mentor? *</Label>
                        <Textarea
                          id="mentor-motivation"
                          required
                          value={mentorForm.motivation}
                          onChange={(e) => setMentorForm({ ...mentorForm, motivation: e.target.value })}
                          placeholder="Share what motivates you to help other veterans"
                          rows={4}
                        />
                      </div>

                      <div>
                        <Label htmlFor="mentor-additional">Additional Information (Optional)</Label>
                        <Textarea
                          id="mentor-additional"
                          value={mentorForm.additionalInfo}
                          onChange={(e) => setMentorForm({ ...mentorForm, additionalInfo: e.target.value })}
                          placeholder="Anything else you'd like us to know?"
                          rows={3}
                        />
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg py-6 font-semibold shadow-lg"
                      >
                        {isSubmitting ? (
                          "Submitting Application..."
                        ) : (
                          <>
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Submit Mentor Application
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Support Information */}
          <div className="mt-12 bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="flex items-start gap-4">
              <Phone className="w-10 h-10 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold !text-blue-900 mb-2">Need Help During the Application?</h3>
                <p className="!text-gray-800 font-medium mb-4">
                  If you have questions or need assistance with your application, we're here to help.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:988"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    Crisis Line: 988
                  </a>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="text-lg !text-gray-800 font-medium mb-6">
            Want to learn more before applying?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/programs"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md"
            >
              View Programs
            </Link>
            <Link
              href="/community"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md"
            >
              Join Community
            </Link>
            <Link
              href="/"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
