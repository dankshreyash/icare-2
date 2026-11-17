import React, { useState, useId } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock
} from 'lucide-react';
import { contactInfo, siteMetadata } from '../data/content';
import Section from '../components/Section';
import Button from '../components/Button';
import SEO from '../components/SEO';

export default function Contact() {
  const contactSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact ICARE Institutional Advisory',
      url: `${siteMetadata.portalUrl}/contact`,
      mainEntity: {
        '@type': 'LocalBusiness',
        name: siteMetadata.fullName,
        telephone: siteMetadata.phone,
        email: siteMetadata.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ICARE Headquarters',
          addressLocality: 'Chennai',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 13.0827,
          longitude: 80.2707
        }
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteMetadata.portalUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Contact',
          item: `${siteMetadata.portalUrl}/contact`
        }
      ]
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    message: ''
  });
  const nameId = useId();
  const emailId = useId();
  const orgId = useId();
  const messageId = useId();

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Please provide a valid name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Official email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid institutional email address.';
    }

    if (!formData.organisation.trim()) {
      errs.organisation = 'Institution / Department name is required.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please describe your inquiry or requirements.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      organisation: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <>
      <SEO
        title="Contact & Institutional Inquiries"
        description="Initiate an institutional consultation with ICARE regarding state rating frameworks, NIRF acceleration, NAAC SSR audits, or embedded analyst deployment."
        schema={contactSchema}
      />

      {/* Header */}
      <div className="bg-stone-50 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 py-16 sm:py-20 lg:py-24 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-amber-800 bg-amber-100 border border-amber-300 dark:text-amber-300 dark:bg-amber-950/40 dark:border-amber-800/60 mb-4">
              Institutional Communications
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Initiate an Institutional Dialogue
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              We welcome inquiries from Vice-Chancellors, IQAC Directors, Deans of Research, State Higher Education Councils, and partner organizations.
            </p>
          </div>
        </div>
      </div>

      <Section bg="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-8 sm:p-10 shadow-sm">
              {isSubmitted ? (
                /* Success State */
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your communication regarding <strong>{formData.organisation}</strong> has been logged by our Institutional Advisory Secretariat.
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    A senior methodology specialist will review your request and get in touch at <strong>{formData.email}</strong> within 1-2 working days.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleResetForm}
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                /* The Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      Institutional Inquiry Form
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                      Fields marked with * are required for accreditation and institutional verification.
                    </p>
                  </div>

                  {/* Name field */}
                  <div>
                    <label htmlFor={nameId} className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id={nameId}
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Prof. / Dr. / Shri Rameshwar Patil"
                      className={`w-full px-4 py-3 rounded-lg text-sm bg-stone-50 dark:bg-slate-800 border transition-colors focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                          : 'border-slate-300 dark:border-slate-700 focus:ring-amber-500 focus:border-amber-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Organisation grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={emailId} className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Official Institutional Email *
                      </label>
                      <input
                        id={emailId}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="registrar@university.ac.in"
                        className={`w-full px-4 py-3 rounded-lg text-sm bg-stone-50 dark:bg-slate-800 border transition-colors focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                            : 'border-slate-300 dark:border-slate-700 focus:ring-amber-500 focus:border-amber-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor={orgId} className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Institution / Department *
                      </label>
                      <input
                        id={orgId}
                        type="text"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        placeholder="e.g. State University / IQAC Cell"
                        className={`w-full px-4 py-3 rounded-lg text-sm bg-stone-50 dark:bg-slate-800 border transition-colors focus:outline-none focus:ring-2 ${
                          errors.organisation
                            ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                            : 'border-slate-300 dark:border-slate-700 focus:ring-amber-500 focus:border-amber-500'
                        }`}
                      />
                      {errors.organisation && (
                        <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.organisation}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor={messageId} className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Nature of Requirement / Message *
                    </label>
                    <textarea
                      id={messageId}
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your inquiry (e.g., NIRF data audit, GSIRF participation, embedded analyst deployment, or state rating framework advisory)..."
                      className={`w-full px-4 py-3 rounded-lg text-sm bg-stone-50 dark:bg-slate-800 border transition-colors focus:outline-none focus:ring-2 ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-400 bg-red-50/20'
                          : 'border-slate-300 dark:border-slate-700 focus:ring-amber-500 focus:border-amber-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full justify-center"
                    icon={Send}
                  >
                    {isSubmitting ? 'Transmitting...' : 'Submit Institutional Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Contact Details & Map Placeholder (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs space-y-6">
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                ICARE National Secretariat
              </h3>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block">
                      Headquarters (South India)
                    </span>
                    <span>{contactInfo.headquarters.address}</span>
                    <br />
                    <span>{contactInfo.headquarters.city}</span>
                    <span className="block text-xs text-slate-400 italic mt-0.5">{contactInfo.headquarters.pin}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block text-xs">
                      Official Communication
                    </span>
                    <a href={`mailto:${contactInfo.headquarters.email}`} className="text-amber-600 dark:text-amber-400 hover:underline">
                      {contactInfo.headquarters.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block text-xs">
                      Telephone
                    </span>
                    <span>{contactInfo.headquarters.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block text-xs">
                      Operating Hours
                    </span>
                    <span>{contactInfo.headquarters.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Coordinations Card */}
            <div className="p-6 rounded-2xl bg-stone-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-3">
              <span className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                Regional Program Offices:
              </span>
              {contactInfo.regionalOffices.map((office, oIdx) => (
                <div key={oIdx} className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60">
                  <span className="font-semibold text-slate-900 dark:text-white block">{office.region}</span>
                  <span className="text-amber-700 dark:text-amber-400">{office.location}</span>
                  <p className="text-slate-500 dark:text-slate-400 mt-0.5">{office.focus}</p>
                </div>
              ))}
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-slate-950 text-white p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Geographical Coordinates (Chennai / Pan-India)
                </span>
                <span className="text-[11px] text-slate-400 font-mono">13.0827° N, 80.2707° E</span>
              </div>

              <div className="h-44 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415520_1px,transparent_1px),linear-gradient(to_bottom,#33415520_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center text-amber-400 mb-2 animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-serif font-bold text-sm text-white">
                    ICARE Headquarters
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5">
                    Chennai, Tamil Nadu, India
                  </span>
                  <span className="text-[10px] text-amber-400/80 font-mono mt-2">
                    [TODO: Embed verified Google Maps or Leaflet Tile API]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
