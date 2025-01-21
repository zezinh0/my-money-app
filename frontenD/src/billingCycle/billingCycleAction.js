import axios from 'axios'
import { toast } from 'react-toastify';
import { initialize, reset as resetForm } from 'redux-form';
import { showTabs, selecTab } from '../common/tab/tabActions';

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
        .then(response => {
            console.log('H1')
            console.log(response)
            return {
                type: 'BILLING_CYCLES_FETCHED',
                payload: response.data
            };
        })
        .catch(error => {
            console.log('H2')
            console.error('Error fetching summary:', error);
            return {
                type: 'BILLING_CYCLES_FETCH_FAILED', // Custom action for failed request
                payload: null  // Could set a message or null if no data
            };
        });

    return request
}


export function create(values) {

    return submit(values, 'post')
}

export function update(values) {

    return submit(values, 'put')
}

export function remove(values) {

    return submit(values, 'delete')
}

function submit (values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toast.success('Operação Realizada com Sucesso.')
                dispatch(init())
            })
            .catch(e => {
                console.log('hghghg')
                console.log(e.response)
                if (e.response) {
                    e.response.data.errors.forEach((error, index) => { toast.error(error, { toastId: `error-toast-${index}` }); });
                } else {
                    toast.error('Erro da Submissão!');
                }

            })
    }
}

export function showUpdate(billingCycle){
    return [
        showTabs('tabUpdate'),
        selecTab('tabUpdate'),
        initialize('billingCycleForm',billingCycle)
    ]
}

export function showDelete(billingCycle){
    return [
        showTabs('tabDelete'),
        selecTab('tabDelete'),
        initialize('billingCycleForm',billingCycle)
    ]
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selecTab('tabList'),
        getList(),
        initialize('billingCycleForm',INITIAL_VALUES)
    ]
}