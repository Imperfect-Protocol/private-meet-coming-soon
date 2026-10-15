import SiteNav from "../SiteNav";

export const metadata = {
    title: "Terms | Private Meet",
    description: "Terms and Cnditions."
};

export default function TermsPage() {
    return (
        <main className="contact-page">
            <img className="contact-page__image" src="/table.jpg" alt="" />
            <div className="contact-page__shade" />
            <SiteNav />

            <section className="contact-page__shell">
                <h1>Private Meet — Privacy Policy</h1>

                <p>
                    <strong>Operated by:</strong> Private Poker by Imperfect Protocol<br />
                    <strong>Effective date:</strong> 2026-10-15<br />
                    <strong>Last updated:</strong> 2026-10-15
                </p>

                <h2>1. Introduction</h2>

                <p>Welcome to Private Meet.</p>

                <p>
                    Private Meet is operated by <strong>Private Poker by Imperfect Protocol</strong>, a company registered in Ireland
                    under company number <strong>787908</strong>, trading under the registered business
                    names <strong>Imperfect Protocol</strong> and <strong>Private Poker</strong> ("we", "us", or "our").
                </p>

                <p>We respect your privacy and are committed to protecting personal information processed through our platform.</p>

                <p>This Privacy Policy explains what information we collect, how we use it, how it is stored, when it may be shared, and what rights you have when using Private Meet.</p>

                <p>Private Meet is a free online meeting platform that allows users to create accounts, arrange meetings, communicate with other participants, and enjoy a built-in recreational poker game.</p>

                <p>By using Private Meet, you acknowledge that you have read this Privacy Policy.</p>

                <h2>2. Information We Collect</h2>

                <p>We collect only information that is reasonably necessary to operate, maintain, and improve Private Meet.</p>

                <p>Depending on how you use the platform, this may include:</p>

                <h3>2.1 Account Information</h3>
                <p>When you create an account, we may process:</p>
                <ul>
                    <li>Email address.</li>
                    <li>Username or display name.</li>
                    <li>Authentication identifiers.</li>
                    <li>Account creation date.</li>
                    <li>Account preferences and settings.</li>
                </ul>
                <p>Authentication information may be processed through our authentication infrastructure.</p>
                <p>We do not intentionally collect or store your account password in plaintext.</p>

                <h3>2.2 Meeting and Booking Information</h3>
                <p>When you create or participate in a meeting, we may process:</p>
                <ul>
                    <li>Meeting identifiers.</li>
                    <li>Booking details.</li>
                    <li>Meeting date and time.</li>
                    <li>Host and participant identifiers.</li>
                    <li>Meeting status.</li>
                    <li>Information required to coordinate invitations and notifications.</li>
                </ul>
                <p>We use this information to operate the booking system and coordinate meetings.</p>

                <h3>2.3 Technical Information</h3>
                <p>When you access Private Meet, certain technical information may be processed automatically, including:</p>
                <ul>
                    <li>IP address.</li>
                    <li>Browser type and version.</li>
                    <li>Operating system.</li>
                    <li>Device and connection information.</li>
                    <li>Requested pages and application resources.</li>
                    <li>Technical logs and error information.</li>
                    <li>Security-related information.</li>
                </ul>
                <p>Some technical information may be processed by our hosting, security, and infrastructure providers.</p>

                <h3>2.4 Meeting and Communication Information</h3>
                <p>Private Meet supports online meetings and real-time communication.</p>
                <p>Depending on the features used, technical information may be processed to establish and maintain connections between participants. This can include:</p>
                <ul>
                    <li>Connection metadata.</li>
                    <li>WebRTC session information.</li>
                    <li>Signaling information.</li>
                    <li>Network connectivity information.</li>
                    <li>Technical connection diagnostics.</li>
                </ul>
                <p>Private Meet uses peer-to-peer WebRTC technology where supported.</p>
                <p>Depending on network conditions, connectivity configuration, and infrastructure requirements, some communication traffic may pass through relay infrastructure.</p>
                <p>We do not claim that all communication is always exclusively peer-to-peer.</p>

                <h3>2.5 Poker Game Information</h3>
                <p>The built-in poker game is provided for free recreational entertainment.</p>
                <p>Depending on the implementation, we may process game-related information such as:</p>
                <ul>
                    <li>Game session identifiers.</li>
                    <li>Player identifiers.</li>
                    <li>Game state.</li>
                    <li>Player actions.</li>
                    <li>Scores or other gameplay information.</li>
                </ul>
                <p>The poker game does not involve real-money betting, deposits, withdrawals, or financial rewards.</p>

                <h2>3. How We Use Your Information</h2>

                <p>We use personal information for the following purposes:</p>
                <ul>
                    <li>Creating and managing user accounts.</li>
                    <li>Authenticating users.</li>
                    <li>Arranging and managing meetings.</li>
                    <li>Coordinating invitations and notifications.</li>
                    <li>Enabling real-time communication.</li>
                    <li>Operating the recreational poker game.</li>
                    <li>Maintaining application security.</li>
                    <li>Detecting suspicious activity and preventing abuse.</li>
                    <li>Troubleshooting errors and technical problems.</li>
                    <li>Improving platform reliability and performance.</li>
                    <li>Responding to user inquiries.</li>
                    <li>Complying with applicable legal obligations.</li>
                </ul>
                <p>We do not sell personal information to advertisers.</p>
                <p>We do not use meeting booking information to create advertising profiles.</p>

                <h2>4. Legal Basis for Processing</h2>

                <p>Where applicable under the General Data Protection Regulation (GDPR), we process personal information based on the following legal grounds:</p>

                <h3>4.1 Performance of a Contract</h3>
                <p>We process information necessary to provide the services you request, including account management, booking functionality, and meeting coordination.</p>

                <h3>4.2 Legitimate Interests</h3>
                <p>We may process information for legitimate purposes such as:</p>
                <ul>
                    <li>Protecting the platform against abuse.</li>
                    <li>Maintaining application security.</li>
                    <li>Preventing fraudulent activity.</li>
                    <li>Diagnosing technical problems.</li>
                    <li>Improving the reliability of our services.</li>
                </ul>
                <p>We consider your rights and interests when relying on this legal basis.</p>

                <h3>4.3 Legal Obligations</h3>
                <p>We may process or retain information where necessary to comply with applicable legal requirements.</p>

                <h3>4.4 Consent</h3>
                <p>Where required, we will request your consent before processing information for purposes that require it.</p>
                <p>You may withdraw consent where processing is based on consent.</p>

                <h2>5. Third-Party Service Providers</h2>

                <p>Private Meet relies on third-party infrastructure to provide its services.</p>
                <p>Depending on the feature being used, these providers may process certain information on our behalf or independently under their own terms.</p>

                <p>Our infrastructure may include:</p>
                <ul>
                    <li><strong>Wasmer:</strong> Used to host and deliver the Private Meet frontend application.</li>
                    <li><strong>Convex:</strong> Used for backend functionality, database operations, account-related functionality, meeting bookings, and application data.</li>
                    <li><strong>Resend:</strong> Used to deliver transactional emails, such as account-related notifications and meeting invitations.</li>
                    <li><strong>Private Mesh:</strong> Used for real-time communication and WebRTC signaling infrastructure.</li>
                    <li><strong>Cloudflare:</strong> Used for DNS, website delivery, security protection, and protection against malicious traffic.</li>
                    <li><strong>WebRTC infrastructure providers:</strong> Used where applicable to establish and maintain real-time communication connections.</li>
                </ul>

                <p>We aim to share only the information necessary for each provider to perform its intended function.</p>
                <p>Third-party providers may process information in different jurisdictions, subject to their applicable contractual and legal obligations.</p>

                <h2>6. Cookies and Similar Technologies</h2>

                <p>Private Meet and its infrastructure providers may use cookies or similar technologies where necessary for:</p>
                <ul>
                    <li>Authentication.</li>
                    <li>Session management.</li>
                    <li>Security.</li>
                    <li>Application functionality.</li>
                    <li>Remembering user preferences.</li>
                </ul>
                <p>Third-party infrastructure may also use technical mechanisms to detect malicious traffic or protect application security.</p>
                <p>We do not intentionally use advertising cookies to build advertising profiles.</p>
                <p>Where applicable, non-essential cookies or similar technologies will be used only in accordance with relevant consent requirements.</p>
                <p>Additional information about cookies may be provided through a separate Cookie Policy or cookie notice.</p>

                <h2>7. Payments and Financial Information</h2>

                <p><strong>Private Meet is currently completely free.</strong></p>

                <p>We do not currently:</p>
                <ul>
                    <li>Charge for accounts.</li>
                    <li>Charge for meeting bookings.</li>
                    <li>Offer paid subscriptions.</li>
                    <li>Require credit card information.</li>
                    <li>Process cryptocurrency payments.</li>
                    <li>Accept deposits or financial transactions through the poker game.</li>
                </ul>

                <p>We therefore do not currently collect payment card information or cryptocurrency wallet information for platform purchases.</p>
                <p>If payment functionality is introduced in the future, this Privacy Policy will be updated accordingly.</p>

                <h2>8. Data Retention</h2>

                <p>We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy.</p>

                <p>Retention periods may depend on:</p>
                <ul>
                    <li>Whether your account remains active.</li>
                    <li>Whether meeting information is needed to provide the service.</li>
                    <li>Security and fraud prevention requirements.</li>
                    <li>Legal and regulatory obligations.</li>
                    <li>The resolution of disputes or technical incidents.</li>
                </ul>

                <p>When information is no longer necessary, we will delete it or anonymize it where reasonably possible, subject to applicable legal retention requirements and technical limitations.</p>
                <p>Specific retention periods may be established as our operational and legal requirements develop.</p>

                <h2>9. Data Security</h2>

                <p>We take reasonable technical and organizational measures to protect personal information.</p>

                <p>These measures may include:</p>
                <ul>
                    <li>Secure authentication mechanisms.</li>
                    <li>Access controls.</li>
                    <li>Encrypted network connections.</li>
                    <li>Infrastructure security protections.</li>
                    <li>Monitoring for suspicious activity.</li>
                    <li>Protection against unauthorized access.</li>
                    <li>Regular maintenance and security improvements.</li>
                </ul>

                <p>However, no online service can guarantee absolute security.</p>
                <p>Users are responsible for keeping their account credentials secure and notifying us if they suspect unauthorized access.</p>

                <h2>10. International Data Transfers</h2>

                <p>Our infrastructure providers may operate servers or process information in countries outside your country of residence.</p>
                <p>Where personal information is transferred internationally, we aim to ensure that appropriate safeguards are in place as required by applicable data protection law.</p>
                <p>Such safeguards may include adequacy decisions, standard contractual clauses, or other legally recognized transfer mechanisms.</p>

                <h2>11. Your Privacy Rights</h2>

                <p>Depending on your location and applicable law, you may have the right to:</p>
                <ul>
                    <li>Request access to your personal information.</li>
                    <li>Request correction of inaccurate information.</li>
                    <li>Request deletion of personal information.</li>
                    <li>Request restriction of processing.</li>
                    <li>Object to certain processing activities.</li>
                    <li>Request data portability.</li>
                    <li>Withdraw consent where processing is based on consent.</li>
                    <li>Lodge a complaint with a relevant data protection authority.</li>
                </ul>

                <p>If you are located in the European Economic Area, you may exercise the rights provided by the GDPR.</p>
                <p>Requests can be submitted using the contact information in Section 14.</p>
                <p>We may need to verify your identity before responding to certain requests.</p>

                <h2>12. Children's Privacy</h2>

                <p>Private Meet is not specifically designed for children.</p>
                <p>Users must comply with the minimum age requirements applicable in their jurisdiction.</p>
                <p>We do not knowingly collect personal information from children where doing so would violate applicable law.</p>
                <p>If we become aware that personal information has been collected unlawfully from a child, we will take appropriate steps to address the situation.</p>

                <h2>13. Changes to This Privacy Policy</h2>

                <p>We may update this Privacy Policy as Private Meet evolves, as infrastructure providers change, or as legal requirements develop.</p>
                <p>Changes will be published on this page together with an updated effective date.</p>
                <p>Where required by applicable law, we will notify users of material changes or request consent where necessary.</p>

                <h2>14. Contact Information and Data Protection Requests</h2>

                <p>Private Meet is operated by:</p>
                <p>
                    <strong>Private Poker by Imperfect Protocol</strong><br />
                    Product: Private Meet<br />
                    Website: <a href="https://privatemeet.imperfectprotocol.ie">https://privatemeet.imperfectprotocol.ie</a><br />
                    Privacy contact: <a href="mailto:imperfect-protocol@protonmail.com">imperfect-protocol@protonmail.com</a>
                </p>
                <p>For questions about this Privacy Policy, requests concerning your personal information, or other privacy-related matters, please contact us using the email address above.</p>

                <h2>15. Supervisory Authority</h2>

                <p>If you are located in the European Economic Area, you have the right to lodge a complaint with the data protection supervisory authority in your country of residence, place of work, or place of the alleged infringement.</p>

                <p>If you are located in Ireland, the relevant supervisory authority is:</p>
                <p>
                    <strong>Data Protection Commission (DPC)</strong><br />
                    Website: <a href="https://www.dataprotection.ie/" target="_blank" rel="noopener noreferrer">https://www.dataprotection.ie/</a>
                </p>

                <p>Thank you for trusting Private Meet.</p>
                <p>We are committed to building a free, accessible, and privacy-conscious meeting platform.</p>

            </section>
        </main>)
}