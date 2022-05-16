import Conteudo from "./Conteudo";
import Messages from "./Messages";

export default function Container() {
  return (
    <div className="container">
      <Messages />
      <Conteudo />
    </div>
  );
}
