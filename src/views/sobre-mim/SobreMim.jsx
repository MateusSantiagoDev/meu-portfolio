import "./SobreMim.css";
import { useNavigate } from "react-router-dom";

export function SobreMim() {
  const navigate = useNavigate();
  return (
    <div className="sobre">
      <div className="div_sobre">
        <div className="div_button-sobre">
          <button
            className="button_sobre"
            onClick={() => {
              navigate("/");
            }}
          >Voltar</button>
        </div>
        <div className="div_perfil">
          <h2>Perfil profissional</h2>
          <span>
            Tenho facilidade no aprendizado, me relaciono bem em grupo, sou
            pontual e organizado, estou em busca de novos desafios para
            desenvolver cada vez mais meus conhecimentos e apoiar os objetivos
            da empresa.
          </span>
          <h2>Sobre mim</h2>
          <span>
            Gosto de pescar, viajar, amo a tecnologia, nadar, dirigir e assistir filmes, sou
            uma pessoa simples que sabe conviver e respeitar as diferenças
          </span>
        </div>
      </div>
    </div>
  );
}
