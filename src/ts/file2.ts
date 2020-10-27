
import { Hello } from "./file1";

window.addEventListener('load', function() {
    let myHello = new Hello();
    const name = "Ise Yoshitaka";
    alert(myHello.greeting(name));
});

