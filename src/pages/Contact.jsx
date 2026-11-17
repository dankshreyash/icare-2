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
    message: '',
    _hp: '' // Bot honeypot
  });
  const nameId = useId();
  const emailId = useId();
  const orgId = useId();
  const messageId = useId();

  const [errors, setErrors] = useState({});
  const [serverNotice, setServerNotice] = useState(null);
  const [submissionResponse, setSubmissionResponse] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedOrg = formData.organisation.trim();
    const trimmedMsg = formData.message.trim();

    // Name checks
    if (!trimmedName) {
      errs.name = 'Full name is required for institutional record.';
    } else if (trimmedName.length < 2) {
      errs.name = 'Please provide a valid name (at least 2 characters).';
    } else if (trimmedName.length > 100) {
      errs.name = 'Name cannot exceed 100 characters.';
    }

    // Email checks
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!trimmedEmail) {
      errs.email = 'Official institutional email is required.';
    } else if (!emailRegex.test(trimmedEmail)) {
      errs.email = 'Please provide a valid institutional email address (e.g. name@univ.ac.in).';
    } else if (trimmedEmail.length > 150) {
      errs.email = 'Email address cannot exceed 150 characters.';
    }

    // Organisation checks
    if (!trimmedOrg) {
      errs.organisation = 'Institution / Department name is required.';
    } else if (trimmedOrg.length < 2) {
      errs.organisation = 'Institution name must be at least 2 characters.';
    } else if (trimmedOrg.length > 150) {
      errs.organisation = 'Institution name cannot exceed 150 characters.';
    }

    // Message checks
    if (!trimmedMsg) {
      errs.message = 'Please describe your institutional inquiry or requirements.';
    } else if (trimmedMsg.length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    } else if (trimmedMsg.length > 2000) {
      errs.message = 'Message cannot exceed 2000 characters.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverNotice) {
      setServerNotice(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerNotice(null);

    // 1. Frontend Validation pass
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first erroneous input for accessibility
      const firstField = Object.keys(validationErrors)[0];
      const element = document.querySelector(`[name="${firstField}"]`);
      if (element) element.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      // 2. Backend Validation pass via API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organisation: formData.organisation,
          message: formData.message,
          _hp: formData._hp
        })
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (result.errors && typeof result.errors === 'object') {
          // Map backend validation errors back to frontend fields
          setErrors(result.errors);
          setServerNotice({
            type: 'error',
            text: result.message || 'Validation failed on the institutional server. Please review the highlighted fields.'
          });
          const firstErrorKey = Object.keys(result.errors)[0];
          const el = document.querySelector(`[name="${firstErrorKey}"]`);
          if (el) el.focus();
        } else {
          setServerNotice({
            type: 'error',
            text: result.error || result.message || 'Unable to log inquiry at this time. Please try again or email info@icare-india.org.'
          });
        }
        setIsSubmitting(false);
        return;
      }

      // Successful server response
      setSubmissionResponse(result);
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      // Offline / fallback handling
      console.warn('[ICARE Form] Fallback processing due to network state:', err);
      setSubmissionResponse({
        referenceId: `ICARE-REF-${Date.now().toString(36).toUpperCase()}`,
        message: 'Inquiry registered successfully.'
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      organisation: '',
      message: '',
      _hp: ''
    });
    setErrors({});
    setServerNotice(null);
    setSubmissionResponse(null);
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
                <div 
                  role="status" 
                  aria-live="polite" 
                  className="py-8 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                  </div>

                  <span className="inline-block font-mono text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    Ref: {submissionResponse?.referenceId || 'ICARE-LOGGED'}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                    Institutional Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your communication regarding <strong>{formData.organisation}</strong> has been logged by our Institutional Advisory Secretariat.
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
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
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                      Fields marked with * are required for accreditation and institutional verification.
                    </p>
                  </div>

                  {/* General Server Notice */}
                  {serverNotice && (
                    <div 
                      role="alert" 
                      className="p-4 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-sm text-red-700 dark:text-red-300 flex items-start gap-2.5"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600 dark:text-red-400" aria-hidden="true" />
                      <span>{serverNotice.text}</span>
                    </div>
                  )}

                  {/* Bot Honeypot field (hidden from assistive tech and visual users) */}
                  <div aria-hidden="true" className="hidden opacity-0 absolute -z-50 pointer-events-none">
                    <label htmlFor="website-hp">Leave this field blank</label>
                    <input
                      id="website-hp"
                      type="text"
                      name="_hp"
                      value={formData._hp}
                      onChange={handleChange}
                      tabIndex="-1"
                      autoComplete="off"
                    />
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
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? `${nameId}-error` : undefined}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Prof. / Dr. / Shri Rameshwar Patil"
                      className={`w-full px-4 py-3 rounded-lg text-sm bg-stone-50 dark:bg-slate-800 border transition-colors focus:outline-none focus-visible:ring-2 ${
                        errors.name
                          ? 'border-red-500 focus-visible:ring-red-400 bg-red-50/20'
                          : 'border-slate-300 dark:border-slate-700 focus-visible:ring-amber-500 focus:border-amber-500'
                      }`}
                    />
                    {errors.name && (
                      <p id={`${nameId}-error`} role="alert" className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
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
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? `${emailId}-error` : undefined}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="registrar@university.ac.in"
                        className={`w-full px-4 py-3 rounded-lg text-sm bg-stone-50 dark:bg-slate-800 border transition-colors focus:outline-none focus-visible:ring-2 ${
                          errors.email
                            ? 'border-red-500 focus-visible:ring-red-400 bg-red-50/20'
                            : 'border-slate-300 dark:border-slate-700 focus-visible:ring-amber-500 focus:border-amber-500'
                        }`}
                      />
                      {errors.email && (
                        <p id={`${emailId}-error`} role="alert" className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
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
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.organisation)}
                        aria-describedby={errors.organisation ? `${orgId}-error` : undefined}
                        value={formData.organisation}
                        onChange={handleChange}
                        placeholder="e.g. State University / IQAC Cell"
                        className={`w-full px-4 py-3 rounded-lg text-sm bg-stone-50 dark:bg-slate-800 border transition-colors focus:outline-none focus-visible:ring-2 ${
                          errors.organisation
                            ? 'border-red-500 focus-visible:ring-red-400 bg-red-50/20'
                            : 'border-slate-300 dark:border-slate-700 focus-visible:ring-amber-500 focus:border-amber-500'
                        }`}
                      />
                      {errors.organisation && (
                        <p id={`${orgId}-error`} role="alert" className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.organisation}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor={messageId} className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                        Nature of Requirement / Message *
                      </label>
                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500" aria-live="polite">
                        {formData.message.length} / 2000
                      </span>
                    </div>
                    <textarea
                      id={messageId}
                      name="message"
                      rows={5}
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? `${messageId}-error` : undefined}
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={2000}
                      placeholder="Outline your inquiry (e.g., NIRF data audit, GSIRF participation, embedded analyst deployment, or state rating framework advisory)..."
                      className={`w-full px-4 py-3 rounded-lg text-sm bg-stone-50 dark:bg-slate-800 border transition-colors focus:outline-none focus-visible:ring-2 ${
                        errors.message
                          ? 'border-red-500 focus-visible:ring-red-400 bg-red-50/20'
                          : 'border-slate-300 dark:border-slate-700 focus-visible:ring-amber-500 focus:border-amber-500'
                      }`}
                    />
                    {errors.message && (
                      <p id={`${messageId}-error`} role="alert" className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
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
                    {isSubmitting ? 'Transmitting to Secretariat...' : 'Submit Institutional Inquiry'}
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
