function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amount = parseFloat(inputAmountText);
    inputField.value = '';
    return amount;
}
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = amount + previousTotal;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerHTML;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}
// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmuont = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmuont > 0 && withdrawAmuont < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmuont);
        updateBalance(withdrawAmuont, false);
    }
    if (withdrawAmuont > currentBalance) {
        console.log('You can not withdraw more than what you have in you accunt');
    }
})