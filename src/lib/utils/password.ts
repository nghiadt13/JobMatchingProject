/**
 * Calculate password strength score.
 * @returns number from 0 to 4
 */
export function getPasswordStrength(password: string): number {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
}

/**
 * Returns Tailwind color class corresponding to strength level.
 */
export function getStrengthColor(index: number, strength: number): string {
  if (index >= strength) return "bg-[rgba(212,168,67,0.2)]";
  const colors = [
    "bg-[#e74c3c]",
    "bg-[#e67e22]",
    "bg-[#f1c40f]",
    "bg-[hsl(var(--gold))]",
  ];
  return colors[strength - 1] ?? "bg-[rgba(212,168,67,0.2)]";
}
