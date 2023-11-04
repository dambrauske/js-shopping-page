import React from 'react';
import {useForm} from "react-hook-form"
import {useDispatch} from "react-redux";
import {setCurrentUser, setToken} from "../features/userSlice.jsx";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm({
        mode: "onChange"
    })

    const onSubmit = async (data) => {

        const user = {
            email: data.email,
            password: data.password,
        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }

        try {
            const response = await fetch('http://localhost:5000/login', options)
            const data = await response.json()
            console.log(data.data)
            if (data.error === false) {
                dispatch(setCurrentUser(data.data.user))
                dispatch(setToken(data.data.token))
                navigate('/')
            } else console.log(data.message)

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="flex justify-center p-4">
            <form
                className="bg-slate-200 p-4 flex flex-col gap-2 w-72"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="text-center py-2 text-yellow-400">Login</div>
                <input type="email"
                       id="email"
                       placeholder="email"
                       {...register('email', {
                           validate: (value) => {
                               if (value?.length === 0) {
                                   return "Email cannot be blank"
                               }
                               if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                                   return "Email is not valid"
                               }
                           }
                       })}
                />
                <div className="h-2 text-center mb-2">
                    {errors.email &&
                        <div className="text-xs text-red-600">{errors.email.message}</div>
                    }
                </div>

                <input type="password"
                       id="password"
                       placeholder="password"
                       {...register('password', {
                           validate: (value) => {
                               if (value?.length < 6 || value?.length > 20) {
                                   return "Password should be between 6 and 20 characters"
                               }
                               if (value && !/[A-Z]/.test(value)) {
                                   return "Password should contain at least one uppercase letter"
                               }
                               if (value && !/\d/.test(value)) {
                                   return "Password should contain a number"
                               }
                           }
                       })}
                />
                <div className="h-2 text-center mb-2">
                    {errors.password &&
                        <div className="text-xs text-red-600">{errors.password.message}</div>
                    }
                </div>

                <button
                    className="bg-yellow-400 p-2 text-center uppercase text-xs tracking-wider cursor-pointer rounded ease-out duration-300"
                    type="submit"
                >Login
                </button>
                <div className="flex items-center gap-2 text-sm justify-center">
                    <div>Don't have an account?</div>
                    <div
                        className="text-blue-500 underline font-bold cursor-pointer">Register</div>
                </div>
            </form>

        </div>
    );
};

export default Login;
