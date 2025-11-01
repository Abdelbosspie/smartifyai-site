// app/page.js
export default function Page() {
  return (
    <main className="container">
      <h1>SmartifyAI – Analytics Check</h1>
      <p>
        If you can read this on your deployed site, Vercel should start logging
        <strong> Web Analytics</strong> and <strong>Speed Insights</strong>
        after a few page views.
      </p>

      <ul className="hints">
        <li>Open this page in normal window, Incognito, and on your phone.</li>
        <li>Refresh a few times; click the button below.</li>
        <li>Disable ad-blockers or tracking protection for this domain.</li>
      </ul>

      <button id="ping">Do a page interaction</button>

      <p className="small">
        Once deployed, open your Vercel project → <em>Analytics</em> and{" "}
        <em>Speed Insights</em>. Data should appear within ~1–2 minutes.
      </p>
    </main>
  );
}
