/*
 *  Document   : be_pages_dashboard.js
 *  Author     : WG
 *  Description: Custom JS code used in Dashboard Page
 */

class BePagesDashboard {
    /*
     * Chart.js Charts, for more examples you can check out http://www.chartjs.org/docs
     *
     */
    static initDashboardChartJS() {
        // Set Global Chart.js configuration
        Chart.defaults.global.defaultFontColor              = '#555555';
        Chart.defaults.scale.gridLines.color                = "transparent";
        Chart.defaults.scale.gridLines.zeroLineColor        = "transparent";
        Chart.defaults.scale.display                        = false;
        Chart.defaults.scale.ticks.beginAtZero              = true;
        Chart.defaults.global.elements.line.borderWidth     = 2;
        Chart.defaults.global.elements.point.radius         = 5;
        Chart.defaults.global.elements.point.hoverRadius    = 7;
        Chart.defaults.global.tooltips.cornerRadius         = 3;
        Chart.defaults.global.legend.display                = false;

        // Chart Containers
        let chartDashboardLinesCon  = jQuery('.js-chartjs-dashboard-lines');
        let chartDashboardLinesCon2 = jQuery('.js-chartjs-dashboard-lines2');

        // Chart Variables
        let chartDashboardLines, chartDashboardLines2;

        // Lines Charts Data
        let chartDashboardLinesData = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(66,165,245,.45)',
                    borderColor: 'rgba(66,165,245,1)',
                    pointBackgroundColor: 'rgba(66,165,245,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(66,165,245,1)',
                    data: [25, 21, 23, 38, 36, 35, 39]
                }
            ]
        };

        let chartDashboardLinesOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMax: 50
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    label: (tooltipItems, data) => {
                        return ' ' + tooltipItems.yLabel + ' Sales';
                    }
                }
            }
        };

        let chartDashboardLinesData2 = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'This Week',
                    fill: true,
                    backgroundColor: 'rgba(156,204,101,.45)',
                    borderColor: 'rgba(156,204,101,1)',
                    pointBackgroundColor: 'rgba(156,204,101,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(156,204,101,1)',
                    data: [190, 219, 235, 320, 360, 354, 390]
                }
            ]
        };

        let chartDashboardLinesOptions2 = {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMax: 480
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItems, data) {
                        return ' $ ' + tooltipItems.yLabel;
                    }
                }
            }
        };

        // Init Charts
        if (chartDashboardLinesCon.length) {
            chartDashboardLines  = new Chart(chartDashboardLinesCon, { type: 'line', data: chartDashboardLinesData, options: chartDashboardLinesOptions });
        }

        if (chartDashboardLinesCon2.length) {
            chartDashboardLines2 = new Chart(chartDashboardLinesCon2, { type: 'line', data: chartDashboardLinesData2, options: chartDashboardLinesOptions2 });
        }
    }

    /*
     * Init Onboarding modal
     *
     */
    static initOnboardingModal() {
        // Show Onboarding Modal by default
        jQuery('#modal-onboarding').modal('show');

        // Re-init Slick Slider every time the modal is shown
        jQuery('#modal-onboarding').on('shown.bs.modal', e => {
            // Remove enabled class added by the helper to prevent re-init
            jQuery('js-slider', '#modal-onboarding').removeClass('js-slider-enabled');

            // Re-init Slick Slider
            mysupply.me.helpers('slick');
        });
    }

    /*
     * Init functionality
     *
     */
    static init() {
        this.initDashboardChartJS();
        this.initOnboardingModal();
    }
}

// Initialize when page loads
jQuery(() => { BePagesDashboard.init(); });
