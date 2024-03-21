import { GameController } from "./controllers/GameController";
import { GameItem } from "./models/GameItem";
// import './style.css';
const rootElement: HTMLElement | null = document.querySelector('#app');

var gameApp: GameController | null = null;
if(rootElement){
    gameApp = new GameController([
        new GameItem(1,'',"1.jpg"),
        new GameItem(2,'',"2.ipg"),
        new GameItem(3,'',"3.jpg"),
        new GameItem(4,'',"4.jpg"),
        new GameItem(5,'',"5.jpg"),
        new GameItem(6,'',"6.jpg"),
        new GameItem(7,'',"7.jpg"),
        new GameItem(8,'',"8.jpg"),
        new GameItem(9,'',"9.png"),
        new GameItem(10,'',"10.jpg"),
    ], rootElement);

    gameApp.renderGameBoard();
}