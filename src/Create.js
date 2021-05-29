import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, settitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [ispending, setIsPending] = useState(false);
  const history = useHistory();

  const handlesubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      //history.go(-1);
      history.push('/');
    });
  };
  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handlesubmit}>
        <label>Blog Title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        ></textarea>
        <label>Blog Author:</label>
        <select onChange={(e) => setAuthor(e.target.value)} value={author}>
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        {!ispending && <button>Add Blog</button>}
        {ispending && <button disabled>Adding Blog...............</button>}
      </form>
    </div>
  );
};

export default Create;
<div className='create'>
  <title></title>
</div>;
