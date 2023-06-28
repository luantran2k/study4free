import { useLocation } from "react-router-dom";

const Listening = () => {
  const { state } = useLocation()
  console.log(state)
  return <>Listening</>;
};
export default Listening;
