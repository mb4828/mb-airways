function drawNose() {
	const c = document.getElementById("nose-canvas");
	const ctx = c.getContext("2d");
	ctx.lineWidth = 6;
	ctx.strokeStyle = '#e5e4e2';
	ctx.fillStyle = '#ffffff';
	ctx.beginPath();
	ctx.moveTo(3, 120);
	ctx.bezierCurveTo(56, -35, 112, -35, 167, 120);
	ctx.stroke();
	ctx.fill();
}

function numberRows() {
	let rowNumber = 1;
	const rowLabels = document.getElementsByClassName("seating-row-number");
	for (const label of rowLabels) {
		label.innerText = rowNumber;
		rowNumber++; 
		if (rowNumber === 13) {
			rowNumber++;
		}
	}
}

drawNose();
numberRows();