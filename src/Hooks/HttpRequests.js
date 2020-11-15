import React, { useEffect, useState } from 'react'
import axios from 'axios'

export function useAxiosGet(url) {
    const [req, setReq] = useState({
        loading: false,
        data: null,
        error: false
    });

    useEffect(() => {
        setReq({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setReq({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setReq({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url])

    return req
}

