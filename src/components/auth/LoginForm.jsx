'use client'
import styles from '@/components/admin/admin.module.css'
import useAuthContext from '@/hooks/useAuthContext'
import useLoginForm from '@/hooks/useLoginForm'

export default function LoginForm() {
  const { handleChange, handleRegister, handleSubmit, handleSignin } =
    useLoginForm()
  const { error } = useAuthContext()

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event)
      }}
      className='z-30 sm:w-1/4 w-2/3 py-5 rounded-3xl flex flex-col items-center justify-around bg-neutral-900/80 border border-r-neutral-500'
    >
      <div className={styles.container}>
        <label className={styles.label}>Username</label>
        <input
          required
          name='email'
          type='email'
          className={styles.input}
          onChange={(event) => {
            handleChange(event)
          }}
        />
      </div>
      <div className={styles.container}>
        <label className={styles.label}>Password</label>
        <input
          required
          name='password'
          type='password'
          className={styles.input}
          onChange={(event) => {
            handleChange(event)
          }}
        />
      </div>
      <div className='flex gap-5 sm:flex-row flex-col'>
        <button
          onClick={handleSignin}
          className='bg-green-600 text-neutral-100 font-semibold px-5 py-1 rounded-full'
        >
          Sign in
        </button>
        <button
          onClick={handleRegister}
          className='bg-green-600 text-neutral-100 font-semibold px-5 py-1 rounded-full'
        >
          Register
        </button>
      </div>
      {error && <span className='text-red-500 mt-2'>{error}</span>}
    </form>
  )
}
