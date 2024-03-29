import React from "react"
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts"
import "./styles.css"

const data = [
    { name: "css", value: 500 },
    { name: "make", value: 270 },
    { name: "hack", value: 320 },
    { name: "c", value: 250 },
    { name: "rust", value: 100 },
]

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className='recharts-tooltip'>
                <h5>{payload[0].name}</h5>
                <div>Стоимость: {payload[0].value}$</div>
                <p>Какое-то описание.</p>
            </div>
        )
    }

    return null
}

export const Recharts = ({ colors }) => {
    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx='50%'
                cy='50%'
                innerRadius={80}
                outerRadius={150}
                paddingAngle={5}
                dataKey='value'
                startAngle={90}
                endAngle={-360}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} className='recharts-cell' cursor={"pointer"} />
                ))}
            </Pie>
            <Legend />
            <Tooltip content={<CustomTooltip />} />
        </PieChart>
    )
}
