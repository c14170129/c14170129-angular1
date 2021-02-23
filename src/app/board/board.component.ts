import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.scss"]
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() {}

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(25).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? "1" : "2";
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  // calculateWinner() {
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6]
  //   ];
  //   for (let i = 0; i < lines.length; i++) {
  //     const [a, b, c] = lines[i];
  //     if (
  //       this.squares[a] &&
  //       this.squares[a] === this.squares[b] &&
  //       this.squares[a] === this.squares[c]
  //     ) {
  //       return this.squares[a];
  //     }
  //   }
  //   return null;
  // }

  calculateWinner() {
    const lines = [
      [0, 1, 2, 3],
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [6, 7, 8, 9],
      [10, 11, 12, 13],
      [11, 12, 13, 14],
      [15, 16, 17, 18],
      [16, 17, 18, 19],
      [20, 21, 22, 23],
      [21, 22, 23, 24],
      [0, 5, 10, 15],
      [5, 10, 15, 20],
      [1, 6, 11, 16],
      [6, 11, 16, 21],
      [2, 7, 12, 17],
      [7, 12, 17, 22],
      [3, 8, 13, 18],
      [8, 13, 18, 23],
      [4, 9, 14, 19],
      [9, 14, 19, 24],
      [5, 11, 17, 23],
      [1, 7, 13, 19],
      [0, 6, 12, 18],
      [6, 12, 18, 24]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c] &&
        this.squares[a] === this.squares[d]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
