//Componentes diretos

//Pacote Router DOM

//Styled components
import { Template } from './components/template/style.js';
import Boxacoes from './components/boxacoes';
import Boxmensagens from './components/boxmensagens';

//Pages

function App() {
  return (
    <Template>
      <Boxacoes boxTitle="Ações"/>
      <Boxmensagens boxTitle="Mensagens"/>
    </Template>
  );
}

export default App;
