import Link from "next/link";

async function Posts() {
  // const a = await new Promise((resolve) => setTimeout(resolve, 3000));
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await result.json();

  return (
    <div className="w-full mx-auto flex flex-col gap-5 mt-10">
      {posts.map((elem, index) => {
        return (
          <div key={index} className="p-5 border border-white">
            <Link href={`/posts/${elem.id}`}>
              <div>
                <h1 className="font-bold">{elem.title}</h1>
                <p>{elem.body}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
