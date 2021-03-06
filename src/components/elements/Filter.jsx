import React from "react";
import moment from "moment";
import { o2o } from "../../commons/common.js";
import { Tag, List2Column } from "./Common.jsx";
import {
  Modal,
  WhiteSpace,
  WingBlank,
  Button,
  SegmentedControl,
  DatePicker,
  List,
  Flex,
  Icon
} from "antd-mobile";
import "./Style.less";

const { filters } = window.settings;
const TimeType = { year: "年", month: "月", date: "日" };
const TimeFormatType = { year: "YYYY", month: "YYYY-MM", date: "YYYY-MM-DD" };

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bak: {},
      options: {},
      random: undefined
    };
  }

  componentDidMount() {
    this.init();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.random !== this.props.random) {
      this.init();
    }
  }

  init() {
    this.state.options = o2o(this.props.opts);
    this.state.bak = o2o(this.props.opts);
    this.setState(this.state);
  }

  render() {
    const { visable, type, onClose, onOk } = this.props;
    const { options } = this.state;
    const filterList = (filters || []).filter(
      f => f.class === type || f.class === "both"
    );
    return (
      <Modal
        style={{ height: "100%" }}
        popup
        maskClosable
        animationType="slide-up"
        visible={visable}
        onClose={() => {
          this.state.options = o2o(this.state.bak);
          this.setState(this.state);
          onClose && onClose();
        }}
      >
        <div style={{ height: "calc(100% - 40px)" }}>
          <div
            style={{
              textAlign: "right",
              padding: " 0.1rem 0.15rem"
            }}
          >
            <Icon
              style={{ fontSize: "21px", color: "#333" }}
              type="cross"
              onClick={() => {
                this.state.options = o2o(this.state.bak);
                this.setState(this.state);
                onClose && onClose();
              }}
            />
          </div>
          {filterList.map((f, i) => {
            if (options[f.key]) {
              return (
                <div
                  key={i}
                  className={`options-container ${
                    f.type === "time" ? "time" : "btn"
                  } ${i === filterList.length - 1 ? "last" : ""}`}
                >
                  {/* <div>
                            {f.name}
                            {f.type === "btn" ?
                                <Tag selected={options[f.key].whole}
                                    style={styleTagRight}
                                    onClick={() => {
                                        options[f.key].value = [];
                                        options[f.key].whole = true;
                                        this.setState(this.state);
                                    }}>全部</Tag> :
                                <Tag selected
                                    style={styleTagRight}
                                    onClick={() => {
                                        options[f.key].value = "";
                                        options[f.key].type = "date";
                                        this.setState(this.state);
                                    }}>重置</Tag>
                            }
                            {f.type === "time" && <span className="segmented-group">
                                <SegmentedControl
                                    selectedIndex={options[f.key].type === "year" ? 0 : options[f.key].type === "month" ? 1 : 2}
                                    values={['年', '月', '日']}
                                    onChange={e => {
                                        const index = e.nativeEvent.selectedSegmentIndex;
                                        options[f.key].type = index === 0 ? "year" : index === 1 ? "month" : "date";
                                        this.setState(this.state);
                                    }} />
                            </span>} 
                        </div>*/}
                  {f.type === "btn" && (
                    <div>
                      {f.name}
                      <Tag
                        selected={options[f.key].whole}
                        style={styleTagRight}
                        onClick={() => {
                          options[f.key].value = [];
                          options[f.key].whole = true;
                          this.setState(this.state);
                        }}
                      >
                        全部
                      </Tag>
                    </div>
                  )}
                  {f.type === "btn" && (
                    <div>
                      <List2Column>
                        {f.options.map((opt, j) => (
                          <Tag
                            key={j}
                            style={{ width: "100%", marginBottom: "0.05rem" }}
                            selected={
                              options[f.key].value.indexOf(opt.key) > -1
                            }
                            onClick={selected => {
                              if (selected) {
                                options[f.key].value.push(opt.key);
                                options[f.key].whole = false;
                              } else {
                                options[f.key].value = options[
                                  f.key
                                ].value.filter(key => key !== opt.key);
                                if (options[f.key].value.length === 0) {
                                  options[f.key].whole = true;
                                }
                              }
                              this.setState(this.state);
                            }}
                          >
                            {opt.name}
                          </Tag>
                        ))}
                      </List2Column>
                    </div>
                  )}
                  {f.type === "time" && (
                    <div
                      className="options-time"
                      style={{ padding: "0px -15px" }}
                    >
                      <DatePicker
                        mode={options[f.key].type}
                        value={options[f.key].value}
                        format={date =>
                          moment(date).format(
                            TimeFormatType[options[f.key].type] || "YYYY-MM-DD"
                          )
                        }
                        onChange={date => {
                          options[f.key].value = date;
                          this.setState(this.state);
                        }}
                      >
                        {/* <List.Item arrow="horizontal">{TimeType[options[f.key].type]}</List.Item> */}
                        <List.Item arrow="horizontal">{f.name}</List.Item>
                      </DatePicker>
                    </div>
                  )}
                </div>
              );
            }
          })}
        </div>
        <Flex>
          <Flex.Item>
            <Button
              type="ghost"
              style={styleButtonLeft}
              onClick={() => {
                Object.keys(this.state.options).map(key => {
                  if (this.state.options[key].operate_type === "btn") {
                    this.state.options[key].value = [];
                    this.state.options[key].whole = true;
                  } else if (this.state.options[key].operate_type === "time") {
                    this.state.options[key].value = "";
                  }
                });
                this.setState(this.state);
              }}
            >
              重置
            </Button>
          </Flex.Item>
          <Flex.Item style={{ marginLeft: 0 }}>
            <Button
              type="primary"
              style={styleButtonRight}
              onClick={() => {
                this.state.bak = o2o(this.state.options);
                this.setState(this.state);
                onOk && onOk(this.state.options);
              }}
            >
              确定
            </Button>
          </Flex.Item>
        </Flex>
      </Modal>
    );
  }
}

const styleTagRight = {
  float: "right",
  marginTop: "-0.05rem"
};

const styleButtonLeft = {
  margin: "1px 0 1px 1px",
  height: "38px",
  lineHeight: "38px"
};
const styleButtonRight = {
  margin: "1px 1px 1px 0",
  height: "38px",
  lineHeight: "38px"
};

export default Index;
