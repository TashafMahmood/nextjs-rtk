'use client'
import Link from 'next/link'
import style from './page.module.css'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import img1 from '../../public/vercel.svg'

export default function Home() {
  const router = useRouter()
  return (
    <main >
      <h1 className={style.main}>Homepage</h1>
      <Image
        src={img1}
      />
      <Link href={'/login'}>Go to Login</Link>
      <br />
      <br />
      <Link href={'/about'}>Go to About</Link>
      <br />
      <br />
      <Link href={'/productlist'}>Go to Products</Link>
      <br />
      <br />
      <Link href={'/serverproductlist'}>Go to Server Side Products</Link>
      <br />
      <br />
      <button onClick={() => router.push('/login')}>Go to login</button>
      <br />
      <br />

    </main>
  )
}


