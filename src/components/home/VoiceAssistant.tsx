'use client';

import React, { useState } from 'react';
import { Mic, MicOff, Loader } from 'lucide-react';
import { useVapi } from '@/hooks/useVapi';

interface VoiceAssistantProps {
  className?: string;
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ className = '' }) => {
  const { inCall, isLoading, error, startCall, endCall } = useVapi();
  const [isHovered, setIsHovered] = useState(false);

  const handleMicClick = async () => {
    if (inCall) {
      endCall();
    } else {
      try {
        await startCall();
      } catch (err) {
        console.error('Error starting call:', err);
      }
    }
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Expanded Card Widget - Always Visible by Default */}
      <div
        className={`transition-all duration-300 ease-out transform origin-bottom-right ${
          isHovered
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-100 scale-100 pointer-events-auto'
        }`}
      >
        <div className="w-64 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-700/50 backdrop-blur-sm">
          
          {/* Header Title - Made Prominent */}
          <div className="text-center mb-5">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full mb-2">
              <p className="text-xs font-bold text-white">📅 DEMO APPOINTMENT</p>
            </div>
            <h2 className="text-lg font-bold text-white">Book Your Demo</h2>
            <p className="text-xs text-slate-400 font-medium mt-1">
              Voice Scheduler
            </p>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className={`w-2.5 h-2.5 rounded-full transition-colors ${
              inCall 
                ? 'bg-green-400 animate-pulse shadow-lg shadow-green-400' 
                : isLoading
                ? 'bg-yellow-400 animate-pulse'
                : 'bg-slate-500'
            }`}></div>
            <span className="text-xs font-medium text-slate-300">
              {isLoading ? 'Connecting...' : inCall ? 'In Call' : 'Ready'}
            </span>
          </div>

          {/* Main Microphone Button - Smaller */}
          <div className="flex justify-center mb-5">
            <button
              onClick={handleMicClick}
              disabled={isLoading && !inCall}
              className={`w-20 h-20 rounded-full shadow-2xl border-4 flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                inCall
                  ? 'bg-gradient-to-br from-red-500 to-red-600 border-red-700 shadow-red-500/50 hover:from-red-600 hover:to-red-700'
                  : isLoading
                    ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 border-yellow-700 shadow-yellow-500/50 cursor-wait animate-pulse'
                    : 'bg-gradient-to-br from-blue-500 via-blue-500 to-blue-600 border-blue-700 shadow-blue-500/50 hover:from-blue-600 hover:via-blue-600 hover:to-blue-700'
              } focus:outline-none focus:ring-3 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-60`}
              title={inCall ? 'Click to end the call' : 'Click to start demo booking'}
              aria-label="Demo Appointment Scheduler"
            >
              {isLoading ? (
                <Loader size={36} className="text-white animate-spin" />
              ) : inCall ? (
                <MicOff size={36} className="text-white" />
              ) : (
                <Mic size={36} className="text-white" />
              )}
            </button>
          </div>

          {/* Description Text - Concise */}
          <p className="text-center text-xs text-slate-300 mb-4 leading-relaxed">
            {inCall
              ? '🎤 Schedule your personalized demo appointment'
              : 'Click to book your demo with our team'}
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-3 p-2 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-300 text-xs text-center">{error}</p>
            </div>
          )}

          {/* Footer Info - Compact */}
          <div className="text-xs text-slate-400 text-center space-y-0.5 border-t border-slate-700/50 pt-3">
            <p>⏱️ ~5-10 minutes</p>
            <p>🎤 Requires microphone</p>
          </div>

          {/* Call Status */}
          {inCall && (
            <div className="mt-3 p-2 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-center text-xs text-green-300 font-medium">
                ✓ Scheduling your demo
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;
