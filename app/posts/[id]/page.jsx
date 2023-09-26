async function Post(params) {
  let post = {};
  try {
    const id = params.params.id;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    post = await response.json();
  } catch (err) {
    console.log(err);
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
