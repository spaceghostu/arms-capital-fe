import { createLazyFileRoute } from "@tanstack/react-router";
import { AgreementList } from "../components/AgreementList/AgreementList";

export const Route = createLazyFileRoute("/agreements")({
  component: () => {
    return (
      <div>
        <AgreementList />
      </div>
    );
  },
});
