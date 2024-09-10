import styles from './Button.module.css'

//receive parameter for component reusability
const Button = ({isOutline, text, icon, ...rest}) => {

  return (
    //access property to assign button name desired
    //use curly braces inside jsx to run javascript
    <button 
    {...rest}
    className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button
