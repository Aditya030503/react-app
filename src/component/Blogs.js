import React, { useEffect, useState } from 'react'
import { baseUrl } from '../data'
import toast from 'react-hot-toast';
import Blog from './Blog';
import Spinner from './Spinner';

function Blogs() {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlogData(page=1){
        setLoading(true);
        const url=`${baseUrl}?page=${page}`;
        console.log("print finally data");
        console.log(url);
        try{

            const result= await fetch(url)
            const data= await result.json();

            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            console.log(page,posts,totalPages);
            
        }
        catch(error){
            toast.error(error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
        // return data;


    }
    // console.log(posts[0].title,posts[0].id);

    useEffect(()=>{
        fetchBlogData();
    },[])


    function changeHandler(page){
        setPage(page);
        fetchBlogData(page);
    }



  return (
    <div>
        <div className='ml-14 '>
      <header className='m-auto border shadow-md  py-4  bg-white text-center' >
        <h1 className='text-3xl font-bold uppercase'>Codehelp Blogs</h1>
      </header>
    </div>
    <div>
        <div className='m-auto  pl-14 pt-4 mb-4'>
        {
        loading ? 

        (<Spinner/>) : ( 
            posts.map((post)=>{
             return <Blog key={post.id} post={post}/>
       })
         )}

           
        </div>
        {
          loading?(""):(
            <div className='flex justify-between w-11/12 m-auto border-2 border-black px-7'>
            <div  className='flex gap-2'>
                {
                    page > 1 && <button onClick={()=>(changeHandler(page-1))}> Previous</button>
                }
              
                {
                    page<totalPages && <button onClick={()=>(changeHandler(page+1))}> Next </button>
                    
                  
                }
            </div>
            <div>
                <p>
                    {page} of {totalPages}

                </p>
                
            </div>
        </div>
          )
        }
        
    </div>
      
    </div>
  )
}

export default Blogs
