import React from "react";
import styles from "./FormsControl.module.css";
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";

const FormControl = ({input, meta, child, element, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            <div>
                { hasError && <span>{meta.error}</span> }
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
/*    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
            <textarea {...input} {...props}/>
            </div>
            <div>
                { hasError && <span>{meta.error}</span> }
            </div>
        </div>
    )*/
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
/*    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            <div>
                { hasError && <span>{meta.error}</span> }
            </div>
        </div>
    )*/
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validators}
        {...props} /> {text}
    </div>
);

