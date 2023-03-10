
import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import Loader from './Loader';
import Card from './Card';
import Header from './Header';
function App() {
const [repo,setRepo]=useState([]);
const [flag,setFlag]=useState(true);
useEffect(()=>{
  const getRepo=async()=>{
    try{
      const response=await axios.get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed");
      const myRepo=response.data;
      setRepo(myRepo);
    }catch(error){
       console.log(error);
    }
  };
  // setFlag(true);
  getRepo();
  setTimeout(()=>{
    setFlag(false);
  },5000)
},[]);
console.log(repo);


  return (
    <div className="App">
        <Header/>
     {flag ? <Loader/>:
      <div className='main-container'>
      
  {
    repo.map((ele,id)=>{
      return(
        
        <Card id={ele.id}
         date = {ele.date}
         link={ele.link}
         Title = {ele.title.rendered}
         Excerpt ={ele.excerpt.rendered}
         image={ele.jetpack_featured_media_url} 
         jetpack= {ele.jetpack_featured_media_url}
        />
          
      )
    })
  }
      </div>
}
    </div>
  );
}

export default App;









{/* <div key={ele.id} className="container ">
            <p>date : {ele.date}</p>
            <p>link: <a href={ele.link}>link</a></p>
            <p>Title : {ele.title.rendered}</p>
            <p>Excerpt : {ele.excerpt.rendered}</p>
           <img src={ele.jetpack_featured_media_url} alt="" style={{width:"15rem",height:"15rem%"}}/>
           <br></br>
            <a href={ele.jetpack_featured_media_url}>jetpack_featured_media_url</a>
          </div> */}