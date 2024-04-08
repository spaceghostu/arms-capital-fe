import { createLazyFileRoute } from "@tanstack/react-router";
import { AgreementDetail } from "../components/AgreementDetail/AgreementDetail";

const AgreementDetailPage = () => {
  const { agreementNumber } = Route.useParams();
  return (
    <div>
      <AgreementDetail agreementNumber={agreementNumber} />
    </div>
  );
};

export const Route = createLazyFileRoute("/agreement/$agreementNumber")({
  component: AgreementDetailPage,
});
