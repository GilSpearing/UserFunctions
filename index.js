const nodemailer = require("nodemailer");

const fs = require('fs');

const UserMethods = {
	sendEmail(emailprovider, emailFrom, emailFromPassword, arrayRecipients, subject, contentType, routeToContentFile){
		try {
			if( typeof(subject) === 'string' && typeof(emailprovider) === 'string' && typeof(emailFrom) === 'string' 
				&& typeof(emailFromPassword) === 'string' //&& arrayRecipients.isArray() 
				&& typeof(contentType) === 'string' && typeof(routeToContentFile) === 'string'){
				var transporter = nodemailer.createTransport({
			      service: emailprovider,
			      auth: {
			        user: emailFrom,
			        pass: emailFromPassword
			      }
			    });

			    var mailOptions = {
			      from: emailFrom,
			      to: arrayRecipients,
			      subject: subject,
			    };

			    let emailContent;

			    if (typeof(routeToContentFile) === 'string'){
			    	emailContent = fs.readFileSync(routeToContentFile);
			    } else {
			    	throw new Error('must have string route to email content');
			    }

			    if (contentType === 'html'){
			    	mailOptions.html = emailContent;
			    } else if (contentType === 'text') {
			    	mailOptions.html = emailContent;
			    } else {
			    	throw new Error('please enter valid content type for mail')
			    }

			    transporter.sendMail(mailOptions, function(error, info){
			      if (error) {
			        console.log(error);
			      } else {
			        console.log('Email sent: ' + info.response);
			      }
			    });
			} else {
				throw new Error('inputs not valid')
			}
		} catch (err) {
			console.log(err)
		}
	}
}




module.exports = {
	UserMethods
};