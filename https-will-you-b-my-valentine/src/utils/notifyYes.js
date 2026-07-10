const notifyEndpoint = 'https://formsubmit.co/ajax/raziunhasan@gmail.com';

export async function notifyYesClick() {
  try {
    await fetch(notifyEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: 'Fariha clicked YES 💜',
        _template: 'box',
        name: 'Fariha proposal website',
        message: 'Someone clicked YES on your proposal website.',
        answer: 'YES',
        sentAt: new Date().toLocaleString(),
      }),
    });
  } catch {
    // The proposal should still continue even if the email service is blocked.
  }
}
