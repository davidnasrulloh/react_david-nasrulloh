import React from 'react';
import "./Home.css"
import PassengerUbah from "./PassengerUbah";

const ListItem = (
    {
        data,
        hapusPengunjung
    }
) => {
    return (
        <tr key={data.id}>
            <td>{data.nama}</td>
            <td>{data.umur}</td>
            <td>{data.jenis_kelamin}</td>
            <td className="removeBorder"><button onClick={() => hapusPengunjung(data.id)}>Hapus</button></td>
            <td className="removeBorder">
                <PassengerUbah data={data}/>
            </td>
        </tr>
    )
}

export default ListItem;