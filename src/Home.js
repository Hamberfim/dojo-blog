import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    // hard coded data  moved to ./data/db.json (json-server >>) npx json-server --watch src/data/db.json --port 8000
    // const [blogs, setBlogs] = useState([
    //     {id: 0, title: 'Long Dought Fermentation', copy: 'Lorem ipsum...', author: 'Bill'},
    //     {id: 1, title: 'What is a Pre-Ferment', copy: 'Lorem ipsum...', author: 'Sarah'},
    //     {id: 2, title: 'Four, Water, Salt', copy: 'Lorem ipsum...', author: 'Bill'},
    //     {id: 3, title: 'Bench Tools', copy: 'Lorem ipsum...', author: 'Sarah'}
    // ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // useEffect with an anonymous function - runs every time there is a re-render
    useEffect(() => {
        console.log("UseEffect ran");
        // fetch data or auth - run a side effect - changing state in here could create a infinity loop

        // empty dependancy array - if only need the func to run once on the intitial render
        // add 'name' to the dependancy array so that the useEffect runs when the button is clicked
    }, []);

    // JSX return template 
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Bill')} title="Bill's Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Sarah')} title="Sarah's Blogs" />
            
        </div>
     );
}
 
export default Home;