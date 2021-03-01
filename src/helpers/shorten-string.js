
const shorten = (string, limit, firstLetter) => {
    if (string.length >= limit) {
        if (firstLetter) {
            return string.substr(0,1);
        } else {
            return `${string.substr(0, limit)}...`;
        }
    }

    return string;
}

export default shorten;