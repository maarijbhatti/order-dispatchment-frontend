import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//axios.defaults.withCredentials = true
function useLogin(): any {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false)

    const login = async (values) => {
        let errors = [];

        Object.keys(values).forEach((key) => {
            if (!values[key] && key !== "showpass")
                errors.push({ field: key, message: `${key} is Empty` });
        });
        try {
            if (!errors[0]) {
                const res = await axios.post('http://34.71.36.69/login', { ...values, username: values.email }
                    // ,
                    //     {
                    //         headers: {
                    //             'Access-Control-Allow-Origin': '*',
                    //             'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    //         }
                    //     }
                )
                console.log('qq232q3erasdasdasrro', res)
                if (res.data.status) {
                    // const res2 = await axios.post('http://34.71.36.69', {})
                    // console.log('erasdasdasrro', res2)

                    navigate('/orders')
                }
                else
                    alert(res.data.message)
                //  navigate('/dashboard')
            }

            return { errors };
        } catch (error) {
            console.log('errro', error)
            return { errors };
        }
    }

    return [{ showPass, setShowPass }, login];
};

export default useLogin;
