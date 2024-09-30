import React, { useEffect, useState } from 'react';
import { getAllEmails, deleteEmail } from '../api/emailApi';
import EmailList from './EmailList';

const Onebox = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    async function fetchEmails() {
      const emailData = await getAllEmails();
      setEmails(emailData);
    }
    fetchEmails();
  }, []);

  const handleDelete = async (id) => {
    await deleteEmail(id);
    setEmails(emails.filter((email) => email._id !== id));
  };

  return (
    <div>
      <h2>Onebox</h2>
      <EmailList emails={emails} onDelete={handleDelete} />
    </div>
  );
};

export default Onebox;
