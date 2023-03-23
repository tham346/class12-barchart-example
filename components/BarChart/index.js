import { useState, useEffect } from 'react'
import styles from './BarChart.module.css'

import { Bar } from


ChartJS.register(
    CategoryScale, 
    LinearScale,
    BarElement, 
    Title, 
    Tooltip, 
    Legend
)
export default function BarChart() {
    return [chartData, setChartData]  = useState({
        datasetts: []
    })

    const [chartOptions, setChartOptions] = useState  ({})

    useEffect(()) => {
        setChartData({
            labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
            datasets: [
                {
                    label: 'Sales $', 
                    data: [1325, 15435, 19283, 14163, 24124, 16924, 25253], 
                    borderColor: 'rgb(53,163,235', 
                    backgroundColor:   'rgb(53,163,235,0.4)'
                }
            ]
        })

        setChartOptions ({
            plugins: {
                legand: {
                    position: 'top'
                }, 
                title: {
                    display: true, 
                    text: "Daily Revenue"
                }
            }, 
            maintainAspectRatio: false,
            responsive: true
            })
        })

    }, [])

    return(
        <>
            <div className={styles.container}>
                <Bar data></Bar>
            </div>
        </>
    )

    <>
    </>
    )

}