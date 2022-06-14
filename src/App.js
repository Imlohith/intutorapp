import Routes from  './routes'

// prime react and CSS
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './assets/styles/styleParent.css';
import './assets/styles/styleTutor.css';

function App() {
  
  return (
    <div style={{overflowX:'hidden'}}>
        <Routes />
    </div>
  );
}

export default App;
