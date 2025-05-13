const container = document.querySelector("#container");
const redPara = document.createElement("p");
redPara.textContent = "Hey I'm red!";
redPara.style.color = "red";
container.appendChild(redPara);

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3";
blueH3.style.color = "blue";
container.appendChild(blueH3);

const styledDiv = document.createElement("div");
styledDiv.style.background-color = "pink";
styledDiv.style.border ="1px solid black";
styledDiv.style.padding = "10px";

const innerH1 = document.createElement("h1");
innerH1.textContent = "Im in a div";
const innerP = document.createElement("p");
innerP.textContent = "ME TOO!";

styledDiv.appendChild(innerH1);
styledDiv.appendChild(innerP);
container.appendChild(styledDiv);