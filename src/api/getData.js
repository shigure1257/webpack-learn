import axios from "axios";

const getData = (url,options) => {
    return axios.get(url,{
        timeoutTime:30000,
        ...options
    }).then(response => {
        if (response.data.code !== 200) throw new Error(`出错了:${response.code}`);
        return response.data.data;
    }).catch(err=>{
        console.log(err);
    });
};
export {getData};