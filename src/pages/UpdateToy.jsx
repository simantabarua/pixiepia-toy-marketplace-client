import UpdateToyForm from "../components/updateToys/UpdateToyForm";
import usePageTitle from "../hooks/useTitle";

const UpdateToy = () => {
  usePageTitle("Update Toy");
  return (
    <div>
      <UpdateToyForm />
    </div>
  );
};

export default UpdateToy;
