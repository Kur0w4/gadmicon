import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';
import { Translations } from '../i18n/translations';

interface ContactSectionProps {
  t: Translations;
  onSuccess?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ t, onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [condoName, setCondoName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 800);
  };

  return (
    <section id="contacto" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 space-y-6 shadow-sm">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">GADMICON</h3>
                  <p className="text-xs text-slate-500">{t.contact.teamTitle}</p>
                </div>
              </div>

              <div className="space-y-4 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-slate-900 block">{t.contact.officeTitle}</span>
                    <span className="text-slate-600 text-xs leading-relaxed block">
                      {t.contact.officeAddress}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-slate-900 block">{t.contact.phoneTitle}</span>
                    <a 
                      href="tel:+18494680001" 
                      className="text-blue-600 hover:text-blue-700 transition-colors font-medium text-xs block"
                    >
                      +1 (849) 468-0001
                    </a>
                    <span className="text-slate-400 text-[11px] block mt-0.5">
                      {t.contact.phoneDesc}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-slate-900 block">{t.contact.emailTitle}</span>
                    <a 
                      href="mailto:contacto@gadmicon.com" 
                      className="text-slate-700 hover:text-blue-600 transition-colors text-xs block"
                    >
                      contacto@gadmicon.com
                    </a>
                    <a 
                      href="mailto:operaciones@gadmicon.com" 
                      className="text-slate-500 hover:text-blue-600 text-xs block"
                    >
                      operaciones@gadmicon.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-slate-900 block">{t.contact.hoursTitle}</span>
                    <span className="text-slate-600 text-xs block">
                      {t.contact.hoursText}
                    </span>
                    <span className="text-slate-400 text-[11px] block mt-0.5">
                      {t.contact.hoursEmergency}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed shadow-2xs">
                {t.contact.visitQuestion}
              </div>

            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{t.contact.successTitle}</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    {t.contact.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setCondoName('');
                      setMessage('');
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <h3 className="text-base font-bold text-slate-900">
                      {t.contact.formTitle}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {t.contact.formSubtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {t.contact.fullNameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.contact.fullNamePlaceholder}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {t.contact.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t.contact.phonePlaceholder}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {t.contact.propertyLabel}
                      </label>
                      <input
                        type="text"
                        value={condoName}
                        onChange={(e) => setCondoName(e.target.value)}
                        placeholder={t.contact.propertyPlaceholder}
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-xs flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>{t.contact.submitting}</span>
                    ) : (
                      <>
                        <span>{t.contact.submit}</span>
                        <Send className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center pt-1">
                    {t.contact.privacyNote}
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
