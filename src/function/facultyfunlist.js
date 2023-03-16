const chee = (id) =>
{
    if(id.answers=== undefined)
    {
        console.log(" mes :"+ id)
        return "No top courses"
    }
    else
    {
      var msg = id.answers[0] + "  " +  '(' + id.size + ')'
      return msg
    }
} 
const chea = (id) =>
{
    if(id === undefined)
    {
        return 0
    }
    else
    {
        return id.length
    }
} 
const emp = (item) =>
{
    if (item[0] === undefined )
    {
        return true
    }
    else
    {
        return false
    }
}
const logoutt = (e)=>
{
    localStorage.removeItem("facid")
    Navhome();
}
const adminlogout = (e)=>
{
    localStorage.removeItem("adid")
    Navhome();
}
const Navhome = () =>
{
   window.location.replace("http://localhost:3000")
} 
const verify = (id) =>
{
   const item = localStorage.getItem("adid")
   const rec = {"id":id,"item":item};
   console.log(id)
   fetch('http://localhost:8000/admin/verify',{
       mode: 'cors',
        method :'POST',
        headers : {
            'Accept' : 'application/json',
            'Content-type' : 'application/json'
        },
        body:JSON.stringify(rec)
    }).then((result)=>result.json()).then(data=>{
       cha(data);
       })
}
const cha = (la) =>
{
        if (la.success === true)
        {
           const p = document.getElementById(la.id)
           p.innerHTML = "Course Verified"
        }
        else{
           console.log(la)
           console.log("something went wrong")
        }
} 
export  {chee,chea,emp,logoutt,verify,adminlogout}