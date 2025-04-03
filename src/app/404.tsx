"use-client";

import React from 'react';
// import { Container, Link as RadixLink, Button } from '@radix-ui/react';
import { styled } from '@stitches/react';
import { Button, Link, Container } from '@radix-ui/themes';

const RootContainer = styled(Container, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
});

const TitleTypography = styled('h4', {
  marginBottom: '$2',
});

const ButtonContainer = styled('div', {
  marginTop: '$2',
});

export default function NotFound() {
  return (
    <RootContainer>
      <TitleTypography>
        Oops! Page Not Found
      </TitleTypography>
      <p>
        The requested resource could not be found.
      </p>
      <ButtonContainer>
        {/* <RadixLink href="/"> */}
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
        {/* </RadixLink> */}
      </ButtonContainer>
    </RootContainer>
  );
}
