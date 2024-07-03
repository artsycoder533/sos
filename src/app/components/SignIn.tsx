
import { FaGoogle } from "react-icons/fa"
import { signIn } from "../../../auth"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit"><FaGoogle /> Signin with Google</button>
    </form>
  )
} 