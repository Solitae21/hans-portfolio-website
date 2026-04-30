import { Send, CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/utils/cn';
import { Button } from '@/components/ui';
import useContactForm from '@/hooks/useContactForm';

export default function ContactForm() {
  const { formState, handleChange, handleSubmit, reset } = useContactForm();
  const { data, status, errors } = formState;

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle2 size={48} className="text-emerald-400" />
        <h3 className="text-xl font-semibold text-white">Message sent!</h3>
        <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
        <Button variant="secondary" size="sm" onClick={reset}>
          Send another message
        </Button>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <XCircle size={48} className="text-red-400" />
        <h3 className="text-xl font-semibold text-white">Something went wrong</h3>
        <p className="text-gray-400">Please try again or email me directly.</p>
        <Button variant="secondary" size="sm" onClick={reset}>
          Try again
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name + Email row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Name"
          name="name"
          type="text"
          placeholder="John Doe"
          value={data.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      <Field
        label="Subject"
        name="subject"
        type="text"
        placeholder="What's this about?"
        value={data.subject}
        onChange={handleChange}
        error={errors.subject}
      />

      {/* Message textarea */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about your project or just say hi..."
          value={data.message}
          onChange={handleChange}
          className={cn(
            'w-full px-4 py-3 rounded-xl glass text-gray-200 placeholder-gray-600',
            'focus:outline-none focus:border-accent-indigo/60 focus:ring-1 focus:ring-accent-indigo/40',
            'transition-all duration-200 resize-none text-sm',
            errors.message && 'border-red-500/60 ring-1 ring-red-500/30'
          )}
        />
        {errors.message && (
          <span className="text-xs text-red-400">{errors.message}</span>
        )}
      </div>

      <Button
        type="submit"
        loading={status === 'sending'}
        size="lg"
        rightIcon={<Send size={18} />}
        className="self-start"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

function Field({ label, name, type, placeholder, value, onChange, error }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          'w-full px-4 py-3 rounded-xl glass text-gray-200 placeholder-gray-600',
          'focus:outline-none focus:border-accent-indigo/60 focus:ring-1 focus:ring-accent-indigo/40',
          'transition-all duration-200 text-sm',
          error && 'border-red-500/60 ring-1 ring-red-500/30'
        )}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
