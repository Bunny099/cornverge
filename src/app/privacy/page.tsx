import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
      <h1 className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-8 text-center">
        Privacy Policy
      </h1>

      <div className="max-w-3xl bg-white/80 p-6 rounded-2xl shadow-md text-gray-700 space-y-6">
        <p>
          Cornverge (“we”, “our”, or “us”) respects your privacy and is committed to protecting it. This Privacy Policy explains how we collect, use, and store information when you connect your accounts to our universal dashboard.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-black">Information We Collect</h2>
        <p>When you connect services such as Notion, Gmail, Google Calendar, and Jira, we may collect:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Your basic account information (name, email) from connected services.</li>
          <li>OAuth access tokens or API tokens necessary to fetch data for your dashboard.</li>
          <li>Any information you explicitly provide to the dashboard (e.g., project names, notes, tasks).</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 text-black">How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>To display your data from connected services in the dashboard.</li>
          <li>To synchronize and manage tasks, events, or notes across your connected accounts.</li>
          <li>To improve and maintain the functionality of the dashboard.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 text-black">Data Security</h2>
        <p>
          We take reasonable measures to store your tokens and data securely. Tokens are encrypted and never shared with third parties except to access the services you have connected.
        </p>

        <h2 className="text-xl font-semibold mt-4 text-black">Your Rights</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>You can disconnect any connected account at any time.</li>
          <li>You can request deletion of your data by contacting us at <span className="text-purple-700">support@cornverge.com</span>.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4 text-black">Updates</h2>
        <p>
          We may update this Privacy Policy as we add new integrations or features. Please review this page periodically for any changes.
        </p>

        <p className="mt-6 text-sm text-gray-500 text-center">
          Return to <Link href="/" className="text-purple-700 hover:underline">Home</Link>
        </p>
      </div>
    </div>
  );
}
