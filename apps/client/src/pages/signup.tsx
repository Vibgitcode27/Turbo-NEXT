import { Signup } from "ui"
import axios from "axios"

export default function SignUp() {
    return <div>
        <Signup onClick={async(username , password) =>
        {
            const response = await axios.post("http://localhost:3000/api/signup" , {
                username,
                password
            })
        }}/>
    </div>
}