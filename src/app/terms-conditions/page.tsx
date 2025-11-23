import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Solo Clash",
  description:
    "Read our Terms & Conditions and understand the rules and guidelines for using Solo Clash services.",
};

export default function TermsConditionsPage() {
  return (
    <main
      className="text-white overflow-hidden min-h-screen pt-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-400 mb-2">Effective Date: 1 November 2025</p>
          <p className="text-gray-400">Last Updated: 1 November 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          {/* 1. Definitions */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Definitions</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>1.1</strong> In these Terms &amp; Conditions
                (&ldquo;Terms&rdquo;):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>
                    &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
                    and &ldquo;our&rdquo;
                  </strong>{" "}
                  mean Solo Clash L.L.C-FZ, a limited liability company
                  incorporated in the Meydan Free Zone, Dubai, United Arab
                  Emirates.
                </li>
                <li>
                  <strong>&ldquo;Services&rdquo;</strong> means the website
                  soloclash.com, proprietary trading challenges, evaluation
                  programmes, funded trading accounts, and any related services
                  offered by the Company.
                </li>
                <li>
                  <strong>
                    &ldquo;User&rdquo;, &ldquo;you&rdquo;, and
                    &ldquo;your&rdquo;
                  </strong>{" "}
                  refer to any person accessing the Services.
                </li>
                <li>
                  <strong>&ldquo;Challenge&rdquo;</strong> means the trading
                  evaluation programme offered by the Company, as described in
                  Clause 5.
                </li>
                <li>
                  <strong>&ldquo;Rulebook&rdquo;</strong> means the document
                  published on the Company&rsquo;s website setting out the
                  specific trading rules and criteria applicable to
                  participation in the Challenge.
                </li>
              </ul>
            </div>
          </section>

          {/* 2. Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. Acceptance of Terms
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>2.1</strong> By creating an account, accessing the
                Services, or participating in any Challenge, you agree to be
                bound by these Terms.
              </p>
              <p>
                <strong>2.2</strong> If you do not agree to these Terms, you
                must not use the Services.
              </p>
            </div>
          </section>

          {/* 3. Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>3.1</strong> Participation in the Services is limited to
                individuals who:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Are at least 18 years of age.</li>
                <li>
                  Have the legal capacity to enter into binding contracts.
                </li>
                <li>
                  Are not subject to any legal or regulatory prohibition on
                  trading financial instruments.
                </li>
              </ul>
              <p>
                <strong>3.2</strong> By registering, you represent and warrant
                that you meet all eligibility requirements.
              </p>
            </div>
          </section>

          {/* 4. Account Registration */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Account Registration
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>4.1</strong> To access the Services, you must create an
                account and provide accurate, current, and complete information.
              </p>
              <p>
                <strong>4.2</strong> You must maintain the confidentiality of
                your login credentials and notify us immediately of any
                unauthorised use of your account.
              </p>
              <p>
                <strong>4.3</strong> The Company reserves the right to suspend
                or terminate accounts that provide false information or violate
                these Terms.
              </p>
            </div>
          </section>

          {/* 5. Nature of the Services */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. Nature of the Services
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>5.1</strong> The Services consist of a proprietary
                trading challenge structured as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Challenge Phase:</strong> Users pay a fee to
                  participate and trade a simulated account under specified
                  trading conditions.
                </li>
                <li>
                  <strong>Evaluation Phase:</strong> Users who meet the
                  performance criteria progress to an express evaluation phase.
                </li>
                <li>
                  <strong>Funded Account Phase:</strong> Users who successfully
                  complete the evaluation may be offered access to a funded
                  account provided by the Company.
                </li>
              </ul>
              <p>
                <strong>5.2</strong> The detailed trading rules, performance
                targets, and evaluation criteria are set out in the Rulebook,
                which is incorporated into these Terms by reference.
              </p>
            </div>
          </section>

          {/* 6. Fees and Payment */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Fees and Payment</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>6.1</strong> Users must pay a participation fee before
                commencing the Challenge.
              </p>
              <p>
                <strong>6.2</strong> All fees are non-refundable, except as
                required by applicable law.
              </p>
              <p>
                <strong>6.3</strong> Payments are processed through authorised
                third-party payment providers. By making a payment, you agree to
                comply with their terms and conditions.
              </p>
            </div>
          </section>

          {/* 7. Trading Rules */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Trading Rules</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>7.1</strong> Users must comply with all trading rules
                specified in the Rulebook.
              </p>
              <p>
                <strong>7.2</strong> Breaches of the Rulebook, including but not
                limited to exceeding drawdown limits, unauthorised trading
                strategies, or prohibited trading behaviour, may result in
                immediate termination of participation.
              </p>
              <p>
                <strong>7.3</strong> The Company reserves the right to modify
                trading rules at any time. Updates to the Rulebook will take
                effect upon publication on the Site.
              </p>
            </div>
          </section>

          {/* 8. Prohibited Conduct */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              8. Prohibited Conduct
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>8.1</strong> You must not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Use the Services for unlawful purposes.</li>
                <li>
                  Engage in manipulative, fraudulent, or abusive trading
                  practices.
                </li>
                <li>
                  Attempt to gain unauthorised access to the Services or related
                  systems.
                </li>
                <li>
                  Interfere with or disrupt the proper functioning of the Site
                  or Services.
                </li>
              </ul>
            </div>
          </section>

          {/* 9. Affiliate Program */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              9. Affiliate Program
            </h2>

            {/* 9.1 Programme Overview */}
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-semibold mb-2">9.1 Programme Overview</h3>
                <div className="space-y-2">
                  <p>
                    <strong>9.1.1</strong> The Company operates an affiliate
                    programme (the &ldquo;Affiliate Programme&rdquo;) through
                    which eligible users (&ldquo;Affiliates&rdquo;) may earn
                    commissions for referring new traders to the Company.
                  </p>
                  <p>
                    <strong>9.1.2</strong> The Affiliate Programme incorporates
                    multiple tiers, with corresponding commission rates,
                    discount codes, and benefits, as published by the Company
                    and updated from time to time. These tiers currently
                    include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Level 1 &ndash; Starter</li>
                    <li>Level 2</li>
                    <li>Level 3 &ndash; Pro</li>
                    <li>Level 4 &ndash; Elite</li>
                    <li>Level 5 &ndash; Inner Circle</li>
                    <li>Legends Club</li>
                  </ul>
                  <p>
                    <strong>9.1.3</strong> The criteria for each tier, including
                    referral requirements, commission percentages, bonuses, and
                    discount codes, are published on the Company&rsquo;s
                    website. The Company may amend, add, or remove tiers at its
                    sole discretion.
                  </p>
                </div>
              </div>

              {/* 9.2 Commission Structure and Payment */}
              <div>
                <h3 className="font-semibold mb-2">
                  9.2 Commission Structure and Payment
                </h3>
                <div className="space-y-2">
                  <p>
                    <strong>9.2.1</strong> Commission rates vary by Affiliate
                    tier and are calculated on paid challenge fees received from
                    referred traders, excluding chargebacks, refunds, taxes, or
                    processing costs.
                  </p>
                  <p>
                    <strong>9.2.2</strong> Commissions are paid monthly by bank
                    transfer, with no minimum payout threshold.
                  </p>
                  <p>
                    <strong>9.2.3</strong> All amounts are payable net of any
                    applicable taxes, currency conversion costs, or banking
                    fees, which shall be borne by the Affiliate.
                  </p>
                </div>
              </div>

              {/* 9.3 Prohibited Conduct */}
              <div>
                <h3 className="font-semibold mb-2">9.3 Prohibited Conduct</h3>
                <div className="space-y-2">
                  <p>
                    <strong>9.3.1</strong> Affiliates must not engage in any
                    activity that the Company, acting reasonably, considers to
                    be unethical, misleading, unlawful, or harmful to the
                    Company&rsquo;s reputation.
                  </p>
                  <p>
                    <strong>9.3.2</strong> Prohibited conduct includes, without
                    limitation:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Unsolicited or spam communications</li>
                    <li>
                      False, misleading, or unsubstantiated claims about the
                      Company or its Services
                    </li>
                    <li>
                      Bidding on, purchasing, or attempting to acquire search
                      engine keywords or paid advertising placements containing
                      the Company&rsquo;s name or trademarks
                    </li>
                    <li>
                      Misrepresentation of affiliation, endorsement, or
                      partnership status
                    </li>
                    <li>Fraudulent, abusive, or self-referral behaviour</li>
                    <li>
                      Creating or promoting content that misrepresents the
                      Company&rsquo;s offering, rules, or regulatory status
                    </li>
                    <li>
                      Any public content that places the Company in a negative,
                      defamatory, harmful, or derogatory light
                    </li>
                    <li>
                      Any conduct the Company reasonably deems misaligned with
                      the Solo Clash brand, values, or public image
                    </li>
                  </ul>
                </div>
              </div>

              {/* 9.4 Termination and Forfeiture */}
              <div>
                <h3 className="font-semibold mb-2">
                  9.4 Termination and Forfeiture
                </h3>
                <div className="space-y-2">
                  <p>
                    <strong>9.4.1</strong> The Company may suspend or terminate
                    an Affiliate&rsquo;s participation in the Affiliate
                    Programme at any time, with or without cause, including
                    where the Affiliate breaches these Terms or engages in
                    conduct described in Clause 9.3.
                  </p>
                  <p>
                    <strong>9.4.2</strong> Upon any breach, the Affiliate shall
                    forfeit all accrued and unpaid commissions, regardless of
                    when earned.
                  </p>
                  <p>
                    <strong>9.4.3</strong> Termination for cause shall be
                    immediate and without liability to the Company.
                  </p>
                </div>
              </div>

              {/* 9.5 Affiliate Compliance and KYC Requirements */}
              <div>
                <h3 className="font-semibold mb-2">
                  9.5 Affiliate Compliance and KYC Requirements
                </h3>
                <div className="space-y-2">
                  <p>
                    <strong>9.5.1</strong> Affiliates must complete identity
                    verification (&ldquo;KYC&rdquo;) before receiving any
                    commission payments.
                  </p>
                  <p>
                    <strong>9.5.2</strong> The Company uses Sumsub as its
                    subcontracted KYC provider.
                  </p>
                  <p>
                    <strong>9.5.3</strong> Affiliates acknowledge that:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>
                      Sumsub determines, at its sole discretion, the documents
                      and information required for verification
                    </li>
                    <li>
                      Such requirements are published on Sumsub&rsquo;s own
                      website
                    </li>
                    <li>
                      Failure to complete KYC satisfactorily may result in
                      suspension, termination, or non-payment of commissions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 10. KYC and AML Compliance */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              10. KYC and AML Compliance
            </h2>

            {/* 10.1 Mandatory KYC Verification */}
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-semibold mb-2">
                  10.1 Mandatory KYC Verification
                </h3>
                <div className="space-y-2">
                  <p>
                    <strong>10.1.1</strong> All users must complete a full Know
                    Your Customer (KYC) verification process before accessing
                    any trading environment, including simulated or demo
                    accounts. No trading activity of any kind may commence until
                    KYC has been successfully completed.
                  </p>
                  <p>
                    <strong>10.1.2</strong> The Company appoints Sumsub (Sum
                    &amp; Substance) as its third-party subcontractor to perform
                    identity verification, sanctions screening, and related
                    procedures.
                  </p>
                  <p>
                    <strong>10.1.3</strong> Users acknowledge and agree that:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>
                      Sumsub independently determines the documents and
                      information it requires
                    </li>
                    <li>
                      Sumsub&rsquo;s requirements are listed and maintained on
                      its own website
                    </li>
                    <li>
                      Sumsub may request any documents it deems necessary to
                      complete verification, including identity documents, proof
                      of address, liveness checks, PEP screening, and sanctions
                      screening
                    </li>
                  </ul>
                </div>
              </div>

              {/* 10.2 AML and Regulatory Compliance */}
              <div>
                <h3 className="font-semibold mb-2">
                  10.2 AML and Regulatory Compliance
                </h3>
                <div className="space-y-2">
                  <p>
                    <strong>10.2.1</strong> The Company is committed to
                    complying with all applicable Anti-Money Laundering (AML)
                    and Counter-Terrorist Financing (CFT) laws and regulations,
                    including:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>
                      <strong>United Arab Emirates:</strong> Federal Decree-Law
                      No. 20/2018, Cabinet Decision No. 10/2019, and related
                      AML/CFT guidance applicable to entities operating within
                      the UAE and Free Zones
                    </li>
                    <li>
                      <strong>European Union:</strong> Directive (EU) 2015/849
                      of the European Parliament and of the Council (AMLD), to
                      the extent applicable
                    </li>
                    <li>
                      <strong>United States:</strong> the Bank Secrecy Act
                      (BSA), the USA PATRIOT Act, and other applicable federal
                      AML/CFT obligations
                    </li>
                  </ul>
                  <p>
                    <strong>10.2.2</strong> The Company conducts ongoing
                    monitoring for AML purposes, including screening for
                    sanctions, politically exposed persons (PEPs), suspicious
                    activity, and transaction anomalies.
                  </p>
                </div>
              </div>

              {/* 10.3 Refusal, Suspension, and Termination Rights */}
              <div>
                <h3 className="font-semibold mb-2">
                  10.3 Refusal, Suspension, and Termination Rights
                </h3>
                <div className="space-y-2">
                  <p>
                    <strong>10.3.1</strong> The Company may, at its absolute
                    discretion:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Refuse to onboard any user</li>
                    <li>Suspend or restrict access to any account</li>
                    <li>Freeze funds, commissions, or payouts</li>
                    <li>Postpone or withhold withdrawals</li>
                    <li>Terminate any account</li>
                  </ul>
                  <p>
                    where the Company determines that KYC has not been completed
                    satisfactorily or that AML/CFT concerns exist.
                  </p>
                  <p>
                    <strong>10.3.2</strong> Failure to comply with any KYC or
                    AML requirement constitutes immediate grounds for
                    termination without notice.
                  </p>
                </div>
              </div>

              {/* 10.4 Data Sharing for Compliance Purposes */}
              <div>
                <h3 className="font-semibold mb-2">
                  10.4 Data Sharing for Compliance Purposes
                </h3>
                <div className="space-y-2">
                  <p>
                    <strong>10.4.1</strong> The Company shares user information
                    with Sumsub solely for the purposes of fulfilling KYC, AML,
                    CFT, and sanctions screening obligations.
                  </p>
                  <p>
                    <strong>10.4.2</strong> Users acknowledge that:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>
                      Personal data may be shared with or processed by foreign
                      regulators, supervisory authorities, or law enforcement
                      agencies where required by law
                    </li>
                    <li>
                      Data may be transferred internationally to jurisdictions
                      with differing data protection standards
                    </li>
                    <li>
                      Such transfers are necessary to comply with legal
                      obligations and regulatory requirements
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 11. Third-Party Platforms and Services */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              11. Third-Party Platforms and Services
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>11.1</strong> The Company may provide access to
                third-party trading platforms or services as part of the
                Challenge.
              </p>
              <p>
                <strong>11.2</strong> You acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  Such platforms are operated by third parties and subject to
                  their terms of use.
                </li>
                <li>
                  The Company is not responsible for the functionality,
                  performance, or content of third-party platforms.
                </li>
                <li>Use of third-party services is at your own risk.</li>
              </ul>
            </div>
          </section>

          {/* 12. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              12. Intellectual Property
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>12.1</strong> All intellectual property rights in the
                Site, Services, software, and content belong to the Company or
                its licensors.
              </p>
              <p>
                <strong>12.2</strong> You are granted a limited, non-exclusive,
                non-transferable license to use the Services for their intended
                purpose.
              </p>
              <p>
                <strong>12.3</strong> You may not copy, modify, distribute,
                reverse-engineer, or create derivative works based on our
                intellectual property.
              </p>
            </div>
          </section>

          {/* 13. Termination */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Termination</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>13.1</strong> The Company may suspend or terminate your
                account and access to the Services at any time, without notice,
                if:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>You breach these Terms or the Rulebook.</li>
                <li>Required by law or regulatory authorities.</li>
              </ul>
              <p>
                <strong>13.2</strong> Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Your right to use the Services ceases immediately.</li>
                <li>
                  The Company may delete your account data, subject to legal
                  retention requirements.
                </li>
              </ul>
            </div>
          </section>

          {/* 14. Risk Acknowledgement */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              14. Risk Acknowledgement
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>14.1</strong> Trading in financial instruments involves
                significant risk, including the potential loss of capital.
              </p>
              <p>
                <strong>14.2</strong> You acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  Performance in simulated environments does not guarantee
                  future results.
                </li>
                <li>
                  Access to a funded account involves trading with real capital,
                  and losses may occur.
                </li>
                <li>
                  Participation in the Challenge does not constitute investment
                  advice.
                </li>
              </ul>
              <p>
                <strong>14.3</strong> The full Risk Disclosure Statement,
                available on our Site, forms part of these Terms.
              </p>
            </div>
          </section>

          {/* 15. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              15. Limitation of Liability
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>15.1</strong> To the maximum extent permitted by law,
                the Company shall not be liable for any indirect, incidental,
                consequential, or special damages, including loss of profits,
                arising from or in connection with your use of the Services.
              </p>
              <p>
                <strong>15.2</strong> The Company&rsquo;s total liability under
                these Terms shall not exceed the total fees paid by you to
                participate in the Challenge.
              </p>
            </div>
          </section>

          {/* 16. Indemnity */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">16. Indemnity</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>16.1</strong> You agree to indemnify and hold harmless
                the Company, its directors, officers, employees, and affiliates
                from any claims, damages, losses, liabilities, or expenses
                arising out of or in connection with your:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Breach of these Terms.</li>
                <li>Violation of applicable laws.</li>
                <li>Use of the Services.</li>
              </ul>
            </div>
          </section>

          {/* 17. Amendments */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">17. Amendments</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>17.1</strong> The Company may amend these Terms at any
                time by posting the updated version on the Site.
              </p>
              <p>
                <strong>17.2</strong> Amendments shall take effect upon posting.
                Your continued use of the Services constitutes acceptance of the
                revised Terms.
              </p>
            </div>
          </section>

          {/* 18. Governing Law and Jurisdiction */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              18. Governing Law and Jurisdiction
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>18.1</strong> These Terms and any non-contractual
                obligations arising out of or in connection with them shall be
                governed by and construed in accordance with the laws of the
                Dubai International Financial Centre (DIFC) and applicable UAE
                law.
              </p>
              <p>
                <strong>18.2</strong> The courts of the DIFC shall have
                exclusive jurisdiction to settle any dispute arising out of or
                in connection with these Terms, including disputes relating to
                non-contractual obligations.
              </p>
            </div>
          </section>

          {/* 19. Contact Details */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">19. Contact Details</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>19.1</strong> For any questions regarding these Terms,
                please contact:
              </p>
              <p className="text-center py-4">
                <a
                  href="mailto:hello@soloclash.com"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  📧 hello@soloclash.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
