import Link from "next/link";

async function Posts() {
  // const a = await new Promise((resolve) => setTimeout(resolve, 3000));
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await result.json();

  return (
    <div>
      {posts.map((elem, index) => {
        return (
          <Link key={index} href={`/posts/${elem.id}`}>
            <div>
              <h1>{elem.title}</h1>
              <p>{elem.body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Posts;
