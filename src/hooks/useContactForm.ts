import { useCallback, useReducer } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '@/utils/constants';
import type { ContactFormData, ContactFormState, FormStatus } from '@/types';

type Action =
  | { type: 'SET_FIELD'; field: keyof ContactFormData; value: string }
  | { type: 'SET_STATUS'; status: FormStatus }
  | { type: 'SET_ERRORS'; errors: Partial<Record<keyof ContactFormData, string>> }
  | { type: 'RESET' };

const initialState: ContactFormState = {
  data: { name: '', email: '', subject: '', message: '' },
  status: 'idle',
  errors: {},
};

function reducer(state: ContactFormState, action: Action): ContactFormState {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        data: { ...state.data, [action.field]: action.value },
        errors: { ...state.errors, [action.field]: undefined },
      };
    case 'SET_STATUS':
      return { ...state, status: action.status };
    case 'SET_ERRORS':
      return { ...state, errors: action.errors, status: 'idle' };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function validate(data: ContactFormData): Partial<Record<keyof ContactFormData, string>> {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email.';
  }
  if (!data.subject.trim()) errors.subject = 'Subject is required.';
  if (data.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.';
  }
  return errors;
}

export default function useContactForm() {
  const [formState, dispatch] = useReducer(reducer, initialState);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch({ type: 'SET_FIELD', field: e.target.name as keyof ContactFormData, value: e.target.value });
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const errors = validate(formState.data);
      if (Object.keys(errors).length > 0) {
        dispatch({ type: 'SET_ERRORS', errors });
        return;
      }

      dispatch({ type: 'SET_STATUS', status: 'sending' });
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formState.data.name,
            from_email: formState.data.email,
            subject: formState.data.subject,
            message: formState.data.message,
          },
          EMAILJS_PUBLIC_KEY
        );
        dispatch({ type: 'SET_STATUS', status: 'success' });
      } catch {
        dispatch({ type: 'SET_STATUS', status: 'error' });
      }
    },
    [formState.data]
  );

  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

  return { formState, handleChange, handleSubmit, reset };
}
