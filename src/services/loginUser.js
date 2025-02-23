import { requestServer } from './requestServer';

export const loginUser = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    if (data.email === '' || data.password === '') { 
        alert ('Enter a value in all fields')
        throw new Error ('Enter a value in all fields')
    }

    const result = await requestServer(`/user/login/`, 'POST', data)

    return result
}