import fea1 from './images/chat.png'
import fea2 from './images/languages.png'
import fea3 from './images/check.png'
import Chat from './Chat'
import { useTranslation } from 'react-i18next';
import './App.css'
function Home ()
{
    const { t } = useTranslation(); 
    return(
        <div className='cot'>
        <div className='firstcot'>
         <h1 className='firsthead'>{t("Join our website right away to gain access to a huge")} <span className='firstspan'>{t("selection of courses")}</span></h1>
         <p className='firstpar'>{t("Our courses have been approved by professionals, allowing you to develop your skills")}</p>
         <a href='/Register'><button className='firstbut'><span className='butext'>{t("Register now")}</span></button></a>
        </div>
        <div className='secondcot'>
           <h1 className='secondhead'>{t("Our Services")}</h1>
           <div className='feacot'>
            <div className='fea'>
                <div className='imgcot'>
                <img src={fea1} height="280px" className='im1'></img>
                <div className='setnumcot'>
                <div className='setnum1'>{t("1")}</div>
                </div>
                </div>
                <h2>{t("Chat or Chatbot to guide")}</h2>
                <p className='secondpar'> {t("You can use our chatbot at any time to help your journey with our website or you can chat with the admin directly")}</p>
            </div>
            <div className='fea'>
                <div className='imgcot2'>
                <img src={fea2} height="280px" className='im1'></img>
                <div className='setnumcot'>
                <div className='setnum2'>{t("2")}</div>
                </div>
                </div>
                <h2>{t("Languages to choose from")}</h2>
                <p className='secondpar'>{t("Not fluent in english no worries we have language options to assist people in their own language")}</p>
            </div>
            <div className='fea'>
                <div className='imgcot2'>
                <img src={fea3} height="280px" className='im1'></img>
                <div className='setnumcot'>
                <div className='setnum3'>{t("3")}</div>
                </div>
                </div>
                <h2>{t("Verified Courses")}</h2>
                <p className='secondpar'>{t("You'll only see courses that have been verified. We want to give you the best possible courses")}</p>
            </div>
           </div>
           
        </div>
       <Chat username="none" id="none"/>
        </div>
    );
    
}
export default Home;