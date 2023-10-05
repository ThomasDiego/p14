export const DatePicker = ({label, name, value, onChange}) => {
    return (
            <input type="date" name={name} value={value} onChange={(e) => {onChange(e)}} placeholder={label}/>
    )
}