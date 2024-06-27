"use client";
import React from "react";
import { Form, Select, Collapse } from "@douyinfe/semi-ui";


const CC: React.FC = () => {
    return (
        <>
            <Collapse.Panel header="CC" itemKey="cc">
            <Form.Select
                    field="cc_protocol"
                    extraText={
                        <div style={{ fontSize: "14px" }}>
                            CC直播流协议。
                            <br />
                            如果录制经常分段，尝试切换。
                        </div>
                    }
                    label="直播流协议（cc_protocol）"
                    placeholder="hls（默认）"
                    style={{ width: "100%" }}
                    fieldStyle={{
                        alignSelf: "stretch",
                        padding: 0,
                    }}
                    showClear={true}
                >
                    <Select.Option value="flv">flv</Select.Option>
                    <Select.Option value="hls">hls（默认）</Select.Option>
                </Form.Select>
            </Collapse.Panel>
        </>
    );
};

export default CC;