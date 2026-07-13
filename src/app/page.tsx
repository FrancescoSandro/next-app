import login from "./actions";
export default function LoginPage() {
  return (
    <div>
      <form action={login}>
        <label>User Name</label>
        <input type="text" name="username" placeholder="User Name" />
        <br />
        <label>Password</label>
        <input type="text" name="password" placeholder="Password" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}