import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Formik} from 'formik';
import { FormEl, Label, Input, Button, ErrorMessage } from "./Form.styled";
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().min(2).max(20).required(),
    number: yup.number().min(3).required(),
})

const initialValues = {
    name: '',
    number: '',
}

export const ContactForm = ({onSubmit}) =>{
        const handleSubmit = (values, actions) => {
            onSubmit({
                ...values,
                id: nanoid(7),
              });
       actions.resetForm();
    }
        return (
            <Formik 
            initialValues={initialValues}
            validationSchema = {schema}
            onSubmit={handleSubmit}>
            <FormEl>
                <Label>
                    Name
                    <Input
                    type="text"
                    name="name"
                    />
                    <ErrorMessage name="name" component="span" />
                </Label>
                <Label>
                    Number
                    <Input
                    type="tel"
                    name="number"
                    />
                    <ErrorMessage name="number" component="span" />
                </Label>
                <Button type='submit'>Add contact</Button>
            </FormEl>
            </Formik>
        )
      }

      ContactForm.propTypes ={
        onSubmit: PropTypes.func.isRequired,
      }

