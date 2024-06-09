export interface IRecord {
    id:number;
    title: string;
    upvotes: number;
    date: string;
}

export interface IRecordState {
    records: IRecord[];
}

export interface IRecordContext {
    recordState: IRecordState;
    recordDispatch: React.Dispatch<any>;
}

export const ACTIONS = {
    ADD_RECORD: 'ADD_RECORD',
    REMOVE_RECORD: 'REMOVE_RECORD',
    UPDATE_RECORD:'UPDATE_RECORD'
}