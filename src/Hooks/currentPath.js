import { useHistory } from "react-router-dom";


/** Current path */
function useCurrentPath() {
 const histroy = useHistory();
  return histroy.pathname
}

export default useCurrentPath
