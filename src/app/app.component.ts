import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Let's Play Connect Four";
  row = 0;
  column = 0;
  gameBoard = [
    ["*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*"]
  ];
  currentPlayer = 1;
  changeCell(row, column) {
    this.gameBoard[row][column] = this.currentPlayer.toString();
  }
}
