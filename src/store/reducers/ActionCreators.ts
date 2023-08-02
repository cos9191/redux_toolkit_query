import axios from 'axios'
import { IUser } from '../../models/IUser'
import { createAsyncThunk } from '@reduxjs/toolkit'

const Url = 'https://jsonplaceholder.typicode.com/users'

export const getUsers = createAsyncThunk(
    'user/getAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>(Url)
            return response.data
        } catch(err: any) {
            return thunkAPI.rejectWithValue(`${err}`)
        }
    }
)
