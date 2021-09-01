const Home = () => {

    // home page button click
    const handleClick = () => {
        console.log("Hello User!");
        alert("Hello User!");
    }


    // JSX return template 
    return ( 
        <div className="home">
            <h3>Home Page - Content Header - h3</h3>
            <p>Lorem ipsum dolor sit amet. Et ullamQuo reprehenderit?</p>
            {/* Button - can't invoke the function i.e., handleClick() on page load */}
            <button className="button" onClick={handleClick}>Click Me</button>
            <br />

        </div>
     );
}
 
export default Home;