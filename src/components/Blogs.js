import getAllBlogs from '@/lib/getAllBlogs';
import Link from 'next/link';

export default async function Blogs() {
  const blogs = await getAllBlogs(); 
 

  if (!blogs || blogs.length === 0) {
    return <p className="text-center text-red-500">No blogs available.</p>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600 text-center my-20">All Blogs</h1>
      <div>
        {blogs.map((blog, index) => (
          <div key={blog.id} className="bg-gray-100 hover:bg-blue-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 my-6">
          <h2 className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <Link href={`/blog/${blog.id}`}>
              {`${index + 1}. ${blog.title}`}
            </Link>
          </h2>
        </div>
        
        ))}
      </div>
    </div>
  );
}
