import assert from "node:assert/strict"
import test from "node:test"
import { DAILY_DRIP_FLASH_END_EXCLUSIVE, DAILY_DRIP_FLASH_START, DAILY_DRIP_TUITION_START, getCurrentDailyDripTier, isDailyDripFlashWindow, isDailyDripWaitlistOpen } from "../lib/daily-drip-schedule.ts"

test("flash-sale timestamps use the required Eastern Time boundaries", () => {
  assert.equal(DAILY_DRIP_FLASH_START, Date.parse("2026-10-27T00:00:00-04:00") / 1000)
  assert.equal(DAILY_DRIP_FLASH_END_EXCLUSIVE, Date.parse("2026-10-30T00:00:00-04:00") / 1000)
  assert.equal(DAILY_DRIP_TUITION_START, Date.parse("2027-01-01T00:00:00-05:00") / 1000)
})

test("flash sale opens inclusively and closes before October 30", () => {
  assert.equal(isDailyDripFlashWindow(DAILY_DRIP_FLASH_START - 1), false)
  assert.equal(isDailyDripFlashWindow(DAILY_DRIP_FLASH_START), true)
  assert.equal(isDailyDripFlashWindow(DAILY_DRIP_FLASH_END_EXCLUSIVE - 1), true)
  assert.equal(isDailyDripFlashWindow(DAILY_DRIP_FLASH_END_EXCLUSIVE), false)
})

test("public enrollment phase switches at the same boundaries", () => {
  assert.equal(getCurrentDailyDripTier((DAILY_DRIP_FLASH_START - 1) * 1000), "prelaunch")
  assert.equal(getCurrentDailyDripTier(DAILY_DRIP_FLASH_START * 1000), "flash")
  assert.equal(getCurrentDailyDripTier(DAILY_DRIP_FLASH_END_EXCLUSIVE * 1000), "early")
  assert.equal(getCurrentDailyDripTier(Date.parse("2026-12-16T00:00:00-05:00")), "standard")
})

test("waitlist remains open until standard enrollment begins", () => {
  assert.equal(isDailyDripWaitlistOpen("prelaunch"), true)
  assert.equal(isDailyDripWaitlistOpen("flash"), true)
  assert.equal(isDailyDripWaitlistOpen("early"), true)
  assert.equal(isDailyDripWaitlistOpen("standard"), false)
})
