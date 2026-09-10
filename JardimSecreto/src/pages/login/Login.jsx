import { useState } from "react";
import { useNavigate } from "react-router";
import "../login/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  function entrar(event) {
    event.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    alert("Login realizado com sucesso!");

    navigate("/home");
  }

  return (
    <main className="auth-page">

      <div className="auth-decoration auth-decoration-1"></div>
      <div className="auth-decoration auth-decoration-2"></div>

      <section className="auth-card">

        <p className="auth-subtitle">
          Jardim Secreto
        </p>

        <h1>
          Entre na sua conta!
        </h1>

        <p className="auth-description">
          Acesse sua conta para continuar.
        </p>

        <form onSubmit={entrar}>

          <div className="form-group">
            <label htmlFor="email">
              E-mail
            </label>

            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">
              Senha
            </label>

            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) =>
                setSenha(event.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="auth-button"
          >
            Acessar
          </button>

        </form>

        <p className="change-page">
          Ainda não tem conta?{" "}

          <button
            type="button"
            onClick={() => navigate("/cadastro")}
          >
            Cadastre-se
          </button>
        </p>

      </section>

    </main>
  );
}

export default Login;