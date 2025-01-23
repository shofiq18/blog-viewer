import getBlog from '@/lib/getBlog';

export default async function Details({ params }) {
  const { id } = params;

  const blog = await getBlog(id); // Ensure this returns an array of blogs
  console.log(blog);

  

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600 text-center my-20">  Blogs Details</h1>
      <div className='my-12 bg-slate-600 p-10 w-1/2 mx-auto'> 
        <h3 className='text-2xl font-bold mb-4 text-center'>{blog.title}</h3>
        <p>{blog.body}</p>
      </div>
      
    </div>
  );
}
