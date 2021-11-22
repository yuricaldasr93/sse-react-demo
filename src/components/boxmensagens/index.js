//Componentes diretos
import "./style.css";

//Styled components
import { Containerbox } from "./style";

function Boxmensagens(props){
    return (
        <Containerbox>
            <h2 className="box__header">{props.boxTitle}</h2>
            <div>
                <ol id="list"></ol>
            </div>
        </Containerbox>
    );
}

export default Boxmensagens;