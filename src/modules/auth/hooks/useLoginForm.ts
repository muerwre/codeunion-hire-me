import { FormikConfig, useFormik } from "formik";
import { object, string } from "yup";

interface Values {
  email: string;
  password: string;
}

const initialValues: Values = {
  email: "",
  password: "",
};

const validationSchema = object({
  email: string(), // TODO: validate them
  password: string(), // TODO: validate them
});

export const useLoginForm = (onSubmit: FormikConfig<Values>["onSubmit"]) => {
  return useFormik<Values>({
    initialValues,
    onSubmit,
    validationSchema,
  });
};
