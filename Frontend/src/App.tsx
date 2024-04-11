import './App.css'
import ChartComponent from './components/Chart'
// import FilterDropdown from './components/FilterDropdown'
import FilterForm from './components/FilterForm'




function App() {
  return (
    <>
    <div className=''>
  {/* <FilterDropdown/> */}
  <FilterForm/>
  <ChartComponent  />
    </div>
    </>
  )
}

export default App
