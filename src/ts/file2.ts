
import { Hello } from "./file1";

window.addEventListener('load', function() {
    let myHello = new Hello();
    const name = "Ise";
    alert(myHello.greeting(name));
});

