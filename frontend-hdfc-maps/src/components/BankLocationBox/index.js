import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Switch from "react-switch";
import { setVisit } from '../../redux/slices/userSlice';
const BankLocationBox = ({ branch_name, address, isVisiting, id }) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    return (
        <div style={{ display: "flex", border: "2px solid rgb(42 118 180)", justifyContent: "space-between", borderRadius: "5px", padding: "0px 10px", margin: "20px 15px" }}>
            <div style={{ padding: "0px 20px" }}>
                <h3 style={{ textAlign: "left" }}>{branch_name}</h3>
                <p style={{ textAlign: "left" }}>3{address}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Switch onChange={() => {
                    const dublicate=user.visit.find(o => o.id == id)
                    if(dublicate){
                        const unique=user.visit.filter((e) =>{ return e.id != id})
                        dispatch(setVisit(unique))
                    }else{
                        let data = [...user.visit]
                        data.push({
                            name: branch_name,
                            address: address,
                            id: id,
                        })
                        dispatch(setVisit(data))
                    }
                   
                    // console.log(first)
                }} checked={user.visit? user.visit.find(o => o.id == id) ? true:false:false} />
            </div>
        </div>
    )
}

export default BankLocationBox