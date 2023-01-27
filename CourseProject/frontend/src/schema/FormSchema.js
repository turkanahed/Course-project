import * as yup from "yup";

export const loginformSchema=yup.object().shape({
    name: yup.string().required("name is required"),
    content: yup.string().required("content is required"),
    description: yup.string().required("description is required"),
    category: yup.string().required("category is required"),
    url: yup.string().required("url is required"),
    authorUrl: yup.string().required("authorUrl is required"),
    price: yup
        .number("please should be a number")
        .required("price is required")
        .positive("please should be a positive")
        .integer("please should be a number")

})

