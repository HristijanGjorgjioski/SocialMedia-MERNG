const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
}

export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        email: '',
        confirmPassword: ''
    })
}
