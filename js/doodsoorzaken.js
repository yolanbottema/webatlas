var data = {
    labels: ["Natuurlijke dood", "Vermoord", "Zelfmoord", "Geëxecuteerd", "Vergiftigd", "Niet bekend/Anders", "Gevecht", "Ziek/Ziekte"],
    datasets: [{
        label: "Doodsoorzaken Romeinse Keizers (27 v.Chr - 1453 n.Chr)",
        backgroundColor: "#7F2122",
        hoverBackgroundColor: "#FACD1E",
        data: [31, 38, 5, 12, 5, 55, 29, 17],
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