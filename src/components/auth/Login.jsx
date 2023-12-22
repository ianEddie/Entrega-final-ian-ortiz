import LoginForm from './LoginForm'

export default function Login() {
  return (
    <section className='h-full w-full flex flex-col justify-center items-center gap-y-10 '>
      <h1 className='z-30 font-semibold text-lg text-neutral-100'>
        <span>Sign in</span>
      </h1>
      <LoginForm />
    </section>
  )
}
