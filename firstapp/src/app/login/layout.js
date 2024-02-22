'use client'
import Link from "next/link"
import './login.css'
import { useRouter, usePathname } from "next/navigation"


const Layout = ({ children }) => {
    const router = useRouter()
    const pathName = usePathname()

    return (
        <div>
            {
                pathName === "/login/loginteacher" ?
                    <Link href={'/login'}>Go to Login Main</Link> :
                    <div className="login_nav">
                        <h4 onClick={() => router.push("/")}>Login Navigation</h4>
                        <ul>
                            <Link href={'/login'}>Login</Link>
                            <Link href={'/login/loginstudent'}>Student Login</Link>
                            <Link href={'/login/loginteacher'}>Teacher Login</Link>
                        </ul>
                    </div>
            }
            {children}
        </div>
    )
}

export default Layout