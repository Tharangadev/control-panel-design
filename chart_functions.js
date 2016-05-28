jQuery(document).ready(function($) {
	var ctx = document.getElementById("email_canvas");
	var myChart = new Chart(ctx, {
	    type: 'doughnut',
	    data:{
    labels: [
        "Replied",
        "No-reply",
        "not sent"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#DE5B49",
                "#E37B40",
                "#46B29D"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
}
	    
	});
	/////trending
	var ctxl = document.getElementById("trending");
	var myLineChart = new Chart(ctxl, {
    type: 'line',
    data: data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Fastest growing item",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [90, 85, 80, 80, 75, 55, 70],
        }
    ]
}
});

});