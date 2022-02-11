function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // clear input field
    depositInput.value = '';

    return depositAmount;
}


document.getElementById('deposit-button').addEventListener('click', function () {
    // deposit input value
    const depositAmount = getInputValue();

    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmount + previousDepositTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerHTML;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdreawAmuont = parseFloat(withdrawAmountText);

    // update total withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerHTML;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdreawAmuont + previousWithdrawTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerHTML;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerHTML = previousBalanceTotal - withdreawAmuont;

    // clear withdraw input field
    withdrawInput.value = '';
})