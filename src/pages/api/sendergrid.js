import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "tspavan01@gmail.com", // Your email where you'll receive emails
      from: "srinidhiindustries007@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>
      <h3>Name : ${req.body.name}</h3>
      <h3>phoneno : ${req.body.phoneno}</h3>
      <h3>emailId : ${req.body.emailId}</h3>
      <h3>find us : ${req.body.find}</h3>
      <h3>Company : ${req.body.companyName}</h3>
      <h3>City : ${req.body.city}</h3>
      <h3>Message : ${req.body.message}</h3>
      </div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;