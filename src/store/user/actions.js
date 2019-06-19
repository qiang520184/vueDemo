import * as types from '../types';
import Axios from 'axios';
export default {
    getApi({commit}) {
        Axios.get('https://v2.jinrishici.com/one.json')
        .then(res => {
            commit(types.LIST, res.data.data.origin.content);
        });
    }
};
