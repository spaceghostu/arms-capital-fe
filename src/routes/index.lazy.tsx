import { createLazyFileRoute } from "@tanstack/react-router";
import { AgreementList } from "../components/AgreementList/AgreementList";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <AgreementList />
    </div>
  );
}
