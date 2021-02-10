import React from 'react'
import "../../../node_modules/react-vis/dist/styles/style.css"
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis'

const Charts = () => {
    const data = [
        {x: 1, y: 4},
        {x: 2, y: 7},
        {x: 3, y: 2},
        {x: 4, y: 6},
        {x: 5, y: 1},
        {x: 6, y: 9},
        {x: 7, y: 5},
        {x: 8, y: 8},
        {x: 9, y: 3},
    ]
        
    
    return (
        <div>
            <XYPlot height={300} width={300}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries data={data} color="red" />
                <LineSeries data={data} color="purple" />
                <LineSeries data={data} color="yellow" />
            </XYPlot>
        </div>
    )
}

export default Charts
