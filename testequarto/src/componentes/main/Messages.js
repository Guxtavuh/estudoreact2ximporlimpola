export default function Messages(props) {
  return (
    <div className="mensagens">
      <h2>Titulo da menssagem</h2>
      {props.dados.map((itens, ix) => {
        <li key={ix}>
          <h3>{itens.msg[ix].autor}</h3>
          <br />
          <p>{itens.msg[ix].mensagem}</p>
        </li>;
      })}
      <h3>Autor</h3>
      <p>Menssagem</p>
    </div>
  );
}
