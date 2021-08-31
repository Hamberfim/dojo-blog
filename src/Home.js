const Home = () => {

    // home page button click event
    const handleClick = () => {
        console.log("Hello User!");
        alert("Hello User!");
    }
    
    // dynamic var button
    const handleDynamicClick = (name) => {
        console.log(`Hello ${name}!`);
        alert(`Hello ${name}!`);
    }



    return ( 
        <div className="home">
            <h3>Home Page - Content Header - h3</h3>
            <p>Lorem ipsum dolor sit amet. Et ullamQuo reprehenderit?</p>
            {/* Button - can't invoke the function i.e., handleClick() on page load */}
            <button className="button" onClick={handleClick}>Click Me</button>
            <br />
            {/* Button using an anonymous function to pass in a dynamic var */}
            <button className="button" onClick={() => handleDynamicClick('Fancy User!')}>Dynamic</button>
            {/* can also be:
                <button className="button" onClick={() => 
                    {handleDynamicClick('Fancy User!')}
                }>Dynamic</button>
            
            */}

            

        </div>
     );
}
 
export default Home;