import React from 'react'
import { ImCross } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { setVisit } from '../../redux/slices/userSlice';

const VisitingBranchBox = ({ isVisiting, branch_name,id }) => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row",alignItems:'center' }}>
        <h3 style={{ margin: "10px 20px", padding: "0px 20px", border: "3px solid rgb(42 118 180)", borderRadius: "5px", justifyContent: "space-between ",width:'60%' }}>{branch_name}</h3>
        <ImCross size={20} onClick={()=>{
           const unique=user.visit.filter((e) =>{ return e.id != id})
           dispatch(setVisit(unique))
        }}/>
      </div>
    </div>
  )
}

export default VisitingBranchBox