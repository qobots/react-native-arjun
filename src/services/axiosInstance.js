import * as RootNavigation from '@app/navigations/RootNavigation.js';

import axios from 'axios';
import { store } from '@app/store';

export const axiosInstance = axios.create({
    baseURL: "https://localhost:3000/api/",
    headers: {
        Accept: 'application/json',
    },
    timeout: 100000
});

axiosInstance.interceptors.request.use(function (config) {
    // passing auth token in header
    // const state = store.getState();
    // let token = state.AUTH.token;
    // if (token) {
    //     config.headers = {
    //         ...config.headers,
    //         Authorization: `Bearer ${token}`
    //     }
    // }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response);
        }),
    (error) => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
        // can handle 403 response here
        return new Promise((resolve, reject) => {
            reject(error);
        });
    },
);

export default axiosInstance;