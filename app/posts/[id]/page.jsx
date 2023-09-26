async function Post(params) {
  const id = params.params.id;
  let post = {};
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    post = await response.json();
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="w-full mx-auto mt-5">
      <h1 className="text-xl font-bold mb-3">Post {id}</h1>
      <h1 className="text-xl font-bold mb-3">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
