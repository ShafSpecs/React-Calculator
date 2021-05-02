import React from 'react'
import Row from './Row'

const Keys = ({ onClick }) => {
    return (
        <div className='keys'>
            <table className='table'>
                <Row col1='7' col2='8' col3='9' col4='DEL' col5='AC' onClick={onClick}/>
                <Row col1='4' col2='5' col3='6' col4='*' col5='/' onClick={onClick}/>
                <Row col1='1' col2='2' col3='3' col4='-' col5='+' onClick={onClick}/>
                <Row col1='0' col2='.' col3='EXP' col4='=' col5={'ON/OFF'} onClick={onClick}/>
            </table>
        </div>
    )
}

export default Keys
