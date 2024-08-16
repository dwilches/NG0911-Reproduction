import { JsonPipe } from "@angular/common";
import { resolve } from "@angular/compiler-cli";
import { Component, DestroyRef, OnDestroy, OnInit } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Router, RouterLink } from "@angular/router";
import { interval, map, Observable, of, timeout } from "rxjs";

@Component({
    selector: "page-1",
    template: `
        <h1>In Page 1</h1>
    `,
    imports: [
        JsonPipe,
        RouterLink
    ],
    standalone: true
})
export class Page1Component implements OnInit, OnDestroy {

    constructor(private destroyRef: DestroyRef,
                private router: Router) {
        this.destroyRef.onDestroy(() => console.log("Page1Component: destroyed (destroyRef.onDestroy)"))
    }

    ngOnInit() {
        this.router.navigate(["page2"])

        Promise.resolve()
            .then(() => {
                console.log("Page1Component: Promise resolved")

                of(null)
                    .pipe(takeUntilDestroyed(this.destroyRef))
                    .subscribe(() => {
                        console.log("Page1Component: Observable resolved");
                    });
            })
            .catch(error => {
                console.log("Page1Component: Exception found", error)
            });
    }

    ngOnDestroy() {
        console.log("Page1Component: destroyed (ngOnDestroy)")
    }
}
