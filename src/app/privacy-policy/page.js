import InfoPage, { Section } from "@/components/layout/InfoPage";

export const metadata = { title: "Privacy Policy — hardvanta" };

export default function PrivacyPolicyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      intro="How Hardvanta Technologies LLP collects, uses, and protects your personal information."
    >
      <Section heading="Information we collect">
        <p>
          We collect information you provide when creating an account or placing
          an order — your name, email, phone number, and shipping address. We also
          collect order history to process and deliver your purchases.
        </p>
      </Section>
      <Section heading="How we use your information">
        <p>
          Your information is used solely to process orders, provide delivery,
          offer customer support, and (with your consent) send promotional offers.
          We do not sell your personal data to third parties.
        </p>
      </Section>
      <Section heading="Payment security">
        <p>
          Payments are processed by Razorpay. We do not store your card or UPI
          details on our servers.
        </p>
      </Section>
      <Section heading="Contact">
        <p>
          For any privacy-related questions, reach us at the contact details on
          our Contact Us page.
        </p>
      </Section>
    </InfoPage>
  );
}
