import React from 'react';
import ListItem from './ListItem';

const ListPassenger = (
    {
        pengunjung,
        hapusPengunjung
    }
) => {

    // console.log(pengunjung);
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {
                    pengunjung?.pengunjung_data_pengunjung.map((item) => (
                        <ListItem
                            key={item.id}
                            data={item}
                            hapusPengunjung={hapusPengunjung}
                        />
                    ))
                }
            </table>
        </div>
    )
  }

export default ListPassenger;