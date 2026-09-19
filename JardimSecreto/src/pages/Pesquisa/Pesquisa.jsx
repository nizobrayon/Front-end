import { useState } from "react";
import "./Pesquisa.css";

function Pesquisa() {
  const [pesquisa, setPesquisa] = useState("");

  const plantas = [
    {
      id: 1,
      nome: "Rosa",
      descricao:
        "Uma planta conhecida por suas flores bonitas e perfumadas.",
    },
    {
      id: 2,
      nome: "Girassol",
      descricao:
        "Planta conhecida por suas flores amarelas e por acompanhar a luz do sol.",
    },
    {
      id: 3,
      nome: "Orquídea",
      descricao:
        "Uma planta ornamental muito utilizada para decoração.",
    },
    {
      id: 4,
      nome: "Lavanda",
      descricao:
        "Planta conhecida pelo seu aroma agradável e suas flores roxas.",
    },
    {
      id: 5,
      nome: "Samambaia",
      descricao:
        "Planta bastante utilizada em ambientes internos e externos.",
    },
  ];

  const resultados = plantas.filter((planta) =>
    planta.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div className="pagina-pesquisa">

      <div className="cabecalho-pesquisa">
        <h1>Pesquisar Plantas</h1>

        <p>
          Encontre informações sobre diferentes plantas
          no Jardim Secreto.
        </p>
      </div>

      <div className="barra-pesquisa">

        <input
          type="text"
          placeholder="Digite o nome de uma planta..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />

        <button onClick={() => setPesquisa(pesquisa)}>
          🔍 Pesquisar
        </button>

      </div>

      <div className="resultados-pesquisa">

        {pesquisa === "" ? (
          <p className="mensagem">
            Digite o nome de uma planta para pesquisar.
          </p>
        ) : resultados.length === 0 ? (
          <p className="mensagem">
            Nenhuma planta encontrada.
          </p>
        ) : (
          resultados.map((planta) => (

            <div className="card-planta" key={planta.id}>

              <div className="icone-planta">
                🌱
              </div>

              <div className="informacoes-planta">

                <h2>{planta.nome}</h2>

                <p>
                  {planta.descricao}
                </p>

              </div>

            </div>

          ))
        )}

      </div>

    </div>
  );
}

export default Pesquisa;
