import React from 'react';
import { useSelector } from 'react-redux';
import './Notification.css';

export default function Notification() {
  const { message, error } = useSelector((state) => state.notification);

  if (!message) return null;

  return (
    <div className={`Notification ${(error) ? 'Error' : 'Success'}`}>
      {message}
    </div>
  );
}
