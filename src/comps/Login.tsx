export default function Login() {
  return (
    <>
      <h1>Login Page</h1>
      <form>
        <div>
          <input type="user" name="user" placeholder="username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="password" />
        </div>
        <button type="submit">Regist</button>
      </form>
    </>
  );
}
