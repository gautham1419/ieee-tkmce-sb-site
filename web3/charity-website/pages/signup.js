import Link from 'next/link';

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
    // Add your signup logic here
  };

  return (
    <div>
      <header>
        <h1>Sign Up</h1>
        <nav>
          <Link legacyBehavior href="/"><a>Home</a></Link>
          <Link legacyBehavior href="/donate"><a>Donate</a></Link>
          <Link legacyBehavior href="/fundraise"><a>Fundraise</a></Link>
          <Link legacyBehavior href="/login"><a>Login</a></Link>
        </nav>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Sign Up</button>
        </form>
      </main>
    </div>
  );
}
