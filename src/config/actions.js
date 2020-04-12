
export const save = ({ values }) => ({
    type: "CONFIG/SAVE",
    values,
});

export const open = (table) => ({
    type: "CONFIG/OPEN",
    table,

});

export const close = () => ({
    type: "CONFIG/CLOSE"
});
