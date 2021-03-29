
var data = {
    labels: ["Room", "Cubiculum", "Shop", "Staircase", "Corridor", "Atrium", "Fauces", "Garden", "Kitchen", "Tablinum", "Alae", "Hall", "Courtyard", "Oecus", "Peristyle", "Portico"],
    datasets: [{
        label: "Totaal aantal van soorten gebouwen",
        backgroundColor: "#7F2122",
        hoverBackgroundColor: "#FACD1E",
        data: [560, 277, 347, 402, 363, 388, 377, 278, 221, 198, 131, 150, 169, 133, 120, 123],
    }]
};

var options = {
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            stacked: true,
            gridLines: {
                display: true,
            }
        }],
        xAxes: [{
            gridLines: {
                display: false
            }
        }]
    }
};

Chart.Bar('chart', {
    options: options,
    data: data
});

