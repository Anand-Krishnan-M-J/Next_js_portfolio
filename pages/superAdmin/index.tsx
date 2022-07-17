import React, { useEffect, useState } from 'react'
import useSWR from 'swr'


function LastSales(props: any) {
    const [data, setData] = useState<any>([])
    const { datas, error }: any = useSWR("https://next-js-project-ed582-default-rtdb.firebaseio.com/sales.json")
    useEffect(() => {
        setData(datas)
    }, [datas])
    if (error) {
        return <p>Failed to load</p>
    }
    if (data) {
        return <p>loading...</p>
    }
    return <>
        <p>Loaded</p>
        {console.log(datas)}
    </>

}


export default LastSales
