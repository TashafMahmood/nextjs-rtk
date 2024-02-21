'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <main className={styles.main}>
      <h1>Homepage</h1>
      <Link href={'/login'}>Go to Login</Link>
      <br />
      <br />
      <Link href={'/about'}>Go to About</Link>
      <br />
      <br />
      <button onClick={() => router.push('/login')}>Go to login</button>
    </main>
  )
}


