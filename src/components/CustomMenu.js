import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UpOutlined,
  DownOutlined,
  DeploymentUnitOutlined,
  FolderViewOutlined,
  HistoryOutlined,
  DatabaseOutlined,
  SlidersOutlined
} from '@ant-design/icons';

function CustomMenu() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(-1);
  const navigate = useNavigate();

  const routeJump = (link) => navigate(link); 

  const toggleMenu = () => setOpen((prev) => !prev);
  const clickSubItem = (number, link) => {
    setSelectedItem(number);
    routeJump(link);
  }
  
  return (
    <nav style={{ width: "100%", fontFamily: "sans-serif" }}>
        <ul style={{ listStyle: "none", padding: 0, paddingRight: 12, margin: 0 }}>
            {/* 第一層 */}
            <li
                style={selectedItem !== -1 ? selectedMenuStyle : menuStyle }
                onClick={toggleMenu}>
                <div style={{ display: "inline-flex" }}>
                    <span style={{ marginRight: "8px", alignContent: "center"}}>
                        <DeploymentUnitOutlined style={{backgroundColor: "rgb(22, 28, 36)",color: "rgba(20, 104, 9, 1)", borderRadius: 8, padding: 4, fontSize: 15}}/>
                    </span>
                    <p style={{fontSize: 15, fontWeight: 400, color: selectedItem !== -1 ? "rgba(255, 255, 255, 1)" : "rgba(103, 105, 109, 1)"}}>養殖池1</p>
                </div>
                <span style={{ marginLeft: 8 }}>{open ? <UpOutlined style={{color: "rgba(255, 255, 255, 1)", fontSize: 15}}/> : <DownOutlined style={{color: "rgba(255, 255, 255, 1)", fontSize: 15}}/>}</span>
            </li>

            {/* 第二層子選單 */}
            {open && (
            <ul style={{ listStyle: "none", padding: "4px 0 0 24px", margin: 0 }}>
                <li style={selectedItem === 0 ? selectedSubItemStyle : subItemStyle} onClick={() => clickSubItem(0, '/all')}>
                    <span style={{ marginRight: "8px" }}>
                        <FolderViewOutlined style={{color: "rgba(20, 104, 9, 1)", fontSize: 15}}/>
                    </span>
                    <p style={{fontSize: 15, fontWeight: 400, color: selectedItem === 0 ? "rgba(255, 255, 255, 1)" : "rgba(103, 105, 109, 1)"}}>總覽面板</p>
                </li>
                <li style={selectedItem === 1 ? selectedSubItemStyle : subItemStyle} onClick={() => clickSubItem(1, '/history')}>
                    <span style={{ marginRight: "8px" }}>
                        <HistoryOutlined style={{color: "rgba(20, 104, 9, 1)", fontSize: 15}}/>
                    </span>
                    <p style={{fontSize: 15, fontWeight: 400, color: selectedItem === 1 ? "rgba(255, 255, 255, 1)" : "rgba(103, 105, 109, 1)"}}>歷史資料</p>
                </li>
                <li style={selectedItem === 2 ? selectedSubItemStyle : subItemStyle} onClick={() => clickSubItem(2, '/manage_feed')}>
                    <span style={{ marginRight: "8px" }}>
                        <DatabaseOutlined style={{color: "rgba(20, 104, 9, 1)", fontSize: 15}}/>
                    </span>
                    <p style={{fontSize: 15, fontWeight: 400, color: selectedItem === 2 ? "rgba(255, 255, 255, 1)" : "rgba(103, 105, 109, 1)"}}>養殖管理</p>
                </li>
                <li style={selectedItem === 3 ? selectedSubItemStyle : subItemStyle} onClick={() => clickSubItem(3, '/manage_data')}>
                    <span style={{ marginRight: "8px" }}>
                        <SlidersOutlined style={{color: "rgba(20, 104, 9, 1)", fontSize: 15}}/>
                    </span>
                    <p style={{fontSize: 15, fontWeight: 400, color: selectedItem === 3 ? "rgba(255, 255, 255, 1)" : "rgba(103, 105, 109, 1)"}}>資料管理</p>
                </li>
            </ul>
            )}
        </ul>
    </nav>
  );
}

const menuStyle = {
    justifyContent: "space-between",
    cursor: "pointer",
    padding: "0 6px",
    background: "rgb(22, 28, 36)",
    display: "flex",
    alignItems: "center"
};

const selectedMenuStyle = {
    justifyContent: "space-between",
    cursor: "pointer",
    padding: "0 6px",
    background: "rgba(7, 16, 26, 1)",
    display: "flex",
    alignItems: "center",
    borderRadius: "0 18px 18px 0",
    borderLeft: "4px solid rgba(77, 120, 175, 1)",  // 左側藍色邊框
};

const subItemStyle = {
  padding: "0 6px",
  cursor: "pointer",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  background: "rgb(22, 28, 36)",
  marginTop: "4px"
};

const selectedSubItemStyle = {
  padding: "0 6px",
  cursor: "pointer",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  background: "rgb(22, 28, 36)",
  marginTop: "4px"
};

export default CustomMenu;