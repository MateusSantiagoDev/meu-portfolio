import "./Home.css";
import foto from "../../assets/images/foto8.png";
import { RiWhatsappFill } from 'react-icons/ri';
import { GoMarkGithub } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi'

export function Home() {
  return (
    <div className="home">
      <div className="body">
        <header className="header">
          <ul className="list">
            <li>Home</li>
            <li>Skills</li>
            <li>Portfolio</li>
          </ul>
        </header>
        <div className="div_img-data">
            <div className="div_ctt">
                <li className="li_whatssap"><a href="/" target="_blanc"><RiWhatsappFill/></a></li>
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
            <button className="button">Sobre mim</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
