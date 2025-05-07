'use client';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 5000); // Hide after 5s
    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="w-[100px] h-100px] rounded-full overflow-hidden shadow-lg">
        <video
          src="/loader.mp4"
          autoPlay
          muted
          playsInline
          className="w-[100px] h-auto object-contain" 
        />
      </div>
    </div>
  );
}
