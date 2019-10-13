export const requiredField = value => {
    if (value) return undefined;
    return "Please enter a movie";
}