import usePageTitle from "../hooks/useTitle";

const NotFound = () => {
  usePageTitle('404')
  return (
    <div>NotFound</div>
  );
};

export default NotFound;
