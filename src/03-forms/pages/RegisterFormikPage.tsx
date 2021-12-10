import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components/MyTextInput';
import  '../styles/styles.css';

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={ Yup.object({
                    name: Yup.string().min(2, 'Minimo 2 caracteres').max(15, 'Maximo 15 caracteres').required('El nombre es requerido'),
                    email: Yup.string().email('El email no es valido').required('El email es requerido'),
                    password1: Yup.string().min(6, 'Minimo 6 caracteres').required('La contraseña es requerida'),
                    password2: Yup.string().oneOf([Yup.ref('password1'), null], 'Las contraseñas no coinciden').required('La contraseña es requerida')
                })}
            >
                {
                    ({handleReset}) => (
                        <Form>
                            <MyTextInput label="Nombre" name="name" placeholder="Fernando" />
                            <MyTextInput label="Email" name="email" placeholder="jonh@google.com" />
                            <MyTextInput label="Password" name="password1" type="password" placeholder="******" />
                            <MyTextInput label="Confirmar Password" name="password2" type="password" placeholder="******" />
            
                            <button type="submit">Create</button>
                            <button type="button" onClick={handleReset}>Reset Form</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
