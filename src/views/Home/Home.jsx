import "./Home.css";

export function Home() {
  return (
    <div className="home">
      <div className="body">
        <header className="header">
          <ul className="list">
            <li>Home</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Contato</li>
          </ul>
        </header>
        <div>
          <img src="/" alt="img" />
          <div className="div_data">
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
              et.
            </h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur officiis ad amet deleniti id. Nostrum facilis sapiente
              dignissimos impedit atque?
            </span>
            <button className="button"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
