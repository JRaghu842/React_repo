import { useRouteError } from "react-router-dom";

const Error = () => {
  let err = useRouteError();
  return (
    <div>
      <h1>-----------OOps!------------</h1>
      <h2>NO SUCH PAGE EXISTS ON THIS WEB APPLICATIONS!</h2>
      <h2>{err.data}</h2>
      <h3>
        Error status: {err.status} {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
