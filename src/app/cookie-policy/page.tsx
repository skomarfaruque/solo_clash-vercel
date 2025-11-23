import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Solo Clash",
  description:
    "Read our Cookie Policy and understand how we use cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <main
      className="text-white overflow-hidden min-h-screen pt-20"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cookie Policy</h1>
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
                <strong>1.1</strong> This Cookie Policy (&ldquo;Policy&rdquo;)
                explains how Solo Clash L.L.C-FZ (the &ldquo;Company&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses
                cookies and similar technologies on its website soloclash.com
                (the &ldquo;Site&rdquo;).
              </p>
              <p>
                <strong>1.2</strong> This Policy should be read together with
                our{" "}
                <a
                  href="/privacy"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Privacy Policy
                </a>
                , which explains how we process personal data collected through
                cookies and other means.
              </p>
              <p>
                <strong>1.3</strong> By accessing or using our Site, you consent
                to the use of cookies as described in this Policy, subject to
                your rights to manage preferences under Clause 6.
              </p>
            </div>
          </section>

          {/* 2. Definitions */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>2.1</strong> For the purposes of this Policy:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>&ldquo;Cookies&rdquo;</strong> means small text files
                  placed on your device when you visit a website, which enable
                  the website to recognise your device and store information
                  about your preferences.
                </li>
                <li>
                  <strong>&ldquo;Session Cookies&rdquo;</strong> means cookies
                  that expire when the web browser is closed.
                </li>
                <li>
                  <strong>&ldquo;Persistent Cookies&rdquo;</strong> means
                  cookies that remain on your device for a specified period or
                  until deleted.
                </li>
                <li>
                  <strong>&ldquo;First-party Cookies&rdquo;</strong> means
                  cookies set directly by the Company.
                </li>
                <li>
                  <strong>&ldquo;Third-party Cookies&rdquo;</strong> means
                  cookies set by third parties, such as analytics or advertising
                  service providers.
                </li>
              </ul>
            </div>
          </section>

          {/* 3. Use of Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Use of Cookies</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>3.1</strong> We use cookies to enhance functionality,
                improve user experience, and collect analytics to improve our
                Services.
              </p>
              <p>
                <strong>3.2</strong> Cookies are used for the following
                purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Strictly Necessary Cookies:</strong> Essential for the
                  operation of the Site, including session management,
                  authentication, and security. These cookies cannot be
                  disabled.
                </li>
                <li>
                  <strong>Performance and Analytics Cookies:</strong> Collect
                  anonymous information about how visitors use the Site, such as
                  pages visited and errors encountered, to improve performance.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences
                  (such as language or region) and provide enhanced
                  functionality and personalisation.
                </li>
                <li>
                  <strong>Targeting and Advertising Cookies:</strong> Track
                  browsing habits to deliver relevant advertising and marketing
                  content. These may be set by third-party partners, such as
                  advertising networks or social media platforms.
                </li>
              </ul>
            </div>
          </section>

          {/* 4. Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Third-Party Cookies
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>4.1</strong> We may use cookies provided by third-party
                service providers, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Google Analytics</strong> &ndash; for web analytics
                  and traffic measurement.
                </li>
                <li>
                  <strong>Meta Pixel (Facebook)</strong> &ndash; for targeted
                  advertising and conversion tracking.
                </li>
              </ul>
              <p>
                <strong>4.2</strong> These third parties may collect information
                about your online activities over time and across different
                websites. We have no control over the operation of third-party
                cookies and accept no liability for their use.
              </p>
              <p>
                <strong>4.3</strong> You should review the privacy and cookie
                policies of such third parties for more information on how they
                use your data.
              </p>
            </div>
          </section>

          {/* 5. Legal Basis for Use of Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. Legal Basis for Use of Cookies
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>5.1</strong> The legal bases for our use of cookies are:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Strictly necessary cookies</strong> &ndash; required
                  to perform our contract with you and deliver the Site&rsquo;s
                  core functionality.
                </li>
                <li>
                  <strong>
                    Analytics, functional, and advertising cookies
                  </strong>
                  &ndash; used based on your consent, which you may withdraw at
                  any time as described in Clause 6.
                </li>
              </ul>
            </div>
          </section>

          {/* 6. Managing Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Managing Cookies</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>6.1</strong> You have the right to accept or reject
                non-essential cookies. You can manage your preferences by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  Using the cookie consent banner presented on your first visit
                  to our Site.
                </li>
                <li>
                  Adjusting your browser settings to block or delete cookies.
                </li>
              </ul>
              <p>
                <strong>6.2</strong> Please note that disabling certain cookies
                may affect the performance or functionality of the Site and may
                limit access to certain features.
              </p>
            </div>
          </section>

          {/* 7. Data Collected by Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              7. Data Collected by Cookies
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>7.1</strong> Cookies may collect the following
                categories of data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Device information</strong> (including IP address,
                  browser type, and operating system).
                </li>
                <li>
                  <strong>Usage information</strong> (including pages visited,
                  time spent on site, and interaction data).
                </li>
                <li>
                  <strong>Preference information</strong> (such as language
                  selection or region).
                </li>
              </ul>
              <p>
                <strong>7.2</strong> Where such data constitutes personal data,
                it will be processed in accordance with our Privacy Policy.
              </p>
            </div>
          </section>

          {/* 8. Retention */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Retention</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>8.1</strong> Cookies are retained for the duration
                necessary to achieve their purpose. Session cookies expire when
                the browser is closed, while persistent cookies remain for a
                predefined period or until deleted by the user.
              </p>
            </div>
          </section>

          {/* 9. Amendments */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Amendments</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>9.1</strong> We may amend this Policy from time to time.
                Amendments will take effect upon publication on our Site.
              </p>
              <p>
                <strong>9.2</strong> Continued use of the Site following such
                publication constitutes acceptance of the revised Policy.
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
                <strong>10.1</strong> This Policy and any non-contractual
                obligations arising out of or in connection with it shall be
                governed by and construed in accordance with the laws of the
                Dubai International Financial Centre (DIFC) and applicable UAE
                law.
              </p>
              <p>
                <strong>10.2</strong> The courts of the DIFC shall have
                exclusive jurisdiction to settle any dispute arising out of or
                in connection with this Policy.
              </p>
            </div>
          </section>

          {/* 11. Contact Details */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Details</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>11.1</strong> For any questions regarding this Policy or
                the use of cookies, please contact:
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
