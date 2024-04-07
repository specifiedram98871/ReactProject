import React, { useEffect, useState } from 'react';
import { getServerData } from '../help/helper';

const ResultTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => setData(res));
    }, []);

    return (
        <div className="overflow-x-auto w-[700px] m-auto">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Result</h1>
            <table className="min-w-full bg-white border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Attempts</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Earn Points</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Result</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 && <tr><td colSpan="4" className="px-4 py-2 text-center">No data</td></tr>}
                    {data.map((v, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="px-4 py-2">{v.username}</td>
                            <td className="px-4 py-2">{v.attempts}</td>
                            <td className="px-4 py-2">{v.points}</td>
                            <td className="px-4 py-2">{v.achieved}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultTable;
