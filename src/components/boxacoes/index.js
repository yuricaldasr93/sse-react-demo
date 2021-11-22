import "./style.css";
//Componentes diretos


//Styled components
import { Containerbox } from "./style";
import Custombutton from "../button";

function Boxacoes(props) {

    var eventSource = null;

    function start(){
        eventSource = new EventSource("http://localhost:8080/stream", {withCredentials: false});

        eventSource.onopen = (event) =>{
            console.log("Connection opened!");
        }

        eventSource.onmessage = (event) =>{
            console.log("new data received!");
            const newElement = document.createElement("li");
            const eventList = document.getElementById("list");

            newElement.innerHTML = "message: " + event.data;
            eventList.appendChild(newElement);
        }

        eventSource.onerror = (error) =>{
            console.log("Error: "+ error);
            eventSource.close();
        }
    }

    function closeConnection(){
        eventSource.close();
        console.log("Conexão encerrada!");
    }

    return(
        <Containerbox>
            <h2 className="box__header">{props.boxTitle}</h2>
            <div>
                <Custombutton onClick={() => start()} text="Iniciar"/>
                <Custombutton onClick={() => closeConnection()} text="Encerrar"/>
            </div>
        </Containerbox>
    );
}

export default Boxacoes;