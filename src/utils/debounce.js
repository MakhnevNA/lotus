export default function debounce(func, delay) {
    let timeout;
    return function (...args) {
        const funcCall = () => {
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(funcCall, delay);
    };
}
