import "./Home.css";
import foto from "../../assets/images/foto8.png";
import { RiWhatsappFill } from 'react-icons/ri';
import { GoMarkGithub } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi'
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="body">
        <header className="header">
          <div className="list">
            <button onClick={() => {
               navigate('/skills')
            }}>Skills</button>
            <button onClick={() => {
              navigate('/Portfolio')
            }}>Portfolio</button>
          </div>
        </header>
        <div className="div_img-data">
            <div className="div_ctt">
                <li className="li_whatssap"><a href="https://wa.me/5511977798990" target="_blanc"><RiWhatsappFill/></a></li>
                <li className="li_email"><a href="mailto:mateus_santiago2.3@outlook.com" target="_blanc"><HiOutlineMail/></a></li>
                <li className="li_gitHub"><a href="https://github.com/MateusSantiagoDev" target="_blanc"><GoMarkGithub/></a></li>
            </div>
          <div className="div_img">
            <img src={foto} alt="img" />
          </div>
          <div className="div_data">
            <h3 className="h3_1">Web</h3>
            <h1 className="h1">Developer</h1>
            <h3 className="h3_2">Full Stack</h3>
            <div className="div_button">
            <button className="button" onClick={() => {
              navigate('/sobremim')
            }}>Sobre mim</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
