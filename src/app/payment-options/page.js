import InfoPage, { Section } from "@/components/layout/InfoPage";

export const metadata = { title: "Payment Options — hardvanta" };

export default function PaymentOptionsPage() {
  return (
    <InfoPage
      title="Payment Options"
      intro="Choose the payment method that works best for you. All online payments are processed securely."
    >
      <Section heading="Online Payment (Razorpay)">
        <p>
          Pay instantly using UPI (Google Pay, PhonePe, Paytm), debit and credit
          cards, or netbanking. Payments are secured by Razorpay — we never store
          your card details.
        </p>
      </Section>
      <Section heading="Cash on Delivery (COD)">
        <p>
          Prefer to pay when your order arrives? Choose Cash on Delivery at
          checkout and pay the delivery agent in cash.
        </p>
      </Section>
      <Section heading="Is online payment safe?">
        <p>
          Yes. All transactions are encrypted and handled by Razorpay, a PCI-DSS
          compliant payment gateway. Hardvanta does not see or store your
          sensitive payment information.
        </p>
      </Section>
    </InfoPage>
  );
}
