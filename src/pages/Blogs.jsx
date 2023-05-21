import BlogCard from "../components/blogs/BlogCard";
import usePageTitle from "../hooks/useTitle";
import { blogs } from "../utils/blog";

const Blogs = () => {
  usePageTitle("Blogs");
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 md:my-24 my-5  gap-6 px-3 lg:px-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
