export default function debounce(func: (value: string) => void, delay: number) {
    let timeout: number | undefined;
    return function (...args) {
        const funcCall = () => {
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(funcCall, delay);
    };
}
