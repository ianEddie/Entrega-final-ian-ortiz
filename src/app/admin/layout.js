'use client'
import styles from '@/components/admin/admin.module.css'
import useAuthContext from '@/hooks/useAuthContext'

export default function AdminLayout({ children, login }) {
  const { user } = useAuthContext()
  return (
    <main className={`${styles.main} relative`}>
      <div className={styles.filter} />
      {user.logged ? children : login}
    </main>
  )
}
