import { useState } from "react";
import "./Pesquisa.css";

function Pesquisa() {
  const [pesquisa, setPesquisa] = useState("");

  const plantas = [
    {
      id: 1,
      nome: "Rosa",
      valor: 25.00,
      descricao:
        "Uma planta conhecida por suas flores bonitas e perfumadas.",
    },
    {
      id: 2,
      nome: "Girassol",
      valor: 18.50,
      descricao:
        "Planta conhecida por suas flores amarelas e por acompanhar a luz do sol.",
    },
    {
      id: 3,
      nome: "Orquídea",
      valor: 45.00,
      descricao:
        "Uma planta ornamental muito utilizada para decoração.",
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

        <button>
          🔍 Pesquisar
        </button>

      </div>

      <div className="resultados-pesquisa">

        {resultados.length === 0 ? (
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

                <strong>
                  R$ {planta.valor.toFixed(2).replace(".", ",")}
                </strong>

              </div>

            </div>

          ))
        )}

      </div>

    </div>
  );
}

export default Pesquisa;