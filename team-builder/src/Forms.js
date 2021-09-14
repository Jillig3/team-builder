import React from "react";

export default function Forms(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form containter' onSubmit={onSubmit}>
            <div className = 'form-group inputs'>
                <label>Username
                    <input
                        type='text'
                        name='username'
                        placeholder='User Name Goes Here'
                        onChange={onChange}
                        value={values.username}
                    />    
                </label>   

                <label>Email
                    <input
                        type='email'
                        name='email'
                        placeholder='Try Your Email'
                        onChange={onChange}
                        value={values.email}
                    />    
                </label>

                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>--Select your role--</option>
                        <option value='Student'>Student</option>
                        <option value='Superhero'>Super Hero</option>
                        <option value='Teacher'>Teacher</option>
                        <option value='Banana'>Banana</option>
                        <option value='idc'>I would prefer not to answer</option>
                    </select>                    
                </label> 
                
                <div className='submit'>
                    <button>Submit Your Answers</button>
                </div>
            </div> 
        </form>
    )
}