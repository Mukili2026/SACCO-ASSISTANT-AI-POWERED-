// Install with: npm i flutterwave-node-v3

const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);
const payload = {
    phone_number: '054709929220',
    network: "MTN",
    amount: 1500,
    currency: 'UGX',
    email: 'JoeBloggs@acme.co',
    tx_ref: this.generateTransactionReference(),
}
flw.MobileMoney.uganda(payload)
    .then(console.log)
    .catch(console.log);
