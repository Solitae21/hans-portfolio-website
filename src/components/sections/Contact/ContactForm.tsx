import { Send, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui';
import useContactForm from '@/hooks/useContactForm';

export default function ContactForm() {
  const { formState, handleChange, handleSubmit, reset } = useContactForm();
  const { data, status, errors } = formState;

  return (
    <div aria-live="polite">
      {status === 'success' || status === 'error' ? (
        <div
          role={status === 'error' ? 'alert' : 'status'}
          className="surface-card flex flex-col items-center justify-center gap-4 px-6 py-16 text-center"
        >
          {status === 'success' ? (
            <CheckCircle2 size={36} className="text-emerald-700" />
          ) : (
            <XCircle size={36} className="text-red-700" />
          )}
          <h3 className="text-xl font-medium">
            {status === 'success' ? 'Message sent!' : 'Something went wrong'}
          </h3>
          <p className="text-sm text-muted">
            {status === 'success'
              ? 'Thanks for reaching out. I’ll get back to you soon.'
              : 'Please try again or email me directly.'}
          </p>
          <Button variant="secondary" size="sm" onClick={reset}>
            {status === 'success' ? 'Send another message' : 'Try again'}
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-busy={status === 'sending'}
          className="flex flex-col gap-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              type="text"
              placeholder="Your name"
              value={data.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>
          <Field
            label="Subject"
            name="subject"
            type="text"
            placeholder="An opportunity to work together"
            value={data.subject}
            onChange={handleChange}
            error={errors.subject}
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              minLength={20}
              placeholder="Tell me a little about the role or your team…"
              value={data.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="field resize-y"
            />
            {errors.message && (
              <span id="message-error" className="field-error">
                {errors.message}
              </span>
            )}
          </div>
          <Button
            type="submit"
            loading={status === 'sending'}
            rightIcon={<Send size={16} />}
            className="self-start"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </Button>
          <span role="status" className="sr-only">
            {status === 'sending'
              ? 'Sending your message'
              : Object.values(errors).filter(Boolean).join(' ')}
          </span>
        </form>
      )}
    </div>
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
function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        autoComplete={name === 'name' || name === 'email' ? name : undefined}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? name + '-error' : undefined}
        className="field"
      />
      {error && (
        <span id={name + '-error'} className="field-error">
          {error}
        </span>
      )}
    </div>
  );
}
