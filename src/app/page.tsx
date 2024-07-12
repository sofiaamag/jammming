import SearchBar  from '/Users/sofiamagnani/Desktop/reactapp/jammming/jammming/src/SearchBar.js';
import '/Users/sofiamagnani/Desktop/reactapp/jammming/jammming/src/SearchResults.js';
import '/Users/sofiamagnani/Desktop/reactapp/jammming/jammming/src/Tracklist.js';
import '/Users/sofiamagnani/Desktop/reactapp/jammming/jammming/src/Track.js'
import styles from '/Users/sofiamagnani/Desktop/reactapp/jammming/jammming/src/App.module.css';



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