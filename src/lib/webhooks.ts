const WEBHOOK_URLS = [
  "https://n8n-n8n.dwu3jc.easypanel.host/webhook-test/ddccc2ca-1b8a-40a9-b1f9-654142abaa64",
  "https://n8n-n8n.dwu3jc.easypanel.host/webhook/ddccc2ca-1b8a-40a9-b1f9-654142abaa64"
];

export const sendWebhook = async (eventType: string, data?: object) => {
  const payload = {
    event: eventType,
    timestamp: new Date().toISOString(),
    page: window.location.pathname,
    userAgent: navigator.userAgent,
    ...data
  };

  WEBHOOK_URLS.forEach(url => {
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(console.error);
  });
};
