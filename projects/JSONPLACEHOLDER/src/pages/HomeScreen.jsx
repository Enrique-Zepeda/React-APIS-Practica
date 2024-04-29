import responsePosts from "../mocks/withResponse.json";
import DrawerMenu from "../components/DrawerMenu";
export function HomeScreen() {
  const posts = responsePosts;
  const hasPosts = posts.length > 0;
  return (
    <div className="bg-slate-700 h-full flex-col items-center text-center py-8">
      <header>
        <DrawerMenu />
        <h1 className="text-4xl text-sky-500 mt-3">Posts</h1>
      </header>
      <main className="flex flex-col items-center w-full ">
        {hasPosts ? (
          <ul className="text-left text-white max-w-4xl mx-auto">
            {posts.map((post) => (
              <li key={post.id} className="m-3">
                <h2 className="text-2xl text-yellow-300">{post.id}</h2>
                <h3>
                  <span className="text-emerald-300 text-xl">Titulo:</span>
                  {post.title}
                </h3>
                <p>
                  <span className="text-cyan-500 text-lg">Body:</span>
                  {post.body}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No post encontrados</p>
        )}
      </main>
    </div>
  );
}
