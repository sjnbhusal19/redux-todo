import React, { useEffect, useState } from 'react'
import NewsHub from './navbar'
import axios from "axios";


const HomeNewsHub = () => {

    const [newsData, setNewsData] = useState([])
    const [errors,setErrors] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/articles");
      setNewsData(response.data);
    } catch (error) {
      setErrors(error)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(newsData)
  return (
    <div>
        <NewsHub />
        <div className='grid grid-cols-2 gap-4 w-[95%] mx-auto'>
        {
          newsData.length > 0 ? (
            newsData.map((item,index) => (
             <div key={index} className=' bg-gray-600 rounded-md shadow-lg text-white p-4 mt-3'> 
               <div className='flex flex-col space-y-2'>
             <p className='italic flex justify-end mr-4'>{item.author}</p>
             <p className='text-lg font-semibold'>{item.title}</p>
            <p className='text-sm'>{item.content}</p>
            {/* <p>{item.publishedAt}</p>
            <p>{item.source.name}</p> */}
              </div> 
              </div>
            ))
          ): (
            <p>{errors}</p>
          )
        }
        </div>

        </div>
  )
}

export default HomeNewsHub