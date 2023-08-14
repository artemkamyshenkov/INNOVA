import { useEffect } from 'react';
import { Col, Row } from 'react-grid-system';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { userService } from '@/shared/api/userService';
import { userActions } from '@/entities/User';

const MainPage = () => {
  console.log('main');
  return (
    <Row>
      <Col xl={12} debug>
        <div>Main</div>
      </Col>
    </Row>
  );
};

export default MainPage;
