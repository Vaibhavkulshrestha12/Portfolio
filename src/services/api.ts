const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api'  
  : 'http://localhost:3000/api';

export const sendContactForm = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
};