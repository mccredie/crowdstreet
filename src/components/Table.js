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

// Convert the sequence to a set of subsequences that 'worm' around the the
// table from the end.
const worm = (seq, cols) => {
    const additionalCells = cols - seq.length % cols;
    const ammendedSeq = seq.slice();
    for(let i=0; i<additionalCells; ++i) {
        ammendedSeq.push(null)
    }
    const result = toSubseq(ammendedSeq, cols);
    result.forEach((subseq, index) => {
        if (index % 2 === 1) {
            subseq.reverse()
        }
    })
    result.reverse();
    return result;
}

const Row = ({values}) => (
    <tr>
    {
        values.map((val) => (<td>{val}</td>))
    }
    </tr>
);

export default ({n, x, m}) => {
    const rows = worm(genSequence(n, x, m), COL_COUNT);;
    return (
        <table className="Table">
        {
            rows.map((row) => (<Row values={row} />))
        }
        </table>
    );
};
