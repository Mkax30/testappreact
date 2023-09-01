import React from "react";
import {QRCodeCanvas} from "qrcode.react";

interface QRCodeComponentProps {
    data: string;
}

const QRCodeComponent: React.FC<QRCodeComponentProps> = ({ data }) => {
    return (
        <div>
            <h1>QR Code Example</h1>
            <QRCodeCanvas value={data} />
        </div>
    );
};

export default QRCodeComponent;