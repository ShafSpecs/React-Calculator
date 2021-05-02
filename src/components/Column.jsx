import React from 'react'

const Column = ({ text, onClick }) => {
    return (
        <td className='column' onClick={() => onClick({ text })}>
            {text}
        </td>
    )
}

export default Column