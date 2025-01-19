import React, { useEffect } from "react";

import { getList } from "./billingCycleAction";
import { useDispatch, useSelector } from "react-redux";

const BillingCycleList = (props) => {
    const dispatch = useDispatch()

    const list = useSelector(state => state.billingCycle)

    // Fetch data on component mount
    useEffect(() => {
        dispatch(getList());
    }, [dispatch]);

    function renderRows() {
        const billingList = list.list
        return billingList.map(element => (
            <tr key={element._id}>
                <td>{element.name}</td>
                <td>{element.month}</td>
                <td>{element.year}</td>
            </tr>
        ))
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}

export default BillingCycleList;