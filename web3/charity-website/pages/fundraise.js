import Link from 'next/link';

export default function Fundraise() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const goalAmount = event.target.goalAmount.value;
    console.log(`Fundraiser Title: ${title}, Description: ${description}, Goal Amount: ${goalAmount}`);
    // Add your blockchain integration logic here
  };

  return (
    <div>
      <header>
        <h1>Fundraise</h1>
        <nav>
          <Link legacyBehavior href="/"><a>Home</a></Link>
          <Link legacyBehavior href="/donate"><a>Donate</a></Link>
          <Link legacyBehavior href="/login"><a>Login</a></Link>
          <Link legacyBehavior href="/signup"><a>Sign Up</a></Link>
        </nav>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
          <label htmlFor="goalAmount">Goal Amount:</label>
          <input type="number" id="goalAmount" name="goalAmount" required />
          <button type="submit">Start Fundraiser</button>
        </form>
      </main>
    </div>
  );
}
