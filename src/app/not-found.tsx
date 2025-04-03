"use-client";

import React from 'react';
import { styled } from '@stitches/react';
import { Link, Container } from '@radix-ui/themes';
import { Text } from '@radix-ui/themes';

const NotFoundContainer = styled(Container, {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  fontFamily: 'sans-serif',
  background: 'linear-gradient(to right, #f06, #9f6)',
  color: 'white',
});

const Description = styled(Text, {
  fontSize: '1.5rem',
  marginBottom: '2rem',
  maxWidth: '80ch',
  textAlign: 'center',
});

const HomeLink = styled(Link, {
  fontSize: '1.25rem',
  textDecoration: 'none',
  color: '#fff',
  padding: '8px 20px',
  borderRadius: '4px',
  background: '#009688',
  transition: 'background 0.3s ease',
  '&:hover': {
    background: '#007a68',
  },
});
  
export default function Custom404() {
	return (
	  <NotFoundContainer>
      <br /><br />
      <Text size="7"><strong>404 - Page Not Found</strong></Text>
      <br /><br /><br />
      <Description>Oops! The page you are looking for does not exist.</Description><br />
      <Description>You can try adding a real providerId on the url to fix this issue.</Description>
      <br /><br />
      <HomeLink href="/">Go back to home</HomeLink>
	  </NotFoundContainer>
	);
};
