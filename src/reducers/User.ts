import { produce } from "immer";

const initialState = {
    users: [] as any[],
    isLoading: false,
    error: ""
} as { users: any[], isLoading: boolean, error: string }

export const userReducer = (state = initialState, action: any) => {
    return produce(state, drafState => {
        switch (action.type) {
            case "users/fetchUsers":
                drafState.users = action.payload;
                return;
            case "users/addUser":
                drafState.users.push(action.payload);
                return;
            case "users/deleteUser":
                // eslint-disable-next-line no-case-declarations
                const id = action.payload;
                drafState.users = state.users.filter((item: any) => item.id !== id);
                return;
            case "users/updateUser":
                // eslint-disable-next-line no-case-declarations
                const user = action.payload;
                drafState.users = state.users.map((item: any) =>
                    item.id === user.id ? user : item
                );
                return;
            default:
                return state;
        }
    })
};