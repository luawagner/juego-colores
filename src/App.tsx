import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState<"initial" | "playing" | "finished">("initial");
  const [time, setTime] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    let interval: number;

    if (status === "playing") {
      interval = setInterval(() => {
        setTime((time) => time + 1)
    }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [status]);

  return (
    <main>
      <header>
        <h1>{0} puntos</h1>
        <h1>{time} segundos</h1>
      </header>
      {status === "playing" && (
        <section>
          <span>Blanco</span>
        </section>
      )}

      <footer>
        {status === "initial" && <button onClick={() => setStatus("playing")}>Jugar</button>}
        {status === "finished" && <button onClick={() => setStatus("initial")}>Reiniciar</button>}
      </footer>
    </main>
  );
}

export default App;
