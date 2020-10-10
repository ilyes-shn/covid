import { useState } from 'react'
import Axios from 'axios'


const Home = () => {
  
const [place,setPlace] = useState('Algeria');
const [data,setData] = useState({ ActiveCases: null, Death: null, Resolved: null})

function handleChange(e) {
setPlace(e.target.value);
 if (e.target.value === '') { 
   setData({ActiveCases: null, Death: null, Resolved: null}) }
}

const search = () => {
const result = Axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${place}`)
  .then((data) => {
  setData({
    ActiveCases: data.data.todayCases, Death: data.data.todayDeaths, Resolved: data.data.recovered
  })
})
}
return (
  <div>

    <h1 className='title'>Corona.</h1>
    <div className="field">
      <i className="fas fa-search search-icon"></i>
      <input className="input" type="text" placeholder='Algeria' onChange={handleChange}/>
      <input className='btn' type='button' defaultValue='Search' onClick={search}/>
    </div>
    {place !== '' && (<>
    <div className="data">
    <h2>{data.ActiveCases} : حالة جديدة</h2>
    <h2>{data.Death} : الوفيات</h2>
    <h2>{data.Resolved} : حالات الشفاء</h2> 
    </div>
    </>)}

  </div>
  )
};

export default Home;