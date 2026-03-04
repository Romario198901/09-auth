'use client'
import error from 'next/error'
import css from './SignInPage.module.css'
import { useId } from 'react'
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
export default  function SignInPage () {
  const signInId = useId();
  const router = useRouter();
  const queryClient = useQueryClient();
  const handleLoginSubmit = async(formData: FormData) => {

  }
return (
    <main className={css.mainContent}>
 <form className={css.form} action={handleLoginSubmit}>
    <h1 className={css.formTitle}>Sign in</h1>

    <div className={css.formGroup}>
      <label htmlFor={`${signInId}-email`}>Email</label>
      <input id={`${signInId}-email`} type="email" name="email" className={css.input} required />
    </div>

    <div className={css.formGroup}>
      <label htmlFor={`${signInId}-password`}>Password</label>
      <input id={`${signInId}-password`} type="password" name="password" className={css.input} required />
    </div>

    <div className={css.actions}>
      <button type="submit" className={css.submitButton}>
        Log in
      </button>
    </div>
    <p className={css.error}>{error.name}</p>
  </form>
</main>
)
}