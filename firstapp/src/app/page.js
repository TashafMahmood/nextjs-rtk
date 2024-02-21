'use client'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Homepage</h1>
      <User username={'Tashaf'} />
      <button onClick={() => alert("hello")}>Click me</button>
    </main>
  )
}

const User = ({ username }) => {
  return (
    <div>My name is {username}</div>
  )
}
