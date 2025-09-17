import { useState, useEffect } from 'react';
import React from 'react';
import { Row, Col, Badge, Avatar, Button } from 'antd';
import {
  MoreOutlined,
  UserOutlined
} from '@ant-design/icons';
import CustomMenu from './CustomMenu';

function Sidebar() {
  const [user, setUser] = useState({name: "test", role: "養殖員"});
  return (
    <div style={{backgroundColor: "rgb(22, 28, 36)", paddingTop: 8, flex: 1}}>
      <Row justify={'space-between'} align={'middle'} style={{paddingLeft: 8}}>
        <Col>
          <Row align={'middle'}>
            <Badge dot status="success">
              <Avatar size={64} icon={<UserOutlined color="rgb(22, 28, 36)" backgroundColor="rgba(101, 103, 105, 1)"/>} />
            </Badge>
            <div style={{paddingLeft: 4, height: 'fit-content'}}>
              <p style={{fontSize: 16, fontWeight: 400, color: "white", margin: 0, justifySelf: "left"}}>{user.name}</p>
              <p style={{fontSize: 15, fontWeight: 400, color: "rgba(103, 105, 109, 1)", margin: 0}}>{user.role}</p>
            </div>
          </Row>
        </Col>
        <Col>
          <Button type="text" shape="circle" icon={<MoreOutlined style={{color: "rgb(256, 256, 256)"}}/>}/>
        </Col>
      </Row>
      <Row style={{paddingLeft: 8}}>
        <Col>
          <p style={{fontSize: 15, fontWeight: 400, color: "rgba(103, 105, 109, 1)"}}>功能表</p>
        </Col>
      </Row>
      <Row>
        <CustomMenu></CustomMenu>
      </Row>
    </div>
  );
}

export default Sidebar;