export const ilike = (string, other) => {
    if (string.length<other.length)
        return false;
    let stringLower = string.toLowerCase();
    let stringLowerSplited = stringLower.split("")
    let otherLower = other.toLowerCase();
    let otherLenght = other.length
    for (let i = 0;i<string.length-other.length+1;i++){
        if (otherLower == stringLowerSplited.slice(i,otherLenght+i).join(''))
            return true;
    }
    return false;
};

export const inputIsNull = (string) => {
    return (string==null || string==undefined || string.split('').filter(v=>v != ' ').length == 0);
};