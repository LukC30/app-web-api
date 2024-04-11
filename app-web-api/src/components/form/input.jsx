import style from './input.module.css'

export default function Input({type, id, text, name, placeholder, value, handlerOnChange}){

    return(
        
        <div className={style.form_control}>
            <label htmlFor={name}>{text}</label>
            
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={handlerOnChange}
            />
        </div>
    )
}