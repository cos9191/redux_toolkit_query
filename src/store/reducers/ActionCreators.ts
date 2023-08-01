import { AppDispatch } from '../store'
import axios from 'axios'
import { IUser } from '../../models/IUser'
import { userSlice } from './UserSlice'

export const getUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersLoading)
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersLoadingSuccess(response.data))
    } catch (e) {

    }
}
