import InfoPage, { Section } from "@/components/layout/InfoPage";

export const metadata = { title: "E-Waste Collection — hardvanta" };

export default function EWastePage() {
  return (
    <InfoPage
      title="E-Waste Collection"
      intro="Hardvanta is committed to responsible disposal of electronic waste in line with India's E-Waste (Management) Rules."
    >
      <Section heading="Why e-waste matters">
        <p>
          Electronic components contain materials that should not end up in
          landfills. Proper recycling recovers valuable materials and prevents
          environmental harm.
        </p>
      </Section>
      <Section heading="How to dispose of your old electronics">
        <p>
          You can send back end-of-life electronic products and components to our
          collection point. We ensure they are channelled to authorised recyclers.
        </p>
      </Section>
      <Section heading="Get in touch">
        <p>
          To arrange an e-waste pickup or drop-off, contact us via the Contact Us
          page with the details of the items you wish to dispose of.
        </p>
      </Section>
    </InfoPage>
  );
}
