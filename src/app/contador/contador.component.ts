import { Component} from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
    // Se pone el array por que podemos linkear mas de un archivo css 
    styleUrls: ['./contador.component.css']
})

export class ContadorComponent {
    title = 'contador';
}



