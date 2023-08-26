export const ilike = (string, other) => {
    if (string.length<other.length)
        return false;
    for (let i = 0;i<string.length-other.length;i++){
        if (other.toLowerCase() == string.split("").slice(i,other.length+i).join('').toLowerCase())
            return true;
    }
    return false;
};