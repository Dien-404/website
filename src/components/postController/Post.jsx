import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { http, GETDETAIL } from "../../utils/request";
import { Like, Visit } from "../../assets/SVG";

import Content from "../basic/Content";
import Code from "../postRender/Code";
import List from "../postRender/List";
import Paragraph from "../postRender/Paragraph";
import Title from "../postRender/Title";

export default function Post(props) {
    const { _id } = useParams();
    // 文章信息
    const [post, setPost] = useState({});

    // fetch data
    useEffect(() => {
        (async () => {
            if (_id !== undefined) {
                const res = await http.post(GETDETAIL, {
                    _id,
                });
                console.log(res);
                if (res.status === 200) {
                    setPost(res.data.data);
                }
            }
        })();
    }, [_id]);

    // 当前用户是否喜欢
    const [isLike, setIsLike] = useState(false);

    // 解构赋值
    const {
        title,
        tag,
        description,
        background,
        value,
        like,
        visit,
        createTime,
        commet,
    } = _id === undefined ? props : post;

    // 交互like
    const [reLike, setReLike] = useState(like === undefined ? 0 : like);

    return (
        <div className="h-full flex flex-col items-center">
            <Content
                className="bg-white rounded shadow w-full h-full p-4"
                isPost={true}
            >
                {/* 非 value 属性渲染 => title, background, description, like, visit, createTime*/}
                <div className="mb-3">
                    {/* 主标题 */}
                    <Title
                        tag="first"
                        // edit页面
                        value={[title]}
                    />
                    {/* 渲染背景及描述等 */}
                    <div className="p-2 mb-2 rounded bg-gray-50 hover:bg-gray-100 duration-300">
                        <div className="flex flex-row justify-between mb-1">
                            <span className="w-auto text-xs text-gray-500 cursor-default">
                                {/* 标签 */}
                                {tag?.map((item, index) => {
                                    return (
                                        <span
                                            className={`mr-2 px-1 border border-gray-500 ${
                                                item === ""
                                                    ? "hidden"
                                                    : "inline-block"
                                            }`}
                                            key={item + index}
                                        >
                                            {item}
                                        </span>
                                    );
                                })}
                                {/* 创建时间 */}
                                <span>
                                    {createTime === undefined
                                        ? "date will be created auto"
                                        : createTime}
                                </span>
                            </span>
                            {/* 访客量及点赞数 */}
                            <span className="flex flex-row font-mono select-none">
                                {/* 访客 */}
                                <span className="flex flex-row mr-3 cursor-default">
                                    <Visit />
                                    <span className="ml-1">
                                        {visit === undefined ? 0 : visit}
                                    </span>
                                </span>
                                {/* 点赞 */}
                                <span className="flex flex-row cursor-pointer">
                                    <Like
                                        isLike={isLike}
                                        setIsLike={setIsLike}
                                        setReLike={setReLike}
                                    />
                                    <span className="ml-1">{reLike}</span>
                                </span>
                            </span>
                        </div>
                        {/* description */}
                        <div>{description}</div>
                    </div>
                    {/* 背景 */}
                    <div className="w-full flex justify-center items-center select-none">
                        <img
                            src={background}
                            alt="fail to get background"
                            className={`w-full ${
                                background === "" ? "hidden" : "flex"
                            }`}
                        />
                    </div>
                </div>

                {/* 内容渲染 */}
                <div>
                    {value?.map((item, index) => {
                        switch (item.type) {
                            case "title":
                                return (
                                    <Title
                                        key={JSON.stringify(item) + index}
                                        tag={item.tag}
                                        value={item.value}
                                    />
                                );
                            case "parallel":
                                return (
                                    <Paragraph
                                        key={JSON.stringify(item) + index}
                                        tag={item.tag}
                                        value={item.value}
                                    />
                                );
                            case "code":
                                return (
                                    <Code
                                        key={JSON.stringify(item) + index}
                                        value={item.value}
                                    />
                                );
                            case "asset":
                                return (
                                    <img
                                        key={JSON.stringify(item) + index}
                                        alt={item.alt}
                                        src={item.src}
                                        className="select-none border"
                                    />
                                );
                            case "list":
                                return (
                                    <List
                                        key={JSON.stringify(item) + index}
                                        tag={item.tag}
                                        value={item.value}
                                    />
                                );
                            default:
                                return void 0;
                        }
                    })}
                </div>
            </Content>
        </div>
    );
}
