"use client";
import React from "react";
import { Form, Collapse } from "@douyinfe/semi-ui";

const Huya: React.FC = () => {
    return (
        <>
            <Collapse.Panel header="虎牙" itemKey="huya">
                <Form.InputNumber
                    field="huya_max_ratio"
                    extraText="虎牙自选录制码率
 可以避免录制如20M的码率，每小时8G左右大小，上传及转码耗时过长。
 20000（蓝光20M）, 10000（蓝光10M）, 8000（蓝光8M）, 2000（超清）, 500（流畅）
 设置为10000则录制小于等于蓝光10M的画质"
                    label="画质等级（huya_max_ratio）"
                    style={{ width: "100%" }}
                    fieldStyle={{
                        alignSelf: "stretch",
                        padding: 0,
                    }}
                />
                <Form.Switch
                    field="huya_danmaku"
                    extraText="录制虎牙弹幕，默认关闭【下载器为ffmpeg,streamlink时效果最优】"
                    label="录制弹幕（huya_danmaku）"
                />
                <Form.Input
                    field="huya_cdn"
                    extraText="如遇到虎牙录制卡顿可以尝试切换线路。可选以下线路
 AL（阿里云 - 直播线路3）, TX（腾讯云 - 直播线路5）, HW（华为云 - 直播线路6）, WS（网宿）, HS（火山引擎 - 直播线路14）, AL13（阿里云）, HW16（华为云）, HY(星域云 - 直播线路66)"
                    label="访问线路（huya_cdn）"
                    style={{ width: "100%" }}
                    fieldStyle={{
                        alignSelf: "stretch",
                        padding: 0,
                    }}
                />
                <Form.Switch
                    field="huya_cdn_fallback"
                    extraText="当访问线路（huya_cdn）不可用时，尝试其他线路（huya_cdn_fallback）"
                    label="CDN 回退（huya_cdn_fallback）"
                />
            </Collapse.Panel>
        </>
    );
};

export default Huya;
