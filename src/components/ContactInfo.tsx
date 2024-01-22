// ContactInfo.tsx
import React from 'react';
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
interface ContactInfoProps {
    contact: {
        email: string;
        phoneNumber: string;
    };
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contact }) => {
    const { email, phoneNumber } = contact;

    return (
        <div className={"center contact"}>
            <div className={"textIcon"}>
                <IoMail/>
                <p>{email}</p>
            </div>
            <div className={"textIcon"}>
                <FaPhone />
                <p>{phoneNumber}</p>
            </div>
        </div>
    );
};

export default ContactInfo;
