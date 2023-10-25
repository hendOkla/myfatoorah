import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Home() {

  const router = useRouter();

  const goToGooglePage = () => {
    router.push('http://localhost:8000/myfatoorah');
  };


  return (
    <div>
      <h1>Welcome to MyFatoorah Payment Integration</h1>
      <button onClick={goToGooglePage}>Go to Google</button>
    </div>
  );
}