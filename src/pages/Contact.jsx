import React, {useState} from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    });

    const [validationErrors, setValidationErrors] = useState({
        name: false,
        email: false,
        message: false
    });

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleBlur = (e) => {
        const {name, value} = e.target;
        if (value.trim() === "") {
            setValidationErrors({
                ...validationErrors,
                [name]: true,
            });
        } else {
            setValidationErrors({
                ...validationErrors,
                [name]: false,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted", formData)
    };

    return (
        <div className="container contact-container">
            <h2 className="contact-me">Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name"> Name </label>
                    <input
                        type="text"
                        className={`form-control ${
                            validationErrors.name ? "is-invalid": ""
                        }`}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                    {validationErrors.email && (
                        <div className="invalid-feedback">You Must Enter an Valid Email </div>
                    )}
                </div>
                <div className="form-group">
                    
                </div>
            </form>
        </div>
    )
}