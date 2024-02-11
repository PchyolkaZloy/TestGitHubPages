function getrandom(num, mul) {
    var value = [];
    for (i = 0; i <= num; i++) {
        var rand = Math.random() * mul;
        value.push(rand);
    }
    return value;
}


var data = [
    {
        opacity: 0.4,
        type: 'scatter3d',
        x: getrandom(50, -75),
        y: getrandom(50, -75),
        z: getrandom(50, -75),
    },
];
var layout = {
    scene: {
        xaxis: {
            ticktext: ['H20', 'C02', 'O2'],
            tickvals: [-30, -45, -65, -10]
        },
        yaxis: {
            nticks: 5,
            tickfont:
                {
                    color: 'green',
                    family: 'Old Standard TT, serif',
                    size: 14
                },
            ticksuffix: '$'
        },
        zaxis: {
            ticks: 'outside',
            tick0: 0,
            tickwidth: 4
        }
    },
};
Plotly.newPlot('myDiv', data, layout);
