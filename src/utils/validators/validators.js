export const requiredField = (value) => {
    if (value){
        return undefined;
    }else {
        return "field is reqired";
    }
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength){
        return "Максимальная длинна сиволов " +maxLength;
    } else {
        return undefined;
    }
}