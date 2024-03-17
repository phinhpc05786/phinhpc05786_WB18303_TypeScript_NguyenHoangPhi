// import autobind from 'autobind-decorator';
// import { GameItem, GameItemStatus  } from "../models/GameItem";
// export class GameController{
//     private items: GameItem[]= [];

//     constructor(items: GameItem[], public element: HTMLElement){
//         this.initGame(items)
//     }

//     initGame(initData: GameItem[]): void{
//         for (const item of initData) {
//             this.items.push(item);
//             this.items.push(new GameItem(item.id, item.divId, item.image));
//         }
//         let id: number = 1;
//         this.items.forEach(it => {
//             it.status = GameItemStatus.Close;
//             it.divId = 'd' + id;
//             id++;
//         })
//     }

//     reinitGame(): void{
//         this.items.forEach(item =>{
//             item.imageElement = null;
//             item.status = GameItemStatus.Close;
//             item.isMatched = false;
//         })

//         this.shuffle();
//     }
//     isWinGame(): boolean{
//         return this.items.filter(item => item.status === GameItemStatus.Open).length === this.items.length;
//     }
//     renderHTML(rootElement: HTMLElement, item: GameItem){
//     //     <div class="col-2 gameItem m-2 p1 text-center">
//     //     <img src="" alt="" class="img-fluid">
//     // </div>
//     const divItem : HTMLDivElement = document.createElement("div");
//     divItem.className = "col-2 gameItem m-2 p1 text-center";
//     divItem.id = item.divId;
//     divItem.addEventListener("click", this.processGameItemClicked);

//     const imgItem: HTMLImageElement = document.createElement("img");
//     imgItem.src = `images/${item.image}`;
//     imgItem.className = 'img-fluid invisible';
//     item.imageElement = imgItem;
//     divItem.appendChild(imgItem);
//     rootElement.appendChild(divItem);
//     }
//     renderResetButton(rootElement: HTMLElement): void{
//         let button: HTMLElement = rootElement.querySelector('button#reset') as HTMLButtonElement;

//         if(button){
//             button.addEventListener('click', this.processGameItemClicked);
//         }
//     }
//     renderGameBoard(): void{
//         this.shuffle();

//         let boardDiv: HTMLElement = this.element.querySelector('#board') as HTMLElement;

//         if(boardDiv){
//             this.items.forEach(it =>{
//                 this.renderHTML(boardDiv, it);
//             });
//         }
//         this.renderResetButton(this.element)
//     }
//     isMatches(id: number, imgElement: HTMLImageElement): boolean{
//         let openedItems : GameItem[] = this.items.filter(item =>{
//             if(item.status === GameItemStatus.Open && !item.isMatched){
//                 return item;
//             }
//         });

//         if(openedItems.length == 2){
//             let checkMatchedFilter = openedItems.filter(item => item.id == id)

//             if(checkMatchedFilter.length < 2){
//                 openedItems.forEach(item =>{
//                     openedItems.forEach(item => {
//                         this.changeMatcheBackground(item.imageElement, false)
//                     })

//                 }),
//                 setTimeout(() => 
//                     openedItems.forEach(item =>{
//                         if(item.imageElement){
//                             item.imageElement.className = 'img-fluid invisible';
//                             item.status = GameItemStatus.Close;
//                             item.isMatched = false;

//                             this.changeMatcheBackground(item.imageElement);
//                         }
//                     }), 600
//                 )
//             }else {
//                 openedItems.forEach(item => {
//                     item.isMatched = true;
//                     this.changeMatcheBackground(item.imageElement);
//                 });
//                 return true;
//             }
//         }
//         return false;
//     }
//     changeMatcheBackground(imgElement: HTMLElement | null, isMatched: boolean = true) {
//         if (imgElement?.parentElement) {
//             const parentElement = imgElement.parentElement;
//             parentElement.className = 'col-2 gameItem m-1 p-1 text-center';
//             if (!isMatched) {
//                 parentElement.classList.add('inmatched');
//             } else {
//                 parentElement.classList.remove('inmatched');
//             }
//         }
//     }
    
//     @autobind
//     processGameItemClicked(event: Event){
//         let element : HTMLElement | null = event.target as HTMLElement;

//         if(element.tagName === "img"){
//             element = element.parentElement;
//         }

//         for (const item of this.items) {
//             if(item.divId == element?.id && !item.isMatched && item.status === GameItemStatus.Close) {
//                 item.status = GameItemStatus.Open;

//                 let imgElement = element.querySelector('img');

//                 if(imgElement){
//                     imgElement.className = 'img-fluid visible';

//                     this.isMatched(item.id, imgElement);
//                 }
//             }
//         }
//     }

//     @autobind
//     processReseButtonClicked(event: Event): void {
//         this.reinitGame();

//         const boardElement: HTMLElement = document.querySelector('board') as HTMLElement;
//         boardElement.innerHTML = '';
//         this.renderGameBoard();
//     }
//     shuffle(){
//         this.items = _.shuffle(this.items);
//     }
// }