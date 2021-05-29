import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();

  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);

  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div className='blog-details content'>
      {isPending && <div>Loading............</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>witten by {blog.author}</p>
          <p>{blog.body}</p>
          <button onClick={handleClick}>delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
