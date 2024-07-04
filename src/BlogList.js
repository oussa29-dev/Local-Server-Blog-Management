import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
   
    <div className="blog-list">
      <h2 >{title}</h2>

      {blogs.map((blog) => (
        <div className="card blog-preview py-2 px-3 m-4" key={blog.id} >
          <Link  className="text-decoration-none" to={`/blogs/${blog.id}`}>
            <div className="card-body">
              <h5 className="card-title fs-3 mb-4 ">{blog.title}</h5>
              <p className="card-text">this blog is written by {blog.author}</p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </Link>
        </div>
    // <div className="blog-preview" key={blog.id}>

        //     <Link to={`/blogs/${blog.id}`}>
        //     <h2>{blog.title}</h2>
        //     <p>this blog is written by {blog.author}</p>
        //     </Link>

        // </div>
      ))}
    </div>
 
  );
};

export default BlogList;
