import { useState,useEffect } from "react"
import st1 from '../images/graduates.png'
import st2 from '../images/teacher.png'
import st3 from '../images/book.png'
const Adminstats = () =>
{
    var [stats, setstats] = useState([]);
    const [isLoadingg, setLoadingg] = useState(true);
    useEffect(()=>
     {
         document.body.style.backgroundImage = "none";
     
           checkstats();
     },[])
    const checkstats = () =>
    {
         
        //    console.log(item);
            fetch('http://localhost:8000/admin/stats',{
                mode: 'cors',
                 method :'GET',
                 headers : {
                     'Accept' : 'application/json',
                     'Content-type' : 'application/json'
                 },
                 
             }).then((result)=>result.json()).then(data=>{
                setstats(data)
                setLoadingg(false)
                })
                
            }
            if (isLoadingg) {
                return <div className="App">Loading...</div>;
              }
    return(
        <div>
            {
                stats.map(item=>
                    {
                        
                        return(
                            <div className="statcontain">
                        <div>
                        <img src = {st1} height="300" width="300" alt="stats1"></img>
                        <h2> Number of Students: {item.students}</h2>
                        </div>
                        <div>
                        <img src = {st2} height="300" width="300" alt="stats1"></img>
                        <h2>Number of Faculties:{item.faculties}</h2>
                        </div>
                        <div>
                        <img src = {st3} height="300" width="300" alt="stats1"></img>
                        <h2>Number of Courses:{item.courses}</h2>
                        </div>
                        </div>
                        )
                    })
            }
        </div>
    )
}
export default Adminstats