import {useState} from 'react';

const Home = () => {
    // array destructuring for useState Hook
    const [name, setName] = useState('Little Bill');  // made reactive ( or like kockout.js it's observable)
    // array destructuring - value = age, the function = setAge
    const [age, setAge] = useState(25);
;
    // home page button click
    const handleClick = () => {
        // useState array destructuring Function Call
        setName('Big Bill');
        setAge(55);
    }


    // JSX return template 
    return ( 
        <div className="home">
            <h3>Home Page - Content Header - h3</h3>
            <p className="bigBill">{name} is {age} years old.</p>
            {/* Button - can't invoke the function i.e., handleClick() on page load */}
            <button className="button" onClick={handleClick}>Click Me</button>
            <br />

        </div>
     );
}
 
export default Home;