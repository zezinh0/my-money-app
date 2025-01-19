import axios from 'axios'
import {  toast } from 'react-toastify';
const BASE_URL = 'http://localhost:3003/api'

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


export function create(values){
    axios.post(`${BASE_URL}/billingCycles`, values)
    .then(resp => {
        toast.success('Operação Realizada com Sucesso.')
    })
    .catch(e=> {
        console.log('hghghg')
        console.log(e.response)
        e.response.data.errors.forEach((error, index) => {
            toast.error(error, {
                toastId: `error-toast-${index}`, // Ensuring uniqueness
            });
        });
    })
    return {
        type: 'TEMP'
    }
}