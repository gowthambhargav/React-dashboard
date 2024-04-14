
import { useEffect, useState } from "react";
import BarChart from "./BarChart";
import FilterOptions from "./FilterOptions";
import axios from "axios";


export default function Chart() {
  const [filterData, setFilterData] = useState({});
 const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [url] = useState('https://3c001b00-612e-42bb-9e47-bac5a85377e2.e1-us-cdp-2.choreoapps.dev/choreo-apis/nodejsserverdashboard/nodejs/http-endpoint-0b3/v1.0')
  useEffect(() => {
  const fetchData = async () => {
    try {
      const validFilterData = Object.fromEntries(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(filterData).filter(([_, value]) => value)
      );
      const response = await axios.get(url, {
        params: validFilterData || { end_year: 2025 },
      });
      setData(response.data.filterData);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }
  fetchData();
  
    
    // axios.get(url,{
    //   params:  filterData ? { ...filterData } : { end_year: 2025 } || {
    //     end_year: 2024,
    //   }
    // })
    //   .then((data) => {
    //     setData(data.data.filterData);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     setError(error);
    //     setIsLoading(false);
    //   });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterData]);

  if (isLoading) return 'Loading...';
  if (error) return `Error: ${error.message}`;


console.log(data);

  return (
   <>
  {   data.length ===0 && <div className="flex justify-center items-center flex-col">
  <div className="text-2xl text-red-500 text-center">No data found</div>

  </div>
  }
  {data.length !==0 && <BarChart data={data} keys={['end_year',"intensity","relevance","likelihood","start_year"]}/>}

          <FilterOptions setFilterData={setFilterData}/>
   
   </>
  )
}

