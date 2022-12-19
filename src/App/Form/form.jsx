import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import "./letra.css";
import { Classes } from "./ficha";
import NavBar from "../../Global/navbar";
import axios from "axios";
function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [escolha, setEscolha] = useState("mago");
  const [numero, setNumero] = useState(0);
  const [nome, setNome] = useState("");
  const [classe, setClasse] = useState("");
  const [raca, setRaca] = useState("");
  const [idade, setIdade] = useState("");
  const [genero, setGenero] = useState("");
  /* const onSubmit = (data) => {
    console.log(data);
  }; */

  function SavePersonagem(e) {
    e.preventDefault();

    axios
      .post("http://localhost:4040/cadPerso", {
        nome: nome,
        classe: classe,
        raca: raca,
        idade: idade,
        genero: genero,
      })
      .then((response) => {
        console.log(feito);
      });
  }
  function handlerChangeCLass() {
    setNumero(numero + 1);

    if (numero === 0) {
      setEscolha("mago");
      setClasse(escolha);
    } else if (numero === 1) {
      setEscolha("guerreiro");
      setClasse(escolha);
    } else if (numero === 2) {
      setEscolha("arqueiro");
      setClasse(escolha);
    } else if (numero === 3) {
      setEscolha("barbaro");
      setClasse(escolha);
    } else if (numero === 4) {
      setEscolha("ladino");
      setClasse(escolha);
    } else if (numero === 5) {
      setEscolha("druida");
      setClasse(escolha);
    } else if (numero >= 6) {
      setNumero(0);
      setEscolha("mago");
      setClasse(escolha);
    }
    console.log(numero);
  }

  return (
    <div className="form-all">
      <NavBar />
      <div className="owText text-center">D&D A CAVERNA</div>
      <form onSubmit={null} className="form-ded">
        <fieldset className="container-form">
          {Classes.map((tipo, index) => {
            return tipo.tipo == escolha ? (
              <img src={tipo.image} alt={tipo.tipo} key={index}/>
            ) : (
              <span></span>
            );
          })}
          <legend>Ficha Cadastro </legend>
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setNome(e.target.value)}
            {...register("RequiredNome", { required: true })}
          />
          {errors.RequiredNome && <p>This field is required</p>}
          <label>Classe</label>
          <input type="text" value={escolha} />
          <label>Raça </label>
          <select
            name="tipo"
            id="tipo"
            value={raca}
            {...register("RequiredNome", { required: true })}
            onChange={(e) => setRaca(e.target.value)}
          >
            <option value="Humano">Humano</option>
            <option value="Elfo">Elfo</option>
            <option selected value="Anão">
              Anão
            </option>
            <option value="Mestiço">Mestiço</option>
            <option value="Orc">Orc</option>
            <option value="Gnomo">Gnomo</option>
          </select>
          <label>Idade</label>
          <input
            type="text"
            onChange={(e) => setIdade(e.target.value)}
            {...register("RequiredIdade", { required: true })}
          />
          {errors.RequiredIdade && <p>This field is required</p>}
          <label>Genero </label>
          <select
            name="tipo"
            id="tipo"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
          >
            <option selected value="Masculino">
              Masculino
            </option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>

          <input
            type="submit"
            value="Criar"
            onClick={(e) => SavePersonagem(e)}
          />
          <button
            type="button"
            className="btn-classes"
            onClick={() => handlerChangeCLass()}
          >
            Mudar
          </button>
        </fieldset>
      </form>
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2d79c631-e4c0-42fd-ac23-65bb8f0f6d47/d8tzc41-3efb47cf-46ff-4c61-94d1-a0201125ea58.png/v1/fill/w_899,h_603,strp/giant_centipede_by_dadich_d8tzc41-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAzIiwicGF0aCI6IlwvZlwvMmQ3OWM2MzEtZTRjMC00MmZkLWFjMjMtNjViYjhmMGY2ZDQ3XC9kOHR6YzQxLTNlZmI0N2NmLTQ2ZmYtNGM2MS05NGQxLWEwMjAxMTI1ZWE1OC5wbmciLCJ3aWR0aCI6Ijw9ODk5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.SqG8Vwwdxjo-QmdgNWt5Y77iC6vB6-FRHEzS3ti_Jow"
        alt="image"
      />
    </div>
  );
}

export default Form;
