import React,{useState,useEffect} from 'react'
import './App.css';
import Loading from './Loading'
import Tours from './Tours'
import ClipLoader from "react-spinners/ClipLoader";

const apiUrl = 'https://course-api.com/react-tours-project'

function App() {
  const [loading,setloading] = useState(true)
  const [tours,setTours] = useState([])

  const removeTour = (id)=>{
    setTours(prev=>prev.filter(tour=>{return tour.id!==(id.id)}))
  }

  const fetchTours = async()=>{
    setloading(true)
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      setloading(false)
      setTours(data)
    } catch (error) {
      setloading(false)
      console.log(error.name, error.message)
    }
    
  }

  useEffect(()=>{
    fetchTours()
  },[])
  
  if (loading) {
    return (
      <main style={{display:"flex", justifyContent:'center', flexDirection: 'column',alignItems: 'center'}}>
        <Loading />
        <ClipLoader
        color='#000'
        loading={loading}
        size={100}
      />
      </main>      
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App;
