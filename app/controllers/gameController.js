import Game from "../models/game.js";

export function newGame() {
const newGame = Game.create({score: 3})
console.log(newGame)
};
export function get_game() {
  console.log("get_game");
};
export function edit () {
  console.log("edit");
};
export function delete_game () {
  console.log("delete_game");
};

