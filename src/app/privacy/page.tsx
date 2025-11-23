import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Solo Clash",
  description:
    "Read our privacy policy and understand how we protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main
      className="text-white overflow-hidden min-h-screen pt-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-2">Effective Date: 1 November 2025</p>
          <p className="text-gray-400">Last Updated: 1 November 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {/* 1. Definitions */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Definitions</h2>
            <p className="text-gray-300 mb-4">
              1.1 In this Privacy Policy (Policy):
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>
                <strong>Company</strong>, we, us, and our mean Solo Clash
                L.L.C-FZ, a limited liability company incorporated in the Meydan
                Free Zone, United Arab Emirates.
              </li>
              <li>
                <strong>Services</strong> means the website soloclash.com,
                proprietary trading challenges, evaluation programmes, funded
                trading accounts, and any related services offered by us.
              </li>
              <li>
                <strong>Personal Data</strong> means any information relating to
                an identified or identifiable natural person.
              </li>
              <li>
                <strong>Data Subject</strong> means an individual whose Personal
                Data is processed by us.
              </li>
              <li>
                <strong>Processing</strong> means any operation performed on
                Personal Data, including collection, storage, use, disclosure,
                or deletion.
              </li>
            </ul>
          </section>

          {/* 2. Scope and Application */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              2. Scope and Application
            </h2>
            <p className="text-gray-300 mb-2">
              2.1 This Policy sets out how the Company collects, uses, stores,
              transfers, and protects Personal Data of Data Subjects who access
              or use the Services.
            </p>
            <p className="text-gray-300 mb-2">
              2.2 By using our Services, you acknowledge and consent to the
              Processing of your Personal Data as described in this Policy.
            </p>
            <p className="text-gray-300">
              2.3 This Policy applies to all Personal Data processed by the
              Company, whether collected online via our Site or offline through
              other channels.
            </p>
          </section>

          {/* 3. Data Controller */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Data Controller</h2>
            <p className="text-gray-300 mb-4">
              3.1 The Company acts as the Data Controller for Personal Data
              collected through the Services.
            </p>
            <p className="text-gray-300 mb-2">3.2 Our contact details are:</p>
            <div className="bg-gray-900 p-4 rounded-lg text-gray-300 space-y-1 mb-4">
              <p className="font-semibold">Solo Clash L.L.C-FZ</p>
              <p>
                Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai,
                U.A.E.
              </p>
              <p>Email: hello@soloclash.com</p>
            </div>
          </section>

          {/* 4. Categories of Personal Data Collected */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              4. Categories of Personal Data Collected
            </h2>
            <p className="text-gray-300 mb-4">
              4.1 We may collect and process the following categories of
              Personal Data:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>
                <strong>Identification Data:</strong> name, date of birth,
                nationality, identification documents.
              </li>
              <li>
                <strong>Contact Data:</strong> email address, phone number,
                postal address.
              </li>
              <li>
                <strong>Account Data:</strong> username, password, profile
                preferences.
              </li>
              <li>
                <strong>Financial Data:</strong> payment details and billing
                information.
              </li>
              <li>
                <strong>Trading Data:</strong> performance metrics, challenge
                results, evaluation outcomes.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, device identifiers,
                browser data, and cookies.
              </li>
              <li>
                <strong>Communication Data:</strong> correspondence and support
                requests.
              </li>
            </ul>
            <p className="text-gray-300">
              4.2 We do not knowingly collect Personal Data from individuals
              under the age of 18. By creating an account, you confirm that you
              are at least 18 years of age.
            </p>
          </section>

          {/* 5. Methods of Collection */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              5. Methods of Collection
            </h2>
            <p className="text-gray-300 mb-4">5.1 We collect Personal Data:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>
                Directly from you when you register, submit identification, or
                communicate with us.
              </li>
              <li>
                Automatically through your use of our Site and Services,
                including through cookies and analytics tools.
              </li>
              <li>
                From third parties, including payment processors, analytics
                providers, and identity verification partners.
              </li>
            </ul>
          </section>

          {/* 6. Purposes of Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              6. Purposes of Processing
            </h2>
            <p className="text-gray-300 mb-4">
              6.1 We process Personal Data for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>To create, manage, and maintain user accounts.</li>
              <li>To process payments and verify user identity.</li>
              <li>
                To administer proprietary trading challenges and funded
                accounts.
              </li>
              <li>
                To comply with legal obligations, including AML and KYC
                requirements.
              </li>
              <li>To improve our Services and user experience.</li>
              <li>
                To communicate with users about their accounts and our Services.
              </li>
              <li>
                To detect, prevent, and address fraud, security issues, or
                misuse.
              </li>
            </ul>
          </section>

          {/* 7. Legal Basis for Processing */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              7. Legal Basis for Processing
            </h2>
            <p className="text-gray-300 mb-4">
              7.1 We process Personal Data based on the following legal bases:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>
                <strong>Contractual necessity</strong> – to perform obligations
                under the Terms & Conditions.
              </li>
              <li>
                <strong>Consent</strong> – where users have provided consent
                (e.g. for marketing).
              </li>
              <li>
                <strong>Legal obligation</strong> – to comply with applicable
                law.
              </li>
              <li>
                <strong>Legitimate interests</strong> – to operate and develop
                our Services and protect our business.
              </li>
            </ul>
          </section>

          {/* 8. Data Sharing and Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              8. Data Sharing and Transfers
            </h2>
            <p className="text-gray-300 mb-4">
              8.1 We may share Personal Data with:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Third-party service providers and processors.</li>
              <li>Regulatory authorities or law enforcement agencies.</li>
              <li>Professional advisers.</li>
            </ul>
            <p className="text-gray-300">
              8.2 Personal Data may be transferred outside the UAE, including to
              the European Union. Where such transfers occur, we ensure
              appropriate safeguards in accordance with applicable data
              protection laws.
            </p>
          </section>

          {/* 9. Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">9. Data Retention</h2>
            <p className="text-gray-300 mb-2">
              9.1 Personal Data will be retained only as long as necessary for
              the purposes described in this Policy or as required by law.
            </p>
            <p className="text-gray-300">
              9.2 Upon request, and subject to legal obligations, we will delete
              or anonymise Personal Data.
            </p>
          </section>

          {/* 10. Data Subject Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              10. Data Subject Rights
            </h2>
            <p className="text-gray-300 mb-4">
              10.1 Data Subjects have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Access their Personal Data.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of their data.</li>
              <li>Withdraw consent where applicable.</li>
              <li>Object to or restrict processing.</li>
              <li>Request data portability.</li>
            </ul>
            <p className="text-gray-300">
              10.2 Requests to exercise these rights should be submitted to
              hello@soloclash.com.
            </p>
          </section>

          {/* 11. Security Measures */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              11. Security Measures
            </h2>
            <p className="text-gray-300 mb-2">
              11.1 We implement appropriate technical and organisational
              measures to protect Personal Data against unauthorised access,
              loss, misuse, alteration, or destruction.
            </p>
            <p className="text-gray-300">
              11.2 While we strive to use commercially acceptable means to
              protect Personal Data, no transmission over the internet or
              electronic storage method is 100% secure.
            </p>
          </section>

          {/* 12. Third-Party Links */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              12. Third-Party Links
            </h2>
            <p className="text-gray-300">
              12.1 Our Services may contain links to third-party websites or
              services. We are not responsible for the privacy practices of such
              third parties, and users are encouraged to review their policies.
            </p>
          </section>

          {/* 13. Amendments */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">13. Amendments</h2>
            <p className="text-gray-300">
              13.1 We may amend this Policy from time to time. Updated versions
              will be posted on our Site with an updated Last Updated date.
              Continued use of the Services constitutes acceptance of the
              revised Policy.
            </p>
          </section>

          {/* 14. Governing Law and Jurisdiction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              14. Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-300 mb-2">
              14.1 This Policy and any non-contractual obligations arising out
              of or in connection with it shall be governed by and construed in
              accordance with the laws of the Dubai International Financial
              Centre (DIFC) and applicable UAE law.
            </p>
            <p className="text-gray-300">
              14.2 The courts of the DIFC shall have exclusive jurisdiction to
              settle any dispute arising out of or in connection with this
              Policy.
            </p>
          </section>

          {/* 15. Contact Details */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">15. Contact Details</h2>
            <p className="text-gray-300 mb-2">
              15.1 For any questions regarding this Policy or your Personal
              Data, please contact us at:
            </p>
            <p className="text-gray-300">📧 hello@soloclash.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
