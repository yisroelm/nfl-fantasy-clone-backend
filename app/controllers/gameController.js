import Game from "../models/game.js";
// import model from '../models';
// console.log(Something)
// const {Game} = model;

export function newGame() {
const newGame = Game.create({total_points: 3})
  // console.log(Game)
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

