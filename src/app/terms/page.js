import InfoPage, { Section } from "@/components/layout/InfoPage";

export const metadata = { title: "Terms of Service — hardvanta" };

export default function TermsPage() {
  return (
    <InfoPage
      title="Terms of Service"
      intro="By using the Hardvanta website and placing an order, you agree to the following terms."
    >
      <Section heading="Use of the website">
        <p>
          You agree to use this website for lawful purposes only and to provide
          accurate account and shipping information when placing orders.
        </p>
      </Section>
      <Section heading="Pricing and availability">
        <p>
          All prices are listed in Indian Rupees (₹) and are subject to change.
          Products are sold subject to availability; we reserve the right to
          cancel an order if an item is out of stock.
        </p>
      </Section>
      <Section heading="Orders and payment">
        <p>
          An order is confirmed once payment is received (for online payments) or
          once you place a Cash on Delivery order. We reserve the right to refuse
          or cancel any order.
        </p>
      </Section>
      <Section heading="Limitation of liability">
        <p>
          Hardvanta Technologies LLP is not liable for damages arising from
          misuse of products. Components are sold for prototyping and educational
          use.
        </p>
      </Section>
    </InfoPage>
  );
}
