// import { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';

import React from 'react';
import { gql, useSubscription, useMutation } from "@apollo/client";


// const GetPengunjung = gql`
//     query MyQuery {
//         pengunjung_data_pengunjung {
//             id
//             jenis_kelamin
//             nama
//             umur
//         }
//     }
// `

const SubscriptionArticles = gql`
    subscription MySubscription {
        pengunjung_data_pengunjung {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`;

const DeletePengunjung = gql`
    mutation MyMutation($id: Int!){
        delete_pengunjung_data_pengunjung_by_pk(id: $id){
            id
        }
    }
`

const Home = () =>  {
    // const {data, loading, error} = useQuery(GetPengunjung);
    const {data, loading, error} = useSubscription(SubscriptionArticles);
    const [deletePengunjung] = useMutation(DeletePengunjung, {
        refetchQueries: [SubscriptionArticles],
    });

    const hapusPengunjung = (idx) => {
        deletePengunjung(
            {
                variables: {id: idx},
            }
        );
        console.log(idx);
        window.location.reload();
    }

    // const hapusPengunjung = (id) => {
    //     this.setState({    
    //         data: [      
    //             ...data.filter(item => {        
    //                 return item.id !== id;      
    //             })    
    //         ]  
    //     });
    // };
    
    // const tambahPengunjung = newUser => {
    //     const newData = {
    //         id: uuidv4(),
    //         ...newUser
    //     }; 
    //     this.setState({    
    //         data: [...this.state.data, newData]  
    //     });
    // };

    // const handleSubmit = async(ev) => {
    //     ev.preventDefault();

    //     await insertPengunjung({
    //         variables: {
    //             objects: {
    //                 id: formData.id,
    //                 nama: formData.authorId,
    //                 umur: formData.title,
    //                 jenis_kelamin: formData.rating,
    //             }
    //         }
    //     })
    //     .then((res) => {
    //         setArticles(prevState => [...prevState, res.data.insert__onetomany_article.returning[0]])
    //     })

    // }

    return (
        <div>
            {/* // hapusPengunjung={this.hapusPengunjung} */}
            <Header/>
            <ListPassenger pengunjung={data} hapusPengunjung={hapusPengunjung}/>
            <PassengerInput />
        </div>
    )
    
}

export default Home;