import React, { useState } from "react"
import ReactECharts from "echarts-for-react"

const data = [
    { name: "css", value: 500 },
    { name: "make", value: 270 },
    { name: "hack", value: 320 },
    { name: "c", value: 250 },
    { name: "rust", value: 100 },
]

export const Echarts = ({ colors }) => {
    const option = {
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
            // data: ["css", "make", "hack", "c", "rust"],
        },
        series: [
            {
                name: "Info",
                color: colors,
                type: "pie",
                radius: ["40%", "70%"],
                center: ["50%", "50%"],
                padAngle: 5,
                selectedMode: "multiple",
                data: data,
                selectedOffset: 15,
                // roseType: "radius",
                label: {
                    formatter: "{b}\n{d}%",
                },
                labelLine: {
                    // length: 30,
                    length2: 30,
                },
                itemStyle: {
                    borderRadius: 5,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)",
                    // label: {
                    //     show: false,
                    //     position: "center",
                    // },
                    emphasis: {
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

    const [count, setCount] = useState(0)

    function onChartReady(echarts) {
        console.log("echarts is ready", echarts)
    }

    function onChartClick(param, echarts) {
        console.log(param, echarts)
    }

    function onChartLegendselectchanged(param, echarts) {
        console.log(param, echarts)
    }

    return (
        <>
            <ReactECharts
                option={option}
                style={{ height: 400 }}
                onChartReady={onChartReady}
                onEvents={{
                    click: onChartClick,
                    legendselectchanged: onChartLegendselectchanged,
                }}
            />
        </>
    )
}
