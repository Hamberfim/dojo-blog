const BlogList = ( { blogs, title, handleDelete } ) => {
    // above would be: const BlogList = (props) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by <em>{blog.author}</em></p>
                    <button onClick={() => handleDelete(blog.id)}>Delete this Blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;