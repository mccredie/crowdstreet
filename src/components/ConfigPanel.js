import React from 'react';


export default ({visible, children}) => (
    <>
    {visible && children}
    </>
);

