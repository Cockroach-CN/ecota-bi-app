import React from "react";
import "./Style.less";

const NavBar = ({ onLeftClick, onRightClick }) => <div className="ecota-navbar">
    <div onClick={onLeftClick}>
        <i style={{ fontSize: 20 }} className="iconfont icon-fanhui"></i>
    </div>
    <div onClick={onRightClick}>
        <i style={{ fontSize: 20 }} className="iconfont icon-gengduo"></i>
    </div>
</div>

export {
    NavBar,
}