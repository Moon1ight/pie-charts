import React from "react"
import { ApexCharts } from "./ApexCharts"
import { Echarts } from "./Echarts"
import { Nivo } from "./Nivo"
import { ReactChartjsTwo } from "./ReactChartjsTwo"
import { Recharts } from "./Recharts"
import { Victory } from "./Victory"
import { Plotly } from "./Plotly"

const COLORS = ["#0088FE", "#00C49F", "#FF8042", "#FFBB28", "#c342ff"]
// const COLORS = ["#0091E6", "#1763C2", "#0095EB", "#023B9F", "#005280"]

const ReactList = () => {
    const data = [
        {
            component: <Echarts colors={COLORS} />,
            title: "Echarts-for-react",
            installHref: "https://www.npmjs.com/package/echarts-for-react",
            librarySize: "7.93KB (2.82KB zipped)",
            techStack: "React",
            libraryCriteria: [
                { title: "Визуализация пай-чарт", value: true },
                { title: "Open-source", value: true },
                { title: "Дизайн в объемном стиле", value: true },
                { title: "Анимации / активный пай-чарт", value: true },
            ],
            adventages: [
                "Очень гибкая кастомизация",
                "Выглядит приятно даже до кастомизации",
                "Интерактивность диаграммы и легенды",
                "Небольшой размер библиотеки",
            ],
            disadventages: [],
        },
        {
            component: <Nivo colors={COLORS} />,
            title: "Nivo",
            installHref: "https://www.npmjs.com/package/@nivo/pie",
            librarySize: "201.61KB (68.52KB zipped)",
            techStack: "React",
            libraryCriteria: [
                { title: "Визуализация пай-чарт", value: true },
                { title: "Open-source", value: true },
                { title: "Дизайн в объемном стиле", value: false },
                { title: "Анимации / активный пай-чарт", value: true },
            ],
            adventages: [
                "Гибкая кастомизация",
                "Можно настроить дополнительные стили для полей (градиент, в точку и т.д.)",
                "Есть встроенная сортировка",
            ],
            disadventages: ["Некоторые сложности в настройке"],
        },
        {
            component: <ApexCharts colors={COLORS} />,
            title: "ApexCharts React",
            installHref: "https://www.npmjs.com/package/react-apexcharts",
            librarySize: "5.34KB (2.19KB zipped)",
            techStack: "React",
            libraryCriteria: [
                { title: "Визуализация пай-чарт", value: true },
                { title: "Open-source", value: true },
                { title: "Дизайн в объемном стиле", value: false },
                { title: "Анимации / активный пай-чарт", value: true },
            ],
            adventages: ["Есть возможность сделать сегменты градиентом", "Интерактивность легенды", "Вывод суммы значений в центре"],
            disadventages: ["Минусы"],
        },
        {
            component: <Recharts colors={COLORS} />,
            title: "Recharts",
            installHref: "https://recharts.org/en-US/guide/installation",
            librarySize: "367.97KB (102.03KB zipped)",
            techStack: "React",
            libraryCriteria: [
                { title: "Визуализация пай-чарт", value: true },
                { title: "Open-source", value: true },
                { title: "Дизайн в объемном стиле", value: false },
                { title: "Анимации / активный пай-чарт", value: false },
            ],
            adventages: ["Достаточно просто сделать кастомные подсказки"],
            disadventages: ["Кастомизация весьма ограничена, приходится задавать собственные стили"],
        },
        {
            component: <ReactChartjsTwo colors={COLORS} />,
            title: "React-Chartjs-2",
            installHref: "https://www.npmjs.com/package/react-chartjs-2",
            librarySize: "1.69KB (824B zipped)",
            techStack: "React",
            libraryCriteria: [
                { title: "Визуализация пай-чарт", value: true },
                { title: "Open-source", value: true },
                { title: "Дизайн в объемном стиле", value: false },
                { title: "Анимации / активный пай-чарт", value: false },
            ],
            adventages: ["Интерактивность легенды", "Плюсы"],
            disadventages: [
                "Кастомизация",
                "Неудобный формат данных",
                "Хоть и упрощает интеграцию Chart.js, может ограничить расширенную настройку. (для более сложных визуальных решений) ",
            ],
        },
        {
            component: <Victory colors={COLORS} />,
            title: "Victory",
            installHref: "https://www.npmjs.com/package/victory",
            librarySize: "171.84KB (57.53KB zipped)",
            techStack: "React",
            libraryCriteria: [
                { title: "Визуализация пай-чарт", value: true },
                { title: "Open-source", value: true },
                { title: "Дизайн в объемном стиле", value: false },
                { title: "Анимации / активный пай-чарт", value: false },
            ],
            adventages: ["Есть встроенная сортировка при указании «sortKey='y' sortOrder='y'>»"],
            disadventages: ["Ограниченная кастомизация", "Неудобный формат данных"],
        },
        {
            component: <Plotly colors={COLORS} />,
            title: "Plotly",
            installHref: "https://plotly.com/javascript/is-plotly-free/",
            librarySize: "8.95KB (3.19KB zipped)",
            techStack: "React",
            libraryCriteria: [
                { title: "Визуализация пай-чарт", value: true },
                { title: "Open-source", value: true },
                { title: "Дизайн в объемном стиле", value: false },
                { title: "Анимации / активный пай-чарт", value: false },
            ],
            adventages: ["Преимуществ замечено не было"],
            disadventages: ["Неудобный формат данных", "Ограниченная кастомизация"],
        },
    ]

    return (
        <>
            {data?.map((item, index) => (
                <div className='chart' key={item.title}>
                    <div className='chart-item'>{item.component}</div>
                    <div className='chart-info'>
                        <div className='chart-info-header'>
                            <div className='title'>
                                <h3>
                                    {index + 1}. {item.title}
                                </h3>
                                <span>{item.librarySize}</span>
                            </div>
                            <a className='chart-link' href={item.installHref} rel='noopener noreferrer' target='_blank'>
                                Установить
                            </a>
                        </div>
                        <div>
                            Технологический стэк:⠀<span style={{ fontWeight: "bold" }}>{item.techStack}</span>
                        </div>
                        <div className='chart-criteria'>
                            {item.libraryCriteria?.map((criterion, i) => (
                                <div className='chart-criterion' key={criterion.title}>
                                    <div>
                                        {i + 1}. {criterion.title}:{" "}
                                    </div>
                                    <span className={criterion.value ? "positive" : "negative"}>{criterion.value ? "Да" : "Нет"}</span>
                                </div>
                            ))}
                        </div>
                        <div className='chart-info-advantages'>
                            <h4>Преимущества</h4>
                            {item.adventages?.map((adv) => (
                                <div className='' key={adv}>
                                    + {adv}
                                </div>
                            ))}
                        </div>
                        <div className='chart-info-disadvantages'>
                            <h4>Недостатки</h4>
                            {item.disadventages?.map((adv) => (
                                <div className='' key={adv}>
                                    - {adv}
                                </div>
                            ))}
                            {!item.disadventages?.length > 0 && <div>Недостатков не обнаружено</div>}
                        </div>
                        <div className='github-link'>
                            <a className='chart-link' href='#' rel='noopener noreferrer' target='_blank'>
                                Ссылка на пример кода
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ReactList