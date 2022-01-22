import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ children, name, value, onChange, error }) => {
    const handleChange = () => {
        onChange({ name: name, value: !value });
    };
    const getInputClasses = () => {
        return "form-check-input " + (error ? "is-invalid" : "");
    };
    return (
        <div className="form-check mb-4">
            <input
                className={getInputClasses()}
                type="checkbox"
                id={name}
                checked={value}
                onChange={handleChange}
            />
            <label className="form-check-label is-invalid" htmlFor={name}>
                {children}
            </label>

            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

CheckBoxField.propTypes = {
    name: PropTypes.string,
    error: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    value: PropTypes.bool,
    onChange: PropTypes.func
};

export default CheckBoxField;
