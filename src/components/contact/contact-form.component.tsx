import { FormEvent, useState } from 'react'
import classes from './contact-form.module.css'

type Props = {}

const ContactForm = (props: Props) => {
  const [enteredEmail,seteEteredEmail] = useState('')
  const [enteredName,seteEteredName] = useState('')
  const [enteredMessage,seteEteredMessage] = useState('')
  const sendMessageHandler = (e:FormEvent) => {
    e.preventDefault()

    fetch('/api/contact',{
        method:'POST',
        body:JSON.stringify({
            email:enteredEmail,
            name:enteredName,
            message:enteredMessage
        },
        )
    }).then(res=>{
        return res.json()
    }).then(data => {
        console.log(data)
    })
  }

  return (
    <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={sendMessageHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={enteredEmail}
                        onChange={e => seteEteredEmail(e.target.value)}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={enteredName}
                        onChange={e => seteEteredName(e.target.value)}
                    />
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor="content">Your Message</label>
                <textarea
                    id="content"
                    rows={5}
                    required
                    value={enteredMessage}
                    onChange={e => seteEteredMessage(e.target.value)}
                />
            </div>

            <div className={classes.actions}>
                <button>Send Message</button>
            </div>
        </form>
    </section>
);
}

export default ContactForm