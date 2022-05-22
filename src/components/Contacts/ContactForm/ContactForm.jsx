import { Component } from "react";
import {nanoid} from 'nanoid'
import s from './contactForm.module.css'

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    loginInputId = nanoid();

    handleSubmit = (e) => {
        const { name, number } = this.state
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name, number })
        }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { name, number } = this.state;
        const { handleSubmit, handleChange, loginInputId } = this;

        return (

            <form onSubmit={handleSubmit}>
                <div className={s.container}>
                    <label htmlFor={loginInputId} className={s.label}>Name</label>
                    <input
                        className={s.input}
                    id={loginInputId}
                    type="text"
                    value={name}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    onChange={handleChange}
                    required/>
                </div>
                <div className={s.container}>
                    <label htmlFor={loginInputId} className={s.label}>Number</label>
                    <input
                        className={s.input}
                    id={loginInputId}
                    type="tel"
                    value={number}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    onChange={handleChange}
                    required/>
                </div>
                <button type="submit" className={s.btn}>Add contact</button>
            </form>
        )
    }
}

export default ContactForm