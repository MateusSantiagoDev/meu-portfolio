import "./Portfolio.css";
import { useNavigate } from "react-router-dom";

export function Portfolio() {
  const navigate = useNavigate();
  return (
    <div className="portfolio">
      <div className="portfolio_body">
        <div className="h1_portfolio">
          <h1>Mateus Jacinto Santiago</h1>
          <button
            className="button_portfolio"
            onClick={() => {
              navigate("/");
            }}
          >
            Voltar
          </button>
        </div>
        <div className="div_span">
          <span>
            Brasileiro - Solteiro - Data de nasc: 02/09/1991 Tel.: (11)
            97779-8990 - Rua Lucilo Varejão 31 - Jardim Cliper - São Paulo - SP
            - CEP: 04827-240 E-mail: Mateus_santiago2.3@outlook.com
          </span>
          <h3>Experiência de trabalho</h3>
          <span>
            <b>Hagana tecnologia comercio de sistemas LTDA</b> período: 4 anos
            e 11 meses | Funções: porteiro de edificios - 2 anos e 6 meses |
            Monitor de sistemas eletrônicos: 2 anos e 4 meses | auxiliar de
            escritório: 1 mês <br/>
          </span>
          <span>
            <b>No Risk Sistemas de Seg e Log LTDA</b> período: 1 ano e 7 meses
            | Função: Operador de Monitoramento <br/>
          </span>
          <h3>Histórico academico <br/></h3>
          <span>Cursando desenvolvimento web na Blueedtech <br/></span>
          <span>Docker - Udemy <br/></span>
          <span>Banco de dados SQL - Udemy <br/></span>
          <span>Redes de computadores - Estudonauta <br/></span>
          <span>Cursando analise e desenvolvimento de sistemas na UNIP <br/></span>
        </div>
      </div>
    </div>
  );
}
