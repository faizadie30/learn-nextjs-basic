import Layout from '../components/Layout';
import styles from '../styles/Blog.module.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlog: Post[];
}

export default function blog(props: BlogProps) {
  const { dataBlog } = props;

  return (
    <Layout pageTitle="Blog">
      <h1 className="title-homepage">Blog Page</h1>

      {dataBlog.map((blog, key) => {
        return (
          <div key={key} className={styles.card}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3004/blog');
  const dataBlog = await res.json();

  return {
    props: {
      dataBlog,
    },
  };
}
