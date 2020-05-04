import styled from 'styled-components';

import { Container } from 'react-bootstrap';

export const TopHeader = styled(Container)`
  background-color: #3a3a3a;
  padding: 8px 78px;

  .clock {
    h4 {
      margin: 0;
      font-size: 16px;
      color: #cacbcc;
    }
  }

  .account {
    display: flex;
    justify-content: center;

    > div {
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        color: #cacbcc;
      }

      svg {
        color: #cacbcc;
      }
    }
  }

  .settings {
    display: flex;
    justify-content: flex-end;

    svg {
      color: #cacbcc;
      cursor: pointer;
    }
  }
`;

export const HeaderUi = styled(Container)`
  background-color: #fff;
  border-bottom: 2px solid #d1d2d2;
  padding: 0px 78px;

  img {
    width: 100%;
  }

  .options {
    display: block;
    ul {
      display: flex;
      list-style: none;
      justify-content: space-between;
      li {
        display: block;
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 16px;
          transition: all 0.3s;
          text-decoration: none;
          position: relative;

          span {
            color: #545454;
            font-size: 15px;
            font-weight: 400;
            margin-top: 12px;
          }

          svg {
            color: #acacac;
          }

          small {
            position: absolute;
            right: 4px;
            top: 20px;
            font-size: 10px;
            background-color: #ffb135;
            border-radius: 15px;
            padding: 4px 8px;
            color: #fff;
          }

          &:hover {
            background-color: #eef0f0;
          }
        }
      }

      li.active {
        a {
          background-color: #eef0f0;
          span {
            color: #e92b4d;
            font-weight: 700;
          }
          svg {
            color: #767676;
          }
        }
      }
    }
  }
`;
