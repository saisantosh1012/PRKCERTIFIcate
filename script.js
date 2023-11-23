function verifyCertificate() {
    const certificateNumberInput = document.getElementById('certificateNumber');
    const verificationResult = document.getElementById('verificationResult');
    const certificateDisplay = document.getElementById('certificateDisplay');

    // Simulate server-side verification (replace with actual server-side logic)
    const serverCertificateNumbers = ['123456', '000111', '345678'];
    const userEnteredNumber = certificateNumberInput.value;

    if (serverCertificateNumbers.includes(userEnteredNumber)) {
        verificationResult.innerHTML = 'Verified';
        verificationResult.style.color = 'green';

        // Simulate fetching and displaying the certificate
        certificateDisplay.innerHTML = `<img src="certificate_${userEnteredNumber}.png" alt="Certificate">`;
        certificateDisplay.style.display = 'block';
    } else {
        verificationResult.innerHTML = 'Not Verified';
        verificationResult.style.color = 'red';
        certificateDisplay.style.display = 'none';
    }
}
