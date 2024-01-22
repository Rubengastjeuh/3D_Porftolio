// ContactInfo.tsx
import React from 'react';

interface ContactInfoProps {
    contact: {
        email: string;
        phoneNumber: string;
    };
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contact }) => {
    const { email, phoneNumber } = contact;

    return (
        <div>
            <p>Email: {email}</p>
            <p>Phone: {phoneNumber}</p>
        </div>
    );
};

export default ContactInfo;
