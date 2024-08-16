import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "page-2",
    template: `
        <h1>In Page 2</h1>

        <button routerLink="/page1">Back To Page 1</button>
    `,
    imports: [
        RouterLink
    ],
    standalone: true
})
export class Page2Component implements OnInit {

    ngOnInit() {
        console.log("Page2Component: ngOnInit()")
    }
}
