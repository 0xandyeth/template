const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    principal:{type:Number,required:true},
    interest_rate:{type:Number,required:true},
    loan_term:{type:Number,required:true},
    m_payment:{type:Number,required:true},
    d_payment:{type:Number,required:true},

})

const Loan = mongoose.model('loans',loanSchema);
module.exports = Loan;