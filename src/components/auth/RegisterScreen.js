import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailAndPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {


    const dispatch = useDispatch();
    const {msgError}= useSelector(state => state.ui)

    const [ formValues, handleInputChange ] = useForm({
        name: 'adriana',
        email: 'adriana.b@gmail.com',
        password: '123456',
        password2: '123456',
    })

    const {name,email,password,password2}= formValues;

 
    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()){
            dispatch(startRegisterWithEmailAndPasswordName(email, password, name));
        }
    }

    const isFormValid = ()=>{
        if(name.trim().length === 0){
            dispatch(setError('name is required'))
            return false;
        }else if (!validator.isEmail(email)){
            dispatch(setError('email is no valid'))
            return false;
        }else if ( password !== password2 || password.length < 5){
            dispatch(setError('password should be at least 6 characters and match each other '))
            return false;
        }
        dispatch(removeError() );
        return true;
    }

    return (
        <div>
        <h3 className="auth__title">Register</h3>
        <form onSubmit={handleRegister}>
            {msgError &&(<div className="auth__alert-error">{msgError}</div>)}
            <label className="auth__label">Nombre </label>
            <input className="auth__input" type="text" placeholder="  Name" name="name" value={name} onChange={handleInputChange} />
            <label className="auth__label">Email </label>
            <input className="auth__input" type="text" placeholder="  Email" name="email" value={email} onChange={handleInputChange}  />
            <label className="auth__label">Password </label>
            <input className="auth__input" type="password" placeholder="  Password" name="password" value={password} onChange={handleInputChange}  />
            <label className="auth__label">Confirm Password </label>
            <input className="auth__input" type="password" placeholder="  Confirm Password" name="password2" value={password2} onChange={handleInputChange}  />
        
        <button type="submit" className="btn btn-primary btn-block mb-5"  >
            Register
        </button>
        <Link to="/auth/login" className="link mt-5">
            Already register?
        </Link>
        </form>
    </div>
    )
}
