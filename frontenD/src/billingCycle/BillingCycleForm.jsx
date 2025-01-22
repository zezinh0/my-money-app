import React, { useEffect } from "react";
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init } from "./billingCycleAction";

import labelAndInput from "../common/form/labelAndInput";
import ItemList from "./ItemList";
import Summary from "./Summary";
import { useDispatch, useSelector } from "react-redux";

const BillingCycleForm = (props) => {
    const { handleSubmit, readOnly} = props;

    const selector = formValueSelector('billingCycleForm');
    const credits = useSelector(state => selector(state, 'credits')) || [];
    const debts = useSelector(state => selector(state, 'debts')) || [];
    
    const dispatch = useDispatch();

    const calculateSummary = () => {
        const sum = (t, v) => t + v;
        return {
            sumOfCredits: credits.map(c => +c.value || 0).reduce(sum, 0),
            sumOfDebts: debts.map(d => +d.value || 0).reduce(sum, 0),
        };
    };

    const { sumOfCredits, sumOfDebts } = calculateSummary();

    return (
        <form role="form" onSubmit={handleSubmit}> 
            <div className="box-body">
                <Field name='name' component={labelAndInput} label='Nome' cols='12 4' placeholder="Informe o nome" readOnly={readOnly}></Field>
                <Field name='month' component={labelAndInput} type='number' label='Mês' cols='12 4' placeholder="Informe o mês" readOnly={readOnly}></Field>
                <Field name='year' component={labelAndInput} type='number' label='Ano' cols='12 4' placeholder="Informe o ano" readOnly={readOnly}></Field>
                <Summary credit={sumOfCredits} debt={sumOfDebts} />
                <ItemList cols = '12 6' list={credits} readOnly={readOnly} field='credits' legend='Créditos'/>
                <ItemList cols = '12 6' list={debts} readOnly={readOnly} field='debts' legend='Débitos' showStatus={true}/>
            </div>
            <div className="box-footer">
                <button className={`btn btn-${props.submitClass}`} type='submit'>{props.submitLabel}</button>
                <button type="button" className="btn btn-default" onClick={() => dispatch(init())}>Cancelar</button>
            </div>
        </form>
    )

}


export default reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);