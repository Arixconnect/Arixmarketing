import { createFileRoute } from "@tanstack/react-router";
import type { ComponentType } from "react";
import { Route as RecruitmentRoute } from "./recruitment";

const RecruitmentComponent = RecruitmentRoute.options.component as ComponentType;

export const Route = createFileRoute("/recruitment-campagne")({
  component: RecruitmentCampaignPage,
  head: () => ({
    meta: [
      { title: "Recruitmentcampagne met resultaat | Arix Marketing" },
      {
        name: "description",
        content:
          "Bereik kandidaten met een professionele vacaturepagina, een Meta-campagne, minimaal 10.000 impressies en directe leadregistratie.",
      },
      {
        property: "og:title",
        content: "Recruitmentcampagne met resultaat | Arix Marketing",
      },
      {
        property: "og:description",
        content:
          "Een complete recruitmentcampagne voor één vacature, vanaf 10.000 gegarandeerde impressies.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://arixmarketing.nl/recruitment-campagne",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://arixmarketing.nl/recruitment-campagne",
      },
    ],
  }),
});

function RecruitmentCampaignPage() {
  return <RecruitmentComponent />;
}
