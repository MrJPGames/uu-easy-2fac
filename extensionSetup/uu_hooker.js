// Monkey patch function used to obtain 2fa secret
startEnrollment = function() {
    $('#otp').focus();
    enrollmentStarted = true;
    $.ajax({
        type: 'GET',
        url: '/mfa/totp/setup',
        success: function (data) {
            switch (data.status) {
                case 'success':
                    jQuery('#qr-canvas').qrcode({
                        text: data.qr,
                    });
                    let secretElem = document.createElement("p");
                    let searchParams = new URLSearchParams(data.qr);
                    secretElem.innerText = "Secret: " + searchParams.get("secret");
                    document.getElementById("qr-canvas").appendChild(secretElem);
                    break;
                case 'error':
                    window.location.href = '/mfa/totp';
                    break;
            }
        },
        error: function () {
            window.location.href = '/';
        }
    });
}