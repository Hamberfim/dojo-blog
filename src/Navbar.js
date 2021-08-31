// a component is a function that return a JSX template 
// and is exported at the bottome of the file

// stateless function component
// function Navbar() {
//     return (

//     );
// }
 
// export default Navbar;

// stateless function component -using simple react snippet 'sfc' and lambda/arrow function
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2>Subheader/Menu - h2</h2>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;