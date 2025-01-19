import React from "react";
import { reduxForm, Field } from 'redux-form'

const BillingCycleForm = (props) => {
    const { handleSubmit} = props;
    return (
        <form role="form" onSubmit={handleSubmit}> 
            <div className="box-body">
                <Field name='name' component='input'></Field>
                <Field name='month' component='input'></Field>
                <Field name='year' component='input'></Field>
            </div>
            <div className="box-footer">
                <button className="btn btn-primary" type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'billingCycleForm' })(BillingCycleForm);