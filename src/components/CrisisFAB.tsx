"use client";

import { Phone, X, MessageCircle } from "lucide-react";
import { useState } from "react";

export function CrisisFAB() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-2xl p-4 w-80 border border-gray-200 mb-2">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="text-lg font-bold text-red-600 mb-4">Crisis Support</h3>

          <div className="space-y-3">
            <a
              href="tel:988"
              className="flex items-center gap-3 p-3 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 text-red-600" />
              <div>
                <div className="font-semibold text-red-900">Veterans Crisis Line</div>
                <div className="text-sm text-red-700">Call 988, Press 1</div>
              </div>
            </a>

            <a
              href="sms:838255"
              className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-semibold text-blue-900">Text Support</div>
                <div className="text-sm text-blue-700">Text 838255</div>
              </div>
            </a>

            <a
              href="https://www.veteranscrisisline.net/get-help-now/chat/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
              <div>
                <div className="font-semibold text-green-900">Online Chat</div>
                <div className="text-sm text-green-700">24/7 Confidential</div>
              </div>
            </a>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-600 text-center">
              You are not alone. Help is available 24/7.
            </p>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-2xl transition-all duration-200 hover:scale-110 flex items-center gap-2 group"
        aria-label="Crisis support"
      >
        <Phone className="w-6 h-6" />
        <span className="font-semibold text-sm whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300">
          Need Help?
        </span>
      </button>
    </div>
  );
}
