import React from 'react';
import styled from 'styled-components';

const Button = ({ lenis }) => {

const scrollTo = (id) => {
  lenis?.current?.scrollTo(`#${id}`, {
    offset: 0,
    duration: 1.2,
    easing: (t) => 1 - Math.pow(1 - t, 3),
  })
}


  return (
    <StyledWrapper>
      <div className="action-wrap">
        <button className="action" type="button" onClick={() => scrollTo('home')}>
          <svg
            className="action-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" />
            <path d="M21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495" />
          </svg>
          <span className="action-content" data-content="Home" />
        </button>
        <button className="action" type="button" onClick={() => scrollTo('about')}>
          <svg
            className="action-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <circle cx="12" cy="7" r="3" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
          </svg>
          <span className="action-content" data-content="About" />
        </button>
        <button className="action" type="button" onClick={() => scrollTo('product')}>
          <svg
            className="action-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M18.86 5A9.38 9.38 0 0 0 2.64 12.05L3 17v1a4 4 0 0 0 4 4h1a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H7a3.94 3.94 0 0 0-2.36.79A7.37 7.37 0 0 1 12 4a7.37 7.37 0 0 1 7.36 7.79A3.94 3.94 0 0 0 17 11h-1a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h1a4 4 0 0 0 4-4v-1l.36-5A9.43 9.43 0 0 0 18.86 5Z" />
          </svg>
          <span className="action-content" data-content="Product" />
        </button>
        <button className="action" type="button" onClick={() => scrollTo('reviews')}>
          <svg
            className="action-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M9 0H7L5.5129 4.5768H0.7005L0.0825 6.4789L3.9758 9.3076L2.4887 13.8843L4.1068 15.0599L8 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.3075L15.9175 6.4789L15.2994 4.5768H10.4871L9 0Z" />
          </svg>
          <span className="action-content" data-content="Reviews" />
        </button>
        <div className="backdrop" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .action-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 9999px;
  }

  .backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .backdrop::before {
    content: "";
    position: absolute;
    height: 10.5rem;
    width: 10.5rem;
    border-radius: 9999px;
    animation: rotate 1.5s linear infinite;
  }
  .backdrop::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(8px);
    border-radius: 9999px;
    z-index: 1;
  }

  .action {
    --sz-light-hover: 60px;
    --rd-light-hover: 9999px;
    --l-light-hover: 14px;
    --cl-light: #0000;
    --cr-light: #af40ff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      transform,
      color,
      background-color,
      300ms ease;
    height: 3.5rem;
    width: 3.5rem;
    border: none;
    color: #444444;
    background: none transparent;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 9999px;
  }

  .action-icon {
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 9;
    padding: 0.5rem;
    border-radius: 9999px;
    background-color: #f1f1f1;
    transition:
      transform,
      color,
      background,
      300ms ease;
  }

  .action-content {
    --sz-light-hover: 100px;
    --rd-light-hover: 6px;
    --l-light-hover: 0px;
    --cl-light: #fff;
    --cr-light: #af40ff;
    transition:
      transform,
      400ms ease;
    opacity: 0;
    font-size: 1.25rem;
    line-height: 1.5;
    background-color: inherit;
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    flex-direction: row;
    width: max-content;
    height: 1.75rem;
    padding: 8px 1px;
    position: absolute;
    left: 0;
    z-index: -1;
    border: 1px solid #ccc;
  }

  .action-content::before {
    content: attr(data-content);
    transition:
      transform,
      300ms ease;
    text-transform: capitalize;
    font-size: medium;
    font-weight: 600;
    z-index: 1;
    transform: translateX(-100%);
    background-color: #fff;
    border-radius: calc(var(--rd-light-hover) - 2px);
    padding-inline: 4px;
  }

  .action::after,
  .action-content::after {
    content: "";
    opacity: 0;
    position: absolute;
    border-radius: var(--rd-light-hover);
    transition: all 50ms ease 200ms;
    background: conic-gradient(
      from 45deg at 50% 50%,
      var(--cl-light),
      var(--cr-light),
      var(--cl-light),
      var(--cl-light),
      var(--cl-light),
      var(--cr-light),
      var(--cl-light),
      var(--cl-light),
      var(--cl-light)
    );
  }

  .action:hover .action-icon {
    color: #000;
    background-color: #fff;
    transform: scale(1.4) translate3d(12px, 0px, 12px);
  }

  .action:hover::after,
  .action-content::after {
    height: var(--sz-light-hover);
    width: var(--sz-light-hover);
    left: var(--l-light-hover);
    opacity: 1;
    animation: rotate 4s linear infinite;
  }
  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(1turn);
    }
  }

  .action:hover .action-content {
    color: #000;
    background-color: #fff;
    opacity: 1;
    width: max-content;
    left: calc(100% + 24px);
    z-index: 9;
  }

  .action:hover .action-content::before {
    transform: translateX(0px);
  }`;

export default Button;
