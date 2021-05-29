import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  //empty array make sthe funtion runs only on initial render
  //props are the way to pass data from parent components to the child components

  return (
    <div className="content">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...........</div>}
      {blogs && ( //conditioning output
        <BlogList blogs={blogs} tittle="All blogs" />
      )}
      {/*reusing the component(BlogList)*/}
    </div>
  );
};

export default Home;
