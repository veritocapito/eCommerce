import { useState } from 'react'

const Form = () => {

    const [user, setUser] = useState({
        nombre: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser( (prevForm) => ({ ...prevForm, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Gracias por registrarte ${user.nombre}.`) 
        setUser({
            nombre: '',
            email: '',
            password: ''
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={user.nombre} name="name" onChange={ handleChange} />
        <input type="email" value={user.email} name="name" onChange={ handleChange} />
        <input type="password" value={user.password} name="name" onChange={ handleChange} />
        <input type="submit" value="Ingresar" />
    </form>
  )
}

export default Form