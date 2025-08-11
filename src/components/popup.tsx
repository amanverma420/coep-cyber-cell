import React, { useState, useEffect } from 'react';
import { X, Users, Code, Terminal, Zap, Eye } from 'lucide-react';

// Import the FormSubmission component
import FormSubmission from './FormSubmission';

interface InductionPopupProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: 'formspree' | 'netlify' | 'custom';
}

const InductionPopup: React.FC<InductionPopupProps> = ({ 
  isOpen, 
  onClose,
  serviceType = 'formspree'
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowPopup(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setShowPopup(false);
    setTimeout(() => onClose(), 300);
  };

  const handleFormRedirect = () => {
    setShowForm(true);
    handleClose();
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  if (!isOpen && !showForm) return null;

  return (
    <>
      {isOpen && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          showPopup ? 'bg-black bg-opacity-80' : 'bg-transparent'
        }`}>
          <div className={`relative bg-black border-2 border-green-400 rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-300 ${
            showPopup ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          } bg-gradient-to-b from-gray-900 to-black overflow-hidden`}>
            
            {/* Matrix-style background effect */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <div className="absolute inset-0 opacity-10">
                <div className="text-green-400 text-xs font-mono leading-3 animate-pulse">
                  {Array.from({ length: 30 }, (_, i) => (
                    <div key={i} className="whitespace-pre">
                      {Array.from({ length: 40 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-green-400 hover:text-green-300 transition-colors duration-200 z-10 bg-black rounded-full p-1"
              type="button"
            >
              <X size={20} />
            </button>

            {/* Header Section */}
            <div className="relative text-center p-4 pb-3">
              {/* Urgent Alert */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded border border-red-400 animate-pulse shadow-lg">
                  <span className="animate-ping inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75 mr-1"></span>
                  RECRUITMENT OPEN
                </div>
              </div>
              
              {/* Matrix-style logo */}
              <div className="relative mx-auto w-20 h-20 mb-3 mt-5">
                <div className="absolute inset-0 border-2 border-green-400 rounded-full animate-spin opacity-50"></div>
                <div className="absolute inset-2 border border-green-500 rounded-full animate-pulse"></div>
                <div className="relative bg-black rounded-full w-full h-full flex items-center justify-center border border-green-400">
                  <Terminal className="text-green-400" size={28} />
                </div>
              </div>
              
              {/* Terminal-style header */}
              <div className="bg-black border border-green-400 rounded p-2 mb-3 font-mono text-green-400 text-left text-xs">
                <div>root@coep-cybercell:~$ cat recruitment.txt</div>
                <div className="mt-1 text-green-300">
                  STATUS: <span className="text-green-400 font-bold">RECRUITMENT ACTIVE</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-green-400 mb-2 font-mono tracking-wider">
                &gt; COEP CYBERCELL &lt;
              </h2>
              
              <h3 className="text-xl font-bold text-white mb-3">
                JOIN COEP CYBERCELL
              </h3>
              
              <p className="text-green-300 text-sm leading-relaxed font-mono">
                Limited seats available for cybersecurity enthusiasts at COEP!
              </p>
            </div>

            {/* Induction Date */}
            <div className="px-4 mb-4">
              <div className="bg-black border border-green-400 rounded-lg p-3">
                <div className="text-center">
                  <p className="text-green-400 text-sm font-bold mb-2 font-mono">
                    &gt; INDUCTION DATE: 16-17 AUGUST
                  </p>
                  <p className="text-green-300 text-xs font-mono">
                    Timing will be conveyed soon
                  </p>
                </div>
              </div>
            </div>

            {/* Activities Section */}
            <div className="px-4 pb-4">
              <div className="bg-black border border-green-400 rounded-lg p-3 mb-4">
                <h4 className="text-green-400 font-bold text-sm mb-3 text-center font-mono">
                  &gt; WHAT WE DO &lt;
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2 text-green-300">
                    <div className="bg-green-400 p-1 rounded">
                      <Code size={12} className="text-black" />
                    </div>
                    <span className="text-xs font-mono">CTF competitions and challenges</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-green-300">
                    <div className="bg-green-400 p-1 rounded">
                      <Eye size={12} className="text-black" />
                    </div>
                    <span className="text-xs font-mono">Cybersecurity workshops and events</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-green-300">
                    <div className="bg-green-400 p-1 rounded">
                      <Zap size={12} className="text-black" />
                    </div>
                    <span className="text-xs font-mono">Learn ethical hacking techniques</span>
                  </div>

                  <div className="flex items-center space-x-2 text-green-300">
                    <div className="bg-green-400 p-1 rounded">
                      <Users size={12} className="text-black" />
                    </div>
                    <span className="text-xs font-mono">Network with cybersecurity enthusiasts</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="space-y-2">
                <button
                  onClick={handleFormRedirect}
                  className="w-full bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 text-black font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 border-2 border-green-400 font-mono text-sm"
                  type="button"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Terminal size={16} />
                    <span>&gt; JOIN CYBERCELL</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form Submission Component */}
      <FormSubmission 
        isOpen={showForm} 
        onClose={handleFormClose}
        serviceType={serviceType}
      />
    </>
  );
};

// Enhanced hook with better reliability
export const useInductionPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Ensure smooth initialization
  useEffect(() => {
    // Wait for complete page load
    if (document.readyState === 'complete') {
      setIsReady(true);
    } else {
      const handleLoad = () => setIsReady(true);
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Reliable popup timing
  useEffect(() => {
    if (!isReady) return;

    const hasSeenPopup = sessionStorage.getItem('cybercell-popup-seen');
    
    if (!hasSeenPopup) {
      // Show popup after page is fully loaded and settled
      const showTimer = setTimeout(() => {
        setIsPopupOpen(true);
      }, 3000); // 3 seconds after page load

      return () => clearTimeout(showTimer);
    }
  }, [isReady]);

  const openPopup = () => {
    setIsPopupOpen(true);
  };
  
  const closePopup = () => {
    setIsPopupOpen(false);
    // Use sessionStorage so popup shows again in new session
    sessionStorage.setItem('cybercell-popup-seen', 'true');
  };

  return { isPopupOpen, openPopup, closePopup };
};

export default InductionPopup;