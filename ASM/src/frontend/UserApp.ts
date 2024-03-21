import { UserController} from './controller/UserController';
const appElement : HTMLElement = document.querySelector('#app') as HTMLElement;

console.log('Login from');

if(appElement){
    let usercontroller: UserController = new UserController(appElement)
}

