import React from "react"
import { ResponsivePie } from "@nivo/pie"

const data = [
    {
        id: "css",
        label: "css",
        value: 500,
    },
    {
        id: "make",
        label: "make",
        value: 270,
    },
    {
        id: "hack",
        label: "hack",
        value: 320,
    },
    {
        id: "c",
        label: "c",
        value: 250,
    },
    {
        id: "rust",
        label: "rust",
        value: 100,
    },
]

// Если не обернуть чарт в контейнер с заданными размерами, высота чарта будет увеличиваться без остановки.
export const Nivo = ({ colors }) => (
    <div style={{ width: 400, height: 400 }}>
        <ResponsivePie
            onClick={(e) => console.log(e)}
            sortByValue
            animate={true}
            data={data}
            colors={colors}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={5}
            cornerRadius={5}
            activeOuterRadiusOffset={20}
            borderWidth={2}
            borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor='#333333'
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
            }}
            defs={[
                {
                    id: "gradientC",
                    type: "linearGradient",
                    colors: [
                        { offset: 0, color: "#47a3fa" },
                        { offset: 100, color: "#002ae4" },
                    ],
                },
                {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            fill={[
                {
                    match: {
                        id: "css",
                    },
                    id: "gradientC",
                },
                {
                    match: {
                        id: "c",
                    },
                    id: "dots",
                },
                {
                    match: {
                        id: "go",
                    },
                    id: "dots",
                },
                {
                    match: {
                        id: "python",
                    },
                    id: "dots",
                },
                {
                    match: {
                        id: "scala",
                    },
                    id: "lines",
                },
                {
                    match: {
                        id: "lisp",
                    },
                    id: "lines",
                },
                {
                    match: {
                        id: "elixir",
                    },
                    id: "lines",
                },
                {
                    match: {
                        id: "javascript",
                    },
                    id: "lines",
                },
            ]}
            legends={[
                {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemTextColor: "#000",
                            },
                        },
                    ],
                },
            ]}
        />
    </div>
)
