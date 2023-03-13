import React,{useState} from 'react';
import './App.css'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const languages = [
    { value: 'en', text: "Options" },
    { value: 'en', text: "English" },
    { value: 'ne', text: "Nepali" }
]
// const stylesheet ={Title:{fontFamily:"Times"}}
function Register () {
    const { t } = useTranslation(); 
  
    const [lang, setLang] = useState('en');
    const handleChange = e => { 
        setLang(e.target.value);
        let loc = "http://localhost:3000/Register";
        // window.location.replace(loc + "?lng=" + e.target.value);
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
      else if (check === false)
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
        fetch('http://localhost:8000/Register',
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
            window.location.replace("/Login");
        }
        else
        {
            alert('Something went wrong Plz fill the form again');
            window.location.replace("/Register");
        }
    }
return (
    <div>
    <div className ="container">
    <div className="form">
    <form action="http://localhost:8000/Register" method="POST" onSubmit={regi}>
        <div>
            <label htmlFor="name">{t('Full Name')}</label>
        </div>
        <div>
        <input type ="text" name="fullname" id="fullname" className='regin' value={userdetails.fullname} onChange={handleinput} placeholder={t("Enter your full name")} />
            <span id="reqspan">*</span>
        </div>
        <div>
          <label htmlFor="Username">{t('Username')}</label>
           </div>
           <div>
           <input type ="text" name="username" id="username" className='regin' value={userdetails.username} onChange={handleinput}  placeholder={t("Enter your Username")} />
          <span id="reqspan">*</span>
          </div>
      <div>
          <label htmlFor="email">{t('Email')}</label>
      </div>
      <div>
      <input type ="email" name="email" id="email" autoComplete="off"  className='regin' value={userdetails.email} onChange={handleinput}  placeholder={t("Enter your Email")}/>
      <span id="reqspan">*</span>
      </div>
      <div>
          <label htmlFor="password">{t('password')}</label>
      </div>
      <div>
      <input type ="password" name="password" id="password" className='regin' value={userdetails.password} onChange={handleinput}  placeholder={t("Enter your password")}/>
          <span id="reqspan">*</span>
      </div>
      <div>
         {t("Gender")}
         <input type ="radio" name="gender" id="male" value="male" onChange={handleinput} /> 
         <label htmlFor="Male">{t("Male")}</label>
         <input type ="radio" name="gender" id="Female" value="Female" onChange={handleinput}/>
         <label htmlFor="Female">{t("Female")}</label> 
         <input type ="radio" name="gender" id="Non-binary" value="Non-binary" onChange={handleinput}/> 
         <label htmlFor="Non-binary">{t("Non-binary")}</label>
         <input type ="radio" name="gender" id="Unknown" value="Unknown" onChange={handleinput}/>
         <label htmlFor="Non-binary">{t("Prefer not to Say")}</label> 
         <span id="reqspan">*</span>
      </div>
      <div>
      {t("Select you area of interests")}
          <input type ="checkbox" name="interests" value="Science" onChange={handleinputs} /> 
          <label htmlFor="Science">{t("Science")}</label>
          <input type ="checkbox" name="interests" id="Arts" value="Arts" onChange={handleinputs} /> 
          <label htmlFor="Arts">{t("Arts")}</label>
          <input type ="checkbox" name="interests" value="Humanities" onChange={handleinputs} /> 
          <label htmlFor="Humanities">{t("Humanities")}</label>
          <input type ="checkbox" name="interests" value="Management" onChange={handleinputs} /> 
          <label htmlFor="Management">{t("Management")}</label>
          <input type ="checkbox" name="interests" value="Coding" onChange={handleinputs} /> 
          <label htmlFor="Coding">{t("Coding")}</label>
      </div>
   
     <button type="submit" className='subbut'>{t("Submit")}</button>
    </form>
    <li>  <a href="/facreg">{t("For Faculty Register click here")}</a> </li>
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
  </div>
);
}
export default Register;

