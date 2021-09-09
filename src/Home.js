import {useState} from 'react';
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

    // JSX return template 
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Bill')} title="Bill's Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Sarah')} title="Sarah's Blogs" />
        </div>
     );
}
 
export default Home;