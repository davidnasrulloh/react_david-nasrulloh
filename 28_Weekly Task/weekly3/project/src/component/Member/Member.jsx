import React, { useEffect } from "react";
import { client } from "../../apis/api";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../features/dataSlice";
import { Image, Stack } from "react-bootstrap";
import "./Member.css";

const Card = ({ imgUrl, name, id }) => (
    <div className="card rounded-4 mx-3 mt-5 text-center" id={id}>
        <Stack className="p-3">
            <Image className="card-image mb-4 rounded-4" width={200} src={imgUrl} />
            <h5 className="fw-fw-semibold">{name}</h5>
        </Stack>
    </div>
)

const Member = () => {

    const users = useSelector((state) => state.data.users)
    const dispatch = useDispatch();

    const getAllUser = async () => {
        const response = await client.get("/");
        // console.log(response);
        return response.data;
    }

    useEffect(() => {
        getAllUser()
            .then((res) => {
                dispatch(setUsers(res.slice(0, 10)));
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    // console.log(users);
    // console.log(users);
    return (
        <div className="container mt-5" id="member">
            <div className="text-center">
                <h4 className="text-primary"><span className="fw-bold">Member</span> Me</h4>
                <h2 className="text-primary fw-bold">All member in this project</h2>
            </div>
            <div className="container d-flex flex-wrap justify-content-center">
                {
                    users.map((user) => (
                        // <p>{user.name}</p>
                        <Card key={user.id}
                            id={user.id}
                            imgUrl={user.avatar}
                            name={user.name} />
                    ))
                }
            </div>
        </div>
    )
}

export default Member;