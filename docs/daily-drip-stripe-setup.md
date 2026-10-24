# 5% Daily Drip™ Stripe setup

## Production webhook

Endpoint URL:

`https://www.arlettathefriendlytrader.com/api/stripe/webhooks/daily-drip`

Pin the Stripe webhook endpoint to API version `2026-09-30.endive` and subscribe only to:

- `checkout.session.completed`
- `checkout.session.async_payment_succeeded`
- `checkout.session.async_payment_failed`

The endpoint reads the raw request body and verifies the `Stripe-Signature` header before processing an event.

## Required Vercel environment variables

Never commit real secret values to the repository.

- `STRIPE_SECRET_KEY`
- `STRIPE_DAILY_DRIP_WEBHOOK_SECRET`
- `STRIPE_DAILY_DRIP_FLASH_PAYMENT_LINK_ID`
- `STRIPE_DAILY_DRIP_EARLY_PAYMENT_LINK_ID` — required when Tier 2 webhook processing is enabled
- `STRIPE_DAILY_DRIP_ENROLLMENT_FEE_PRICE_ID`
- `STRIPE_DAILY_DRIP_TUITION_PRICE_ID`
- `STRIPE_DAILY_DRIP_EARLY_TUITION_PRICE_ID` — recurring $299 monthly Price for Tier 2
- `STRIPE_DAILY_DRIP_LIVEMODE` — use `false` in the sandbox and `true` in production
- `STRIPE_DAILY_DRIP_TEST_ALLOW_OUTSIDE_WINDOW` — optional; set to `true` only with test-mode IDs so prelaunch sandbox events can run
- `STRIPE_DAILY_DRIP_FLASH_PAYMENT_LINK_URL`
- `STRIPE_DAILY_DRIP_EARLY_PAYMENT_LINK_URL`

Reserved for the standard enrollment window:

- `STRIPE_DAILY_DRIP_STANDARD_PAYMENT_LINK_URL`

After adding or changing environment variables, redeploy the Vercel project.

## Payment Link requirements

Each promotional Payment Link must:

- Use the configured one-time $99 enrollment-fee Price and quantity 1.
- Always create a Stripe Customer.
- Save the payment method with `setup_future_usage=off_session`.
- Accept only Card/Link, Cash App Pay, or Klarna payment methods that Stripe returns as reusable and attached to the Checkout Customer. The webhook rejects unsupported or non-reusable methods.
- Have promotion codes, adjustable quantity, optional items, and automatic tax disabled so the total remains exactly $99.
- Display the authorization for six separate automatic tuition payments beginning January 1, 2027: $99 monthly for Tier 1 or $299 monthly for Tier 2.

The website link must remain unset until the sandbox checklist passes. At the deadline, deactivate the Payment Link in Stripe as well as relying on the website and webhook cutoff.

## Sandbox verification checklist

Create test-mode versions of both Prices and the Payment Link. Use test IDs and a test webhook secret in a local or Vercel Preview environment.

Because sandbox testing occurs before October 27, set `STRIPE_DAILY_DRIP_LIVEMODE=false` and `STRIPE_DAILY_DRIP_TEST_ALLOW_OUTSIDE_WINDOW=true` in that test environment. The bypass cannot apply when livemode is `true`.

1. Confirm checkout charges only the one-time $99 enrollment fee.
2. Confirm the Checkout Session was created by the expected test `plink_…` ID.
3. Confirm the PaymentIntent is `succeeded`, has `setup_future_usage=off_session`, and its card or Link PaymentMethod is attached to the Customer.
4. Confirm one subscription schedule is created with a January 1, 2027 start, the correct monthly item ($99 for Tier 1 or $299 for Tier 2), a six-month duration, and `end_behavior=cancel`.
5. Confirm the schedule represents January through June billing and ends before a July renewal invoice.
6. Resend the same webhook event and confirm no second schedule appears.
7. Complete checkout again with the same email and confirm no second cohort schedule appears.
8. Send a signed test event with the wrong Payment Link ID and confirm it is ignored.
9. Test an invalid or missing reusable card and confirm the Customer, Checkout Session, and PaymentIntent receive `atft_daily_drip_status=scheduling_failed`, the webhook returns HTTP 500, and the failed delivery is visible for recovery in Stripe Workbench.
10. Confirm Tier 1 events outside October 27–29 Eastern and Tier 2 events outside October 30–December 15 Eastern are rejected and create no schedule.

Do not put the live Payment Link URL into the production environment until this checklist passes. Before launch, perform one controlled live-mode enrollment and inspect the resulting schedule before making the link public.

## Recovery and duplicate controls

The integration stores cohort, Checkout Session, webhook event, and schedule IDs as Stripe metadata. It searches all Customers sharing the normalized checkout email for an existing schedule carrying the same cohort metadata, then uses a hashed-email Stripe idempotency key to protect concurrent or repeated attempts. It never updates or cancels an existing Mighty-managed subscription and sets the saved card only on the new tuition schedule.

If schedule creation fails, the webhook records `scheduling_failed` metadata when possible, logs the event and Checkout Session IDs, and returns HTTP 500 so Stripe retries the event. Review failed deliveries in Stripe Workbench before manually creating any schedule.
