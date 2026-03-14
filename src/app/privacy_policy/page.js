export const metadata = {
  title: "Privacy Policy | TubeHelper Lite",
  description:
    "Read the Privacy Policy for TubeHelper Lite to understand how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="border-b border-gray-200 bg-gradient-to-b from-[#f5f3ff] to-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            This Privacy Policy explains how TubeHelper Lite collects, uses,
            stores, and protects your personal information when you use our
            website and services.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:px-10">
          <div className="prose prose-gray max-w-none">
            <h2>1. Introduction</h2>
            <p>
              TubeHelper Lite (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              values your privacy. This Privacy Policy describes how we collect,
              use, disclose, and safeguard your information when you visit our
              website, submit forms, request services, or otherwise interact
              with us.
            </p>
            <p>
              By using our website, you agree to the practices described in this
              Privacy Policy.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following categories of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> such as your name, email
                address, phone number, business name, and any details you submit
                through contact forms or consultation requests.
              </li>
              <li>
                <strong>Usage Data:</strong> such as browser type, IP address,
                device information, referral source, pages visited, and time
                spent on our website.
              </li>
              <li>
                <strong>Communication Data:</strong> any messages, inquiries, or
                support requests you send to us.
              </li>
            </ul>

            <h2>3. How We Collect Information</h2>
            <p>We collect information when you:</p>
            <ul>
              <li>fill out a form on our website</li>
              <li>book a demo, call, or consultation</li>
              <li>contact us by email, phone, or other channels</li>
              <li>browse or interact with our website</li>
            </ul>

            <h2>4. How We Use Your Information</h2>
            <p>We may use your information to:</p>
            <ul>
              <li>respond to inquiries and provide support</li>
              <li>schedule consultations or demos</li>
              <li>deliver and improve our services</li>
              <li>analyze website performance and user behavior</li>
              <li>send updates, service-related messages, or marketing communications</li>
              <li>maintain security and prevent fraud or misuse</li>
            </ul>

            <h2>5. Cookies and Tracking Technologies</h2>
            <p>
              We may use cookies, analytics tools, and similar technologies to
              enhance your browsing experience, understand website traffic, and
              improve our services. You can control cookies through your browser
              settings, though disabling them may affect certain site features.
            </p>

            <h2>6. Sharing of Information</h2>
            <p>We do not sell your personal information. We may share information with:</p>
            <ul>
              <li>trusted service providers who help us operate our website or business</li>
              <li>analytics, hosting, CRM, or communication platforms</li>
              <li>legal authorities when required by law or to protect our rights</li>
            </ul>

            <h2>7. Data Retention</h2>
            <p>
              We retain personal information only for as long as reasonably
              necessary to fulfill the purposes described in this policy,
              comply with legal obligations, resolve disputes, and enforce our
              agreements.
            </p>

            <h2>8. Data Security</h2>
            <p>
              We use reasonable technical and organizational measures to protect
              your information from unauthorized access, loss, misuse, or
              alteration. However, no method of transmission over the internet
              or electronic storage is completely secure.
            </p>

            <h2>9. Your Rights</h2>
            <p>
              Depending on your location, you may have rights regarding your
              personal information, including the right to request access,
              correction, deletion, or restriction of your data. To make such a
              request, contact us using the details provided below.
            </p>

            <h2>10. Third-Party Services and Links</h2>
            <p>
              Our website may contain links to third-party websites or use
              third-party tools. We are not responsible for the privacy
              practices of those third parties. We encourage you to review their
              privacy policies separately.
            </p>

            <h2>11. Children&apos;s Privacy</h2>
            <p>
              Our website and services are not directed to children under the
              age of 13, and we do not knowingly collect personal information
              from children.
            </p>

            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with a revised effective date.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how your
              information is handled, you can contact us through your website
              contact page or official business email.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}