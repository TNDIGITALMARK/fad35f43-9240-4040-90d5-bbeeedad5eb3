"use client";

import { useState } from "react";
import { Phone, Mail, MessageSquare, User, Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "general",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // For now, just show success
      setStatus("success");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
          subject: "general",
        });
        setStatus("idle");
      }, 3000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or call us directly.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Form Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 px-8 py-10">
        <h2 className="text-4xl font-bold text-white mb-3">Get in Touch</h2>
        <p className="text-blue-100 text-lg font-medium">
          We're here to answer your questions and provide support. Reach out to us anytime.
        </p>
      </div>

      <div className="px-8 py-10">
        {status === "success" ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-green-900 mb-3">Message Sent Successfully!</h3>
            <p className="text-xl text-gray-700 font-medium mb-6">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <p className="text-gray-600">
              For urgent matters, please call our crisis line: <a href="tel:988" className="text-red-600 font-bold hover:underline">988 Press 1</a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                Full Name <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all bg-white !text-gray-900 font-medium"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                Email Address <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all bg-white !text-gray-900 font-medium"
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all bg-white !text-gray-900 font-medium"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-2">
                Subject <span className="text-red-600">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formState.subject}
                onChange={handleChange}
                className="w-full px-4 py-3.5 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all bg-white !text-gray-900 font-medium"
              >
                <option value="general">General Inquiry</option>
                <option value="programs">Program Information</option>
                <option value="support">Support Services</option>
                <option value="volunteer">Volunteer Opportunities</option>
                <option value="donation">Donations & Partnerships</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                Message <span className="text-red-600">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-4 left-4 pointer-events-none">
                  <MessageSquare className="w-5 h-5 text-gray-500" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all bg-white resize-none !text-gray-900 font-medium"
                  placeholder="How can we help you?"
                />
              </div>
            </div>

            {/* Error Message */}
            {status === "error" && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-800 font-bold">Error Sending Message</p>
                  <p className="text-red-700 text-sm">{errorMessage}</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {status === "submitting" ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>

            {/* Privacy Notice */}
            <p className="text-sm text-gray-600 text-center pt-4">
              Your information is confidential and will never be shared. By submitting this form,
              you agree to be contacted by the Aspen Veterans Project team.
            </p>
          </form>
        )}

        {/* Contact Information */}
        {status !== "success" && (
          <div className="mt-10 pt-10 border-t-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Other Ways to Reach Us
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="tel:988"
                className="bg-red-50 border-2 border-red-200 hover:border-red-400 rounded-xl p-6 text-center transition-all hover:shadow-lg group"
              >
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-bold text-gray-700 mb-1">Crisis Line</p>
                <p className="text-2xl font-bold text-red-600">988</p>
                <p className="text-xs text-gray-600 mt-2">Press 1 for Veterans</p>
              </a>

              <a
                href="mailto:info@aspenveteransproject.org"
                className="bg-blue-50 border-2 border-blue-200 hover:border-blue-400 rounded-xl p-6 text-center transition-all hover:shadow-lg group"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-bold text-gray-700 mb-1">Email Us</p>
                <p className="text-sm font-bold text-blue-600 break-all">info@aspenveteransproject.org</p>
                <p className="text-xs text-gray-600 mt-2">24-48 hour response</p>
              </a>

              <a
                href="sms:838255"
                className="bg-green-50 border-2 border-green-200 hover:border-green-400 rounded-xl p-6 text-center transition-all hover:shadow-lg group"
              >
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <p className="text-sm font-bold text-gray-700 mb-1">Text Support</p>
                <p className="text-2xl font-bold text-green-600">838255</p>
                <p className="text-xs text-gray-600 mt-2">24/7 Available</p>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
