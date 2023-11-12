import { useLocation } from "react-router-dom";

const DetailedOffer = (props) => {
  const location = useLocation();
  const data = location.state?.data;

  console.log(data, props);

  return <div>DetailedOffer</div>;
};

export default DetailedOffer;
