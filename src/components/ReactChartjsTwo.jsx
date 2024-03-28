import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { useRef } from "react"
import { Doughnut, getElementAtEvent } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

export const ReactChartjsTwo = ({ colors }) => {
    const chartRef = useRef()
    const data = {
        labels: ["css", "make", "hack", "c", "rust"],
        datasets: [
            {
                // label: "Custom label",
                data: [500, 270, 320, 250, 100],
                backgroundColor: colors,
                // borderColor: colors,
                // borderWidth: 1,
            },
        ],
    }

    const options = {
        plugins: {
            legend: {
                position: "bottom",
            },
        },
    }

    return <Doughnut ref={chartRef} data={data} options={options} onClick={(e) => console.log(getElementAtEvent(chartRef.current, e))} />
}
