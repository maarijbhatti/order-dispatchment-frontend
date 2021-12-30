import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//axios.defaults.withCredentials = true
function useDashboard(): any {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false)

    useEffect(() => {
        axios.get('http://34.71.36.69',{withCredentials:true}).then((res2) => {
            console.log('erasdasdasrro', res2)
        }).catch((error) => {
            console.log('errro', error)
        })

    }, [])


}
export default useDashboard;
