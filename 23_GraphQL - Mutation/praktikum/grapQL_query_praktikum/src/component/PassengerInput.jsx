import { gql, useMutation } from "@apollo/client";
import { useState } from "react"
import "./Home.css"


const InsertPengunjung = gql`
    mutation MyMutation($objects: [pengunjung_data_pengunjung_insert_input!] = {}) {
        insert_pengunjung_data_pengunjung(objects: $objects) {
            returning {
                id
                nama
                umur
                jenis_kelamin
            }
        }
    }
`;

const PassengerInput = () => {

  const [insertPengunjung] = useMutation(InsertPengunjung);

  const [state, setState] = useState({
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
    editing: true,
  })

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async(ev) => {
    ev.preventDefault();
    if (state.nama.trim() && state.umur && state.jenisKelamin) {
      await insertPengunjung({
          variables: {
              objects: {
                  id: state.id,
                  nama: state.nama,
                  umur: state.umur,
                  jenis_kelamin: state.jenisKelamin,
              }
          }
      })
      window.location.reload();
    } else {
      alert("Data masih ada yang kosong")
    }
  }

  const handleBukaInput = () => {
    setState({
      ...state,
      editing: false,
    })
  }

  const handleTutupInput = () => {
    setState({
      ...state,
      editing: true,
    })
  }

  let viewMode = {}
  let editMode = {}

  if (state.editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan Nama Anda</p>
        <input type="text" className="input-text" placeholder="Nama anda ..." value={state.nama} name="nama" onChange={onChange} />
        <p>Masukkan Umur Anda</p>
        <input type="number" className="input-text" placeholder="Umur anda ..." value={state.umur} name="umur" onChange={onChange} />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={onChange} name="jenisKelamin">
          <option value="Pria" selected>
            Pria
          </option>
          <option value="Wanita">Wanita</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Tutup
        </button>
      </div>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Masukkan Nama Pelanggan
      </button>
    </div>
  )
}

export default PassengerInput;
