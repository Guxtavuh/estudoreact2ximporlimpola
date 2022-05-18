import { useState, useEffect } from "react";
import Conteudo from "./Conteudo";
import Messages from "./Messages";

export default function Container() {
  // Vamos iniciar o projeto lendo o url com dados da api
  // Neste caso temos produtos para ler e montar a tabela com conteudo
  // vamos usar o comando useState para iniciar o estado de dados
  // dos produtos, Depois vou usar o comando useEffect para carregar os produtos que vem da api
  // O comando useEffect é um comando de laço portanto é necessario fazer ele parar o laço
  // quando terminar  de carregar os dados, Isso é feito usando colchetes ao final da instrução.
  // para obter os dados iremos usar o comando fetch dentro do useEffect
  const [nome, setNome] = useState([
    {
      autor: "",
      mensagem: "",
    },
  ]);
  const [produtos, setprodutos] = useState([
    {
      id: "",
      nome: "",
      categoria: "",
      msg: [],
    },
  ]);

  useEffect(() => {
    fetch("http://10.26.44.26:5500/")
      .then((response) => response.json())
      .then((dados) => {
        setprodutos(dados.output);
      });
  }, []);

  const carregaMenssagem = (Messages) => {
    setNome(Messages);
  };
  return (
    <div className="container">
      <Messages info={nome} />
      <Conteudo dados={produtos} acao={carregaMenssagem} />
    </div>
  );
}
