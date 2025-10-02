import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface NavigatorStandalone extends Navigator {
  standalone?: boolean;
}

const isStandalone = () => {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as NavigatorStandalone).standalone === true ||
    document.referrer.includes('android-app://')
  );
};

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (isStandalone()) {
      console.log('App is already running in standalone mode');
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallButton(true);
    };

    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setShowInstallButton(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      );
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  if (!showInstallButton || isStandalone()) {
    return null;
  }

  return (
    <div className="fixed right-6 bottom-6 left-6 z-50 rounded-2xl border-2 border-yellow-400 bg-black p-6 text-white shadow-2xl md:right-6 md:left-auto md:max-w-md">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="mb-2 text-lg font-bold">ติดตั้งแอป</h3>
          <p className="text-sm leading-relaxed opacity-95">
            ติดตั้งแอปนี้บนอุปกรณ์ของคุณเพื่อประสบการณ์ที่ดีกว่า
          </p>
        </div>
        <div className="flex min-w-0 flex-col gap-3">
          <button
            onClick={handleInstallClick}
            className="cursor-pointer rounded-xl bg-yellow-400 px-6 py-3 text-base font-bold whitespace-nowrap text-black shadow-md transition-all duration-200 hover:bg-yellow-300 active:scale-95"
          >
            ติดตั้ง
          </button>
          <button
            onClick={() => setShowInstallButton(false)}
            className="cursor-pointer rounded-xl border border-yellow-400 bg-gray-800 px-6 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 hover:bg-gray-700 active:scale-95"
          >
            ทีหลัง
          </button>
        </div>
      </div>
    </div>
  );
}
