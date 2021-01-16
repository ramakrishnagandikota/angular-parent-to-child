import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  firstName: string;
  lastName: string;
  ngOnInit() {
    this.firstName = "John";
    this.lastName = "Doe";
  }
}
