import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {id: 0, title: 'Long Dought Fermentation', copy: 'Lorem ipsum...', author: 'Bill'},
        {id: 1, title: 'What is a Pre-Ferment', copy: 'Lorem ipsum...', author: 'Sarah'},
        {id: 2, title: 'Four, Water, Salt', copy: 'Lorem ipsum...', author: 'Bill'},
        {id: 3, title: 'Bench Tools', copy: 'Lorem ipsum...', author: 'Sarah'},
        {id: 4, title: 'Your Bakehouse', copy: 'Lorem ipsum...', author: 'Bill'},
        {id: 5, title: 'Which Stand Mixer is right for You', copy: 'Lorem ipsum...', author: 'Sarah'},
        {id: 6, title: 'Home Milling Flour', copy: 'Lorem ipsum...', author: 'Sarah'},
        {id: 7, title: "When to use '00' flour", copy: 'Lorem ipsum...', author: 'Sarah'},
        {id: 8, title: 'Room Temperature Fermentation', copy: 'Lorem ipsum...', author: 'Bill'},
        {id: 9, title: 'Stand Mixer Dough Hooks', copy: 'Lorem ipsum...', author: 'Sarah'}
    ]);

    const [name, setName] = useState('Kendra');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // useEffect with an anonymous function - runs every time there is a re-render
    useEffect(() => {
        console.log("UseEffect ran");
        console.log(name);
        // fetch data or auth - run a side effect - changing state in here could create a infinity loop

        // empty dependancy array - if only need the func to run once on the intitial render
        // add 'name' to the dependancy array so that the useEffect runs when the button is clicked
    }, [name]);

    // JSX return template 
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Bill')} title="Bill's Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Sarah')} title="Sarah's Blogs" />

            {/* name change useState/useEffect denpendancy */}
            <button onClick={() => setName('Tommy')}>change name</button>
            <p>{name}</p>
            
        </div>
     );
}
 
export default Home;