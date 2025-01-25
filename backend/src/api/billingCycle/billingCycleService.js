const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })
BillingCycle.after('post', errorHandler).after('put', errorHandler) // middleware -> Error Messages

// GET route - filtered by email
BillingCycle.route('get', (req, res, next) => {
    const { email } = req.decoded;
    const query = email ? { userEmail: email } : {};  // Filter by email if provided

    BillingCycle.find(query, (err, docs) => {
        if (!err) {
            res.json(docs);
        } else {
            res.status(500).json({ errors: [err] });
        }
    });
});


// COUNT route - filtered by email
BillingCycle.route('count', (req, res, next) => {
    const { email } = req.decoded;
    const query = email ? { userEmail: email } : {};  // Filter by email if provided

    BillingCycle.count(query, (error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] });
        } else {
            res.json({ value });
        }
    });
});

// SUMMARY route - filtered by email
BillingCycle.route('summary', (req, res, next) => {

    const { email } = req.decoded;
    const query = email ? { userEmail: email } : {};  // Filter by email if provided

    BillingCycle.aggregate([
        { 
            $match: query  // Match by userEmail if provided
        },
        { 
            $project: {
                credit: { $sum: "$credits.value" },
                debt: { $sum: "$debts.value" }
            }
        },
        { 
            $group: {
                _id: null,
                credit: { $sum: "$credit" },
                debt: { $sum: "$debt" }
            }
        },
        { 
            $project: { _id: 0, credit: 1, debt: 1 }
        }
    ], (error, result) => {
        if (error) {
            res.status(500).json({ errors: [error] });
        } else {
            res.json(result[0] || { credit: 0, debt: 0 });
        }
    });
});

// POST route to create a new BillingCycle
BillingCycle.route('post', (req, res, next) => {
    const { email } = req.decoded; // Assuming the user is authenticated and their email is in the decoded JWT
    const { name, month, year, credits, debts } = req.body; // Destructure necessary data from request body

    // Creating a new BillingCycle document
    const billingCycle = new BillingCycle({
        userEmail: email, // Associate the BillingCycle with the user's email
        name,
        month,
        year,
        credits,
        debts
    });

    // Save the new BillingCycle to the database
    billingCycle.save((err, doc) => {
        if (err) {
            // If there's an error saving the document, send a 500 status code and the error message
            res.status(500).json({ errors: [err] });
        } else {
            // If the document is saved successfully, send a 201 status code and the saved document
            res.status(201).json(doc);
        }
    });
});

module.exports = BillingCycle;