import React, { useLayoutEffect, useRef } from "react"
import * as echarts from "echarts"

const data = [
    {
        name: "css",
        value: 500,
        child: [
            {
                value: 120,
                name: "First",
            },
            {
                value: 30,
                name: "Second",
            },
            {
                value: 100,
                name: "Third",
            },
            {
                value: 250,
                name: "Fourth",
            },
            {
                value: 250,
                name: "Fifth",
            },
        ],
    },
    {
        name: "make",
        value: 270,
        child: [
            {
                value: 100,
                name: "First",
            },
            {
                value: 170,
                name: "Second",
            },
        ],
    },
    {
        name: "hack",
        value: 320,
        child: [
            {
                value: 100,
                name: "First",
            },
        ],
    },
    {
        name: "c",
        value: 250,
        child: [
            {
                value: 100,
                name: "First",
            },
            {
                value: 170,
                name: "Second",
            },
            {
                value: 50,
                name: "Third",
            },
            {
                value: 200,
                name: "Fourth",
            },
        ],
    },
    {
        name: "rust",
        value: 100,
        child: [
            {
                value: 20,
                name: "First",
            },
            {
                value: 50,
                name: "Second",
            },
            {
                value: 20,
                name: "Third",
            },
        ],
    },
]

export const EchartsDrillDown = ({ colors }) => {
    const getOption = () => {
        return {
            title: {
                // text: "Заголовок",
                subtext: "Всего: ",
                x: "center",
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c}$ ({d}%)",
            },
            legend: {
                orient: "horizontal",
                bottom: "bottom",
            },
            series: [
                {
                    name: "Info",
                    color: colors,
                    type: "pie",
                    radius: ["40%", "70%"],
                    center: ["50%", "50%"],
                    padAngle: 5,
                    selectedMode: "single",
                    data: data,
                    selectedOffset: 0,
                    // roseType: "radius",
                    label: {
                        show: false,
                        formatter: "{b}\n{d}%",
                        position: "center",
                        emphasis: {
                            show: true,
                            fontSize: "20",
                            fontWeight: "bold",
                        },
                    },
                    itemStyle: {
                        borderRadius: 5,
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)",
                        emphasis: {
                            // focus: "self",
                            shadowBlur: 10,
                            shadowOffsetX: 10,
                            shadowColor: "rgba(0, 0, 0, 0.5)",
                        },
                    },
                    select: {
                        itemStyle: {
                            borderColor: "#636363",
                        },
                    },
                },
            ],
        }
    }

    const myChart = useRef(null)

    useLayoutEffect(() => {
        console.log("myChart.current", myChart.current)
        const chart = echarts.init(myChart.current, null, { renderer: "svg" })

        chart.setOption(getOption())
        chart.on("click", (params) => {
            if (params.data) {
                if (params.data.child) {
                    chart.setOption({
                        series: [
                            {
                                data: params.data.child,
                                selectedOffset: 10,
                            },
                        ],

                        graphic: [
                            {
                                type: "text",
                                right: "3%",
                                top: "3%",
                                style: {
                                    text: "Назад",
                                    fontSize: 16,
                                    fill: "#0088FE",
                                },

                                onclick: () => {
                                    chart.setOption(getOption())
                                },
                            },
                        ],
                    })
                }
            }
        })
        chart.setOption(getOption())
        return function cleanup() {
            chart.dispose()
        }
    }, [])

    return (
        <>
            <div id='donutChart' ref={myChart} style={{ height: 400, width: 400 }}></div>
        </>
    )
}
