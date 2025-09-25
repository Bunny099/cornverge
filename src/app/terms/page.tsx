import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      <h1 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-8 text-center">
        Terms of Service
      </h1>

      <div className="max-w-3xl bg-white/80 p-6 rounded-2xl shadow-md text-gray-700 space-y-6">
        <p>
          Welcome to Cornverge. By using our universal dashboard (the “Service”), you agree to comply with these Terms of Service. If you do not agree, please do not use our Service.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-black">1. Use of the Service</h2>
        <p>
          You may use the Service to connect and manage your accounts from Notion, Gmail, Google Calendar, Jira, and any other services we integrate in the future. You agree not to use the Service for any illegal or unauthorized purpose.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-black">2. Account Responsibility</h2>
        <p>
          You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately if your credentials are compromised.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-black">3. Data and Privacy</h2>
        <p>
          Our Privacy Policy (<Link href="/privacy" className="text-purple-700 hover:underline">link</Link>) explains how we collect, use, and store your data. By using the Service, you consent to such data practices.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-black">4. Limitation of Liability</h2>
        <p>
          The Service is provided “as-is” and we make no warranties, express or implied, regarding its availability, security, or accuracy. Cornverge is not responsible for any loss or damage arising from your use of the Service.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-black">5. Termination</h2>
        <p>
          We may suspend or terminate your access to the Service at any time for violation of these Terms or for any reason we deem appropriate.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-black">6. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. We will notify you of material changes, and continued use of the Service constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-black">7. Contact</h2>
        <p>
          If you have questions about these Terms, please contact us at <span className="text-purple-700">support@cornverge.com</span>.
        </p>

        <p className="mt-6 text-sm text-gray-500 text-center">
          Return to <Link href="/" className="text-purple-700 hover:underline">Home</Link>
        </p>
      </div>
    </div>
  );
}
