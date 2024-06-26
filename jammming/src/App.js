import SearchBar  from './SearchBar';
import './SearchResults';
import './Tracklist';
import './Track'
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className={styles.AppHeader}>
       <span className={styles.jam}>Jammming</span>
      </header>
      <main>
        <span>{SearchBar}</span>
      </main>
      </div>
  
  );
}

export default App;
