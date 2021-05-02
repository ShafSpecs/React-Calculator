import React from 'react'
import Column from './Column'

const Row = ({ col1, col2, col3, col4, col5, onClick }) => {
    return (
        <tr className='row'>
           <Column text={col1} onClick={onClick}/>
           <Column text={col2} onClick={onClick}/>
           <Column text={col3} onClick={onClick}/> 
           <Column text={col4} onClick={onClick}/>
           <Column text={col5} onClick={onClick}/>
        </tr>
    )
}

Row.defaultPropTypes = {
    col5: '',
}

export default Row
