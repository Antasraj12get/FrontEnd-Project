let multipleColors = [
    "red", "blue", "green", "yellow", "orange",
    "purple", "pink", "brown", "black", "white",
    "gray", "cyan", "magenta", "lime", "maroon",
    "navy", "teal", "olive", "coral", "salmon",
    "gold", "silver", "beige", "ivory", "khaki",
    "indigo", "violet", "turquoise", "plum", "orchid",
    "chocolate", "crimson", "darkblue", "darkgreen", "darkred",
    "lightblue", "lightgreen", "lightpink", "tomato", "peachpuff",
    "lavender", "mintcream", "midnightblue", "steelblue", "slategray",
    "royalblue", "aquamarine", "chartreuse", "firebrick", "hotpink"
];


let container = document.querySelector(".container");
let randomColor = document.getElementById("randomColor");
let applyColor = document.getElementById("applyColor")
let input = document.getElementById("input");
let currentColor = document.getElementById("currentColor")

applyColor.addEventListener("click", function () {
    let val = input.value;
    container.style.backgroundColor = val;
    
})


let currentInd = 0;

randomColor.addEventListener("click", () => {
    currentInd = (currentInd + 1) % multipleColors.length;
    container.style.backgroundColor = multipleColors[currentInd];

    let colors = document.createElement("div");
    colors.textContent = multipleColors[currentInd];
    currentColor.appendChild(colors);
    
    

})
