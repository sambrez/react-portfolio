function Contact () {
 
    
    return (
        <>
        <h2>Reach Out!</h2>
        <form>
            <label>NAME:</label>
            <input 
                type='text' 
                name='name'
                required />
            <label>EMAIL:</label>
            <input 
                type='email'
                name='email'
                required />
            <label>MESSAGE:</label>
            <textarea
                name='message'
                rows='3'
                required>
                </textarea>
            <br/>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default Contact;