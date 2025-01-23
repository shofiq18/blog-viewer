export default async function getAllBlogs() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');

    return result.json();
}