export function getCountdownTime(weddingDate: Date) {
  const now = new Date();
  const diff = weddingDate.getTime() - now.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export function getWeddingDate(dateString?: string): Date {
  if (!dateString) {
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 3);
    return futureDate;
  }

  try {
    return new Date(dateString);
  } catch {
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 3);
    return futureDate;
  }
}
