import React, { useState } from 'react';
import { X, Terminal, Mail, Send, User, Phone, MessageSquare } from 'lucide-react';

interface FormSubmissionProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType?: 'formspree' | 'netlify' | 'custom';
}

const FormSubmission: React.FC<FormSubmissionProps> = ({ 
  isOpen, 
  onClose,
  serviceType = 'formspree'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    year: '',
    branch: '',
    experience: '',
    motivation: '',
    skills: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      let response;
      
      if (serviceType === 'formspree') {
        // Using your Formspree form ID
        response = await fetch('https://formspree.io/f/manbvykz', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            _subject: 'New COEP CyberCell Application'
          })
        });
      } else if (serviceType === 'netlify') {
        // For Netlify Forms
        const formDataObj = new FormData();
        formDataObj.append('form-name', 'cybercell-recruitment');
        Object.keys(formData).forEach(key => {
          formDataObj.append(key, formData[key as keyof typeof formData]);
        });
        
        response = await fetch('/', {
          method: 'POST',
          body: formDataObj
        });
      } else {
        // Custom endpoint
        response = await fetch('/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
      }

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          onClose();
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            year: '',
            branch: '',
            experience: '',
            motivation: '',
            skills: ''
          });
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90">
      <div className="relative bg-black border-2 border-green-400 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        
        {/* Matrix Background */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute inset-0 opacity-5">
            <div className="text-green-400 text-xs font-mono leading-3">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="whitespace-pre">
                  {Array.from({ length: 60 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="relative bg-black border-b border-green-400 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Terminal className="text-green-400 mr-2" size={24} />
              <h2 className="text-xl font-bold text-green-400 font-mono">&gt; CYBERCELL RECRUITMENT FORM &lt;</h2>
            </div>
            
            <button
              onClick={onClose}
              className="text-green-400 hover:text-green-300 transition-colors duration-200 bg-black rounded-full p-1"
              type="button"
            >
              <X size={24} />
            </button>
          </div>
          
          <p className="text-green-300 text-sm font-mono mt-2">
            Join COEP CyberCell - Fill out the secure form below
          </p>
        </div>

        {/* Form Content */}
        <div className="relative p-6 max-h-[60vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-12">
              <div className="mb-4">
                <div className="mx-auto w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                  <Send className="text-black" size={32} />
                </div>
              </div>
              <h3 className="text-green-400 text-xl font-bold font-mono mb-2">&gt; SUBMISSION SUCCESS &lt;</h3>
              <p className="text-green-300 font-mono text-sm">
                Your application has been submitted successfully!
              </p>
              <p className="text-green-300 font-mono text-xs mt-2">
                We'll contact you soon with further details.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">
                    <User size={16} className="inline mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-green-400 rounded px-3 py-2 text-green-300 font-mono text-sm focus:outline-none focus:border-green-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">
                    <Mail size={16} className="inline mr-1" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-green-400 rounded px-3 py-2 text-green-300 font-mono text-sm focus:outline-none focus:border-green-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">
                    <Phone size={16} className="inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-green-400 rounded px-3 py-2 text-green-300 font-mono text-sm focus:outline-none focus:border-green-300"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">
                    Year of Study *
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-green-400 rounded px-3 py-2 text-green-300 font-mono text-sm focus:outline-none focus:border-green-300"
                  >
                    <option value="">Select Year</option>
                    <option value="FE">First Year (FE)</option>
                    <option value="SE">Second Year (SE)</option>
                    <option value="TE">Third Year (TE)</option>
                    <option value="BE">Final Year (BE)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">
                    Branch *
                  </label>
                  <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-green-400 rounded px-3 py-2 text-green-300 font-mono text-sm focus:outline-none focus:border-green-300"
                    placeholder="e.g., Computer Engineering"
                  />
                </div>

                <div>
                  <label className="block text-green-400 font-mono text-sm mb-2">
                    Cybersecurity Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full bg-black border border-green-400 rounded px-3 py-2 text-green-300 font-mono text-sm focus:outline-none focus:border-green-300"
                  >
                    <option value="">Select Experience Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-green-400 font-mono text-sm mb-2">
                  <MessageSquare size={16} className="inline mr-1" />
                  Why do you want to join CyberCell? *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full bg-black border border-green-400 rounded px-3 py-2 text-green-300 font-mono text-sm focus:outline-none focus:border-green-300 resize-none"
                  placeholder="Tell us about your interest in cybersecurity..."
                />
              </div>

              <div>
                <label className="block text-green-400 font-mono text-sm mb-2">
                  Technical Skills & Programming Languages
                </label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full bg-black border border-green-400 rounded px-3 py-2 text-green-300 font-mono text-sm focus:outline-none focus:border-green-300 resize-none"
                  placeholder="e.g., Python, Java, Linux, Networking..."
                />
              </div>

              {error && (
                <div className="bg-red-900 border border-red-400 rounded p-3">
                  <p className="text-red-300 font-mono text-sm">{error}</p>
                </div>
              )}

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 disabled:from-gray-600 disabled:to-gray-400 text-black font-bold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 border-2 border-green-400 font-mono text-sm flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></div>
                      <span>&gt; SUBMITTING...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>&gt; SUBMIT APPLICATION</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="relative bg-black border-t border-green-400 p-3">
          <div className="text-center">
            <p className="text-green-300 font-mono text-xs">
              🔐 Secure form submission - Your data is protected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSubmission;