
export const makeSaver = (key) => (values) => {
    window.localStorage.setItem(key, JSON.stringify(values));
}

export const retrieve = (key, values) => {
    const valueStr = window.localStorage.getItem(key);
    if (valueStr) {
        return JSON.parse(valueStr);
    }
    return values;
};

