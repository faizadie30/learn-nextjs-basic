import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <>
      <h1 className="title-not-found">Opps....</h1>
      <h1 className="title-not-found">Halaman tidak di temukan!</h1>
      <p className="title-not-found">
        <small className="title-not-found">
          dalam 3 detik kamu akan di arahkan ke home page!
        </small>
      </p>
    </>
  );
}
