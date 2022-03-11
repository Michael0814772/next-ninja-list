import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        perspiciatis quaerat repellendus? Autem minima illo vitae sed ad minus
        cum dolor assumenda, optio eius culpa sequi facilis esse fuga rem?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quis ab
        consectetur excepturi quod ipsum, earum, modi quo, mollitia quae tempora
        deserunt rerum nemo eum harum laborum voluptatibus labore. Quos....
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  );
}
