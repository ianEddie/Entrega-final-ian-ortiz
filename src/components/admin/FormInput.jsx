import styles from './admin.module.css'
import ErrorMessage from './ErrorMessage'

export default function FormInput({
  label,
  name,
  type,
  register,
  errors,
  className
}) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        placeholder={`${
          errors[name] ? `${label} is requiered` : `type a ${name}`
        }`}
        className={`${className} rounded-3xl text-center p-[2px] text-sm border ${
          errors[name]
            ? 'bg-red-500/30'
            : 'bg-neutral-100/20 text-neutral-100 border-neutral-600'
        }`}
        type={type}
        {...register(name, {
          required: {
            value: true,
            message: `${label} is required`
          },
          minLength: {
            value: 1,
            message: 'Min 1 characters'
          }
        })}
      />
      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </div>
  )
}
