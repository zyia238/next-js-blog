import { FormEvent, useEffect, useState } from 'react'
import classes from './contact-form.module.css'
import { Notification, NotificationStatus } from '@/components/ui/notification.component';

type Props = {}

const ContactForm = (props: Props) => {
  const [enteredEmail,seteEteredEmail] = useState('')
  const [enteredName,seteEteredName] = useState('')
  const [enteredMessage,seteEteredMessage] = useState('')
  const [requestStatus, setRequestStatus] = useState<NotificationStatus>();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
        const timer = setTimeout(() => {
            setRequestStatus(undefined);
        }, 3000);
        return () => clearTimeout(timer);
    }
}, [requestStatus]);
  
  const sendMessageHandler = async (e:FormEvent) => {
    e.preventDefault()
    setRequestStatus('pending')
    const res = await fetch('/api/contact',{
        method:'POST',
        body:JSON.stringify({
            email:enteredEmail,
            name:enteredName,
            message:enteredMessage
        },
        )
    })
    if(!res.ok){
        setRequestStatus('error')    
        throw new Error('something went wrong!')
    }
    const data = res.json()
    setRequestStatus('success')
    console.log(data)
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

        {requestStatus && <Notification title={requestStatus} message={requestStatus} status={requestStatus} />}
    </section>
);
}

export default ContactForm