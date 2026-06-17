import InfoPage, { Section } from "@/components/layout/InfoPage";

export const metadata = { title: "Careers — hardvanta" };

export default function CareersPage() {
  return (
    <InfoPage
      title="Careers at Hardvanta"
      intro="Help us build India's go-to store for robotics, electronics, and DIY engineering."
    >
      <Section heading="Why work with us">
        <p>
          We&apos;re a growing team passionate about makers, students, and
          builders. If you love electronics and want to help thousands of people
          bring their ideas to life, we&apos;d love to hear from you.
        </p>
      </Section>
      <Section heading="Open positions">
        <p>
          We don&apos;t have any open roles listed right now. To submit your
          resume for future openings, reach out through our Contact Us page.
        </p>
      </Section>
    </InfoPage>
  );
}
