import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import  '../styles/styles.css';

export const RegisterPage = () => {

    const {
        formData, 
        isValidEmail,
        onChange,
        resetForm,
        name,
        email,
        password1,
        password2
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });
    
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form noValidate onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={ (event) => onChange(event)}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>Email no es valido</span>}

                <input
                    type="password"
                    placeholder="Password"
                    name="password1"
                    value={password1}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres</span>}

                <input
                    type="password"
                    placeholder="Repeat Password2"
                    name="password2"
                    value={password2}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben de ser iguales</span>}

                <button type="submit">Create</button>
                <button type="button" onClick={resetForm} >Reset Form</button>
            </form>
        </div>
    )
}
