import Link from 'next/link'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import {auth} from '../firebaseClient';
import { useAuth } from "../context/authContext";

export default function Header() {
  const { user, login, logout } = useAuth()

  // const handleSignin = (e: React.SyntheticEvent) => {
  //   e.preventDefault()
  //   auth.signIn()
  // }
  // const handleSignout = (e: React.SyntheticEvent) => {
  //   e.preventDefault()
  //   auth.signOut()
  // }

  return (
    <div className='header'>
      <Link href='/'>
        <a className='logo'>NextAuth.js</a>
      </Link>
      {user && <a href="#" onClick={logout} className="btn-signin">Sign out</a>}
      {!user && <a href="#" onClick={login} className="btn-signin">Sign in</a>}
    </div>
  )
}