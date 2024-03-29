import React from "react"
import Plot from "react-plotly.js"

export const Plotly = ({ colors }) => {
    const data = [
        {
            values: [500, 270, 320, 250, 100],
            labels: ["css", "make", "hack", "c", "rust"],
            type: "pie",
            hole: 0.6,
        },
    ]
    const config = {
        displaylogo: false,
        modeBarButtonsToRemove: ["pan2d", "lasso2d"],
    }

    return <Plot data={data} layout={{ width: 400, height: 400, showlegend: true, colorway: colors }} config={config} />
}
