import { useCallback, useState } from "react";

export default function Messages(props) {
  const [produto, setProduto] = useState("");
  return (
    <div className="mensagens">
      {props.info.map((m, i) => (
        <div key={i}>
          <h3>Cliente: {m.autor}</h3>
          <h4> {m.titulo}</h4>
          <p>{m.mensagem}</p>
          <br />
          <hr />
          <br />
        </div>
      ))}
    </div>
  );
}
