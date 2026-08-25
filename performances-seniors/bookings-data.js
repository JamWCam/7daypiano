/* SHARED BOOKING DATA — 7daypiano.com
   Used by both performance-seniors and (later) performances-wedding-corporate.
   Edit this ONE file to update the calendar everywhere it appears —
   no need to touch either page's own code.

   To add a booking: copy a line and change the date and label.
   Month is 0-indexed in JavaScript: Jan=0, Feb=1, Mar=2, Apr=3, May=4, Jun=5,
   Jul=6, Aug=7, Sep=8, Oct=9, Nov=10, Dec=11.
   Format: new Date(YEAR, MONTH, DAY)
*/

const bookedDatesList = [
  {date:new Date(2026,7,28), label:'Temple City Villa — 5 PM'},
  {date:new Date(2026,8,5), label:'Golden Sheaf — Rock Band'},
  {date:new Date(2026,8,19), label:'Coalhurst Legion — Rebel Angels 50s Band'},
  {date:new Date(2026,8,26), label:'Wedding Show, Seven Persons AB'},
  {date:new Date(2026,9,2), label:'Lethbridge Casino — Smoke Shadow Band'},
  {date:new Date(2026,9,3), label:'Lethbridge Casino — Smoke Shadow Band'},
  {date:new Date(2026,9,16), label:'Private Wedding — Rebel Angels 50s Band'},
  {date:new Date(2026,11,11), label:'Lethbridge Casino — Rebel Angels 50s Band'},
  {date:new Date(2026,11,12), label:'Lethbridge Casino — Rebel Angels 50s Band'},
  {date:new Date(2026,11,31), label:"New Year's Dance (TBA) — Smoke Shadow Band"}
];
