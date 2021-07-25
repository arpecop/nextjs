import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home ({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps () {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://graphqldbone.herokuapp.com/Products')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts
    }
  }
}
