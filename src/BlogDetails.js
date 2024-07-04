import { useHistory,useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    
    const {id}= useParams();
    const {data:blog,error,isPending}=useFetch('http://localhost:8000/blogs/'+id)
    const history= useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id ,{
            method:'Delete',
        }).then(
            () => {
                history.push("/")
              }
        )

    }

    return (
        <div className="blog-details">
            
           {isPending && <div>Loading...</div>}
           {error&&<div>{error}</div>}
           {blog && (<article>
            <h2 className="mb-2">{blog.title}</h2>
            <p>written by {blog.author}</p>
            <div className="my-3">{blog.body}</div>
            <button onClick={handleClick}  className="p-2 rounded-3 border-0">delete</button>
           </article>
      )}
             </div>
      );
}
 
export default BlogDetails;

