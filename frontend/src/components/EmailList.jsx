import React from 'react';

const EmailList = ({ emails = [], onDelete }) => {
  return (
    <div>
      {emails.length > 0 ? (
        emails.map((email) => (
          <div key={email._id}>
            <h3>{email.subject}</h3>
            <p>{email.body}</p>
            <button onClick={() => onDelete(email._id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No emails available.</p>
      )}
    </div>
  );
};

export default EmailList;
