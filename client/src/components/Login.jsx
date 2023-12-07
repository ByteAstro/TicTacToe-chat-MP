import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const loginHandler = () => { }

    return (<div className='flex flex-col m-5'>
        <label className='text-center font-medium text-white'
        >Login</label>
        <input className='m-3 p-3 border rounded border-black max-w-xs h-7'
            onChange={(e) => setUsername(e.target.value)}
            type="text" placeholder='Username..'
        />
        <input className='m-3 p-3 border rounded border-black max-w-xs h-7'
            onChange={(e) => setPassword({ ...user, password: e.target.value })}
            type="password" placeholder='Password..'
        />

        <button className='m-3 p-0 text-md border rounded border-black max-w-xs h-12 cursor-pointer'
            onClick={loginHandler}
        >Login</button>
    </div>
    )
}

export default Login