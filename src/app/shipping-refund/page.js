import InfoPage, { Section } from "@/components/layout/InfoPage";

export const metadata = { title: "Shipping & Refund — hardvanta" };

export default function ShippingRefundPage() {
  return (
    <InfoPage
      title="Shipping & Refund Policy"
      intro="Everything you need to know about delivery, returns, and refunds."
    >
      <Section heading="Shipping charges">
        <p>
          Shipping is free on orders above ₹999. For orders below ₹999, a flat
          ₹49 shipping fee applies.
        </p>
      </Section>
      <Section heading="Delivery time">
        <p>
          Orders are usually dispatched within 1–2 business days and delivered
          within 3–7 business days, depending on your location.
        </p>
      </Section>
      <Section heading="Returns">
        <p>
          Defective, damaged, or incorrect items can be returned within 7 days of
          delivery. The product must be unused and in its original packaging.
        </p>
      </Section>
      <Section heading="Refunds">
        <p>
          Once a return is received and inspected, refunds are processed to your
          original payment method within 5–7 business days. COD orders are
          refunded via bank transfer or UPI.
        </p>
      </Section>
      <Section heading="Cancellations">
        <p>
          You can cancel an order any time before it is shipped. Once shipped, the
          return policy applies.
        </p>
      </Section>
    </InfoPage>
  );
}
