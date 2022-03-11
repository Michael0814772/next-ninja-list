import React from "react";
import Head from 'next/head'

const about = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
          accusamus asperiores nemo corporis at voluptatum iure commodi mollitia
          eaque veritatis debitis, suscipit omnis dolorem corrupti velit
          blanditiis adipisci officia vero.
        </p>
      </div>
    </>
  );
};

export default about;
