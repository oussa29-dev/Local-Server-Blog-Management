import { useState,useEffect } from "react"


const useFetch=(url)=>{
    

    const[error,setError]=useState(null)
    const[ispending,setIsPending]=useState(true)
    const[data,setData] = useState(null)

        useEffect(()=>{
            const abortCont = new AbortController();
            setTimeout(() => {
               fetch(url,{ signal: abortCont.signal})
               .then(res=>{
                   if(!res.ok){
                    throw Error('could not fetch this ressource');
                   }
                   return res.json()})
               .then(
                   data=>{
                   setIsPending(false)
                   setData(data)
                   setError(null)
             } )
               .catch(err=>{
                if(err.name==='AbortError'){
                    console.log('fetch aborted')
                }else{
                    setIsPending(false)
                    setError(err.message)
                }
               
               }
               )
            }, 1000);
              return ()=> abortCont.abort();
           },[url])   
    
    return {data,ispending,error}

}

export default useFetch;

