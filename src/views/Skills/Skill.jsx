import "./Skill.css";
import { useNavigate } from "react-router-dom";

export function Skill() {
  const hard = [
    {
      title: "HTML",
    },
    {
      title: "CSS",
    },
    {
      title: "Javascript",
    },
    {
      title: "typescript",
    },
    {
      title: "React",
    },
    {
      title: "Nest",
    },
    {
      title: "Prisma",
    },
    {
      title: "Mysql",
    },
    {
      title: "Docker",
    },
  ];

  const soft = [
    {
      title: "Empatia",
    },
    {
      title: "Trabalho em equipe",
    },
    {
      title: "Pontualidade",
    },
    {
      title: "Gosto de aprender",
    },
    {
      title: "Gosto de novos desafios",
    },
    {
      title: "Estou sempre procurando melhorar como pessoa e como profissional",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="skill">
      <div className="skill_body">
        <div className="hard">
          <h1 className="hard_h1">Hard Skills</h1>
          <ul className="ul">
            {hard.map((el) => (
              <li>{el.title}</li>
            ))}
          </ul>
        </div>
        <div className="soft">
          <div className="div_soft">
            <h1 className="soft_h1">Soft Skills</h1>
            <button
              className="voltar"
              onClick={() => {
                navigate("/");
              }}
            >
              Voltar
            </button>
          </div>
          <ul className="ul">
            {soft.map((el) => (
              <li>{el.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
