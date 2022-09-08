import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Users.module.css';
interface UserProps {
  dataUsers: Array<any>;
}
export default function Users(props: UserProps) {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="Users">
      <h1>Users Page</h1>

      {dataUsers.map((val, key) => {
        return (
          <div
            key={key}
            onClick={() => router.push(`/users/${val.id}`)}
            className={styles.card}
          >
            <p>{val.name}</p>
            <p>{val.email}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3004/users');
  const dataUsers = await response.json();

  return {
    props: {
      dataUsers,
    },
  };
}
