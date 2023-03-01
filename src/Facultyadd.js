import React from "react";
import { useState } from "react";
import {storage } from "./firebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Facultyadd() {
    const [facdetails,setfacdetails] =  useState ({
        course_name:"",
        price:"",
        stream:"Coding",
        status:"unverified",
        video:[],
        id:localStorage.getItem("facid")
        
    });
    const Vidup1 = (counter) => {
        return (<div>
            {console.log(counter.counter)}
        <input type="file" name={counter.counter} className="facin"  onChange={(e)=>handleChange(e,counter.counter)} accept="video/*" />
        <p id={counter.counter} className="faclab">Not Uploaded</p>
         </div>)
      };
    const [vidup,setvidup] = useState([])
    function sendfac (e)
    {
          e.preventDefault();
          const regdata = JSON.stringify(facdetails);
          fetch('http://localhost:8000/faculty/add',
          {
             mode:'cors',
             method:'POST',
             headers:{
              'Accept' : 'application/json',
              'Content-type' : 'application/json'
             },
             body:regdata
  
          }).then((result) => result.json()).then(data=>check(data));
    }
    const check = (dta) =>
    {
        if(dta.success)
        {
            window.location.replace("/faculty/"+ localStorage.getItem("facid"));
        }
        else
        {
            alert('Something went wrong Plz fill the form again');
        }
    }
    const [file,setfile] = useState({files:[],})
    const [temp,settemp] = useState([]);
    const [temp1,settemp1]= useState([0])
    const temp2=[]
    const handleinput = (e) =>
    {
        const name = e.target.name;
        const value =e.target.value;
        setfacdetails({...facdetails,[name]:value})
    }
     // State to store uploaded file
    const [count,setcount] = useState(1)
    // progress
    function adddiv()
    {

        setcount(count => count+1)
        console.log(count)
        setvidup(vidup.concat(<Vidup1 counter={count} key={vidup.length} />));
        temp1.push(0)
        settemp1(temp1)

    }
// Handle file upload event and update state
    function handleChange(event,an) {
        console.log(event?.target?.files[0])
        if (event?.target?.files[0] === undefined)
        {

        }
        else
        {
        file.files[an] = event.target.files[0]
        handleUpload(an)
        console.log(file.files[an])
        }
       
       
    }
    // function handleIncrementClick(index) {
    //     const nextCounters = filedetails.percent.map((c, i) => {
    //       if (i === index) {
    //         // Increment the clicked counter
    //         return 'done'
    //       } else {
    //         // The rest haven't changed
    //         return c
    //       }
    //     });
    //     console.log(nextCounters)
    //     setfiledetails(filedetails.percent=nextCounters);
    //     console.log(filedetails.percent[0]) 
    //   }
    const handleUpload = (co) => {
        if (!file.files[co]) {
           alert("Please upload an Video first!");
        }

      const storageRef = ref(storage, `/files/${file.files[co].name}`);

// progress can be paused and resumed. It also exposes progress updates.
// Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, file.files[co]);
          uploadTask.on(
          "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
// update progress
            //  setfiledetails(filedetails.percent[co] = percent)
           },
           (err) => console.log(err),
           () => {
// download url
               getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        temp.push(url)
                        console.log(temp)
                    setfacdetails({...facdetails,video:temp})
                        console.log(co)
                        const p = document.getElementById(co)
                        p.innerHTML= 'Upload done'
           });
           }
        );
    };

    return(
    <div className="facadde">
           
             <form action="" method="POST" className="facform" onSubmit={sendfac}>
                <h2>Add Course</h2>
              <div> 
                <label for = "course_name" className="faclab">Course Name</label>
                <br></br>
                <br></br>
                <input type="text" name="course_name" className="facin" onChange={handleinput}/>
                <br></br>
                <br></br>
                </div> 
                <div>
                <label for = "price" className="faclab">Course Price</label>
                 <br></br>
                 <br></br>
                 
                <input type="text" name="price" className="facin" onChange={handleinput}/>
                </div>  
                <div>
                    <br></br>
                    <br></br>
                    <label for="stream" className="faclab">Select Stream</label>
                    <br></br>
                    <br></br>
                    <select name="stream" className="facselect" onChange={handleinput}>
                     <option value='Coding'>Coding</option>
                     <option value='Management'>Management</option>
                     <option value='Science'>Science</option>
                     <option value='Arts'>Arts</option>
                     <option value='Humanities'>Humanities</option>
                    </select>
                    <br></br>
                    <br></br>
                </div>
                <div>
                    <input type="file" name="file" className="facin"  onChange={(e)=>handleChange(e,0)}  accept="video/*" />
                    <p id='0' className="faclab">Not Uploaded</p> 
                </div>
                {vidup}
                <div>
                <button type="button" className="addfacb" onClick={adddiv}>Add More Videos</button>
                <br></br>
                <br></br>
                <button type="submit" className="addfacb" >Submit</button>
                </div>
                </form>
               
                
    </div>
)
}
 

export default Facultyadd;