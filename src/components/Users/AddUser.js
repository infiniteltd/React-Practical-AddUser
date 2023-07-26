import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';


function AddUser(props) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserSubmitHandler = function (e) {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty fields)',
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age ( age > 0)',
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const changeUsernameHandler = function (e) {
        setEnteredUsername(e.target.value);
    };

    const changeAgeHandler = function (e) {
        setEnteredAge(e.target.value);
    };

    const errorClearHandler = function () {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onClearError={errorClearHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserSubmitHandler} >
                    <label htmlFor='username'>Username</label>
                    <input id='username' autoFocus type='text' onChange={changeUsernameHandler} value={enteredUsername} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' onChange={changeAgeHandler} value={enteredAge} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;
