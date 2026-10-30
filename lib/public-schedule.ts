export type PublicScheduleEvent = {
  id: string
  date: string
  time: string
  title: string
  description?: string
  type: "class" | "member" | "closure"
  href?: string
  location?: string
}

export type PublicScheduleMonth = {
  id: string
  label: string
  events: PublicScheduleEvent[]
}

export const PUBLIC_SCHEDULE: PublicScheduleMonth[] = [
  {
    id: "2026-11",
    label: "November 2026",
    events: [
      { id: "nov-5-futures", date: "Thu, Nov 5", time: "1:00-3:00 PM ET", title: "Futures Class", type: "class", href: "/programs#futures-drip" },
      { id: "nov-7-meetup", date: "Sat, Nov 7", time: "10:00 AM-12:00 PM ET", title: "Dripper Meetup", description: "Community gathering for current Drippers.", type: "member", href: "/community", location: "In Office" },
      { id: "nov-9-premarket", date: "Mon, Nov 9", time: "6:00-8:00 AM ET", title: "The Premarket Drip", type: "class", href: "/programs#premarket-drip" },
      { id: "nov-11-first", date: "Wed, Nov 11", time: "1:00-3:30 PM ET", title: "First Drip", description: "Beginner day trading class.", type: "class", href: "/programs#first-drip" },
      { id: "nov-12-graduation", date: "Thu, Nov 12", time: "1:00-3:00 PM ET", title: "Dripper Graduation", description: "Second class graduation celebration.", type: "member", href: "/community" },
      { id: "nov-14-swing", date: "Sat, Nov 14", time: "1:00-3:00 PM ET", title: "Swing Drip", type: "class", href: "/programs#swing-drip" },
      { id: "nov-19-futures", date: "Thu, Nov 19", time: "1:00-3:00 PM ET", title: "Futures Class", type: "class", href: "/programs#futures-drip" },
      { id: "nov-23-premarket", date: "Mon, Nov 23", time: "6:00-8:00 AM ET", title: "The Premarket Drip", type: "class", href: "/programs#premarket-drip" },
      { id: "nov-closure", date: "Nov 24-27", time: "All day", title: "Office Closed", description: "No classes, appointments, or new bookings.", type: "closure" },
    ],
  },
  {
    id: "2026-12",
    label: "December 2026",
    events: [
      { id: "dec-3-futures", date: "Thu, Dec 3", time: "1:00-3:00 PM ET", title: "Futures Class", type: "class", href: "/programs#futures-drip" },
      { id: "dec-5-meetup", date: "Sat, Dec 5", time: "10:00 AM-12:00 PM ET", title: "Monthly Dripper Meetup", description: "Community gathering for current Drippers.", type: "member", href: "/community", location: "In Office" },
      { id: "dec-7-premarket", date: "Mon, Dec 7", time: "6:00-8:00 AM ET", title: "The Premarket Drip", type: "class", href: "/programs#premarket-drip" },
      { id: "dec-10-amac", date: "Thu, Dec 10", time: "1:00-3:00 PM ET", title: "AMAC Strategy", type: "class", href: "/programs#amac-strategy" },
      { id: "dec-11-completion", date: "Fri, Dec 11", time: "Date only", title: "5% Daily Drip Six-Month Completion", description: "Completion milestone and certificate recognition for the July cohort.", type: "member", href: "/community" },
      { id: "dec-17-swing", date: "Thu, Dec 17", time: "1:00-3:30 PM ET", title: "Swing Drip", type: "class", href: "/programs#swing-drip" },
      { id: "dec-19-kids", date: "Sat, Dec 19", time: "1:00-3:00 PM ET", title: "Kids Drip Follow-Up", description: "Follow-up session for current participants.", type: "member", href: "/community" },
      { id: "dec-21-premarket", date: "Mon, Dec 21", time: "6:00-8:00 AM ET", title: "The Premarket Drip", type: "class", href: "/programs#premarket-drip" },
      { id: "dec-closure-1", date: "Dec 23-25", time: "All day", title: "Office Closed", description: "No classes, appointments, or new bookings.", type: "closure" },
      { id: "dec-closure-2", date: "Dec 28-31", time: "All day", title: "Office Closed", description: "No classes, appointments, or new bookings.", type: "closure" },
    ],
  },
]
