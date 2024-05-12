import React from 'react'

function Blog({post}) {

    let title =post.title;
    let category=post.category;
    let content=post.content;
    let tags=post.tags;
    let date =post.date;
    // console.log("blogdata",title,category);

  return (
    <div>
         <div className='mb-5'>
                   <p className="font-bold text-lg ">{title}</p>
                    <p className='text-sm mt-[4px]'>
                        By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{category} </span>
                    </p>
                    <p className='text-sm mt-[4px]'>Posted on {date}</p>
                    <p className='text-md mt-[14px]'>{content}</p>
                    <div>
                        {
                           tags.map((tag,index)=>{
                            return  <span key={index} className="text-blue-700 underline font-bold text-xs mt-[5px]">{` #${tag}`}</span>

                           })
                        }
                      
                    </div>
         </div>
    </div>
  )
}

export default Blog
