import SearchBar  from '../SearchBar.js';
import '../SearchResults';
import '../Tracklist';
import '../Track'
import styles from '../App.module.css';



const App = () => {

  
  return (
    <div className="App">
      <header className={styles.AppHeader}>
       <span className={styles.jam}>Jammming</span>
      </header>
    
    <main> 
      <SearchBar />
    </main>
       
        
  
      </div>
  
  );
}

export default App;