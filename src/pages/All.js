import React, {useState, useEffect} from 'react';
import { Row, Col, Button } from 'antd';
import {
  FireOutlined,
  ExperimentOutlined,
  SendOutlined,
  FallOutlined,
  DotChartOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';

function getColor(e) {
  return e.type === 0 ? "rgba(42, 173, 16, 1)" : "rgba(161, 19, 19, 1)"
}

function All() {
  const [time, setTime] = useState(new Date());
  const [temp, setTemp] = useState({type: 0, value: "0.0"}); //0 -> normal, 1 -> not good
  const [oxg, setOxg] = useState({type: 1, value: "0.0"}); //0 -> normal, 1 -> not good
  const [salt, setSalt] = useState({type: 0, value: "0.0"}); //0 -> normal, 1 -> not good
  const [speed, setSpeed] = useState({type: 1, value: "0.0"}); //0 -> normal, 1 -> not good
  const [dir, setDir] = useState("無");
  const [preTime, setPreTime] = useState({year: "9999", date: "99/99", time: "99:99"});
  const [preTemp, setPreTemp] = useState({type: 0, value: "0.0"}); //0 -> normal, 1 -> not good
  const [preSpeed, setPreSpeed] = useState({type: 1, value: "0.0"}); //0 -> normal, 1 -> not good

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());       // 每秒更新 state
    }, 60000);
    return () => clearInterval(timer); // 卸載時清除計時器
  }, []);
  
  return (
    <div style={{backgroundColor: "black", padding: 16, flex: 1}}>
      <Row>
        <Col>
          <Button color="rgba(75, 204, 49, 1)" variant="solid">
            綁定水質現況資料line通知  
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{marginTop: 8, flex: 1}}>
        <Col span={4} style={{width: "fit-content"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: 100}}>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 400, fontSize: 15  , marginBottom: 4, margin: 0}}>水質資料量測時間</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>{time.getFullYear().toString()}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>{(time.getMonth() + 1)}/{time.getDate()} {time.toLocaleTimeString('zh-TW', {hour: '2-digit', minute: '2-digit', hour12: true})}</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={4} style={{width: "fit-content"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: 100}}>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <FireOutlined style={{color: getColor(temp), marginRight: 4}}/>
                <p style={{color: "white", fontWeight: 400, fontSize: 15  , marginBottom: 4, margin: 0}}>水溫</p>
              </Col>
            </Row>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <p style={{color: getColor(temp), fontWeight: 500, fontSize: 16, margin: 0}}>{temp.value}</p>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>(℃)</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{color: getColor(temp), fontWeight: 400, fontSize: 15, margin: 0}}>{temp.type === 0 ? "數值一切正常" : "數值異常"}</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={4} style={{width: "fit-content"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: 100}}>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <DotChartOutlined style={{color: getColor(oxg), marginRight: 4}}/>
                <p style={{color: "white", fontWeight: 400, fontSize: 15  , marginBottom: 4, margin: 0}}>氧氣</p>
              </Col>
            </Row>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <p style={{color: getColor(oxg), fontWeight: 500, fontSize: 16, margin: 0}}>{oxg.value}</p>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>(mg/L)</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{color: getColor(oxg), fontWeight: 400, fontSize: 15, margin: 0}}>{oxg.type === 0 ? "數值一切正常" : "數值異常"}</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={4} style={{width: "fit-content"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: 100}}>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <ExperimentOutlined style={{color: getColor(salt), marginRight: 4}}/>
                <p style={{color: "white", fontWeight: 400, fontSize: 15  , marginBottom: 4, margin: 0}}>鹽度</p>
              </Col>
            </Row>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <p style={{color: getColor(salt), fontWeight: 500, fontSize: 16, margin: 0}}>{salt.value}</p>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>(ppt)</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{color: getColor(salt), fontWeight: 400, fontSize: 15, margin: 0}}>{salt.type === 0 ? "數值一切正常" : "數值異常"}</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={4} style={{width: "fit-content"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: 100}}>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <SendOutlined style={{color: getColor(speed), marginRight: 4}}/>
                <p style={{color: "white", fontWeight: 400, fontSize: 15  , marginBottom: 4, margin: 0}}>流速</p>
              </Col>
            </Row>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <p style={{color: getColor(speed), fontWeight: 500, fontSize: 16, margin: 0}}>{speed.value}</p>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>(cm/s)</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{color: getColor(speed), fontWeight: 400, fontSize: 15, margin: 0}}>{speed.type === 0 ? "數值一切正常" : "數值異常"}</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={4} style={{width: "fit-content"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: 100}}>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <FallOutlined style={{color: "rgba(42, 173, 16, 1)", marginRight: 4}}/>
                <p style={{color: "white", fontWeight: 400, fontSize: 15  , marginBottom: 4, margin: 0}}>海流流向</p>
              </Col>
            </Row>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>{dir}</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={4} style={{width: "fit-content"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: 100}}>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 400, fontSize: 15  , marginBottom: 4, margin: 0}}>水質資料預測時間</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>{preTime.year}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>{preTime.date} {preTime.time}</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={4} style={{width: "fit-content"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: 100}}>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <FireOutlined style={{color: getColor(preTemp), marginRight: 4}}/>
                <p style={{color: "white", fontWeight: 400, fontSize: 15  , marginBottom: 4, margin: 0}}>預測水溫</p>
              </Col>
            </Row>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <p style={{color: getColor(preTemp), fontWeight: 500, fontSize: 16, margin: 0}}>{preTemp.value}</p>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>(℃)</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{color: getColor(preTemp), fontWeight: 400, fontSize: 15, margin: 0}}>{preTemp.type === 0 ? "數值一切正常" : "數值異常"}</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={4} style={{width: "fit-content"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: 100}}>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <SendOutlined style={{color: getColor(preSpeed), marginRight: 4}}/>
                <p style={{color: "white", fontWeight: 400, fontSize: 15  , marginBottom: 4, margin: 0}}>預測流速</p>
              </Col>
            </Row>
            <Row>
              <Col style={{display: 'inline-flex'}}>
                <p style={{color: getColor(preSpeed), fontWeight: 500, fontSize: 16, margin: 0}}>{preSpeed.value}</p>
                <p style={{color: "white", fontWeight: 500, fontSize: 16, margin: 0}}>(cm/s)</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{color: getColor(preSpeed), fontWeight: 400, fontSize: 15, margin: 0}}>{preSpeed.type === 0 ? "數值一切正常" : "數值異常"}</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row gutter={16} style={{marginTop: 16, flex: 1, minHeight: 'fit-content', height: "400px"}}>
        <Col span={8} style={{height: "100%"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, paddingTop: 8, height: "100%", display: "flex", flexDirection: "column"}}>
            <Row justify={"end"}>
              <Col style={{width: "fit-content", display: "inline-flex"}}>
                <LeftOutlined style={{marginRight: 4, backgroundColor: "black", color: "white", padding: 4, borderRadius: 16}}/>
                <RightOutlined style={{backgroundColor: "black", color: "white", padding: 4, borderRadius: 16}}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 400, fontSize: 16, margin: 0, width: 'fit-content'}}>聲納池況影片</p>
                <p style={{color: "white", fontWeight: 400, fontSize: 14, margin: 0}}>池況拍攝日期 9999/99/99</p>
              </Col>
            </Row>
            <Row style={{marginTop: 8, flex: 1}}>
              <Col span={24}>
                <video 
                  style={{height: "100%", width: "100%"}} 
                  controls 
                  autoPlay={true}  // 是否自動播放
                  muted            // 靜音（某些瀏覽器需要靜音才能自動播放）
                >
                  <source src="frontend/public/ 2025_09_08_16_01_30_0_video.mp4" type="video/mp4" />
                  您的瀏覽器不支援影片播放。
                </video>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={16} style={{height: "100%"}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, height: "100%"}}>
            <Row gutter={16} style={{height: "100%"}}>
              <Col span={12} style={{height: "100%", display: "grid"}}>
                <Row>
                  <Col>
                    <p style={{color: "white", fontWeight: 400, fontSize: 16, margin: 0, width: 'fit-content'}}>餵食活力分析影像</p>
                    <p style={{color: "white", fontWeight: 400, fontSize: 14, margin: 0}}>餵食拍攝日期 9999/99/99</p>
                  </Col>
                </Row>
                <Row style={{marginTop: 8, display: 'contents'}}>
                  <Col span={24} style={{height: "100%"}}>
                    <img style={{height: "100%", width: "100%"}} src="https://i.pinimg.com/736x/d9/d3/cd/d9d3cd41355b1dde1e17870647481ab4.jpg"></img>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={24}>
                    <p style={{color: "white", fontWeight: 400, fontSize: 16, margin: 0}}>餵食活力分析資訊</p>
                  </Col>
                </Row>
                <Row style={{marginTop: 8}}>
                  <Col span={24}>
                    <div style={{height: "fit-content", flex: 1, backgroundColor: "rgba(16, 20, 26, 1)", padding: 8, marginBottom: 8}}>
                      <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>預測投餵量 :</p>
                      <p style={{color: "white", fontWeight: 400, fontSize: 14, margin: 0, width: 'fit-content'}}>今日預測投餵量   67  g</p>
                    </div>
                    <div style={{height: "fit-content", flex: 1, backgroundColor: "rgba(16, 20, 26, 1)", padding: 8}}>
                      <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>餵食情況 :</p>
                      <p style={{color: "white", fontWeight: 400, fontSize: 14, margin: 0, width: 'fit-content'}}>餵食完畢   無</p>
                      <p style={{color: "white", fontWeight: 400, fontSize: 14, margin: 0, marginBottom: 16, width: 'fit-content'}}>投餵時間(餵食完畢)   619.92 分鐘</p>
                      <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>餌料建議 :</p>
                      <p style={{color: "white", fontWeight: 400, fontSize: 14, margin: 0, width: 'fit-content'}}>餵食完畢   無</p>
                      <p style={{color: "white", fontWeight: 400, fontSize: 14, margin: 0, width: 'fit-content'}}>投餵時間(餵食完畢)   619.92 分鐘</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default All;