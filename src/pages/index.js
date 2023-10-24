import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to MyFatoorah Payment Integration</h1>
      <Link href="/payment">
        Go to Payment Page
      </Link>
    </div>
  );
}