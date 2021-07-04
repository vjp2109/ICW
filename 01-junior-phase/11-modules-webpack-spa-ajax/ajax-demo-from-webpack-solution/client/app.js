import {getWinner, voteTakeout, voteLeftovers } from "./score.js";

import hookUp from "./ajax-stuff";
hookUp();

const winnerText = document.getElementById("winner");
const leftoversBtn = document.getElementById("leftovers");
const takeoutBtn = document.getElementById("takeout");

const updateWinner = () => {
	const currWinner = getWinner();
	winnerText.innerText = currWinner;
};

takeoutBtn.addEventListener("click", () => {
	voteTakeout();
	updateWinner();
});

leftoversBtn.addEventListener("click", () => {
	voteLeftovers();
	updateWinner();
});

