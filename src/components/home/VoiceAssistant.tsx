'use client';

import React from 'react';
import { Mic, MicOff, Loader } from 'lucide-react';
import { useVapi } from '@/hooks/useVapi';

interface VoiceAssistantProps {
  className?: string;
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ className = '' }) => {
  const { inCall, isLoading, error, startCall, endCall } = useVapi();

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
    <div className={`fixed bottom-6 left-6 z-50 ${className}`}>
      {/* Professional Card Widget */}
      <div className="w-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700/50 backdrop-blur-sm">
        
        {/* Status Indicator */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className={`w-3 h-3 rounded-full transition-colors ${
            inCall 
              ? 'bg-green-400 animate-pulse shadow-lg shadow-green-400' 
              : isLoading
              ? 'bg-yellow-400 animate-pulse'
              : 'bg-slate-500'
          }`}></div>
          <span className="text-sm font-medium text-slate-300">
            {isLoading ? 'Connecting...' : inCall ? 'Live Call' : 'Ready to connect'}
          </span>
        </div>

        {/* Header Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Mic size={20} className="text-blue-400" />
            <h2 className="text-xl font-bold text-white">Voice Chat</h2>
          </div>
          <p className="text-sm text-slate-300 font-medium">
            Intelliware Demo Scheduler
          </p>
        </div>

        {/* Main Microphone Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleMicClick}
            disabled={isLoading && !inCall}
            className={`w-28 h-28 rounded-full shadow-2xl border-4 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 ${
              inCall
                ? 'bg-gradient-to-br from-red-500 to-red-600 border-red-700 shadow-red-500/50 hover:from-red-600 hover:to-red-700'
                : isLoading
                  ? 'bg-gradient-to-br from-yellow-500 to-yellow-600 border-yellow-700 shadow-yellow-500/50 cursor-wait animate-pulse'
                  : 'bg-gradient-to-br from-blue-500 via-blue-500 to-blue-600 border-blue-700 shadow-blue-500/50 hover:from-blue-600 hover:via-blue-600 hover:to-blue-700'
            } focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-60`}
            title={inCall ? 'Click to end the call' : 'Click to start voice assistant'}
            aria-label="Voice Assistant Microphone"
          >
            {isLoading ? (
              <Loader size={48} className="text-white animate-spin" />
            ) : inCall ? (
              <MicOff size={48} className="text-white" />
            ) : (
              <Mic size={48} className="text-white" />
            )}
          </button>
        </div>

        {/* Description Text */}
        <p className="text-center text-sm text-slate-300 mb-6 leading-relaxed">
          {inCall
            ? '🎤 Microphone is active — speak naturally to schedule your demo'
            : 'Click the microphone to start a voice conversation.'}
        </p>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg mb-4">
            <p className="text-red-300 text-xs text-center">{error}</p>
          </div>
        )}

        {/* Footer Info */}
        <div className="text-xs text-slate-400 text-center space-y-1 border-t border-slate-700/50 pt-4">
          <p>⏱️ Typically 5-10 minutes</p>
          <p>🔒 Requires microphone access</p>
        </div>

        {/* Call Status */}
        {inCall && (
          <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
            <p className="text-center text-xs text-green-300 font-medium">
              ✓ Connected to Intelliware Assistant
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceAssistant;
