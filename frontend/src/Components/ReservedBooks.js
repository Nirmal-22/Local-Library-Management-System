import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'>Books On Hold</h>
            <table className='reservedbooks-table'>
                <tr>
                    <th>Name</th>
                    <th>Book</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>Nirmal</td>
                    <td>Rich Dad Poor Dad</td>
                    <td>12/11/2023</td>
                </tr>
                <tr>
                    <td>Sashank</td>
                    <td>The Subtle Art</td>
                    <td>10/11/2023</td>
                </tr>
                <tr>
                    <td>Tanishq</td>
                    <td>Wings Of Fire</td>
                    <td>15/11/2023</td>
                </tr>
                <tr>
                    <td>Akhil</td>
                    <td>The Secret</td>
                    <td>02/11/2023</td>
                </tr>
                <tr>
                    <td>Surya</td>
                    <td>Bad Guys</td>
                    <td>21/11/2023</td>
                </tr>
            </table>
        </div>
    )
}

export default ReservedBooks
