function customFloatParse(name, numberString, defaultValue) {
    if (isNaN(numberString) || numberString <= 0) {
        numberString = defaultValue
        alert(name + " have to be float number > 0. Setting to default value: " + defaultValue)
        document.getElementById(name).value = defaultValue
        if (name === "radius") {
            document.getElementById("dist").value = defaultValue
        }
    } else {
        numberString = parseFloat(numberString)
    }

    return numberString
}

function customIntegerParse(name, numberString, defaultValue) {
    if (isNaN(numberString) || numberString <= 0) {
        numberString = defaultValue
        alert(name + " have to be integer number > 0. Setting to default value: " + defaultValue)
        document.getElementById(name).value = defaultValue
    } else {
        numberString = parseInt(numberString)
    }

    return numberString
}


function getData(form) {
    let formData = new FormData(form);

    return {
        R: customFloatParse("radius", formData.getAll("radius"), 0.5),
        I: customFloatParse("amperage", formData.getAll("amperage"), 1),
        turnsAmount: customIntegerParse("amount", formData.getAll("amount"), 10),
        dist: customFloatParse("dist", formData.getAll("dist"), 0.5),
        pointsCount: customIntegerParse("steps", formData.getAll("steps"), 10000),
    }
}

document.getElementById("graphForm").addEventListener("submit", function (e) {
    e.preventDefault();
    drawGraph(getData(e.target));
});


var radiusInput = document.getElementById('radius');
var distInput = document.getElementById('dist');

radiusInput.addEventListener('input', function () {
    if (!isNaN(this.value) && this.value > 0) {
        distInput.value = this.value;
    }
});