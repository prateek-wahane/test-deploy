/**
 * Vapi Voice Assistant Service
 * Wrapper around official @vapi-ai/web SDK
 */

import Vapi from '@vapi-ai/web';

let vapiInstance: Vapi | null = null;

export const getVapiInstance = (): Vapi => {
  if (!vapiInstance) {
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
    
    if (!publicKey) {
      console.error('NEXT_PUBLIC_VAPI_PUBLIC_KEY is not configured');
    }

    vapiInstance = new Vapi(publicKey || '');
  }

  return vapiInstance;
};

export const getAssistantId = (): string => {
  return process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || '';
};

export default Vapi;
