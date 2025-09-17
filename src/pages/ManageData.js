import React, {useState} from 'react';
import { Row, Col, Input, Button } from 'antd';
import {
  CopyOutlined,
}from '@ant-design/icons';

function ManageData() {  
  return (
    <div style={{backgroundColor: "black", padding: 16, flex: 1}}>
      <Row style={{width: "100%", height: 'fit-content', display: 'block'}}>
        <Col span={24} style={{flex: 1}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, paddingTop: 8, height: "100%", display: "flex", flexDirection: "column"}}>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 400, fontSize: 16, margin: 0, width: 'fit-content'}}>初始資料設定</p>
              </Col>
            </Row>
            <Row gutter={[0, 8]} style={{marginTop: 8, flex: 1}}>
              <Col span={6}>
                <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>傳輸編號</p>
              </Col>
              <Col span={18}>
                <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>動物園的大猩猩</p>
              </Col>
              <Col span={6}>
                <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>水量 (L)</p>
              </Col>
              <Col span={18}>
                <Input style={{flex: 1, backgroundColor: "rgba(37, 43, 51, 1)"}}/>
              </Col>
              <Col span={6}>
                <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>綿羊長度</p>
              </Col>
              <Col span={18}>
                <Input style={{flex: 1, backgroundColor: "rgba(37, 43, 51, 1)"}}/>
              </Col>
              <Col span={6}>
                <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>生產日期</p>
              </Col>
              <Col span={18} style={{display: "flex", flexDirection: "row"}}>
                <Input style={{flex: 1, backgroundColor: "rgba(37, 43, 51, 1)"}}/>
                <Button type="text" icon={<CopyOutlined style={{color: "rgb(256, 256, 256)"}}/>}/>
              </Col>
              <Col span={6}>
                <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>海星深度</p>
              </Col>
              <Col span={18}>
                <Input style={{flex: 1, backgroundColor: "rgba(37, 43, 51, 1)"}}/>
              </Col>
              <Col span={6}>
                <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>奔跑數量</p>
              </Col>
              <Col span={18}>
                <Input style={{flex: 1, backgroundColor: "rgba(37, 43, 51, 1)"}}/>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row style={{marginTop: 16, width: "100%", height: 'fit-content', display: 'block'}}>
        <Col span={24} style={{flex: 1}}>
          <div style={{backgroundColor: "rgb(22, 28, 36)", padding: 16, paddingTop: 8, height: "100%", display: "flex", flexDirection: "column"}}>
            <Row>
              <Col>
                <p style={{color: "white", fontWeight: 400, fontSize: 16, margin: 0, width: 'fit-content'}}>游泳紀錄</p>
              </Col>
            </Row>
            <Row gutter={16} style={{marginTop: 8, flex: 1}}>
              <Col span={12}>
                <div style={{backgroundColor: "rgba(14, 19, 26, 1)", padding: 8, flex: 1, display: "flex", flexDirection: "column"}}>
                  <Row>
                    <Col>
                      <p style={{color: "white", fontWeight: 400, fontSize: 16, margin: 0, width: 'fit-content'}}>目前紀錄</p>
                    </Col>
                  </Row>
                  <Row gutter={8} style={{ flex: 1}}>
                    <Col span={24}>
                      <p style={{color: "rgba(49, 74, 110, 1)", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>信天翁好大</p>
                    </Col>
                    <Col span={24}>
                      <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>腳趾數量</p>
                    </Col>
                    <Col span={24}>
                      <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>翅膀數量 2400 萬</p>
                    </Col>
                    <Col span={24}>
                      <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>重量 1600 kg</p>
                    </Col>
                  </Row>
                  <Row gutter={8} style={{ flex: 1, marginTop: 16}}>
                    <Col span={24}>
                      <p style={{color: "rgba(49, 74, 110, 1)", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>海龜好大</p>
                    </Col>
                    <Col span={24}>
                      <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>翅膀數量 2400 萬</p>
                    </Col>
                    <Col span={24}>
                      <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>噗噗</p>
                    </Col>
                  </Row>
                  <Row gutter={8} style={{ flex: 1, marginTop: 16}}>
                    <Col span={24}>
                      <p style={{color: "rgba(49, 74, 110, 1)", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>鯨魚好大</p>
                    </Col>
                    <Col span={24}>
                      <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>腳趾數量</p>
                    </Col>
                    <Col span={24}>
                      <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>翅膀數量 2400 萬</p>
                    </Col>
                    <Col span={24}>
                      <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>重量 1600 kg</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col span={12}>
                <Row>
                  <Col>
                    <p style={{color: "white", fontWeight: 400, fontSize: 16, margin: 0, width: 'fit-content'}}>紀錄編寫</p>
                  </Col>
                </Row>
                <Row gutter={[0, 8]} style={{marginTop: 8, flex: 1}}>
                  <Col span={6}>
                    <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>傳輸編號</p>
                  </Col>
                  <Col span={18}>
                    <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>動物園的大猩猩</p>
                  </Col>
                  <Col span={6}>
                    <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>水量 (L)</p>
                  </Col>
                  <Col span={18}>
                    <Input style={{flex: 1, backgroundColor: "rgba(37, 43, 51, 1)"}}/>
                  </Col>
                  <Col span={6}>
                    <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>綿羊長度</p>
                  </Col>
                  <Col span={18}>
                    <Input style={{flex: 1, backgroundColor: "rgba(37, 43, 51, 1)"}}/>
                  </Col>
                  <Col span={6}>
                    <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>生產日期</p>
                  </Col>
                  <Col span={18} style={{display: "flex", flexDirection: "row"}}>
                    <Input style={{flex: 1, backgroundColor: "rgba(37, 43, 51, 1)"}}/>
                    <Button type="text" icon={<CopyOutlined style={{color: "rgb(256, 256, 256)"}}/>}/>
                  </Col>
                  <Col span={6}>
                    <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>海星深度</p>
                  </Col>
                  <Col span={18}>
                    <Input style={{flex: 1, backgroundColor: "rgba(37, 43, 51, 1)"}}/>
                  </Col>
                  <Col span={6}>
                    <p style={{color: "white", fontWeight: 400, fontSize: 15, margin: 0, width: 'fit-content'}}>奔跑數量</p>
                  </Col>
                  <Col span={18}>
                    <Input style={{flex: 1, backgroundColor: "rgba(37, 43, 51, 1)"}}/>
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

export default ManageData;