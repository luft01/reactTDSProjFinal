import { useState, useEffect } from "react";
import "./register.css";
import "./button.css";
import axios from "axios";
const baseURL = "http://localhost:4040/users";
import { useNavigate } from "react-router-dom";
function Register({childToParent}) {
  const [vnome, setNome] = useState("");
  const [vsenha, setSenha] = useState("");
  const [vlogin, setLogin] = useState("");
  const [dados,setDados] = useState([]);
  const [status, setStatus] = useState(0);

  const data = false;
  const navigateTo = useNavigate();

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDados(response.data);
      console.log(dados);
    });
  }, [11]);
  function varifyDados(event) {
    event.preventDefault();
    axios.get(baseURL).then((response) => {
      setDados(response.data);
      console.log(dados);
    });
    dados.map((item) => {
      if(item.login != vlogin){
        setStatus(+10)
        
      }else{
      }
      if(status>= 10){
        handlerInput(event)
        childToParent(data)
      }else{
        console.log('3333')
      }
    })   
  }
  function handlerInput(event) {
   
    axios
      .post("http://localhost:4040/cadUser", {
        nome: vnome,
        senha: vsenha,
        login: vlogin,
      })
      .then((response) => {
        console.log('feito');
      });
  }
  return (
    <div className="ded-register">
      <img
        src="https://static.vecteezy.com/system/resources/previews/009/374/897/non_2x/fog-design-clean-alpha-free-png.png"
        alt=""
      />
      <section className="sections-ded sec-left">
        <img
          src="https://cdn.pixabay.com/photo/2014/03/28/01/04/a-drop-of-299775_960_720.png"
          alt="sangue"
        />
        <img
          src="https://cdn.pixabay.com/photo/2014/03/28/01/04/a-drop-of-299775_960_720.png"
          alt="sangue"
        />
        <img
          src="https://cdn.pixabay.com/photo/2014/03/28/01/04/a-drop-of-299775_960_720.png"
          alt="sangue"
        />
        <img
          src="https://cdn.pixabay.com/photo/2014/03/28/01/04/a-drop-of-299775_960_720.png"
          alt="sangue"
        />
        <img
          src="https://cdn.pixabay.com/photo/2014/03/28/01/04/a-drop-of-299775_960_720.png"
          alt="sangue"
        />
        <img
          src="https://cdn.pixabay.com/photo/2014/03/28/01/04/a-drop-of-299775_960_720.png"
          alt="sangue"
        />
      </section>
      <main className="main-ded">
        
        <img
          src="https://cdn.pixabay.com/photo/2014/04/03/11/54/headstone-312540_1280.png"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2014/04/03/11/54/headstone-312540_1280.png"
          alt=""
        />
        <div className="inputs-main">
          <label htmlFor="">Nome</label>
          <input
            type="text"
            placeholder="Seu nome"
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="">User</label>
          <input
            type="text"
            placeholder="text"
            onChange={(e) => setLogin(e.target.value)}
          />
          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="text"
            onChange={(e) => setSenha(e.target.value)}
          />
          <button
            className="big-button btn-button"
           /*  onClick={(e) => varifyDados(e)} */
           onClick={(event) =>varifyDados (event)}
          >
            Confirmar
          </button>
        </div>
      </main>
      <section className="sections-ded sec-rigth">
        <img
          src="https://cdn.pixabay.com/photo/2014/03/28/01/04/a-drop-of-299775_960_720.png"
          alt="sangue"
        />
        <img
          src="https://cdn.pixabay.com/photo/2014/03/28/01/04/a-drop-of-299775_960_720.png"
          alt="sangue"
        />
        <img
          src="https://cdn.pixabay.com/photo/2014/03/28/01/04/a-drop-of-299775_960_720.png"
          alt="sangue"
        />
        <img
          src="https://cdn.pixabay.com/photo/2014/03/28/01/04/a-drop-of-299775_960_720.png"
          alt="sangue"
        />
        <img
          src="https://cdn.pixabay.com/photo/2014/03/28/01/04/a-drop-of-299775_960_720.png"
          alt="sangue"
        />
        <img
          src="https://cdn.pixabay.com/photo/2014/03/28/01/04/a-drop-of-299775_960_720.png"
          alt="sangue"
        />
      </section>
    </div>
  );
}
export default Register;
