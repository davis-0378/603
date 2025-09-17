import React, {useState} from 'react';
import { Row, Col } from 'antd';
import {
  FireOutlined,
  ExperimentOutlined,
  SendOutlined,
  FallOutlined,
  DotChartOutlined,
  CalendarOutlined
} from '@ant-design/icons';

function getColor(e) {
  return e.type === 0 ? "rgba(42, 173, 16, 1)" : "rgba(161, 19, 19, 1)"
}

function History() {
  const [time, setTime] = useState("02月06日");
  const [temp, setTemp] = useState({type: 0, value: "0.0"}); //0 -> normal, 1 -> not good
  const [oxg, setOxg] = useState({type: 1, value: "0.0"}); //0 -> normal, 1 -> not good
  const [salt, setSalt] = useState({type: 0, value: "0.0"}); //0 -> normal, 1 -> not good
  const [speed, setSpeed] = useState({type: 1, value: "0.0"}); //0 -> normal, 1 -> not good
  const [dir, setDir] = useState("無");

  
  return (
    <div style={{backgroundColor: "black", padding: 16, flex: 1}}>
      <Row gutter={[16, 16]} style={{marginTop: 8, flex: 1}}>
        <Col span={4} style={{width: "fit-content"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: 80}}>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 400, fontSize: 15  , marginBottom: 4, margin: 0}}>日期</p>
              </Col>
            </Row>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <CalendarOutlined style={{color: "rgba(82, 46, 184, 1)", marginRight: 8}}/>
                <p style={{color: "rgba(82, 46, 184, 1)", fontWeight: 500, fontSize: 16, margin: 0}}>{time}</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={4} style={{width: "fit-content"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: 80}}>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 400, fontSize: 15, marginBottom: 4, margin: 0}}>水溫</p>
              </Col>
            </Row>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <FireOutlined style={{color: getColor(temp), marginRight: 8}}/>
                <p style={{color: getColor(temp), fontWeight: 500, fontSize: 16, margin: 0}}>{temp.value}</p>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>(℃)</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={4} style={{width: "fit-content"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: 80}}>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 400, fontSize: 15  , marginBottom: 4, margin: 0}}>氧氣</p>
              </Col>
            </Row>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <DotChartOutlined style={{color: getColor(oxg), marginRight: 8}}/>
                <p style={{color: getColor(oxg), fontWeight: 500, fontSize: 16, margin: 0}}>{oxg.value}</p>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>(mg/L)</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={4} style={{width: "fit-content"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: 80}}>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 400, fontSize: 15  , marginBottom: 4, margin: 0}}>鹽度</p>
              </Col>
            </Row>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <ExperimentOutlined style={{color: getColor(salt), marginRight: 8}}/>
                <p style={{color: getColor(salt), fontWeight: 500, fontSize: 16, margin: 0}}>{salt.value}</p>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>(ppt)</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={4} style={{width: "fit-content"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: 80}}>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 400, fontSize: 15  , marginBottom: 4, margin: 0}}>海流流速</p>
              </Col>
            </Row>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <p style={{color: getColor(speed), fontWeight: 500, fontSize: 16, margin: 0}}>{speed.value}</p>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>(cm/s)</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={4} style={{width: "fit-content"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: 80}}>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <FallOutlined style={{color: "rgba(42, 173, 16, 1)", marginRight: 4}}/>
                <p style={{color: "white", fontWeight: 400, fontSize: 15  , marginBottom: 4, margin: 0}}>方向</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>{dir}</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row style={{marginTop: 16, width: "100%", minHeight: 'fit-content', height: "600px"}}>
        <Col span={24} style={{flex: 1}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, paddingTop: 8, height: "100%", display: "flex", flexDirection: "column"}}>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 400, fontSize: 16, margin: 0, width: 'fit-content'}}>歷史資料</p>
              </Col>
            </Row>
            <Row style={{marginTop: 8, flex: 1}}>
              <Col span={24}>

              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default History;