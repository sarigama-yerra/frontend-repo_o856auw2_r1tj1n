function FAQ() {
  const faqs = [
    {
      q: 'Is boosting safe?',
      a: 'We use VPN-matched locations, 2FA coordination, and can play duo to minimize risk. No cheats, only skill.'
    },
    {
      q: 'How long does it take?',
      a: 'Most orders start within 30 minutes. Duration depends on your goal; we provide real-time progress updates.'
    },
    {
      q: 'Can I play while boosting?',
      a: 'Yes, choose duo boosting to play alongside a booster. You keep full control of your account.'
    },
    {
      q: 'Refund policy',
      a: 'Full refunds for unstarted orders. Partial refunds for remaining progress if you cancel mid-order.'
    }
  ];

  return (
    <section id="faq" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((item, idx) => (
          <details key={idx} className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-5 open:shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <summary className="cursor-pointer list-none select-none font-medium text-white">
              <div className="flex items-center justify-between">
                <span>{item.q}</span>
                <span className="ml-4 text-cyan-300 group-open:rotate-90 transition-transform">›</span>
              </div>
            </summary>
            <p className="mt-3 text-slate-300/90">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
