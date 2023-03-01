import ImportSection from "@/components/importSection";
import { userAPI } from "APIs";
var cookie = require("cookie");

const ImportData = ({ integrations }: any) => {
  return (
    <>
      {" "}
      <ImportSection integrations={integrations} />
    </>
  );
};
export async function getServerSideProps({ req }: any) {
  let token = cookie?.parse(req.headers?.cookie);
  console.log(
    "🚀 ~ file: index.tsx:61 ~ getServerSideProps ~ req.headers",
    token.access_token
  );

  const { integrations } = await userAPI.getIntegrations(
    token?.access_token as string
  );
  return {
    props: {
      integrations,
    },
  };
}
export default ImportData;
