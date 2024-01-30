class RequestService {
    request = async (url: string) => {
        try {
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error(
                    `Could not fetch ${url}, status: ${res.status}`
                );
            }
            const { results } = await res.json();
            return results;
        } catch (e) {
            throw new Error("error");
        }
    };
}

export default RequestService;
