import { Field, Form, Formik } from 'formik';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = async (searchText, { resetForm }) => {
    await onSubmit(searchText);
    resetForm();
  };
  return (
    <Formik initialValues={{ searchText: '' }} onSubmit={handleSubmit}>
      <Form>
        <Field
          name="searchText"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </Form>
    </Formik>
  );
};
