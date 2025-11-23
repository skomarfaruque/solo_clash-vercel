import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Disclosure | Solo Clash",
  description:
    "Read our risk disclosure statement and understand the risks associated with trading.",
};

export default function RiskDisclosurePage() {
  return (
    <main
      className="text-white overflow-hidden min-h-screen pt-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Risk Disclosure Statement
          </h1>
          <p className="text-gray-400 mb-2">Effective Date: 1 November 2025</p>
          <p className="text-gray-400">Last Updated: 1 November 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          {/* 1. Purpose and Scope */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              1. Purpose and Scope
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>1.1</strong> This Risk Disclosure Statement
                (&ldquo;Statement&rdquo;) is provided by Solo Clash L.L.C-FZ
                (the &ldquo;Company&rdquo;) to inform users (&ldquo;you&rdquo;
                or &ldquo;your&rdquo;) of the significant risks associated with
                trading financial instruments and participating in the
                proprietary trading challenges, evaluation programmes, and
                funded trading activities offered by the Company.
              </p>
              <p>
                <strong>1.2</strong> This Statement forms an integral part of
                the Terms &amp; Conditions governing the use of the
                Company&rsquo;s services. By participating in any Challenge,
                using any account, or otherwise engaging with the
                Company&rsquo;s services, you acknowledge that you have read,
                understood, and accepted the risks set out in this Statement.
              </p>
            </div>
          </section>

          {/* 2. No Investment Advice */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. No Investment Advice
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>2.1</strong> The Company does not provide investment,
                financial, legal, or tax advice.
              </p>
              <p>
                <strong>2.2</strong> All information provided by the Company is
                for general informational and educational purposes only and does
                not constitute personalised advice.
              </p>
              <p>
                <strong>2.3</strong> You are solely responsible for evaluating
                the merits and risks of any trading decision you make, and you
                should consult independent professional advisers as necessary.
              </p>
            </div>
          </section>

          {/* 3. Nature of the Services */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Nature of the Services
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>3.1</strong> The Company operates a challenge-based
                proprietary trading model comprising the following phases:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>(a) Challenge Phase:</strong> Users trade on simulated
                  accounts using virtual funds under defined trading conditions.
                </li>
                <li>
                  <strong>(b) Evaluation Phase:</strong> Users meeting
                  performance targets may proceed to further assessment.
                </li>
                <li>
                  <strong>(c) Funded Account Phase:</strong> Users who
                  successfully complete the evaluation may be granted access to
                  trade a funded account provided by the Company with real
                  capital.
                </li>
              </ul>
              <p>
                <strong>3.2</strong> You acknowledge and agree that performance
                achieved on simulated accounts is not necessarily indicative of
                performance on funded accounts or in live market conditions.
              </p>
            </div>
          </section>

          {/* 4. Risks Associated with Trading */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Risks Associated with Trading
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>4.1</strong> Participation in trading activities
                involves significant risks, including but not limited to the
                following:
              </p>

              {/* 4.1.1 Market Risk */}
              <div className="ml-4 space-y-2">
                <h3 className="font-semibold">4.1.1 Market Risk</h3>
                <p>
                  The value of financial instruments can fluctuate rapidly due
                  to market volatility, geopolitical events, economic data
                  releases, and other external factors. Sudden price movements
                  may result in substantial losses.
                </p>
              </div>

              {/* 4.1.2 Leverage Risk */}
              <div className="ml-4 space-y-2">
                <h3 className="font-semibold">4.1.2 Leverage Risk</h3>
                <p>
                  Leverage magnifies both gains and losses. Even small price
                  movements may result in significant financial losses that
                  exceed the amount of capital allocated.
                </p>
              </div>

              {/* 4.1.3 Liquidity Risk */}
              <div className="ml-4 space-y-2">
                <h3 className="font-semibold">4.1.3 Liquidity Risk</h3>
                <p>
                  Certain financial instruments may become illiquid during
                  volatile market conditions, impacting the ability to enter or
                  exit positions without adverse price movements.
                </p>
              </div>

              {/* 4.1.4 Execution Risk */}
              <div className="ml-4 space-y-2">
                <h3 className="font-semibold">4.1.4 Execution Risk</h3>
                <p>
                  Order execution may be delayed, rejected, or executed at
                  prices materially different from expected due to factors
                  including market volatility, slippage, technology limitations,
                  or connectivity issues.
                </p>
              </div>

              {/* 4.1.5 Technology and Operational Risk */}
              <div className="ml-4 space-y-2">
                <h3 className="font-semibold">
                  4.1.5 Technology and Operational Risk
                </h3>
                <p>
                  The Company&rsquo;s services rely on technology platforms,
                  third-party systems, and internet connectivity. Interruptions,
                  outages, or cyber incidents may affect the ability to trade or
                  manage positions.
                </p>
              </div>

              {/* 4.1.6 Counterparty Risk */}
              <div className="ml-4 space-y-2">
                <h3 className="font-semibold">4.1.6 Counterparty Risk</h3>
                <p>
                  When trading on a funded account, the Company acts as the
                  counterparty. Access to the account may be suspended or
                  terminated at the Company&rsquo;s discretion, including for
                  breach of terms or trading rules.
                </p>
              </div>

              {/* 4.1.7 Regulatory Risk */}
              <div className="ml-4 space-y-2">
                <h3 className="font-semibold">4.1.7 Regulatory Risk</h3>
                <p>
                  Changes in laws, regulations, tax regimes, or supervisory
                  practices may impact financial markets or the Company&rsquo;s
                  operations, potentially affecting trading outcomes.
                </p>
              </div>
            </div>
          </section>

          {/* 5. No Guarantee of Performance */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. No Guarantee of Performance
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>5.1</strong> Past performance, whether actual or
                simulated, is not indicative of future results.
              </p>
              <p>
                <strong>5.2</strong> Success in simulated trading environments
                does not guarantee success in live trading with real capital.
              </p>
              <p>
                <strong>5.3</strong> Participation in a Challenge or funded
                trading programme may result in the loss of all fees paid and
                does not guarantee any profit or continued access to trading
                capital.
              </p>
            </div>
          </section>

          {/* 6. Simulated Versus Live Trading */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              6. Simulated Versus Live Trading
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>6.1</strong> Simulated trading environments differ
                materially from live trading. Differences may include, without
                limitation:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Lack of market liquidity constraints.</li>
                <li>
                  Absence of real-world emotional and psychological factors.
                </li>
                <li>
                  Variations in execution quality, order routing, and fill
                  rates.
                </li>
              </ul>
              <p>
                <strong>6.2</strong> These differences may result in simulated
                trading results that do not reflect real-world outcomes.
              </p>
            </div>
          </section>

          {/* 7. Your Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              7. Your Responsibilities
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>7.1</strong> By participating in the Company&rsquo;s
                Services, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  You have read, understood, and accepted the risks described in
                  this Statement.
                </li>
                <li>
                  You are financially capable of bearing potential losses
                  arising from trading activities.
                </li>
                <li>
                  You will comply fully with the Rulebook and all trading
                  requirements.
                </li>
                <li>
                  You will seek independent professional advice where necessary.
                </li>
              </ul>
            </div>
          </section>

          {/* 8. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              8. Limitation of Liability
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>8.1</strong> To the fullest extent permitted by law, the
                Company shall not be liable for any losses, damages, or
                liabilities (including indirect, incidental, consequential, or
                special damages) arising from or in connection with your use of
                the Services or participation in trading activities.
              </p>
              <p>
                <strong>8.2</strong> The Company&rsquo;s total aggregate
                liability shall not exceed the total amount of fees paid by you
                to participate in the Challenge.
              </p>
            </div>
          </section>

          {/* 9. Amendments */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Amendments</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>9.1</strong> The Company may amend this Statement at any
                time. Any amendments shall be effective upon publication on the
                Company&rsquo;s website.
              </p>
              <p>
                <strong>9.2</strong> Continued use of the Services following the
                publication of amendments constitutes your acceptance of the
                revised Statement.
              </p>
            </div>
          </section>

          {/* 10. Governing Law and Jurisdiction */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              10. Governing Law and Jurisdiction
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>10.1</strong> This Statement and any non-contractual
                obligations arising out of or in connection with it shall be
                governed by and construed in accordance with the laws of the
                Dubai International Financial Centre (DIFC) and applicable UAE
                law.
              </p>
              <p>
                <strong>10.2</strong> The courts of the DIFC shall have
                exclusive jurisdiction to settle any dispute arising out of or
                in connection with this Statement.
              </p>
            </div>
          </section>

          {/* 11. Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              11. Contact Information
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>11.1</strong> If you have any questions regarding this
                Statement or the risks involved in trading, please contact:
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
