export type DailyDripTierId = "flash" | "early" | "standard"
export type DailyDripEnrollmentPhase = DailyDripTierId | "prelaunch"

export const DAILY_DRIP_FLASH_START = Math.floor(Date.parse("2026-10-27T00:00:00-04:00") / 1000)
export const DAILY_DRIP_FLASH_END_EXCLUSIVE = Math.floor(Date.parse("2026-10-30T00:00:00-04:00") / 1000)
export const DAILY_DRIP_EARLY_START = DAILY_DRIP_FLASH_END_EXCLUSIVE
export const DAILY_DRIP_EARLY_END_EXCLUSIVE = Math.floor(Date.parse("2026-12-16T00:00:00-05:00") / 1000)
export const DAILY_DRIP_THANKSGIVING_FLASH_START = Math.floor(Date.parse("2026-11-26T00:00:00-05:00") / 1000)
export const DAILY_DRIP_THANKSGIVING_FLASH_END_EXCLUSIVE = Math.floor(Date.parse("2026-11-28T00:00:00-05:00") / 1000)
export const ATFT_COMMUNITY_ACCESS_START = DAILY_DRIP_THANKSGIVING_FLASH_END_EXCLUSIVE
export const DAILY_DRIP_TUITION_START = Math.floor(Date.parse("2027-01-01T00:00:00-05:00") / 1000)

export function isDailyDripFlashWindow(timestamp: number) {
  return timestamp >= DAILY_DRIP_FLASH_START && timestamp < DAILY_DRIP_FLASH_END_EXCLUSIVE
}

export function isDailyDripEarlyWindow(timestamp: number) {
  return timestamp >= DAILY_DRIP_EARLY_START && timestamp < DAILY_DRIP_EARLY_END_EXCLUSIVE
}

export function isDailyDripEarlyCheckoutWindow(timestamp: number) {
  return isDailyDripEarlyWindow(timestamp) && timestamp < ATFT_COMMUNITY_ACCESS_START
}

export function isDailyDripThanksgivingFlashWindow(timestamp: number) {
  return timestamp >= DAILY_DRIP_THANKSGIVING_FLASH_START && timestamp < DAILY_DRIP_THANKSGIVING_FLASH_END_EXCLUSIVE
}

export function isDailyDripFlashCheckoutWindow(timestamp: number) {
  return isDailyDripFlashWindow(timestamp) || isDailyDripThanksgivingFlashWindow(timestamp)
}

export function isAtftCommunityAccessOpen(timestamp: number) {
  return timestamp >= ATFT_COMMUNITY_ACCESS_START
}

export function getCurrentDailyDripTier(now = Date.now()): DailyDripEnrollmentPhase {
  const flashStarts = DAILY_DRIP_FLASH_START * 1000
  const earlyStarts = DAILY_DRIP_EARLY_START * 1000
  const standardStarts = DAILY_DRIP_EARLY_END_EXCLUSIVE * 1000

  if (now < flashStarts) return "prelaunch"
  if (now < earlyStarts) return "flash"
  if (now < standardStarts) return "early"
  return "standard"
}

export function isDailyDripWaitlistOpen(phase: DailyDripEnrollmentPhase) {
  return phase !== "standard"
}
