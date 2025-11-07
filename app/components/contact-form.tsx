'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z.string()
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  subject: z.string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject must be less than 200 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
  honeypot: z.string().max(0), // Anti-spam honeypot field
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      honeypot: '', // Hidden field for spam protection
    },
  });

  const messageLength = watch('message')?.length || 0;

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot field (anti-spam)
    if (data.honeypot) {
      console.warn('Spam detected');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Since we're using Netlify forms, we need to submit via FormData
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);

      const response = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />
      
      {/* Honeypot field (hidden from users) */}
      <div className="hidden" aria-hidden="true">
        <label>
          Don't fill this out if you're human:
          <input {...register('honeypot')} name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm font-medium text-green-800">
            Thank you for your message! We'll get back to you soon.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm font-medium text-red-800">{errorMessage}</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' },
              maxLength: { value: 100, message: 'Name must be less than 100 characters' },
              pattern: {
                value: /^[a-zA-Z\s'-]+$/,
                message: 'Name can only contain letters, spaces, hyphens, and apostrophes',
              },
            })}
            type="text"
            id="name"
            name="name"
            placeholder="Your Name *"
            disabled={isSubmitting}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full rounded-lg border px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 transition ${
              errors.name
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                : 'border-slate-300 focus:border-slate-500 focus:ring-slate-500'
            } ${isSubmitting ? 'bg-slate-50 cursor-not-allowed' : ''}`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="sr-only">Your Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address',
              },
            })}
            type="email"
            id="email"
            name="email"
            placeholder="Your Email *"
            disabled={isSubmitting}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full rounded-lg border px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 transition ${
              errors.email
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                : 'border-slate-300 focus:border-slate-500 focus:ring-slate-500'
            } ${isSubmitting ? 'bg-slate-50 cursor-not-allowed' : ''}`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="sr-only">Subject</label>
        <input
          {...register('subject', {
            required: 'Subject is required',
            minLength: { value: 3, message: 'Subject must be at least 3 characters' },
            maxLength: { value: 200, message: 'Subject must be less than 200 characters' },
          })}
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject *"
          disabled={isSubmitting}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={`w-full rounded-lg border px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 transition ${
            errors.subject
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
              : 'border-slate-300 focus:border-slate-500 focus:ring-slate-500'
          } ${isSubmitting ? 'bg-slate-50 cursor-not-allowed' : ''}`}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-xs text-red-600">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="sr-only">Your Message</label>
        <div className="relative">
          <textarea
            {...register('message', {
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters' },
              maxLength: { value: 5000, message: 'Message must be less than 5000 characters' },
            })}
            id="message"
            name="message"
            rows={5}
            placeholder="Your Message *"
            disabled={isSubmitting}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : 'message-count'}
            className={`w-full rounded-lg border px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 transition ${
              errors.message
                ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                : 'border-slate-300 focus:border-slate-500 focus:ring-slate-500'
            } ${isSubmitting ? 'bg-slate-50 cursor-not-allowed' : ''}`}
          />
          <p id="message-count" className="mt-1 text-xs text-slate-500 text-right">
            {messageLength} / 5000 characters
          </p>
        </div>
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-500">* Required fields</p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition ${
            isSubmitting
              ? 'bg-slate-400 cursor-not-allowed'
              : 'bg-slate-900 hover:bg-slate-700'
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </div>
    </form>
  );
}