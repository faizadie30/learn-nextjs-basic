import Layout from '../../components/Layout';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}
interface UserDetailProps {
  user: User;
}

export default function UserDetail(props: UserDetailProps) {
  const { user } = props;

  return (
    <Layout pageTitle="Detail User">
      <h1>Detail User Page</h1>

      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3004/users');
  const dataUsers = await response.json();

  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}
export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const response = await fetch(`http://localhost:3004/users/${id}`);
  const user = await response.json();

  return { props: { user } };
}
