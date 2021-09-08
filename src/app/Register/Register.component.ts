import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    template: `
        <section>
            <div class="signup">
                <h1 class="signup-heading">Register</h1>
                <form action="#" class="signup-form" autocomplete="off">
                    <label for="email" class="signup-label">Email</label>
                    <input type="email" name="email" class="signup-input" placeholder="Eg: johndoe@gmail.com" [(ngModel)]="email">
                    <label for="fullname" class="signup-label">Full name</label>
                    <input type="text" name="fullname" class="signup-input" placeholder="Eg: John Doe" #tagFullName>
                    <button class="signup-submit" (click)="changeFullName(tagFullName.value)">Submit</button>
                </form>
                <p class="signup-already">
                    <span>Email: </span>
                    <span class="signup-login-link">{{email}}</span>
                </p>
                <p class="signup-already">
                    <span>FullName: </span>
                    <span class="signup-login-link">{{fullname}}</span>
                </p>
            </div>
        </section>
    `,
    styleUrls: ['./Register.component.scss']
})

export class RegisterComponent implements OnInit {
    email:string = "";
    fullname:string = "";
    changeFullName = (newFullName:string) => {
        this.fullname = newFullName
    }
    constructor() { }

    ngOnInit() { }
}