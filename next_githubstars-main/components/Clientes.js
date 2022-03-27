import styles from "./Validation.module.scss";
import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { SelectButton } from 'primereact/selectbutton';

export default function Filmes(props) {
  const [showMessage, setShowMessage] = useState(false);

  const [assinaturas, setAssinaturas] = useState([]);
  const [selectedAssinaturas, setSelectedAssinaturas] = useState();
  const [selectedAssinaturasID, setSelectedAssinaturasID] = useState();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [fone, setFone] = useState("");

  const [value1, setValue1] = useState('true');
  const options = ['true', 'false'];

  useEffect(async () => {
    const response = await fetch('http://127.0.0.1:8000/assinaturas/');
    const data = await response.json();
    setAssinaturas(data)
  }, []);
  
  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  async function onSubmit(event) {
    event.preventDefault()

    const response = await fetch('http://127.0.0.1:8000/usuarios/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([{nome: nome.target.value, email: email.target.value, fone: fone.target.value, ativo: value1.target.value, assinatura_FK: selectedAssinaturasID}]),
    })

    if (response.status == 200) {
      setShowMessage(true);
      props.minhaFuncao()
      setNome();
      setEmail();
      setFone();
      serValue1('true');
    } else {
      console.log("Deu merda!")
    }
   
  };
  return (
    <>
      <div className="form-demo">
        <div className="card-inner">
          <div className="card-front">
            <Dialog
              visible={showMessage}
              onHide={() => setShowMessage(false)}
              position="top"
              footer={dialogFooter}
              showHeader={false}
              breakpoints={{ "960px": "80vw" }}
              style={{ width: "30vw" }}
            >
              <div className="flex align-items-center flex-column pt-6 px-3">
                <i
                  className="pi pi-check-circle"
                  style={{ fontSize: "5rem", color: "var(--green-500)" }}
                ></i>
                <h5>Registration Successful!</h5>
                <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
                  Item registrado
                </p>
              </div>
            </Dialog>
            <div className="flex justify-content-center">
              <div className="card">
                <form onSubmit={onSubmit} className="p-fluid">
                  <div className="field gitImgContainer flex align-items-center justify-content-center border-circle">
                    <p className="text-6xl text-white">Cadastrar usuarios</p>
                  </div>

                  <div className="field">
                    <span className="p-float-label">
                      <InputText
                        id="name"
                        name="name"
                        value={nome.value}
                        onChange={newText => setNome(newText)}
                        autoFocus
                      />
                      <label htmlFor="name">Name</label>
                    </span>
                  </div>

                  <div className="field">
                    <span className="p-float-label">
                      <InputText
                        id="email"
                        name="email"
                        value={email.value}
                        onChange={newText => setEmail(newText)}
                        autoFocus
                      />
                      <label htmlFor="email">Email</label>
                    </span>
                  </div>

                  <div className="field">
                    <span className="p-float-label">
                      <InputText
                        id="fone"
                        name="fone"
                        value={fone.value}
                        onChange={newText => setFone(newText)}
                        autoFocus
                      />
                      <label htmlFor="fone">Telefone</label>
                    </span>
                  </div>

                  <div className="field">
                    <p></p>
                    <span className="p-float-label">
                        <SelectButton value={value1} options={options} onChange={(e) => (setValue1(e))} />              
                    </span>
                  </div>

                  <div className="field">
                    <span className="p-float-label">
                      <Dropdown
                        id="assinaturas"
                        name="assinaturas"
                        value={selectedAssinaturas}
                        onChange={(e) => (setSelectedAssinaturas(e.value), setSelectedAssinaturasID(e.value.id))}
                        options={assinaturas}
                        optionLabel="nome"
                      />
                      <label htmlFor="assinaturas">Assinaturas</label>
                    </span>
                  </div>

                  <Button
                    type="submit"
                    label="Salvar"
                    className="mt-2 btnSbmt"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flipbutton {
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
        }

        .btnflip {
          color: white;
          background-color: rgb(158, 27, 27, 0);
          outline: none;
          border: none;
          font-weight: bold;
          font-size: 20px;
          padding: 0px;
          border-radius: 3px;
          margin: 0;
          cursor: pointer;
        }

        .gitImgContainer img {
          width: 150px;
          height: 150px;
          border-radius: 100px;
        }

        .form-demo {
          padding: 15px;
          background-color: red;
          border: none;
          border-radius: 10px;
          background: linear-gradient(
            -50deg,
            #313131,
            #525d69,
            #423434,
            #0a0909
          );
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
          box-shadow: rgb(0 0 0 / 20%) 0px 3px 6px, rgb(0 0 0 / 27%) 0px 3px 6px;

          perspective: 1000px;
        }

        .card-inner {
          position: relative;

          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .card-front,
        .card-back {
          /* position: absolute; */
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .card-back .backName {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          margin: 0;
          padding: 0;
        }
        .card-back .backName span {
          margin: 0;
          padding-left: 15px;
        }
        .card-back .backName h4 {
          margin: 5px 0px;
          
        }

        .card-front {
        }

        .card-back {
          color: white;
          transform: rotateY(180deg);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .form-demo .card {
          min-width: 450px;
        }
        .form-demo .card form {
          margin-top: 2rem;
        }
        .form-demo .card .field {
          margin-bottom: 1.5rem;
        }
        @media screen and (max-width: 960px) {
          .form-demo .card {
            width: 80%;
          }
        }
        @media screen and (max-width: 640px) {
          .form-demo .card {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>
    </>
  );
}
