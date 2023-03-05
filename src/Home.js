import fea1 from './images/chat.png'
import fea2 from './images/languages.png'
import fea3 from './images/check.png'
import './App.css'
function Home ()
{
   
    return(
        <div className='cot'>
        <div className='firstcot'>
         <h1 className='firsthead'>Join our website right away to gain access to a huge <span className='firstspan'>selection of courses</span></h1>
         <p className='firstpar'>Our courses have been approved by professionals, allowing you to develop your skills</p>
         <button className='firstbut'><span className='butext'>Register now</span></button>
        </div>
        <div className='secondcot'>
           <h1 className='secondhead'>Our Services</h1>
           <div className='feacot'>
            <div className='fea'>
                <div className='imgcot'>
                <img src={fea1} height="280px" className='im1'></img>
                <div className='setnumcot'>
                <div className='setnum1'>1</div>
                </div>
                </div>
                <h2>Chat or Chatbot to guide</h2>
                <p className='secondpar'>You can use our chatbot at any time to help your journey with our website or you can chat with the admin directly</p>
            </div>
            <div className='fea'>
                <div className='imgcot2'>
                <img src={fea2} height="280px" className='im1'></img>
                <div className='setnumcot'>
                <div className='setnum2'>2</div>
                </div>
                </div>
                <h2>Languages to choose from</h2>
                <p className='secondpar'>Not fluent in english no worries we have language options to assist people in their own language</p>
            </div>
            <div className='fea'>
                <div className='imgcot2'>
                <img src={fea3} height="280px" className='im1'></img>
                <div className='setnumcot'>
                <div className='setnum3'>3</div>
                </div>
                </div>
                <h2>Verified Courses</h2>
                <p className='secondpar'>You'll only see courses that have been verified. We want to give you the best possible courses</p>
            </div>
           </div>
        </div>
        </div>
    );
    
}
export default Home;