import getBlog from '@/lib/getBlog';

export default async function Details({ params }) {
  const { id } = params;

  const blog = await getBlog(id); 
  console.log(blog);



  return (
    <div className="container mx-auto my-6">
      <h1 className="text-4xl font-extrabold text-blue-700 text-center my-20">
        Blog Details
      </h1>
      <div className="my-12 bg-gray-100 rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center text-blue-800">
          {blog.title}
        </h3>
        <p className="text-lg leading-7 text-gray-700">
          {blog.body}
        </p>
      </div>
    </div>

  );
}
