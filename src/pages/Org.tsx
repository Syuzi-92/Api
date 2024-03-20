import React, { FC } from "react"
import { Requests } from "../type";
import Table from 'react-bootstrap/Table';

interface PropsInterface {
    data: Requests
}
const Org: FC<PropsInterface> = ({ data }) => {
    console.log(data);

    return <>
        <h2 style={{ textAlign: "center", margin: "5", padding: "10px" }}>Information from "https://httpbin.org/get"</h2>
        <div style={{ padding: "20px", margin: "20px" }}>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Args</th>
                        <th>Header</th>
                        <th>Origin</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <ul>
                                <li><strong>Accept:</strong> {data.headers?.Accept}</li>
                                <li> <strong>"Accept-Encoding":</strong> {data.headers?.["Accept-Encoding"]}</li>
                                <li><strong>"Accept-Language":</strong>{data.headers?.["Accept-Language"]}</li>
                                <li><strong>"Host":</strong> {data.headers?.Host}</li>
                                <li><strong>"Sec-Ch-Ua": </strong>{data.headers?.["Sec-Ch-Ua"]}</li>
                                <li><strong>"Sec-Ch-Ua-Mobile":</strong> {data.headers?.["Sec-Ch-Ua-Mobile"]}</li>
                                <li><strong>"Sec-Ch-Ua-Platform":</strong>{data.headers?.["Sec-Ch-Ua-Platform"]}</li>
                                <li><strong>"Sec-Fetch-Dest":</strong>{data.headers?.["Sec-Fetch-Dest"]}</li>
                                <li><strong>"Sec-Fetch-Mode":</strong>{data.headers?.["Sec-Fetch-Mode"]}</li>
                                <li><strong>"Sec-Fetch-Site":</strong>{data.headers?.["Sec-Fetch-Site"]}</li>
                                <li><strong>"Sec-Fetch-User":</strong>{data.headers?.["Sec-Fetch-User"]}</li>
                                <li><strong>"Upgrade-Insecure-Requests":</strong>{data.headers?.["Upgrade-Insecure-Requests"]}</li>
                                <li><strong>"User-Agent":</strong>{data.headers?.["User-Agent"]}</li>
                                <li><strong>"X-Amzn-Trace-Id":</strong>{data.headers?.["X-Amzn-Trace-Id"]}</li>
                            </ul>
                        </td>
                        <td>{data.origin}</td>
                        <td>{data.url}</td>
                    </tr>
                </tbody>
            </Table >
        </div>
    </>
}
export default React.memo(Org)