import React from 'react';

import { RiArrowDownSLine } from 'react-icons/ri';
import { BsFillGearFill, BsFillInboxFill } from 'react-icons/bs';
import { AiOutlineDashboard, AiFillPieChart } from 'react-icons/ai';
import {
  FaRegCalendarPlus,
  FaRegCalendarAlt,
  FaNetworkWired,
  FaRegNewspaper,
} from 'react-icons/fa';
import { MdShowChart } from 'react-icons/md';
import { Col, Row } from 'react-bootstrap';
import { TopHeader, HeaderUi } from './styles';
import logomlabs from '../../assets/logo.svg';

const Header = () => {
  return (
    <>
      <TopHeader fluid>
        <Row className="align-items-center">
          <Col className="clock">
            <h4>30/04/2020 21:00</h4>
          </Col>
          <Col className="account">
            <div>
              <span>Minha conta</span>
              <RiArrowDownSLine size={20} />
            </div>
          </Col>
          <Col className="settings">
            <BsFillGearFill size={20} />
          </Col>
        </Row>
      </TopHeader>
      <HeaderUi fluid>
        <Row className="align-items-center">
          <Col xs={12} sm={12} lg={4} xl={2}>
            <img src={logomlabs} />
          </Col>
          <Col xs={12} sm={12} lg={8} xl={10}>
            <div className="options">
              <ul>
                <li className="active">
                  <a href="link">
                    <AiOutlineDashboard size={32} />
                    <span>DASHBOARD</span>
                  </a>
                </li>
                <li>
                  <a href="link">
                    <FaRegCalendarPlus size={32} />
                    <span>AGENDAR POST</span>
                    <small>NOVO</small>
                  </a>
                </li>
                <li>
                  <a href="link">
                    <FaRegCalendarAlt size={32} />
                    <span>CALENDÁRIO</span>
                  </a>
                </li>
                <li>
                  <a href="link">
                    <BsFillInboxFill size={32} />
                    <span>INBOX</span>
                  </a>
                </li>
                <li>
                  <a href="link">
                    <FaRegNewspaper size={32} />
                    <span>FEED</span>
                  </a>
                </li>
                <li>
                  <a href="link">
                    <FaNetworkWired size={32} />
                    <span>WORKFLOW</span>
                  </a>
                </li>
                <li>
                  <a href="link">
                    <MdShowChart size={32} />
                    <span>ACOMPANHAMENTO</span>
                  </a>
                </li>
                <li>
                  <a href="link">
                    <AiFillPieChart size={32} />
                    <span>RELATÓRIOS</span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </HeaderUi>
    </>
  );
};

export default Header;
