import { useState, useEffect, useContext } from "react";
import "./dados.css";
import axios from "axios";
const baseURL = "http://localhost:4040/users";
import Context from "../components/Context/context";
import Edit from "./Edit";
function Dados() {
  const [dados, setDados] = useState(["Sem Dados Cadastrados"]);
  const [info, setInfo] = useState("");
  const [total, setTotal] = useContext(Context);
  const [dadonome, setDadonome] = useState("");
  const [dadosenha, setDadosenha] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDados(response.data);
      console.log(dados);
    });
  }, [11]);
  function handlerClick(e) {
    setDados(["mudou!"]);
    console.log(dados);
  }
  return (
    <>
      {total}

      {dados.length > 0 ? (
        <div className="dados-div">
          <div className="div-center">
            {dados.map((e, index) => (
              <>
                {e.nome == total ? (
                  <>
                    <span className="span-dados" key={index}>
                      Nome: {e.nome}
                    </span>
                    <span className="span-dados" key={index}>
                      Senha: {e.senha}
                    </span>
                    <input
                      type="text"
                      placeholder="Digite outro Nome"
                      onChange={(e) => setDadonome(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Digite a senha nova"
                      onChange={(e) => setDadosenha(e.target.value)}
                    />
                    <Edit
                      ids={e.idusers}
                      nomes={dadonome}
                      logins={e.login}
                      senhas={dadosenha}
                    />
                  </>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
        </div>
      ) : (
        <span className="span-dados">{dados}</span>
      )}
    </>
  );
}

export default Dados;
