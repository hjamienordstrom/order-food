import classes from './Checkout.module.css'

const Checkout = props => {
    const confirmHandler = event =>{
        //ensures browser does not send http request right away
        event.preventDefault()
    }
    return <form>
        <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" />
        </div>
        <div className={classes.control}>
            <label htmlForm="street">Street</label>
            <input type="text" id="street" />
        </div>
        <div className={classes.control}>
            <label htmlForm="postal">Zip Code</label>
            <input type="text" id="postal" />
        </div>
        <div className={classes.control}>
            <label htmlForm="city">City</label>
            <input type="text" id="city" />
        </div>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button>Confirm</button>
    </form>
}

export default Checkout;