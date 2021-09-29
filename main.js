
document.getElementById("calcifer").addEventListener("mouseover", mouseOver);
document.getElementById("calcifer").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("calcifer").style.backgroundColor = "rgb(155, 102, 102, 0.5)";
}

function mouseOut() {
    document.getElementById("calcifer").style.backgroundColor = "none";
}