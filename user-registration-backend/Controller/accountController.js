// controllers/bankController.js
const https = require('https');

exports.verifyBankAccount = (req, res) => {
    // Extract bank account number and IFSC code from request body
    const { bank_account_no, bank_ifsc_code } = req.body;

    const options = {
        method: 'POST',
        hostname: 'indian-bank-account-verification.p.rapidapi.com',
        port: null,
        path: '/v3/tasks/async/verify_with_source/validate_bank_account',
        headers: {
            'x-rapidapi-key': 'e140319af7msh2f0fbd7d73d443cp119272jsnd01a051ac171', // Use your own key here
            'x-rapidapi-host': 'indian-bank-account-verification.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    const apiReq = https.request(options, function (apiRes) {
        const chunks = [];

        apiRes.on('data', function (chunk) {
            chunks.push(chunk);
        });

        apiRes.on('end', function () {
            const body = Buffer.concat(chunks);
            const response = JSON.parse(body.toString());
            // Send the API response back to the client
            res.json(response);
        });
    });

    apiReq.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
        res.status(500).json({ message: 'Internal server error', error: e.message });
    });

    // Send the request body data to the external API
    apiReq.write(JSON.stringify({
        task_id: '123', // Replace with actual task ID if needed
        group_id: '1234', // Replace with actual group ID if needed
        data: {
            bank_account_no,
            bank_ifsc_code
        }
    }));

    // End the request
    apiReq.end();
};
