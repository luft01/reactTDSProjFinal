import { useState, useContext, useEffect } from "react";
import { AiOutlineUser, AiOutlineLogin } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import "./login.css";
import Context from "../components/Context/context";
import NavBar from "../../Global/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const baseURL = "http://localhost:4040/users";

export default function Login(props) {
  const [valores, setValores] = useState("");
  const [valores2, setValores2] = useState("");
  const [valores3, setValores3] = useState("");
  const [dados, setDados] = useState(["Sem Dados Cadastrados"]);
  const [status, setStatus] = useState(1);
  const navigateTo = useNavigate();
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDados(response.data);
      console.log(dados);
    });
  }, [11]);
  
  const [total, setTotal] = useContext(Context);
  function handlerClick() {
    setStatus(status + 2);
    dados.map((e) => {
      if (valores === e.nome) {
        setStatus(status + 100);
        setTotal(valores);
        navigateTo("/client");
      } else {
      }
    });
  }
  return (
    <div className="login-all">
      <div className="title-ded">
        <span>{props.nome}</span>
        <img
          src="https://freepngimg.com/save/22099-dragon/708x720"
          alt="image dragon"
        />
      </div>
      <main className="cded-login">
        <div className="left-ded">
          <img
            src="https://quintacapa.com.br/wp-content/uploads/2018/07/DD.jpg"
            alt="Imagem D&D"
          />
          <span>Entre e faça parte do mundo de aventura</span>
        </div>

        <div className="right-ded">
          {status < 10 ? (
            status >= 3 ? (
              <span>Usuario Não cadastrado</span>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
          <label> Seu Nome </label>
          <div>
            <AiOutlineUser color="white" className="icons" />
            <input
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setValores(e.target.value)}
            />
          </div>
          <label> Seu Usuario</label>
          <div>
            <AiOutlineLogin color="white" className="icons" />
            <input
              type="text"
              placeholder="Digite um usurio"
              onChange={(e) => setValores2(e.target.value)}
            />
          </div>
          <label> Sua Senha</label>
          <div>
            <RiLockPasswordLine color="white" className="icons" />
            <input
              type="password"
              placeholder="Digite uma senha"
              onChange={(e) => setValores3(e.target.value)}
            />
          </div>
          <button className="btn" type="button" onClick={() => handlerClick()}>
            Entrar
          </button>
        </div>
      </main>
    </div>
  );
}
