import Link from "next/link";

export default function TermsOfService() {
  return (
    <div  className="min-h-screen flex flex-col items-center px-4 py-12 bg-background text-foreground">
      <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 text-center">
        Terms of Service
      </h1>

      <div className="max-w-3xl bg-card/80 p-6 rounded-2xl shadow-md text-foreground space-y-6">
        <p>
          Welcome to Cornverge. By using our universal dashboard (the “Service”), you agree to comply with these Terms of Service. If you do not agree, please do not use our Service.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-4">1. Use of the Service</h2>
        <p>
          You may use the Service to connect and manage your accounts from Notion, Gmail, Google Calendar, Jira, and any other services we integrate in the future. You agree not to use the Service for any illegal or unauthorized purpose.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-4">2. Account Responsibility</h2>
        <p>
          You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately if your credentials are compromised.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-4">3. Data and Privacy</h2>
        <p>
          Our Privacy Policy (<Link href="/privacy" className="text-purple-700 hover:underline">link</Link>) explains how we collect, use, and store your data. By using the Service, you consent to such data practices.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-4">4. Limitation of Liability</h2>
        <p>
          The Service is provided “as-is” and we make no warranties, express or implied, regarding its availability, security, or accuracy. Cornverge is not responsible for any loss or damage arising from your use of the Service.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-4">5. Termination</h2>
        <p>
          We may suspend or terminate your access to the Service at any time for violation of these Terms or for any reason we deem appropriate.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-4">6. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. We will notify you of material changes, and continued use of the Service constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-4">7. Contact</h2>
        <p>
          If you have questions about these Terms, please contact us at <span className="text-purple-700">support@cornverge.com</span>.
        </p>

        <p className="mt-6 text-sm text-foregound text-center">
          Return to <Link href="/" className="text-primary hover:underline">Home</Link>
        </p>
      </div>
    </div>
  );
}
