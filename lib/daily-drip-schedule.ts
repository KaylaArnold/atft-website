export type DailyDripTierId = "flash" | "early" | "standard"
export type DailyDripEnrollmentPhase = DailyDripTierId | "prelaunch"

export function getCurrentDailyDripTier(now = Date.now()): DailyDripEnrollmentPhase {
  const flashStarts = Date.parse("2026-10-27T00:00:00-04:00")
  const earlyStarts = Date.parse("2026-10-30T00:00:00-04:00")
  const standardStarts = Date.parse("2026-12-16T00:00:00-05:00")

  if (now < flashStarts) return "prelaunch"
  if (now < earlyStarts) return "flash"
  if (now < standardStarts) return "early"
  return "standard"
}
