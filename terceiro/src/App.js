function App() {
  let n1 = Math.round(Math.random() * 200 - 100 + 5);
  let n2 = Math.round(Math.random() * 200);

  return (
    <div>
      <p>
        A soma entre {n1} e {n2} é {n1 + n2}
      </p>
      <p>O resultado acima é {(n1 + n2) % 2 === 0 ? "par" : "impar"}</p>
    </div>
  );
}

export default App;
