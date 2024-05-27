const readline = require('readline'); // takes input via terminal
// Mortgage repayment calculator


// Create an interface for input and output via the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask a question and return a promise that resolves with the user's answer
const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

// Function to validate if the input is a number
const validateInput = (input) => {
    if(!isNaN(parseFloat(input))){
        return true
    }else{
        console.log("Please enter a numeric value")
        return false
    }
}

// Array for repayment frequency options
const arr = ['monthly', 'bi-weekly']

// This function displays the user inputs
const userDetailsDisplay = (name, principal, annual_interest_rate, loan_term, repayment_frequency) => {
    let frequency = repayment_frequency == 1 ? "bi-weekly" : "monthly"
    return `Hello, ${name}, \nYou are considering borrowing money.\n
    - Principal Amount: ${principal} 
    - Annual Interest Rate: ${annual_interest_rate}%
    - Loan Term: ${loan_term} years
    - Repayment Frequency: ${frequency}  
    `;
};

// Function to calculate the mortgage details
const calculation = (principal, annual_interest_rate, loan_term, repayment_frequency) => {
    principal = parseFloat(principal)
    annual_interest_rate = parseFloat(annual_interest_rate)
    loan_term = parseFloat(loan_term)
    repayment_frequency = parseInt(repayment_frequency)

    let r, n, paymentAmount, totalRepayment, totalInterest, partly, frequency
    annual_interest_rate = annual_interest_rate / 100

    // Determine monthly or bi-weekly repayment frequency
    if(repayment_frequency == 0){
        frequency = "Montly"
        r = annual_interest_rate / 12 // Monthly interest rate
        n = loan_term * 12 // Total number of monthly payments
    }else{
        frequency = "Bi-montly"
        r = annual_interest_rate / 26 // Bi-weekly interest rate
        n = loan_term * 26 // Total number of bi-weekly payments
    }

    // Calculate the monthly/bi-weekly payment amount using the mortgage formula
    paymentAmount = principal * (r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1)

     // Calculate total repayment and total interest paid over the loan term
    totalRepayment = paymentAmount * n;
    totalInterest = totalRepayment - principal;
    
    partly = totalRepayment / n

    return `Total Repayment is: ${totalRepayment.toFixed(2)} \nTotal Interest is: ${totalInterest.toFixed(2)} \n${frequency} payment is: ${partly.toFixed(2)}`

}

// Function to gather information from the user
const gatherInformation = async () => {
    try{   
        let annual_interest_rate, principal, loan_term, repayment_frequency
        const name = await askQuestion("What is your name: ")

        // Loop to ensure valid principal input
        do{
            principal = await askQuestion(`${name}, how much money would you like to borrow? `)
        }while(!validateInput(principal)) 

        // Loop to ensure valid annual interest rate input
        do{
            annual_interest_rate = await askQuestion(`Enter anual interest rate (in %): `)
        }while(!validateInput(annual_interest_rate))     

        // Loop to ensure valid loan term input
        do{
            loan_term = await askQuestion('How many years will you be paying for: ')
        }while(!validateInput(loan_term))  

        // Loop to ensure valid repayment frequency input
        do{
            console.log("Enter Repayment Frequency (monthly, bi-weekly): ")
            arr.forEach((item, index) => {
                console.log(`${index}: ${item}`)
            })
            repayment_frequency = await askQuestion("Please choose Repayment Frequency (0 or 1): ")
        }while(!(repayment_frequency == "1" || repayment_frequency == "0"))

        // Display user details
        console.log(userDetailsDisplay(name, principal, annual_interest_rate, loan_term, repayment_frequency))
        console.log("Processing . . .")
        // fake loading time to create ilussion that calculations are processing.
        setTimeout(() => {
            console.log("\nDone. Results are visible below.\n")
            // Display the calculation results
            console.log(calculation(principal, annual_interest_rate, loan_term, repayment_frequency))
        },1000)
    }catch(err){
        console.log(err)
    }finally{

    }
    rl.close() // Close the readline interface
}

gatherInformation() // Start gathering information from the user