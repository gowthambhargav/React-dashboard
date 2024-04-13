
import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import FilterOptions from "./FilterOptions";
import axios from "axios";


export default function Chart() {
  const [filterData, setFilterData] = useState({});
 const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState('http://localhost:3000/temp/data?end_year=2025')
  useEffect(() => {
  
    
    axios.get(url)
      .then((data) => {
        setData(data.data.filterData);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return 'Loading...';
  if (error) return `Error: ${error.message}`;
  if (data.length ===0) return <div className="text-2xl text-red-500 text-center">No data found</div>;

console.log(filterData);

  return (
   <>
  <BarChart data={data}/>

          <FilterOptions setFilterData={setFilterData}/>
   
   </>
  )
}

