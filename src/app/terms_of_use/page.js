export const metadata = {
  title: "Terms of Use | TubeHelper Lite",
  description:
    "Read the Terms of Use for TubeHelper Lite to understand the rules, conditions, and limitations for using our website and services.",
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="border-b border-gray-200 bg-gradient-to-b from-[#f5f3ff] to-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-10">

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Terms of Use
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            These Terms of Use govern your access to and use of the TubeHelper
            Lite website and related services.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-14 sm:px-8 lg:px-10">
          <div className="prose prose-gray max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using this website, you agree to be bound by these
              Terms of Use and all applicable laws and regulations. If you do
              not agree with these terms, please do not use this website.
            </p>

            <h2>2. About the Website</h2>
            <p>
              TubeHelper Lite provides information about digital services,
              websites, automations, business growth solutions, and related
              offerings. Content on this website is provided for general
              informational and business inquiry purposes.
            </p>

            <h2>3. Permitted Use</h2>
            <p>You agree to use the website only for lawful purposes. You must not:</p>
            <ul>
              <li>use the website in any way that violates applicable laws</li>
              <li>attempt to gain unauthorized access to systems or data</li>
              <li>disrupt, damage, or interfere with the website or its security</li>
              <li>copy, scrape, or misuse website content without permission</li>
              <li>submit false, misleading, or harmful information</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, branding,
              logos, images, layouts, and other materials, is owned by or
              licensed to TubeHelper Lite unless otherwise stated. You may not
              reproduce, distribute, modify, or use our content without prior
              written permission.
            </p>

            <h2>5. No Guarantee of Results</h2>
            <p>
              While we may describe potential business, marketing, development,
              or automation outcomes, we do not guarantee any specific results,
              revenue, growth, or performance from using our services or
              website.
            </p>

            <h2>6. Third-Party Links</h2>
            <p>
              This website may include links to third-party websites, platforms,
              or tools. We provide these links for convenience only and do not
              control or endorse third-party content, services, or policies.
            </p>

            <h2>7. Disclaimer</h2>
            <p>
              This website and its content are provided on an &quot;as is&quot;
              and &quot;as available&quot; basis without warranties of any kind,
              whether express or implied. We do not warrant that the website
              will be uninterrupted, error-free, secure, or free of viruses or
              harmful components.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, TubeHelper Lite shall not
              be liable for any direct, indirect, incidental, consequential,
              special, or punitive damages arising out of or related to your use
              of, or inability to use, this website or its content.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless TubeHelper Lite and its
              owners, affiliates, team members, and service providers from any
              claims, liabilities, damages, losses, or expenses arising from
              your misuse of the website or violation of these Terms.
            </p>

            <h2>10. Changes to the Website or Terms</h2>
            <p>
              We may update, modify, suspend, or discontinue any part of this
              website at any time without prior notice. We may also revise these
              Terms of Use from time to time. Continued use of the website after
              changes are posted means you accept the revised terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and interpreted in
              accordance with the laws applicable in your operating
              jurisdiction, unless otherwise required by law.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Use, please contact
              us through your website contact page or official business email.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}