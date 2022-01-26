import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {

        e.preventDefault();
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                    setEmail('');
                }
            })


    }

    return (
        <div>
            <h2 className="text-center my-5">Make Admin</h2>
            <form className="section-title mx-auto my-5" onSubmit={handleAdminSubmit}>

                <InputGroup className="mb-5">
                    <FormControl
                        placeholder="Email Address"
                        type="email"
                        onBlur={handleOnBlur}
                        name="email"
                    />
                    <Button className="btn btn-primary" type="submit" id="button-addon2">
                        Make Admin
                    </Button>
                </InputGroup>

                {success && <div className="alert alert-success" role="alert">
                    Made Admin Successfully!
                </div>}
            </form>

        </div>
    );
};

export default MakeAdmin;