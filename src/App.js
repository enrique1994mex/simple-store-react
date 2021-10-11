
import './App.css';
import Routes from "./routes"; 
import UsuarioProvider from './context/usuario/Provider';

const App = () => {
    return(
        
        <UsuarioProvider>
            <Routes></Routes>
        </UsuarioProvider>
        
    )
   
}

export default App;
