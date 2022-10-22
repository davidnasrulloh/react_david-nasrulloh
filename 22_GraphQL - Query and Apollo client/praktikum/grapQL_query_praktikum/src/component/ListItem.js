import React from 'react';
import "./Home.css"

const ListItem = (
    {
        data,
        hapusPengunjung
    }
) => {
    return (
        <tr>
            <td>{data.nama}</td>
            <td>{data.umur}</td>
            <td>{data.jenis_kelamin}</td>
            <td className="removeBorder" onClick={() => hapusPengunjung(data.id)}><button>Hapus</button></td>
            {/*  */}
        </tr>
    )
}

export default ListItem;