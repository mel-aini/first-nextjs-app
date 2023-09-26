function Layout({ children }) {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <h1 className="uppercase font-bold text-xl">posts</h1>
      {children}
    </div>
  );
}

export default Layout;
