import InfoPage, { Section } from "@/components/layout/InfoPage";

export const metadata = { title: "CSR — hardvanta" };

export default function CSRPage() {
  return (
    <InfoPage
      title="Corporate Social Responsibility"
      intro="Our commitment to education, sustainability, and the maker community."
    >
      <Section heading="Empowering makers and students">
        <p>
          We support schools, colleges, and makerspaces with accessible components
          and special educational pricing to encourage hands-on learning in
          electronics and robotics.
        </p>
      </Section>
      <Section heading="Sustainability">
        <p>
          We promote responsible e-waste disposal and recycling. See our E-Waste
          Collection page to learn how we handle end-of-life electronics.
        </p>
      </Section>
    </InfoPage>
  );
}
