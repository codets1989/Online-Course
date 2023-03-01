import React,{useState} from 'react';
import './App.css'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const languages = [
    { value: 'en', text: "Options" },
    { value: 'en', text: "English" },
    { value: 'ne', text: "Nepali" }
]
const stylesheet ={Title:{fontFamily:"Times"}}
function Facultyregister () {
    const { t } = useTranslation(); 
  
    const [lang, setLang] = useState('en');
    const handleChange = e => { 
        setLang(e.target.value);
        let loc = "http://localhost:3000/facreg";
        window.location.replace(loc + "?lng=" + e.target.value);
        i18next.changeLanguage(e.target.value)
    }
  
  const [array,setarray] = useState([]);
    const [userdetails,setuserdetails] =  useState ({
        fullname:"",
        username:"",
        password:"",
        email:"",
        gender:"",
        interests:[]
    });
    const handleinput = (e) =>
    {
        const name = e.target.name;
        const value =e.target.value;
        setuserdetails({...userdetails,[name]:value})
    }
    const handleinputs = (e) =>
    {
        const value = e.target.value;
        const check = e.target.checked;
        const temp = [...array];
      if (check === true)
      {temp.push(value);
    //   array.push(value);
      }
      else if (check == false)
      {
          
          temp.splice(temp.indexOf(value),1)
      }
      console.log(temp);
      setarray(temp);
     
    //    console.log(array);
       setuserdetails({...userdetails,interests:temp})
    }
   
    const regi = (e) =>
    {
        e.preventDefault();
        
        const regdata = JSON.stringify(userdetails);
        fetch('http://localhost:8000/faculty/register',
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
            window.location.replace("/faclogin");
        }
        else
        {
            alert('Something went wrong Plz fill the form again');
            window.location.replace("/facreg");
        }
    }
return (
    <div className ="container">
    <div className="title" style={stylesheet.Title}>Registration</div>
    <div className="form">
    <form action="http://localhost:8000/faculty/register" method="POST" onSubmit={regi}>
        <div>
            <label htmlFor="name">{t('Full Name')}</label>
            <input type ="text" name="fullname" id="fullname" className='regin' value={userdetails.fullname} onChange={handleinput} placeholder={t("Enter your full name")} />
            <span id="reqspan">*</span>
        </div>
        <div>
          <label htmlFor="Username">{t('Username')}</label>
          <input type ="text" name="username" id="username" className='regin' value={userdetails.username} onChange={handleinput}  placeholder="Enter your Username" />
          <span id="reqspan">*</span>
      </div>
      <div>
          <label htmlFor="email">Email</label>
          <input type ="email" name="email" id="email"  className='regin' autoComplete="off" value={userdetails.email} onChange={handleinput}  placeholder="Enter your email"/>
      </div>
      <div>
          <label htmlFor="password">Password</label>
          <input type ="password" name="password" id="password" className='regin' value={userdetails.password} onChange={handleinput}  placeholder="Enter your password"/>
          <span id="reqspan">*</span>
      </div>
      <div>
         Gender
         <input type ="radio" name="gender" id="male" value="male" onChange={handleinput} /> 
         <label htmlFor="Male">Male</label>
         <input type ="radio" name="gender" id="Female" value="Female" onChange={handleinput}/>
         <label htmlFor="Female">Female</label> 
         <input type ="radio" name="gender" id="Non-binary" value="Non-binary" onChange={handleinput}/> 
         <label htmlFor="Non-binary">Non-binary</label>
         <input type ="radio" name="gender" id="Unknown" value="Unknown" onChange={handleinput}/>
         <label htmlFor="Non-binary">Prefer not to Say</label> 
         <span id="reqspan">*</span>
      </div>
     <button type="submit">Submit</button>
    </form>
    <li>  <a href="/Register">For User register click here</a> </li>
  </div>
  <div >
  
            <label>{t('choose')}</label>
  
            <select value={lang} onChange={handleChange}>
                {languages.map(item => {
                    return (<option key={item.value} 
                    value={item.value}>{item.text}</option>);
                })}
            </select>
        </div>
  </div>
);
}
export default Facultyregister;

