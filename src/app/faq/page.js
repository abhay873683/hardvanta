import InfoPage, { Section } from "@/components/layout/InfoPage";

export const metadata = { title: "FAQ — hardvanta" };

const faqs = [
  ["How do I track my order?", "Once logged in, go to My Orders. Each order shows a live status tracker — Order Placed, Processing, Shipped, and Delivered."],
  ["What payment methods do you accept?", "We accept UPI, debit/credit cards, and netbanking via Razorpay, plus Cash on Delivery (COD)."],
  ["What are the delivery charges?", "Shipping is free on orders above ₹999. Below that, a flat ₹49 shipping fee applies."],
  ["Do you ship across India?", "Yes. We deliver to all serviceable PIN codes across India. Enter your PIN code at checkout to confirm delivery to your area."],
  ["Can I cancel or return an order?", "Orders can be cancelled before they are shipped. Returns are accepted within 7 days for defective or wrong items. See our Shipping & Refund policy."],
  ["Do you offer bulk / institutional pricing?", "Yes — schools, colleges, and makerspaces can get special pricing through Hardvanta B2B."],
];

export default function FAQPage() {
  return (
    <InfoPage title="Frequently Asked Questions" intro="Answers to the questions we hear most often.">
      {faqs.map(([q, a]) => (
        <Section key={q} heading={q}>
          <p>{a}</p>
        </Section>
      ))}
    </InfoPage>
  );
}
