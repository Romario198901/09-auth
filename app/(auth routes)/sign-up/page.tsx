'use client';
import { useId } from 'react';
import css from './SignUpPage.module.css';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { register, RegisterRequest } from '@/lib/api/clientApi';

export default function SignUpPage() {
  const signUpId = useId();
  const queryClient = useQueryClient();
  const router = useRouter();
  const createUser = useMutation({
    mutationFn: register,
    onSuccess: async () => {
      (await queryClient.invalidateQueries({ queryKey: ['user'] }),
        router.push('/profile'));
    },
  });
  const handleRegisterSubmit = async (formData: FormData) => {
    const userData: RegisterRequest = {
      email: String(formData.get('email')),
      password: String(formData.get('pasword')),
    };
    createUser.mutate(userData);
    router.push('/profile');
  };
  return (
    <main className={css.mainContent}>
      <h1 className={css.formTitle}>Sign up</h1>
      <form className={css.form} action={handleRegisterSubmit}>
        <div className={css.formGroup}>
          <label htmlFor={`${signUpId}-email`}>Email</label>
          <input
            id={`${signUpId}-email`}
            type="email"
            name="email"
            className={css.input}
            required
          />
        </div>
        <div className={css.formGroup}>
          <label htmlFor={`${signUpId}-password`}>Password</label>
          <input
            id={`${signUpId}-password`}
            type="password"
            name="password"
            className={css.input}
            required
          />
        </div>
        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Register
          </button>
        </div>
        <p className={css.error}>Error</p>
      </form>
    </main>
  );
}
