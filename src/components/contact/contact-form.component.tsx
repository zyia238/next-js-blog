import classes from './contact-form.module.css'

type Props = {}

const ContactForm = (props: Props) => {
  const sendMessageHandler = () => {}

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
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                    />
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor="content">Your Message</label>
                <textarea
                    id="content"
                    rows={5}
                    required
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