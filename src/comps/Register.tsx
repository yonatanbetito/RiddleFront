export default function Register() {
  return (
    <div>
      <h1>Register Page</h1>
      <form action={"url"} method="POST">
        <div>
          <input type="user" name="user" placeholder="username" />
        </div>
        <div>
          <input type="email" name="email" placeholder="email" />
        </div>
        <div>
          <input type="password" name="password" placeholder="password" />
        </div>
        <button type="submit">Regist</button>
      </form>
    </div>
  );
}
