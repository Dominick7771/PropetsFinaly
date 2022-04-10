export function sortObject(field) {
    return (a, b) => a[field] < b[field] ? 1 : -1;
}