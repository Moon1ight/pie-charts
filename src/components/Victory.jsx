import React, { Component } from "react"
import { VictoryPie } from "victory"

const data = [
    { x: "css", y: 500 },
    { x: "make", y: 270 },
    { x: "hack", y: 320 },
    { x: "c", y: 250 },
    { x: "rust", y: 100 },
]

export const Victory = ({ colors }) => {
    return (
        <VictoryPie
            height={300}
            data={data}
            colorScale={colors}
            sortKey='y'
            sortOrder='y'
            innerRadius={60}
            radius={120}
            cornerRadius={5}
            animate
            padAngle={5}
            events={[
                {
                    target: "data",
                    eventHandlers: {
                        onMouseOver: () => {
                            return [
                                {
                                    target: "data",
                                    mutation: () => ({ style: { fill: "gold", width: 60 } }),
                                },
                                {
                                    target: "labels",
                                    mutation: () => ({ active: true }),
                                },
                            ]
                        },
                        onMouseOut: () => {
                            return [
                                {
                                    target: "data",
                                    mutation: () => {},
                                },
                                {
                                    target: "labels",
                                    mutation: () => ({ active: false }),
                                },
                            ]
                        },
                        onClick: () => {
                            return [
                                {
                                    target: "data",
                                    mutation: (props) => {
                                        console.log("index: " + props.index)
                                        return null
                                    },
                                },
                                {
                                    target: "labels",
                                    mutation: (props) => {
                                        console.log("text: " + props.text)
                                        return null
                                    },
                                },
                            ]
                        },
                    },
                },
            ]}
        />
    )
}
