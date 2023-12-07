import React, { useState } from 'react'

const SignUp = () => {

    const [user, setUser] = useState(null);
    const signUpHandler = () => { }

    return (<div className='flex flex-col m-5'>
        <label className='text-center font-medium text-white'
        >Sign Up</label>
        <input className='m-3 p-3 border rounded border-black max-w-xs h-7'
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            type="text" placeholder='First Name..'
        />
        <input className='m-3 p-3 border rounded border-black max-w-xs h-7'
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            type="text" placeholder='Last Name..'
        />
        <input className='m-3 p-3 border rounded border-black max-w-xs h-7'
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            type="text" placeholder='Username..'
        />
        <input className='m-3 p-3 border rounded border-black max-w-xs h-7'
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password" placeholder='Password..'
        />
        <button className='m-3 p-0 border rounded border-black max-w-xs cursor-pointer  h-12'
            onClick={signUpHandler}
        >Sign Up</button>
    </div>
    )
}

export default SignUp