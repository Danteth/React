import logo from './logo.svg'
import './App.css'
import './components/CHeader.css'
import {CFooter} from './components/CFooter'
import CHeader from './components/CHeader'
import CContents from './components/CContents'

function App() {
  return (
    <div className="App">
      <CHeader aName="Jan" aFamily="Kowalski" />
      {/* <CHeader aName="Tomasz" aFamily="Nowak" /> */}

      <CContents/>
  
      <CFooter weather="słoneczna" temp="25">
        <p> Niebo jest bezchmurne, wiater słaby.</p>
      </CFooter>
      {/* <CFooter weather="sdeszczowa" temp="13"/> */}
      
    </div>
  );
}
export default App;
