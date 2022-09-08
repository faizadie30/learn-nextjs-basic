import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function detail() {
  const router = useRouter();
  const { id } = router.query;
  console.log('id:', id);
  return (
    <Layout pageTitle="Detail User">
      <h1>Detail User Page</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  
}