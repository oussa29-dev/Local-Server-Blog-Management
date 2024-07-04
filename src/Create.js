import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {

    const  [title,setTitle] = useState('');
    const  [body,setBody] = useState('');
    const  [author,setAuthor] = useState('mario');
    const  [isPending,setIsPending] = useState(false);
    const  history = useHistory();
    
    const handleSubmit = (e) => {

        e.preventDefault()
        const blog = {title,body,author};
        setIsPending(true)

        fetch('http://localhost:8000/blogs',{
            method:'Post',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)    
        }).then(
            () => {
                console.log('new blog added');
                setIsPending(false);
                // history.go(-1);
                history.push("/")
              }
        )
    }

    
    return ( 
        <div className="create w-50 my-0 mx-auto text-center">
                <h2 className="fs-3 mb-4">Add a New Blog</h2>

                <form onSubmit={handleSubmit}>

                <div className="mb-3">
                <label htmlFor="TextInput" className="form-label block">Blog title:</label>
                <input type="text" id="TextInput" className="form-control" required 
                value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>

                <div className="mb-3 ">
                <label className="form-label" htmlFor="textAreaExample">Blog body:</label>
                <textarea  required value={body} onChange={(e)=>setBody(e.target.value)}
                className="form-control" id="textAreaExample" rows="4"></textarea>
               </div>

               <div className="mb-3">
                <label htmlFor="Select" className="form-label">Blog author:</label>
                <select id="Select" className="form-select" value={author}
                 onChange={(e)=>setAuthor(e.target.value)}>
                        <option value="mario">mario</option>
                        <option value="yoshi" >yoshi</option>
                </select>
                </div>

            {!isPending && <button type="submit" className="btn btn-primary p-2 rounded-3 border-0">Submit</button>}

            {isPending &&  <button disabled type="submit" className="btn btn-primary p-2 rounded-3 border-0">Submit</button>}
            
            </form>
        </div>


     );
}
 
export default Create;