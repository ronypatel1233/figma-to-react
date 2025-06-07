import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  max-width: 900px;
  margin: 60px auto 0 auto;
  padding: 0 16px;
  font-family: 'Mulish', sans-serif;
`;

const Small = styled.small`
  display: block;
  color: #666;
  font-size: 18px;
  margin-bottom: 40px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 24px;
  justify-content: center;
`;

const Col = styled.div`
  flex: 1 1 320px;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #bfcfd2;
  background: transparent;
  font-size: 18px;
  padding: 12px 0;
  outline: none;
  font-family: inherit;
`;

const Select = styled.select`
  border: none;
  border-bottom: 2px solid #bfcfd2;
  background: transparent;
  font-size: 18px;
  padding: 12px 0;
  outline: none;
  font-family: inherit;
`;

const Textarea = styled.textarea`
  border: none;
  border-bottom: 2px solid #bfcfd2;
  background: transparent;
  font-size: 18px;
  padding: 12px 0;
  outline: none;
  font-family: inherit;
  resize: none;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #ff7a00 0%, #ffb347 100%);
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  border: none;
  border-radius: 32px;
  padding: 16px 70px;
  cursor: pointer;
  transition: background 0.2s;
  margin: 0 auto;
  display: block;
  margin-bottom: 40px;
`;

const ErrorMsg = styled.div`
  color: red;
  text-align: center;
  margin-top: 16px;
  font-size: 16px;
`;

const Contact = () => {
  const [form, setForm] = useState({
    firstname: '',
    last_name: '',
    email: '',
    phone: '',
    budget: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // Clear error on change
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const res = await fetch('http://3.7.81.243:3253/api/contact/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess('Your message has been sent!');
        setForm({
          firstname: '',
          last_name: '',
          email: '',
          phone: '',
          budget: '',
          description: ''
        });
      } else {
        setError(data.message || data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <ContactSection id="contact">
      <Small>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
      </Small>
      <Form onSubmit={handleSubmit}>
        <Col>
          <Input
            name="firstname"
            placeholder="First Name"
            value={form.firstname}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            placeholder="Mail"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
          />
          <Select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            required
          >
            <option value="">Budget</option>
            <option value="Below 10k">Below 10k</option>
            <option value="10k-50k">10k-50k</option>
            <option value="50k-1L">50k-1L</option>
            <option value="Above 1L">Above 1L</option>
          </Select>
        </Col>
        <Col>
          <Input
            name="last_name"
            placeholder="Last Name"
            value={form.last_name}
            onChange={handleChange}
            required
          />
          <Input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <Textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            rows={1}
            required
          />
        </Col>
        <ButtonWrapper>
          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Sending...' : ''}
          </SubmitButton>
        </ButtonWrapper>
      </Form>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {success && <div style={{ color: 'green', textAlign: 'center', marginTop: 16 }}>{success}</div>}
    </ContactSection>
  );
};

export default Contact;
