import Link from 'next/link';

export default function Donate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = event.target.amount.value;
    const message = event.target.message.value;
    console.log(`Donation Amount: ${amount}, Message: ${message}`);
    // Add your blockchain integration logic here
  };

  return (
    <div>
      <header>
        <h1>Donate</h1>
        <nav>
          <Link legacyBehavior href="/"><a>Home</a></Link>
          <Link legacyBehavior href="/fundraise"><a>Fundraise</a></Link>
          <Link legacyBehavior href="/login"><a>Login</a></Link>
          <Link legacyBehavior href="/signup"><a>Sign Up</a></Link>
        </nav>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Donate</button>
        </form>
      </main>
    </div>
  );
}
