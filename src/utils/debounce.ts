// @ts-expect-error: чтобы типы не указывать

export default function debounce<T>(func, delay) {
    let timeout: number | undefined;
    return function (this: T, ...args: string[]) {
        const funcCall = () => {
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(funcCall, delay);
    };
}
