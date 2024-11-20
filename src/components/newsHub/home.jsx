import React, { useEffect, useState } from 'react'
import NewsHub from './navbar'
import axios from "axios";


const HomeNewsHub = () => {

    const [newsData, setNewsData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(response)
      setNewsData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  console.log(newsData)
  return (
    <div>
        <NewsHub />
        Home

        </div>
  )
}

export default HomeNewsHub