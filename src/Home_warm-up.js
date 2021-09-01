const Home = () => {

    // home page button click
    const handleClick1 = () => {
        console.log("Hello User!");
        alert("Hello User!");
    }
    
    // dynamic var button
    const handleDynamicClick1 = (name) => {
        console.log(`Hello ${name}!`);
        alert(`Hello ${name}!`);
    }

    // home page button click with event object
    const handleClick2 = (event) => {
        console.log("Hello Event!", event);
        alert("Hello Event!", event);
    }

    // dynamic var button with event object
    const handleDynamicClick2 = (name, e) => {
        console.log(`Hello ${name}!`, e);
        alert(`Hello ${name}!`, e);
    }

    // JSX return template 
    return ( 
        <div className="home">
            <h3>Home Page - Content Header - h3</h3>
            <p>Lorem ipsum dolor sit amet. Et ullamQuo reprehenderit?</p>
            {/* Button - can't invoke the function i.e., handleClick() on page load */}
            <button className="button" onClick={handleClick1}>Click Me</button>
            <br />
            {/* Button using an anonymous function to pass in a dynamic var - one line*/}
            <button className="button" onClick={() => handleDynamicClick1('Fancy User!')}>Dynamic</button>
            {/* can also be two lines (nested curly brackets):
                <button className="button" onClick={() => 
                    {handleDynamicClick('Fancy User!')}
                }>Dynamic</button>
            
            */}
            <br />
            {/* Button - with event */}
            <button className="button" onClick={handleClick2}>Click Event Object</button>
            <br />
            {/* Button using an anonymous function with Event */}
            <button className="button" onClick={(e) => handleDynamicClick2('Fancy User!', e)}>Dynamic Event Object</button>

        </div>
     );
}
 
export default Home;