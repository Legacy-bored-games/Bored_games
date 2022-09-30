import { post, get, patch, remove } from './request'

export const login = (data) => post('/user/login', data)
export const signUp = (data) => post('/user/signup', data)

export const getUsers = () => get('/user')
export const getUser = (id) => get(`/user/${id}`)
export const updateUser = (id, data) => patch(`/user/${id}`, data)
export const deleteUser = (id) => remove(`/user/${id}`)
