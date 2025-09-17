import { useState, useEffect } from 'react';
import React from 'react';
import { Row, Col, Avatar, Badge } from 'antd';
import {
  UserOutlined,
  AppstoreOutlined,
  ControlOutlined,
  BellOutlined
} from '@ant-design/icons';

function Navbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());       // 每秒更新 state
    }, 1000);
    return () => clearInterval(timer); // 卸載時清除計時器
  }, []);

  return (
    <div style={{backgroundColor: "rgb(22, 28, 36)"}}>
      <Row align={'middle'}>
        <Col span={3}>
          <img src="https://i.pinimg.com/1200x/f6/7d/8e/f67d8e6b5872d4f9dca762e0f9cdb73b.jpg" alt='logo' width={120} height={50}></img>
        </Col>
        <Col span={21}>
          <Row justify={'space-between'}>
            <Col style={{width: "fit-content"}}><p style={{color: "white", fontWeight: 300, fontSize: 15}}>{time.toLocaleTimeString()}</p></Col>
            <Col style={{width: "fit-content"}}><p style={{color: "white", fontWeight: 400, fontSize: 16}}>智慧養殖輔助管理系統</p></Col>         
            <Col style={{width: "fit-content", display: 'flex', alignItems: 'center', paddingRight: 16}}>
              <AppstoreOutlined style={{paddingRight: 16, fontSize: 15, color: "white"}}/>
              <div style={{paddingRight: 16}}>
                <Badge dot status="success">
                  <ControlOutlined style={{fontSize: 15, color: "white"}}/>
                </Badge>
              </div>
              <div style={{paddingRight: 16}}>
                <Badge dot>
                  <BellOutlined style={{fontSize: 15, color: "white"}}/>
                </Badge>
              </div>
              <Avatar icon={<UserOutlined color="rgba(3, 3, 3, 1)" backgroundColor="rgba(101, 103, 105, 1)"/>} />
              <p style={{color: "white", fontWeight: 300, fontSize: 13, marginLeft: 4, width: 'fit-content'}}>派大星</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;