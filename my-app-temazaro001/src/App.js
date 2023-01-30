import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>1. Mi a feladata egy csomagkezelőnek?</h2>
        <p>
          Telepíti a szükséges package-ket és kezeli.
        </p>

        <h2>2. Milyen csomagkezelőket ismer?</h2>
        <ul>
          <li>NPM</li>
          <li>Yarn</li>
          <li>PNPM</li>
        </ul>

        <h2>3. Mi a különbség ezek működése között?</h2>
        <ul>
          <li>Az NPM és Yarnhoz képest a PNPM annyiban tér el, hogy míg előbbi kettő minden új app létrehozásakor minden package-t telepít addig a PNPM ha már előzőleg volt telepítve csak hivatkozik rájuk és csak azt a package-t telepítik amik még nem voltak előzőleg.</li>
          <li>Az NPM-hez képest a Yarn és PNPM telepítése sokkal gyorsabb.</li>
          <li>Yarn arra jó ha többen dolgoznak ugyanazon az appon és így mindenkinek ugyanazok a beállítások lesznek telepítve package-kel valamint a telepítéssel egyidejű verzióban.</li>
        </ul>


      </header>
    </div>
  );
}

export default App;
