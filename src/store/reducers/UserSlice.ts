import { IUser } from '../../models/IUser'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getUsers } from './ActionCreators'

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                    state.isLoading = false;
                    state.error = '';
                    state.users = action.payload;
            })
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUsers.rejected, (state, action: PayloadAction<unknown, string, any, any>) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

// .addCase(getUsers.rejected, (state, action: PayloadAction) => {
//     state.isLoading = false;
//     state.error = action.payload;
// });

// extraReducers: {
//
//     [getUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
//         state.isLoading = false;
//         state.error = '';
//         state.users = action.payload
//     },
//
//     [getUsers.pending.type]: (state) => {
//         state.isLoading = true;
//     },
//
//     [getUsers.rejected.type]: (state, action: PayloadAction<string>) => {
//         state.isLoading = false;
//         state.error = action.payload
//     },
// }

export default userSlice.reducer;
