export interface IItemRequest {
    name: string;
    [key: string]: unknown;
}

export interface IAppState {
    data: IItemRequest[] | [];
    text: string;
    loading: boolean;
    error: boolean;
}
