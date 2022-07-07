import React from 'react' 
import { useDispatch, useSelector } from 'react-redux';
import VisitingBranchBox from '../../../../components/VisitingBranchBox';

const VistingBank = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const visitingBanksData = [
        {
            "branch_name": "BHANDUP HDFC",
            "isVisiting": true
        },
        {
            "branch_name": "MULUND HDFC",
            "isVisiting": true
        },
        {
            "branch_name": "NAHUR HDFC",
            "isVisiting": true
        },
        {
            "branch_name": "KANJURMARG HDFC",
            "isVisiting": true
        },
        {
            "branch_name": "THANE HDFC",
            "isVisiting": true
        }
    ];

    return (
        <>
            <div>
                <div style={{ marginTop: 20, textAlign: "left", padding: "0px 20px" }}>Branch Visiting</div>
            </div>
            <div style={{ marginTop: 20 }}>
                {user && user.visit.map((value, index) => {
                    return <VisitingBranchBox branch_name={value.address} isVisiting={value.isVisiting} id={value.id} />
                })}
            </div>
        </>
    )
}

export default VistingBank