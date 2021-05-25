import styles from '../styles/Home.module.css'

const usePosts = (posts) => {
  console.log(posts);
  const Posts = () => (
    <>
      {posts.map(post => (
        <a href="https://nextjs.org/docs" className={styles.card} key={post.id}>
          <h2>{post.titulo} &rarr;</h2>
          <img src={`http://localhost:1337${post.foto.url}`} width={200} height={100} />
          <p>{post.descricao}</p>
          {/* <div style={{ display: "flex" }}>
            <span style={{ color: "blue" }}>{post.created_at}</span>
            <span style={{ color: "blue" }}>{post.categoria}</span>
            <span style={{ color: "red" }}>{post.autor_post}</span>
          </div> */}

        </a>
      ))}
    </>
  )
  return {
    Posts
  }
}

export default usePosts