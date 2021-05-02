import React from 'react'
import Problem from './Problem'
import Solution from './Solution'

const Display = ({ text, solution, stat }) => {
    return (
        <div className={`display ${ stat ? 'on' : ''  }`}>
            {stat ? <Problem text={text}/> : ''}
            <Solution sol={solution}/>
        </div>
    )
}

export default Display
