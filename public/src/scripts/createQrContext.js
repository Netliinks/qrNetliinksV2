export const createQrContext = () => {
    const qrContainer = document.querySelector('.qr_container');
    qrContainer.innerHTML = "";
    const QR = document.createElement('qr');
    qrContainer.appendChild(QR);
};
