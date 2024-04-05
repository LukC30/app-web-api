import style from './Select.module.css'

export default function Select({ text, name, value, options, handlerOnChange }) {
    return (

        <div className={style.form_control}>
            <label htmlFor={name}>{text}</label>

            <select name={name} id={name}>
                <option>Selecione uma categoria</option>
                {
                    options.map((option)=>(
                        <option value={option.id} key={option.id}>
                            {option.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}