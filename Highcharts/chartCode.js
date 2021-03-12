document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'IKT-bruk i befolkningen'
        },
        xAxis: {
            categories: ['Bruk av internett siste 3 mnd',
            'Bruk av internett til e-post', 'Bruk av internett til banktjenester',
            'Bruk av internett til å selge varer/tjenester', 'Kjøpt/bestillt film/musikk',
            'Kjøpt/bestilt klær/sportsartikler', 'Kjøpt/bestilt reiser/innkvartering']
        },
        yAxis: {
            title: {
                text: 'Andel av befolkningen 16-79 år'
            }
        },
        series: [{
            name: '2014',
            data: [95, 89, 88, 25, 33, 39, 52]
        },{
            name: '2016',
            data: [96, 90, 90, 29, 33, 40, 54]
        },{
            name: '2018',
            data: [96, 93, 92, 31, 41, 45, 61]
        },{
            name: '2020',
            data: [97, 92, 93, 31, 53, 38, 34]
        }]
    });
});