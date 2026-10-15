

/* ===== Integration points: replace these bodies to connect real services ===== */
export async function createOrder(order){await new Promise(r=>setTimeout(r,900));return {id:'LP-'+Date.now().toString(36).toUpperCase()}} /* Stripe / Razorpay */

export async function sendMessage(msg){await new Promise(r=>setTimeout(r,700))} /* email service */

export async function subscribe(email){await new Promise(r=>setTimeout(r,500))} /* newsletter provider */
