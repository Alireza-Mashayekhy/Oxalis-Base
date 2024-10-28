export interface Event {
    id?: string;
    counterId: string;
    counter_name: string;
    type: 'increment' | 'decrement';
    user?: string;
    datetime: string;
    user_name?: string;
}
