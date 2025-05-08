"use client"
import { useState } from 'react';

import {
    Webchat,
    WebchatProvider,
    Fab,
    getClient,
    Configuration,
} from '@botpress/webchat';

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID || "";

const configuration: Configuration = {
    color: '#000',
};

export default function Chat() {
    const client = getClient({
        clientId,
    });

    const [isWebchatOpen, setIsWebchatOpen] = useState(false);

    const toggleWebchat = () => {
        setIsWebchatOpen((prevState) => !prevState);
    };

    return (
        <div style={{
            position: 'fixed',
            display: 'flex',
            flexDirection: 'column',
            bottom: 0,
            right: 0,
            alignItems: 'flex-end',
            gap: '12px',
            padding: '24px',
            zIndex: 9999,
        }}>
            <WebchatProvider client={client} configuration={configuration}>

                <div
                    style={{
                        marginTop: '12px',
                        marginBottom: '72px',
                        width: '350px',
                        maxHeight: '500px',
                        overflow: 'scroll',
                        transform: isWebchatOpen ? 'scale(1)' : 'scale(0)',
                        transformOrigin: 'bottom right',
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >
                    <Webchat />
                </div>
                <Fab onClick={toggleWebchat} />
            </WebchatProvider>
        </div>
    );
}
