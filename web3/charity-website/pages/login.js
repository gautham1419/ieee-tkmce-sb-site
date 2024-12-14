import Link from 'next/link';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(`Username: ${username}, Password: ${password}`);
    // Add your authentication logic here
  };

  return (
    <div>
      <header>
        <h1>Login</h1>
        <nav>
          <Link legacyBehavior href="/"><a>Home</a></Link>
          <Link legacyBehavior href="/donate"><a>Donate</a></Link>
          <Link legacyBehavior href="/fundraise"><a>Fundraise</a></Link>
          <Link legacyBehavior href="/signup"><a>Sign Up</a></Link>
        </nav>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Login</button>
        </form>
      </main>
    </div>
  );
}
