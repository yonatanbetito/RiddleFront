export default function Login() {
  return (
    <>
      <h1>Login Page</h1>
      <form action={"url"} method="POST">
        <div>
          <input type="email" name="email" placeholder="email" />
        </div>
        <div>
          <input type="password" name="password" placeholder="password" />
        </div>
        <button type="submit">login</button>
      </form>
    </>
  );
}
