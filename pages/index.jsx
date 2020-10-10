import { useState } from 'react'
import Axios from 'axios'


const Home = () => {
  
const [place,setPlace] = useState('Algeria');
const [data,setData] = useState({ ActiveCases: null, Death: null, Resolved: null, Critical: null, Cases: null})

function handleChange(e) {
setPlace(e.target.value);
 if (e.target.value === '') { 
   setData({ActiveCases: null, Death: null, Resolved: null, Critical: null, Cases: null}) }
}

const search = () => {
const result = Axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${place}`)
  .then((data) => {
  setData({
    ActiveCases: data.data.todayCases, Death: data.data.todayDeaths, Resolved: data.data.recovered, Critical: data.data.critical, Cases: data.data.cases
  })
})
}
return (
  <div className='app'>

    <h1 className='title'>Corona.</h1>
    <div className="field">
      <i className="fas fa-search search-icon"></i>
      <input className="input" type="text" placeholder='Algeria' onChange={handleChange}/>
      <input className='btn' type='button' defaultValue='Search' onClick={search}/>
    </div>
    { place !== ''  &&  (<>
    <div className="data">
    <h2>{data.ActiveCases} : حالة جديدة</h2>
    <h2>{data.Death} : الوفيات</h2>
    <h2>{data.Critical} : الإنعاش</h2>
    <h2>{data.Cases} : إجمالي الإصابات</h2>
    <h2>{data.Resolved} : حالات الشفاء</h2> 
    </div>
    </>)}
  <footer><code>By Elyes</code></footer>
  </div>
  )
};

export default Home;