import Vue from 'vue';
import * as types from '../types';
export default {
    [types.LIST](state, data) {
        Vue.set(state, 'list', [...data]);
    }
};
