import InfoPage, { Section } from "@/components/layout/InfoPage";

export const metadata = { title: "Investor Relations — hardvanta" };

export default function InvestorRelationsPage() {
  return (
    <InfoPage
      title="Investor Relations"
      intro="Information for current and prospective investors in Hardvanta Technologies LLP."
    >
      <Section heading="About the company">
        <p>
          Hardvanta Technologies LLP operates the hardvanta storefront for
          robotics, electronics, and DIY engineering products across India.
        </p>
      </Section>
      <Section heading="Investor enquiries">
        <p>
          For partnership or investment enquiries, please get in touch through our
          Contact Us page and our team will respond.
        </p>
      </Section>
    </InfoPage>
  );
}
