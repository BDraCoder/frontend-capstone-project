const oneDayInMilliseconds = 86400000;

export function getYesterday() {
    const today = new Date();
    return new Date(today.getTime() - oneDayInMilliseconds)
}

export function isInThePast(date) {
    const today = new Date();
    const subtractTime = date.getTime()-today.getTime() + oneDayInMilliseconds;
    if (subtractTime < 0) return true;
    return false;
}