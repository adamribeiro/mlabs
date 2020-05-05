import styled from 'styled-components';

export const SocialStepUi = styled.li`
  position: relative;
  float: left;
  width: 20%;
  height: 250px;
  background-color: #f0f0f0;
  border: 2px dotted #cacbcc;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: -2px;
  margin-top: -2px;

  @media (min-width: 0px) and (max-width: 620px) {
    width: 100%;
  }

  @media (min-width: 621px) and (max-width: 960px) {
    width: calc(100% / 2);
  }

  @media (min-width: 961px) and (max-width: 1100px) {
    width: calc(100% / 4);
  }

  &.facebook-active {
    background-color: #3b5998;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &.twitter-active {
    background-color: #00acee;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &.instagram-active {
    background: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    justify-content: flex-start;
    align-items: flex-start;
  }

  &.google_business-active {
    background: linear-gradient(225deg, #7ab1f9 0%, #4285f4 100%);
    justify-content: flex-start;
    align-items: flex-start;
  }

  &.pinterest-active {
    background-color: #c8232c;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &.linkedin-active {
    background-color: #0e76a8;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &.youtube-active {
    background-color: #c4302b;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &.whatsapp-active {
    background: linear-gradient(225deg, #63f780 0%, #25d366 100%);
    justify-content: flex-start;
    align-items: flex-start;
  }

  &.google_analytics-active {
    background-color: #ed750a;
    justify-content: flex-start;
    align-items: flex-start;
  }

  h3 {
    padding: 16px;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0.3);
    display: block;
    color: #fff;
    width: 100%;
  }

  .botao-renovar {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: 10px;
    color: #fff;

    img {
      width: 20px;
      height: 20px;
    }
  }

  span {
    display: block;
    font-size: 17px;
    color: #535353;
    text-align: center;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: -1px;
    font-weight: 400;
  }

  button {
    padding: 8px 18px;
    color: #fff;
    background: linear-gradient(251.77deg, #de2e4d 0%, #f24462 98.95%);
    border-radius: 3px;
    border: #de2e4d solid 1px;
    font-weight: bold;
    font-size: 12px;
    opacity: 0.8;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }

  .help {
    position: absolute;
    top: 35px;
    right: 60px;
    button {
      width: 20px;
      height: 20px;
      color: #858789;
      background: transparent;
      border: 0;
    }
  }

  .facebook {
    background-color: #3b5998;
  }

  .instagram {
    background: #f09433;
    font-size: 25px;
    background: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }

  .twitter {
    background-color: #00acee;
  }

  .pinterest {
    background-color: #c8232c;
  }

  .linkedin {
    background-color: #0e76a8;
  }

  .youtube {
    background-color: #c4302b;
  }

  .whatsapp {
    font-size: 25px;
    background: linear-gradient(225deg, #63f780 0%, #25d366 100%);
  }

  .google_analytics {
    background-color: #ed750a;
  }

  .google_business {
    background: linear-gradient(225deg, #7ab1f9 0%, #4285f4 100%);
  }
`;
