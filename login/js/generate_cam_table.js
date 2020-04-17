function generateCamTable(currentDate, enabled) {
  let table = document.querySelector("#cam-table");

  for (let i = 0; i <= 23; i++) {
    let newRow = table.insertRow();

    let isEnabled = enabled[i] !== undefined;
    if (!isEnabled) {
      newRow.className = "no-access";
    }

    let cellName = newRow.insertCell(0);
    let cellDate = newRow.insertCell(1);
    let cellTime = newRow.insertCell(2);
    let cellType = newRow.insertCell(3);

    let cellFilename = `VID_${pad(i)}_00.mp4`;
    let cellNameContent = isEnabled
      ? createLinkNode(cellFilename, enabled[i])
      : document.createTextNode(cellFilename);
    cellName.appendChild(cellNameContent);

    cellDate.appendChild(document.createTextNode(currentDate));

    cellTime.appendChild(document.createTextNode(`${pad(i)}:00`));

    cellType.appendChild(document.createTextNode(`file`));
  }
}

function createLinkNode(content, to) {
  var a = document.createElement("a");
  a.setAttribute("href", to);
  a.innerHTML = content;
  return a;
}

function pad(n) {
  return n < 10 ? "0" + n : n;
}
