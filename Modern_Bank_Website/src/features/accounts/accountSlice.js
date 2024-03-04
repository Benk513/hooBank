const initialStateAcount = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
};

export default function accountReducerr(state = initialStateAcount, action) {
    switch (action.type) {
        case "account/deposit":
            return { ...state, balance: state.balance + action.payload };
        case "account/withdraw":
            return {
                ...state, balance: state.balance - action.payload
            };
        case "account/requestLoan":
            if (state.loan > 0) return state;
            //Later
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount,
            };
        
        case "account/payLoan":
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan,
            };
        
        default:
            return state;
    }
}


export function deposit(amount) {
    return { type: "account/deposit", payload: amount };
}
export function withdraw(amount) {
    return { type: "account/deposit", payload: amount };
}
export function requestLoan(amount,purpose) {
    return { type: "account/deposit", payload: {amount,purpose} , };
}

export function payLoan() {
    return { type: "account/payLoan" };
}