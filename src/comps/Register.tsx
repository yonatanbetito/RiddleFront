export default function Register() {
  return (
    <div>
      <h2>Register Page</h2>
      <form>
        <div>
          <input type="user" name="user" placeholder="username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="password" />
        </div>
        <button type="submit">Regist</button>
      </form>
    </div>
  );
}
