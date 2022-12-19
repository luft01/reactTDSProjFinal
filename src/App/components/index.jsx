import { useState,useEffect } from "react";
import "./index.css";
import Login from "../Login/login";
import Register from "../Register/register";
import { connect } from 'react-redux';

function Components(props) {
  const { newValue } = props;
  const [teste, setTeste] = useState(newValue);
  const [tipo, setTipo] = useState(false);
  const [data, setData] = useState('');
  const childToParent = (childdata) => {
    setTeste(String(childdata))
    setTipo(childdata);
  }

  
  return (
    <>
      <div className="button-all">
        <button
          type="button"
          onClick={() => {
            setTipo(!tipo);
            console.log(tipo);
          }}
        >
          CLick Here {teste}
        </button>
      </div>
      {tipo === false ? (
        <Login nome="Bem Vindo ao Mundo de D&D" />
      ) : (
        <Register childToParent={childToParent}/>
      )}
    </>
  );
}
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

export default connect(mapStateToProps) (Components);
