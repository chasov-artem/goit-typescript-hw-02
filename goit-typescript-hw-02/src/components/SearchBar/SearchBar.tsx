import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import { FormValues, SearchBarProps } from "../Types/types";

const SearchBar: React.FC<SearchBarProps> = ({ setQuery }) => {
  const initialValues: FormValues = { query: "" };
  const handleSubmit = (values: FormValues) => {
    if (!values.query.trim()) {
      toast.error("Please enter the search term!");
    } else {
      setQuery(values.query);
    }
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
