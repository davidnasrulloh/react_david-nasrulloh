// import { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';

import React from 'react';
import { gql, useQuery } from "@apollo/client";


const GetPengunjung = gql`
    query MyQuery {
        pengunjung_data_pengunjung {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`
// Home extends Component
const Home = () =>  {

    const {data, loading, error} = useQuery(GetPengunjung);

    // const hapusPengunjung = (id) => {
    //     this.setState({    
    //         data: [      
    //             ...data.filter(item => {        
    //                 return item.id !== id;      
    //             })    
    //         ]  
    //     });
    // };
    
    // tambahPengunjung = newUser => {
    //     const newData = {
    //         id: uuidv4(),
    //         ...newUser
    //     }; 
    //     this.setState({    
    //         data: [...this.state.data, newData]  
    //     });
    // };
    // console.log(data);
    return (
        <div>
            {/* // hapusPengunjung={this.hapusPengunjung} */}
            <Header/>
            <ListPassenger pengunjung={data}/>
            {/* <PassengerInput tambahPengunjung={this.tambahPengunjung}/> */}
        </div>
    )
    
}

export default Home;