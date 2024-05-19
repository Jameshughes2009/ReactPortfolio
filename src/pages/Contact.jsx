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
        
    }
}