import { InterfaceElement } from "./types.js"

export const createQrContext = (): void => {
  const qrContainer: InterfaceElement =
    document.querySelector('.qr_container')
    qrContainer.innerHTML = ""
  const QR: InterfaceElement =
    document.createElement('qr')
    qrContainer.appendChild(QR)
}