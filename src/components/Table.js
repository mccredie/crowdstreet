import React from "react";

import "./Table.css";

const COL_COUNT = 5;



const genSequence = (n, x, m) => {
    const seq = [];
    let value = n;
    while (value <= m) {
        seq.push(value);
        value += x;
    }
    return seq;
}

const toSubseq = (seq, size) => {
    const subseq = [];
    for(let start=0; start <= seq.length; start += size) {
        subseq.push(seq.slice(start, start+size));
    }
    return subseq;
}

const Row = ({values}) => (
    <tr>
        { values.map((val) => (<td>{val}</td>)) }
    </tr>
)

export default ({n, x, m}) => {
    const rows = toSubseq(genSequence(n, x, m), COL_COUNT);;
    return (
        <table className="Table">
        {
            rows.map((row) => (<Row values={row} />))
        }
        </table>
    );
}
