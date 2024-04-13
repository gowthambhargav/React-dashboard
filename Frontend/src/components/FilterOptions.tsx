import { useForm } from "react-hook-form"



function FilterOptions({setFilterData}) {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {

    setFilterData(data)
    if(Object.keys(data).length === 0 || data === undefined || data === null){
      setFilterData({})
    }
  }



  return (
    <section className="w-full overflow-hidden">
           <div className="my-5 mx-auto  rounded-lg w-[90%] h-3 bg-amber-600"></div>
       <div className="text-center font-semibold text-2xl">Filters</div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <section className=" flex flex-col items-center justify-center flex-wrap my-4">
          <div className="flex flex-row justify-between items-center">
            <div className="w-1/4">
              <label htmlFor="end_year" className="block text-sm font-medium text-gray-700">End Year</label>
              <input {...register('end_year')} type="number" name="end_year" id="end_year"  className="mt-1  block  shadow-sm sm:text-sm border-gray-300 rounded-md border text-black ml-2  outline-none p-2  " />
            </div>
            <div className="w-1/4">
              <label htmlFor="intensity" className="block text-sm font-medium text-gray-700">Intensity</label>
              <input {...register('intensity')} type="number" name="intensity" id="intensity"  className="mt-1  block  shadow-sm sm:text-sm border-gray-300 rounded-md border text-black ml-2  outline-none p-2  " />
            </div>
            <div className="w-1/4">
              <label htmlFor="sector" className="block text-sm font-medium text-gray-700">Sector</label>
              <input {...register('sector')} type="text" name="sector" id="sector"  className="mt-1  block  shadow-sm sm:text-sm border-gray-300 rounded-md border text-black ml-2  outline-none p-2  " />
            </div>
            <div className="w-1/4">
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Topic</label>
              <input {...register('topic')} type="text" name="topic" id="topic"  className="mt-1  block  shadow-sm sm:text-sm border-gray-300 rounded-md border text-black ml-2  outline-none p-2  " />
            </div>
            </div>
            <div className="flex flex-row justify-between items-center">
            <div className="w-1/4">
              <label htmlFor="insight" className="block text-sm font-medium text-gray-700">Insight</label>
              <input {...register('insight')} type="text" name="insight" id="insight"  className="mt-1  block  shadow-sm sm:text-sm border-gray-300 rounded-md border text-black ml-2  outline-none p-2  " />
            </div>
            <div className="w-1/4">
              <label htmlFor="region" className="block text-sm font-medium text-gray-700">Region</label>
              <input {...register('region')} type="text" name="region" id="region"  className="mt-1  block  shadow-sm sm:text-sm border-gray-300 rounded-md border text-black ml-2  outline-none p-2  " />
            </div>
            <div className="w-1/4">
              <label htmlFor="start_year" className="block text-sm font-medium text-gray-700">Start Year</label>
              <input {...register('start_year')} type="text" name="start_year" id="start_year"  className="mt-1  block  shadow-sm sm:text-sm border-gray-300 rounded-md border text-black ml-2  outline-none p-2  " />
            </div>
            </div>
            <div className="flex flex-row justify-between items-center">
           
            <div className="w-1/4">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <input {...register('country')} type="text" name="country" id="country"  className="mt-1  block  shadow-sm sm:text-sm border-gray-300 rounded-md border text-black ml-2  outline-none p-2  " />
            </div>
            <div className="w-1/4">
              <label htmlFor="relevance" className="block text-sm font-medium text-gray-700">Relevance</label>
              <input {...register('relevance')} type="text" name="relevance" id="relevance"  className="mt-1  block  shadow-sm sm:text-sm border-gray-300 rounded-md border text-black ml-2  outline-none p-2  " />
            </div>
            </div>
            <div className="flex flex-row justify-between items-center">
            <div className="w-1/4">
              <label htmlFor="source" className="block text-sm font-medium text-gray-700">Source</label>
              <input {...register('source')} type="text" name="source" id="source"  className="mt-1  block  shadow-sm sm:text-sm border-gray-300 rounded-md border text-black ml-2  outline-none p-2  " />
            </div>
            <div className="w-1/4">
              <label htmlFor="likelihood" className="block text-sm font-medium text-gray-700">Likelihood</label>
              <input {...register('likelihood')} type="text" name="likelihood" id="likelihood"  className="mt-1  block  shadow-sm sm:text-sm border-gray-300 rounded-md border text-black ml-2  outline-none p-2  " />
            </div>
            </div>
          </section>
          <div className="flex justify-center items-center flex-row">
              <button type="submit" className="bg-amber-700 p-4 rounded-md mt-3 font-semibold text-white/85 text-xl" 
              >Apply Filters</button>
              <button  onClick={()=>{
                setFilterData({})
                reset()
              }} type="submit" className="bg-amber-700 p-4 rounded-md mt-3 font-semibold text-white/85 text-xl ml-3" 
              >Reset</button>
            </div>
           
        </form>
            
          </section>
  )
}

export default FilterOptions