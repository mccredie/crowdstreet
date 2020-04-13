import React from "react";

import "./Table.css";

const COL_COUNT = 5;


/* Generate a sequence from start to max in steps */
const genSequence = (start, step, max) => {
    if ( step <= 0 || max < start ) {
        return []
    }
    const seq = [];
    let value = start;
    while (value <= max) {
        seq.push(value);
        value += step;
    }
    return seq;
}

/* pad sequence with null values up to size */
const padArray = (seq, size) => {
    for (let i=seq.length; i < size; ++i) {
        seq[i] = null;
    }
    return seq
}

/* break `seq` into segments of `size` */
const segment = (seq, size) => {
    const segments = [];
    for(let start=0; start < seq.length; start += size) {
        segments.push(padArray(seq.slice(start, start+size), size));
    }
    return segments;
}

// Convert the sequence to a set of subsequences that 'worm' around the the
// table from the end.
const worm = (seq, direction, cols) => {
    const result = segment(seq, cols);
    let reverseMod = direction === "ltr-up" ? 1 : 0;

    result.forEach((subseq, index) => {
        if (index % 2 === reverseMod) {
            subseq.reverse()
        }
    })

    result.reverse();
    return result;
}

const Row = ({values}) => (
    <tr>
    {
        values.map((val, index) => (<td key={index}>{val}</td>))
    }
    </tr>
);

export default ({n, x, m, d}) => {
    const rows = worm(genSequence(n, x, m), d, COL_COUNT);;
    return (
        <table className="Table">
            <tbody>
            {
                rows.map((row, index) => (<Row key={index} values={row} />))
            }
            </tbody>
        </table>
    );
};
