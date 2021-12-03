import classes from './Input.module.css'

const Input = (props) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>

        //ensures all key value pairs are added as input
        <input {...props.input}/>
    </div>
}