import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { layout } from '../utils/constants';
import bdvLogo from '../images/logos/bdv-horizontal-white.svg';
import spotify from '../images/logos/external/spotify.png';
import pocketCasts from '../images/logos/external/pocket-casts.png';
import castbox from '../images/logos/external/castbox.png';
import anchor from '../images/logos/external/anchor.png';

export default () => (
  <header
    css={css`
      background: #020304;
      margin-bottom: 1.45rem;
    `}
  >
    <HeaderInner>
      <LogoContainer>
        <Title>
          <Link to="/" css={css({ boxShadow: 'none' })}>
            <Logo src={bdvLogo} title="Title" />
          </Link>
        </Title>
      </LogoContainer>
      <Nav>
        <Link to="/">Episódios</Link>
        <Bullet />
        <Link to="/episode/tags">Tags</Link>
        <Bullet />
        <a
          href="https://twitter.com/BarraDeVida"
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter
        </a>
        <Bullet />
        <a
          href="https://open.spotify.com/show/15fzVVtEkHnvNn5VwAiKyo?si=OFNPGb2IQeup_C7fIHfC7Q"
          rel="noopener noreferrer"
          target="_blank"
        >
          Spotify
          {'  '}
          <img
            src={spotify}
            css={css`
              max-width: inherit;
              width: 20px;
              height: 20px;
              margin: 0;
              margin-left: 2px;
              margin-bottom: -5px;
            `}
          />
        </a>
        <Bullet />
        <a
          href="https://pca.st/rgMwqM"
          rel="noopener noreferrer"
          target="_blank"
        >
          Pocket Casts
          {'  '}
          <img
            src={pocketCasts}
            css={css`
              max-width: inherit;
              width: 20px;
              height: 20px;
              margin: 0;
              margin-left: 2px;
              margin-bottom: -5px;
            `}
          />
        </a>
        <Bullet />
        <a
          href="https://castbox.fm/channel/Gueimers-id2663324?country=us"
          rel="noopener noreferrer"
          target="_blank"
        >
          Castbox
          {'  '}
          <img
            src={castbox}
            css={css`
              max-width: inherit;
              width: 20px;
              height: 20px;
              margin: 0;
              margin-left: 2px;
              margin-bottom: -5px;
            `}
          />
        </a>
        <Bullet />
        <a
          href="https://anchor.fm/barradevida"
          rel="noopener noreferrer"
          target="_blank"
        >
          Outros agregadores
          {'  '}
          <img
            src={anchor}
            css={css`
              max-width: inherit;
              width: 20px;
              height: 20px;
              margin: 0;
              margin-left: 2px;
              margin-bottom: -5px;
            `}
          />
        </a>
      </Nav>
    </HeaderInner>
  </header>
);

const HeaderInner = styled('div')`
  max-width: ${layout.width}px;
  margin: 0 auto;
  padding: 1.75rem ${layout.paddingY} 1.45rem ${layout.paddingY};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

const LogoContainer = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const Logo = styled('img')`
  max-height: 100px;
  width: 450px;
  height: auto;
  margin: 15px 0;
`;

const Title = styled('h1')`
  font-family: 'Bangers', 'Press Start 2P', monospace, serif;
  font-weight: normal;
  letter-spacing: 1px;
  margin: 0;
  margin-bottom: 15px;
  a {
    box-shadow: none;
    color: #dde1e2;
    &:hover {
      box-shadow: inherit;
      color: white;
    }
  }
`;

const Nav = styled('nav')`
  a {
    color: #dde1e2;
    box-shadow: none;
    &:hover {
      text-decoration: underline;
      color: white;
    }
  }
`;

const Bullet = () => (
  <span
    css={css`
      display: inline-block;
      margin: 0 10px;
      color: #fff;
    `}
  >
    &bull;
  </span>
);
