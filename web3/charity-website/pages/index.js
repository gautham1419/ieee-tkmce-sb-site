import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header>
        <h1>Welcome to Charity Website</h1>
        <nav>
          <Link legacyBehavior href="/donate"><a>Donate</a></Link>
          <Link legacyBehavior href="/fundraise"><a>Fundraise</a></Link>
          <Link legacyBehavior href="/login"><a>Login</a></Link>
          <Link legacyBehavior href="/signup"><a>Sign Up</a></Link>
        </nav>
      </header>
      <main>
        <p>This is the home page of the Charity Website.</p>
      </main>
    </div>
  );
}
