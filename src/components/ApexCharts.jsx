import React from "react"
import Chart from "react-apexcharts"

export const ApexCharts = ({ colors }) => {
    const series = [500, 270, 320, 250, 100]
    const chartOptions = {
        labels: ["css", "make", "hack", "c", "rust"],
        colors: colors,
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.1,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
            },
        },
        plotOptions: {
            pie: {
                expandOnClick: true,
                donut: {
                    labels: {
                        show: true,
                        total: {
                            showAlways: false,
                            show: true,
                            label: "Всего",
                            fontSize: "22px",
                            fontWeight: 600,
                        },
                    },
                },
            },
        },
        states: {
            hover: {
                filter: {
                    type: "lighten",
                    value: 0.15,
                },
            },
            active: {
                allowMultipleDataPointsSelection: false,
                stroke: {
                    show: true,
                    width: 10,
                },
                filter: {
                    type: "darken",
                    value: 0.55,
                },
            },
        },
        chart: {
            events: {
                dataPointSelection: (event, chartContext, config) => {
                    console.log(config.w.config.labels[config.dataPointIndex])
                },
            },
        },
    }

    return <Chart type='donut' options={chartOptions} series={series} width='100%' />
}
