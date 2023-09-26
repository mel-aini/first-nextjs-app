import Link from "next/link";

function Navbar() {
  return (
    <main>
      <h1>Navbar</h1>
      <Link href="/posts">go to posts</Link>
      <br />
      <Link href="/">go to home</Link>
    </main>
  );
}

export default Navbar;
