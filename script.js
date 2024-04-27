const passkey = "joseyismyworld"; // Replace "your_passkey" with your desired passkey

function checkPasskey() {
    const passkeyInput = document.getElementById("passkeyInput").value;
    const errorMessage = document.getElementById("errorMessage");

    if (passkeyInput === passkey) {
        window.location.href = "success.html"; // Redirect to success page
    } else {
        errorMessage.textContent = "Incorrect passkey. Please try again.";
    }
}
