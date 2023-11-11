import { useParams } from "react-router";

const DetailedOffer = () => {
  const parameter = useParams();
  console.log(parameter.id);

  return <div>DetailedOffer</div>;
};

export default DetailedOffer;
