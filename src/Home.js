import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // hard coded data  moved to ./data/db.json (json-server >>) npx json-server --watch src/data/db.json --port 8000
  const [blogs, setBlogs] = useState(null);

  // useEffect with an anonymous function - runs every time there is a re-render
  useEffect(() => {
      // api fetch - simulate db
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        // response promise
        return res.json();
      })
      // actual data
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
    // empty dependancy array so the useEffect only runs on fisrt render
  }, []);

  // JSX return template
  return (
    <div className="home">
        {blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Bill")} title="Bill's Blogs" /> }
        {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Sarah")} title="Sarah's Blogs" /> }
        
    </div>
  );
};

export default Home;
