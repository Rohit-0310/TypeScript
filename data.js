"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
// async function getUsers() {
const getUsers = async () => {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios_1.default.get('https://reqres.in/api/users?page=2', {
            headers: {
                Accept: 'application/json',
            },
        });
        console.log(JSON.stringify(data, undefined, 4));
        // 👇️ "response status is: 200"
        console.log('response status is: ', status);
        return data;
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        }
        else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
};
getUsers();
