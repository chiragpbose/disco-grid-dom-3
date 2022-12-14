let discoGridContainer = document.querySelector(".disco-grid-container");

for (let i = 0; i < 504; i++) {
	let box = document.createElement("div");
	box.classList.add("box");
	discoGridContainer.appendChild(box);
}
let box = document.querySelectorAll(".box");
discoGridContainer.addEventListener("mousemove", runEvent);

function runEvent() {
	for (let i = 0; i < 504; i++) {
		box[i].style.backgroundColor =
			"rgb(" +
			Math.random() * 250 +
			"," +
			Math.random() * 250 +
			"," +
			Math.random() * 250 +
			")";
	}
}
