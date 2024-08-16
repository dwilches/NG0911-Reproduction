import { Routes } from '@angular/router';
import { Page1Component } from "./page1.component";
import { Page2Component } from "./page2.component";

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/page1",
    },
    {
        path: "page1",
        pathMatch: "full",
        component: Page1Component,
    },
    {
        path: "page2",
        pathMatch: "full",
        component: Page2Component,
    }
];
