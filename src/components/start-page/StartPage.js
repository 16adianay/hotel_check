import React, {useState} from 'react';
import css from './StartPage.module.css';
import { useForm } from "react-hook-form";
import {Redirect, Route} from "react-router-dom";


const StartPage = () => {
    const { register, handleSubmit, formState: {errors} } = useForm({
        mode: 'onChange'
    });
    //register - это функция, которую нужно подключать к каждому из полей ввода в качестве ссылки
    //эта функция будет проверять значение, которое пользователь ввел в каждое поле и проверять его

    const onSubmit = (data) => {
        if (data) {

        }
    }
    return (
            <div className={css.page}>
                <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                    <h2 className={css.title}>Simple Hotel Check</h2>
                    <label htmlFor={'log'}>Логин</label>
                    <input
                        type='text'
                        name='email'
                        className={css.input}
                        id='log'
                        {...register('email',{
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Неправильный адрес электронной почты'
                            },
                        })}
                        style={{borderColor: errors.email && 'red'}}
                    />
                    {errors.email && <p style={{color: 'red', marginTop: '170px', fontSize: '13px', position: 'absolute'}}>{errors.email.message}</p>}
                    <label htmlFor='password'>Пароль</label>
                    <input
                        type='text'
                        name='password'
                        className={css.input}
                        id='password'
                        {...register('password',{
                            required: true,
                            minLength: {
                                value: 8,
                                message: 'Пароль должен быть минимум 8 символов'
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9]+$/i,
                                message: 'Пароль не должен содержать кириллицу'
                            },
                        })}
                        style={{borderColor: errors.password && 'red'}}
                    />
                    {errors.password && <p style={{color: 'red', marginTop: '275px', fontSize: '13px', position: 'absolute'}}>{errors.password.message}</p>}
                    <button className={css.btn} type='submit'>Войти</button>
                </form>
                <div className={css.overlay}/>
            </div>
    );
}


export default StartPage;