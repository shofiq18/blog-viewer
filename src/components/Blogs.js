import getAllBlogs from '@/lib/getAllBlogs';
import Link from 'next/link';

export default async function Blogs() {
  const blogs = await getAllBlogs(); // Ensure this returns an array of blogs
 

  if (!blogs || blogs.length === 0) {
    return <p className="text-center text-red-500">No blogs available.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600 text-center my-20">All Blogs</h1>
      <div>
        {blogs.map((blog, index) => (
          <div key={blog.id}>
            <h2 className="text-xl font-bold mt-8">
              <Link href={`/blog/${blog.id}`}>{`${index + 1}. ${blog.title}`}</Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
