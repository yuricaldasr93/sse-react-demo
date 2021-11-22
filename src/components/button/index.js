//Componentes diretos

//Styled components
import { Mybutton } from "./style";

function Custombutton(props){
    return(
        <Mybutton onClick={props.onClick}>
            {props.text}
        </Mybutton>
    );
}

export default Custombutton;