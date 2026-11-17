/**
 * ICARE Institutional Advisory — Contact Inquiries Backend API
 * Compatible with Vercel, Netlify Serverless, Node.js, and Vite Dev Middleware.
 */

// Email regex adhering to RFC 5322 validation standards
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Sanitize untrusted user input string
 */
export function sanitizeString(val) {
  if (typeof val !== 'string') return '';
  return val
    .trim()
    .replace(/\0/g, '') // remove null bytes
    .replace(/[<>]/g, ''); // strip angle brackets to prevent script tags
}

/**
 * Core validation engine for institutional inquiry forms
 */
export function validateInquiryPayload(data = {}) {
  const errors = {};

  const name = sanitizeString(data.name);
  const email = (data.email || '').trim();
  const organisation = sanitizeString(data.organisation);
  const message = sanitizeString(data.message);
  const honeypot = (data._hp || data.website || '').trim();

  // Bot honeypot check
  if (honeypot) {
    return {
      isValid: false,
      isSpam: true,
      errors: { _general: 'Automated submission rejected.' },
      sanitized: {}
    };
  }

  // Name validation
  if (!name) {
    errors.name = 'Full name is required for institutional record.';
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  } else if (name.length > 100) {
    errors.name = 'Name cannot exceed 100 characters.';
  } else if (!/^[\p{L}\s.'-]+$/u.test(name)) {
    errors.name = 'Name contains unsupported special characters.';
  }

  // Email validation
  if (!email) {
    errors.email = 'Official institutional email address is required.';
  } else if (email.length < 5 || email.length > 150) {
    errors.email = 'Email address length is invalid (5-150 characters).';
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Please provide a valid official email address format (e.g. registrar@univ.ac.in).';
  }

  // Organisation validation
  if (!organisation) {
    errors.organisation = 'Institution or Department name is required.';
  } else if (organisation.length < 2) {
    errors.organisation = 'Institution name must be at least 2 characters.';
  } else if (organisation.length > 150) {
    errors.organisation = 'Institution name cannot exceed 150 characters.';
  }

  // Message validation
  if (!message) {
    errors.message = 'Please provide details regarding your institutional advisory requirement.';
  } else if (message.length < 10) {
    errors.message = 'Inquiry message must be at least 10 characters long.';
  } else if (message.length > 2000) {
    errors.message = 'Inquiry message cannot exceed 2000 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    isSpam: false,
    errors,
    sanitized: {
      name,
      email,
      organisation,
      message
    }
  };
}

/**
 * Serverless HTTP Handler
 */
export default async function handler(req, res) {
  // CORS Headers for cross-origin or local dev setups
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
      success: false, 
      error: 'Method Not Allowed. Only POST requests are supported.' 
    }));
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        success: false,
        error: 'Malformed JSON payload.'
      }));
      return;
    }
  }

  const { isValid, isSpam, errors, sanitized } = validateInquiryPayload(body);

  if (isSpam) {
    // Silently succeed for bots to avoid hinting
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      message: 'Inquiry received.'
    }));
    return;
  }

  if (!isValid) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: false,
      message: 'Validation failed on one or more institutional fields.',
      errors
    }));
    return;
  }

  // Generate Reference Number
  const referenceId = `ICARE-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

  // Institutional log output (in real prod, connects to CRM / email SMTP / DB)
  console.info(`[ICARE API] Valid inquiry logged: ${referenceId} from ${sanitized.email} (${sanitized.organisation})`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    success: true,
    referenceId,
    message: 'Institutional inquiry logged successfully. An advisory specialist will contact you shortly.',
    data: {
      name: sanitized.name,
      organisation: sanitized.organisation,
      email: sanitized.email
    }
  }));
}
