import s from './contactList.module.css'

const ContactList = ({ contacts, deleteContact }) => {
    const elements = contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>{name}: {number}
        <button onClick={() => deleteContact(id)} className={s.btn}>Delete</button></li>
    ))
    return <ul className={s.list}>
        {elements}
    </ul>
}

export default ContactList