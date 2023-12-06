import * as Yup from 'yup';
import { Formik } from 'formik';
import { StyledForm, StyledError } from './ContactForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()

    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()

    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ContactForm = ({ addInfo, name, number }) => {
  return (
    <Formik
      initialValues={{
        name: name || ' ',
        number: number || ' ',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        addInfo(values);
        actions.resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <StyledForm>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={values.name}
              onChange={handleChange}
            />
            <StyledError type="text" name="name" component="div" />
          </label>

          <label>
            <p>Number</p>
            <input
              type="tel"
              name="number"
              pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
              value={values.number}
              onChange={handleChange}
            />
            <StyledError type="tel" name="number" component="div" />
          </label>

          <button type="submit">Add contact</button>
        </StyledForm>
      )}
    </Formik>
  );
};
