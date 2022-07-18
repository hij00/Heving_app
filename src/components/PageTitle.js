import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  console.log(title);
  return (
    <Helmet>
      <title>Heving | {title}</title>
    </Helmet>
  );
};
