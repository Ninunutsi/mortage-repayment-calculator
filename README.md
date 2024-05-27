# Mortgage Repayment calculator

This is a simple command-line mortgage repayment calculator written in JavaScript. The calculator collects user input for the principal loan amount, annual interest rate, loan term, and repayment frequency, then calculates and displays the total repayment, total interest, and periodic payment amount.

## Features
- User-Friendly Interface: Uses readline to gather input via the terminal.
- Input Validation: Ensures all inputs are numeric and within expected ranges.
- Repayment Frequency Options: Supports both monthly and bi-weekly repayment schedules.
- Detailed Output: Provides a summary of loan details and repayment calculations.

## Installation

Clone the repository

```bash
git clone https://github.com/Ninunutsi/mortgage-repayment-calculator.git
```

Navigate to the project directory
```bash
cd mortgage-calculator
```
## Usage
Run the calculator:

```node.js
node mortgageCalculator.js
```

## Example Result
```node.js
What is your name: John
John, how much money would you like to borrow? 300000
Enter annual interest rate (in %): 3.5
How many years will you be paying for: 30
Enter Repayment Frequency (monthly, bi-weekly):
0: monthly
1: bi-weekly
Please choose Repayment Frequency (0 or 1): 0

Hello, John,

    You are considering borrowing money.

    - Principal Amount: 300000 
    - Annual Interest Rate: 3.5%
    - Loan Term: 30 years
    - Repayment Frequency: monthly  

Processing . . .

Done. Results are visible below.

Total Repayment is: 484968.93 
Total Interest is: 184968.93 
Monthly payment is: 1347.13
```

