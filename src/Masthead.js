import logo from './CookingLogo.svg';

const Masthead = () => {
    return ( 
        <div className="masthead">
            <img src={logo} alt="Cooking Logo" height="90" />
            <span className="masthead" > Food Blog Masthead</span>
        </div>
     );
}
 
export default Masthead;