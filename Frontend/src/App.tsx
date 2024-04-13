import './App.css'
import Chart from './components/Chart'
// import ChartComponent from './components/Chart'
// import FilterDropdown from './components/FilterDropdown'
// import FilterForm from './components/FilterForm'




function App() {
  return (
    <>
    <div className='bg-gray-100 text-center text-2xl font-bold p-4'>
      Data Visualization
    </div>
    <div className=''>
  {/* <FilterDropdown/> */}
  {/* <FilterForm/> */}
  {/* <ChartComponent  /> */}
  <Chart/>
    </div>
    </>
  )
}

export default App
