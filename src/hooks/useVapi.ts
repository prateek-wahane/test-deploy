/**
 * Hook for managing Vapi voice assistant state and lifecycle
 */

'use client';

import { useEffect, useMemo, useState } from 'react';
import { getVapiInstance, getAssistantId } from '@/lib/vapi';

interface UseVapiReturn {
  inCall: boolean;
  isLoading: boolean;
  error: string | null;
  startCall: () => Promise<void>;
  endCall: () => void;
}

export const useVapi = (): UseVapiReturn => {
  const [inCall, setInCall] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const vapi = useMemo(() => {
    return getVapiInstance();
  }, []);

  const assistantId = useMemo(() => {
    return getAssistantId();
  }, []);

  // Setup event listeners
  useEffect(() => {
    const onCallStart = () => {
      console.log('Call started');
      setInCall(true);
      setIsLoading(false);
      setError(null);
    };

    const onCallEnd = () => {
      console.log('Call ended');
      setInCall(false);
      setIsLoading(false);
    };

    const onError = (e: any) => {
      console.error('Vapi error:', e);
      setError(e?.message || 'An error occurred');
      setIsLoading(false);
      setInCall(false);
    };

    vapi.on('call-start', onCallStart);
    vapi.on('call-end', onCallEnd);
    vapi.on('error', onError);

    return () => {
      try {
        vapi.stop();
      } catch (e) {
        console.log('Error stopping vapi:', e);
      }
      vapi.off?.('call-start', onCallStart);
      vapi.off?.('call-end', onCallEnd);
      vapi.off?.('error', onError);
    };
  }, [vapi]);

  const startCall = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await vapi.start(assistantId);
    } catch (err) {
      console.error('Error starting call:', err);
      setError(
        err instanceof Error ? err.message : 'Failed to start voice call'
      );
      setIsLoading(false);
    }
  };

  const endCall = () => {
    try {
      vapi.stop();
    } catch (err) {
      console.error('Error ending call:', err);
      setError(err instanceof Error ? err.message : 'Failed to end call');
    }
  };

  return {
    inCall,
    isLoading,
    error,
    startCall,
    endCall,
  };
};
