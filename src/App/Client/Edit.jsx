import { useState, useEffect, useContext } from "react";
import "./dados.css";
import axios from "axios";

export default function Edit(props) {
  const [altera, setAltera] = useState("Nothing");
  const handlePerso = () => {
    axios
      .put("http://localhost:4040/editperso", {
        idusers: props.ids,
        nome: props.nomes,
        senha: props.senhas,
        login: props.logins,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  const DeletarUser = () => {
    axios.delete(`http://localhost:4040/delete/${props.ids}`).then(() => {
      alert("Usuario Deletado !");
    });
    handleClose();
  };
  return (
    <>
      <button type="button" onClick={() => DeletarUser()}>
        Deletar {props.nomes}
      </button>
      <button type="button" onClick={() => handlePerso()}>
        Alterar {props.senhas}
      </button>
    </>
  );
}
