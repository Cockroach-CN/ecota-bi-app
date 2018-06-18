import React from "react";
import { Flex } from "antd-mobile";
import { classList } from "../../commons/common.js";
import "./Style.less";

const NavBar = ({ isInfo, onLeftClick, onRightClick }) =>
    <div className="ecota-navbar">
        <div onClick={onLeftClick}>
            {onLeftClick &&
                <i style={{ fontSize: 21 }} className={isInfo ? "iconfont icon-suoxiao" : "iconfont icon-fanhui"}></i>
            }
        </div>
        <div onClick={onRightClick}>
            <i style={{ fontSize: 21 }} className="iconfont icon-gengduo"></i>
        </div>
    </div>


const Tag = (props) =>
    <div style={props.style}
        onClick={() => props.onClick ? props.onClick(!props.selected) : undefined}
        className={classList("am-tag", props.selected ? "am-tag-active" : "am-tag-normal")} >
        <div id="am-tag-text" >{props.children}</div>
    </div>

const List2Column = (props) => {

    const column = Number(props.column || 3);
    const trList = [];
    const domList = props.children || [];
    for (let i = 0; i < Math.ceil(domList.length / column); i++) {
        const trDom = [];
        for (let j = 0; j < column; j++) {
            trDom[j] = domList[i * column + j];
        }
        trList[i] = trDom;
    }

    return <section>
        {(trList || []).map((subList, i) =>
            <Flex key={i}>
                {(subList || []).map((dom, j) =>
                    <Flex.Item key={j}>{dom}</Flex.Item>
                )}
            </Flex>
        )}
    </section>
}



export {
    Tag,
    NavBar,
    List2Column,
}