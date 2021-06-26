export const required = (value) => {
    if (value) return undefined;
    return "field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length ${maxLength} symbols`;
    return undefined;
}

/*
export const maxLength30 = (value) => {
    if (value && value.length > 30) return "Max length 30 symbols";
    return undefined;
}*/
