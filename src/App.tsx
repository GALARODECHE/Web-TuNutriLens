import React, { useState } from 'react';
import { CarrdSite } from './components/CarrdSite';
import { EarlyAccessModal } from './components/EarlyAccessModal';

export default function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#9BCFB9] selection:bg-[#2B2A23] selection:text-white">
      {/* Carrd-inspired retro-modern single-page experience */}
      <CarrdSite onOpenDownload={() => setIsDownloadOpen(true)} />

      {/* Download & Access Modal */}
      <EarlyAccessModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />
    </div>
  );
}
