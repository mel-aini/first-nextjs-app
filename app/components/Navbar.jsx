import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-blue-500 w-full">
      <div className="wrapper w-[80%] h-[50px] mx-auto flex justify-between items-center">
        <h1>Navbar</h1>
        <div className="flex gap-5">
          <Link href="/">home</Link>
          <Link href="/posts">posts</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
