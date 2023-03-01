const chee = (id) =>
{
    if(id === undefined)
    {
        return "No top courses"
    }
    else
    {
      var msg = id.answers + "  " +  '(' + id.size + ')'
      return msg
    }
} 
export  {chee}