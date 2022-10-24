import react, { useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react"
import "./Home.css"


const UpdatePengunjung = gql`
    mutation MyMutation($id: Int = 10, $jenis_kelamin: String = "", $nama: String = "", $umur: Int = 10) {
        update_pengunjung_data_pengunjung(where: {id: {_eq: $id}}, _set: {jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur}) {
        returning {
                id
                jenis_kelamin
                nama
                umur
            }
        }
    }
`;

const PassengerUbah = ({
    data
}) => {    
    const [updatePengunjung] = useMutation(UpdatePengunjung);
    const [editing, setEditing] = useState(true);

    const [state, setState] = useState({
        jenisKelamin: "",
        nama: "",
        umur: 0
    })

    useEffect(()=>{
        // setState(data)
        setState(data)
    },[editing])

    const handleChangeFormData = (label, newValue) => {
        // e.preventDefault();
        setState({
            ...state,
            [label]: newValue,
        })
        console.log(newValue);
    }

    const handleSubmit = async (ev) => {
        // console.log(data);
        ev.preventDefault();
        // const pengunjungLocation = data.id === +state.id;
        // if(pengunjungLocation >= 0){
            
        if (state.nama.trim() || state.umur || state.jenisKelamin) {
            await updatePengunjung({
                variables: {
                    id: state.id,
                    jenis_kelamin: state.jenisKelamin,
                    nama: state.nama,
                    umur: state.umur
                }
            })
            window.location.reload();
        } else {
            alert("Data masih ada yang kosong")
        }
    }

    const handleBukaInput = () => {
        setEditing(false);
    }

    const handleTutupInput = () => {
        setEditing(true);
    }

    let viewMode = {}
    let editMode = {}

    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    return (
        <div>
        <div onSubmit={handleSubmit} style={viewMode}>
            <p>Ubah Nama Anda</p>
            <input type="text" className="input-text" placeholder="Nama anda ..." value={state.nama} name="nama" onChange={(ev)=> handleChangeFormData("nama", ev.currentTarget.value)} />
            <p>Masukkan Umur Anda</p>
            <input type="number" className="input-text" placeholder="Umur anda ..." value={state.umur} name="umur" onChange={(ev)=> handleChangeFormData("umur", ev.currentTarget.value)} />
            <p>Masukkan Jenis Kelamin Anda</p>
            <select onChange={(ev)=> handleChangeFormData("jenisKelamin", ev.currentTarget.value)} name="jenisKelamin">
                <option value={data.jenis_kelamin} >
                    {data.jenis_kelamin}
                </option>
                <option value="Pria">Pria</option>
                <option value="Perempuan">Perempuan</option>
            </select>
            <p></p>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
                Tutup
            </button>
        </div>
        <button className="inputan" onClick={handleBukaInput} style={editMode}>
            Edit
        </button>
        </div>
    )
}

export default PassengerUbah;
