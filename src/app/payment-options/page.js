import InfoPage, { Section } from "@/components/layout/InfoPage";

export const metadata = { title: "Payment Options — hardvanta" };

export default function PaymentOptionsPage() {
  return (
    <InfoPage
      title="Payment Options"
      intro="Choose the payment method that works best for you. All transactions on hardvanta are processed securely — your financial information is always protected."
    >
      <Section heading="Online Payment (Razorpay)">
        <p>
          Pay instantly and securely using our trusted payment partner, Razorpay.
          Online payments are the fastest way to confirm your order and get it
          shipped quickly.
        </p>
        <p>
          Razorpay is a PCI-DSS Level 1 compliant payment gateway, which means
          your payment data is handled to the highest security standards in the
          industry. Hardvanta never sees or stores your card details — all
          sensitive data is encrypted and managed entirely by Razorpay.
        </p>
      </Section>

      <Section heading="Supported Payment Methods">
        <p>We support a wide range of payment options to make checkout convenient for you:</p>
        <ul>
          <li>
            <strong>UPI</strong> — Google Pay, PhonePe, Paytm, BHIM, and all
            UPI-enabled apps
          </li>
          <li>
            <strong>Debit Cards</strong> — Visa, Mastercard, RuPay, and
            Maestro
          </li>
          <li>
            <strong>Credit Cards</strong> — Visa, Mastercard, and American
            Express
          </li>
          <li>
            <strong>Net Banking</strong> — All major Indian banks supported
          </li>
          <li>
            <strong>Mobile Wallets</strong> — Paytm Wallet, Amazon Pay, and
            more
          </li>
          <li>
            <strong>Cash on Delivery (COD)</strong> — Available in select
            locations
          </li>
        </ul>
      </Section>

      <Section heading="Cash on Delivery (COD)">
        <p>
          Prefer to pay when your order arrives? Select Cash on Delivery at
          checkout and pay the delivery agent in cash upon receipt of your
          package. No advance payment is required.
        </p>
        <p>
          Please keep the exact change ready to help our delivery partners
          serve you faster.
        </p>
      </Section>

      <Section heading="COD Availability">
        <p>
          Cash on Delivery is available in selected pin codes and locations
          across India. Availability may vary based on your delivery address
          and the items in your order.
        </p>
        <p>
          If COD is available for your location, it will appear as a payment
          option during checkout. If you don&apos;t see it, we recommend using
          one of our secure online payment methods.
        </p>
      </Section>

      <Section heading="Payment Security">
        <p>
          Your security is our top priority. Here is how we keep every
          transaction safe:
        </p>
        <ul>
          <li>
            <strong>SSL Encryption</strong> — All data transmitted between
            your browser and hardvanta is protected using 256-bit SSL (Secure
            Socket Layer) encryption.
          </li>
          <li>
            <strong>PCI-DSS Compliance</strong> — Payments are processed by
            Razorpay, a certified PCI-DSS Level 1 service provider — the
            highest level of compliance for payment security.
          </li>
          <li>
            <strong>No Card Storage</strong> — Hardvanta does not store your
            card number, CVV, or any sensitive payment details on our servers.
          </li>
          <li>
            <strong>3D Secure Authentication</strong> — Eligible card
            transactions are protected by an additional OTP-based
            authentication layer for extra peace of mind.
          </li>
        </ul>
      </Section>

      <Section heading="Is Online Payment Safe?">
        <p>
          Absolutely. All payments on hardvanta are encrypted end-to-end and
          processed through Razorpay&apos;s secure infrastructure. We follow
          industry best practices to ensure your financial information is never
          at risk.
        </p>
        <p>
          When you pay online, you are protected by Razorpay&apos;s fraud
          detection systems, your bank&apos;s own security protocols, and our
          SSL-secured checkout — all working together to keep your transaction
          safe.
        </p>
      </Section>

      <Section heading="Refunds & Processing Time">
        <p>
          If you are eligible for a refund, here is what to expect:
        </p>
        <ul>
          <li>
            <strong>Online Payments (UPI, Cards, Net Banking, Wallets)</strong>{" "}
            — Refunds are credited back to the original payment method within
            5–7 business days of approval.
          </li>
          <li>
            <strong>Cash on Delivery</strong> — Refunds for COD orders are
            processed as a bank transfer or UPI credit. Please provide your
            bank details when raising a return or refund request.
          </li>
        </ul>
        <p>
          Processing times may vary slightly depending on your bank or payment
          provider. If you do not see your refund after 7 business days, please
          contact our support team with your order details.
        </p>
      </Section>

      <Section heading="Payment Failure & Troubleshooting">
        <p>
          If your payment did not go through, here are a few things to check:
        </p>
        <ul>
          <li>Ensure your card or UPI details are entered correctly.</li>
          <li>
            Check that your card has sufficient balance or credit limit and is
            enabled for online transactions.
          </li>
          <li>
            Make sure your internet connection is stable during checkout.
          </li>
          <li>
            For UPI payments, confirm that your UPI PIN is correct and your
            linked bank account is active.
          </li>
          <li>
            If an amount was debited but your order was not confirmed, please
            wait 24 hours — most such amounts are automatically refunded by
            your bank. If not, contact us with your transaction reference
            number.
          </li>
        </ul>
        <p>
          Failed payment attempts are not charged. If you were charged for an
          unsuccessful order, reach out to our support team and we will resolve
          it promptly.
        </p>
      </Section>

      <Section heading="Need Help?">
        <p>
          Have a question about a payment, refund, or transaction? Our support
          team is here to help.
        </p>
        <ul>
          <li>
            <strong>Email:</strong> support@hardvanta.com
          </li>
          <li>
            <strong>Phone:</strong> +91-9170546395 (Mon–Sat, 10 AM – 6 PM IST)
          </li>
        </ul>
        <p>
          When contacting us about a payment issue, please have your order ID
          and transaction reference number ready so we can assist you as
          quickly as possible.
        </p>
      </Section>
    </InfoPage>
  );
}