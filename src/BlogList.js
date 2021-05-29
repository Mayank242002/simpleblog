import { Link } from 'react-router-dom';

const BlogList = ({ blogs, tittle }) => {
  return (
    //map function just cycles through the array

    <div className='blog-list'>
      <h2>{tittle}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>witten by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
