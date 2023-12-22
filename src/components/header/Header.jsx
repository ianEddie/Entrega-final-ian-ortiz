import styles from './header.module.css'
import Navigation from './Navigation'
import Logo from './Logo'

export default function ResponsiveMenu() {
  return (
    <header
      className={`${styles.header} bg-neutral-900 flex justify-between fixed z-40 w-full p-3 sm:px-5`}
    >
      <Logo />
      <label htmlFor='menu' className={styles.label}></label>
      <input name='menu' type='checkbox' id='menu' className={styles.input} />
      <Navigation
        className={`${styles.nav} bg-neutral-900 flex items-center gap-x-3 font-semibold text-neutral-100 text-sm`}
      />
      <div className={styles.div}>
        <button className={styles.button}>.</button>
      </div>
    </header>
  )
}
