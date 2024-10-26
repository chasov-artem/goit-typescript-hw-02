import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";

const SearchBar = ({ setQuery }) => {
  const initialValues = { query: "" };
  const handleSubmit = (values) => {
    !values.query.trim()
      ? toast.error("Please enter the search term!")
      : setQuery(values.query);
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;
