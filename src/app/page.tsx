import Link from 'next/link'
import { SignIn } from './components/SignIn'
 
export default function Home() {
  return (
    <div className="mt-24">
      <h1>Home</h1>
  <SignIn />
    </div>
  )
}