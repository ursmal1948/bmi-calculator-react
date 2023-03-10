const Input = ({ value, title, onChangeFunction }) => (
    <input
        className="form__field"
        value={value}
        onChange={onChangeFunction}
        placeholder={title}
        min="0"
        type="number"
        required
        step="any"
    />
);

export default Input;