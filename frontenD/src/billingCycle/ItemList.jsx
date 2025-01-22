import React from "react";
import Grid from "../common/layout/Grid";
import Input from "../common/form/Input";
import If from "../common/operator/If";
import { arrayInsert, arrayRemove, Field } from "redux-form";
import { useDispatch } from "react-redux";


const ItemList = (props) => {
    const dispatch = useDispatch();

    function add(index, item = {}) {
        if (!props.readOnly) {
            dispatch(arrayInsert('billingCycleForm', props.field, index, item));
        }
    }

    function remove(index) {
        if (!props.readOnly && props.list.length > 1) {
            dispatch(arrayRemove('billingCycleForm', props.field, index))
        }
    }

    function renderRows() {
        const list = props.list || []
        console.log(list)
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`${props.field}[${index}].name`} component={Input} placeholder="Informe o nome" readOnly={props.readOnly} /></td>
                <td><Field name={`${props.field}[${index}].value`} component={Input} placeholder="Informe o valor" readOnly={props.readOnly} /></td>
                <If test={props.showStatus} >
                    <td><Field name={`${props.field}[${index}].status`} component={Input} placeholder="Informe o status" readOnly={props.readOnly} /></td>
                </If>
                <td>
                    <button type='button' className="btn btn-success" onClick={() => add(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type='button' className="btn btn-warning" onClick={() => add(index + 1, item)}>
                        <i className="fa fa-clone"></i>
                    </button>
                    <button type='button' className="btn btn-danger" onClick={() => remove(index)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        ))

    }

    return (
        <Grid cols={props.cols}>
            <fieldset>
                <legend>{props.legend}</legend>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <If test={props.showStatus} >
                                <th>Status</th>
                            </If>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </fieldset>
        </Grid>
    )
}

export default ItemList;