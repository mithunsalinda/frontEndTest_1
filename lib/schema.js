import * as yup from "yup";
export const emailFormSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    email2: yup.string().oneOf([yup.ref("email"), null], "Your Email dont match").required("Required"),
});

export const nameFormSchema = yup.object().shape({
    firstName: yup
        .string()
        .min(3, "Minumum 2 characters are required")
        .required("Required"),
    lastName: yup
        .string()
        .required("Required"),
});