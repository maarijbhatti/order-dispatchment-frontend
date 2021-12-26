import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useLogin(): any {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false)

    function login(values) {
        let errors = [];

        Object.keys(values).forEach((key) => {
            if (!values[key] && key !== "showpass")
                errors.push({ field: key, message: `${key} is Empty` });
        });
        try {
            if (!errors[0]) {
                // const sss = fetch('http://34.71.36.69/login', {
                //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
                //     mode: 'cors', // no-cors, *cors, same-origin
                //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                //     body: JSON.stringify(values) // body data type must match "Content-Type" header
                // })
                // console.log('sakljdanskdn', sss)
                navigate('/dashboard')
            }

            return { errors };
        } catch (error) {

            return { errors };
        }
    }

    return [{ showPass, setShowPass }, login];
};

export default useLogin;
