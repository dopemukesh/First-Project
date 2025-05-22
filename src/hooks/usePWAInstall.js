// src/hooks/usePWAInstall.js

import { useEffect, useState, useCallback } from 'react';

export default function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Stop automatic mini-infobar
      if (!deferredPrompt) {
        setDeferredPrompt(e);
        setCanInstall(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [deferredPrompt]);

  const promptInstall = useCallback(async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    // Reset after prompt
    setDeferredPrompt(null);
    setCanInstall(false);

    return outcome; // 'accepted' or 'dismissed'
  }, [deferredPrompt]);

  return { canInstall, promptInstall };
}
