import React, { useState } from "react";
import styled from "styled-components";

const ScrollBeauty = styled.div`
    ::-webkit-scrollbar {
        width: 0.5rem;
        height: 0.3125rem;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 0.3125rem;
        :hover {
            background-color: gray;
        }
    }
    ::-webkit-scrollbar-button {
        display: none;
    }
`;

export default function UserManager(props) {
    // 排序
    const [sortSeleted, setSortSeleted] = useState("id");
    // 降序 or 升序
    const [sortOrder, setSortOrder] = useState("up");
    const [userData, setUserData] = useState([
        {
            uid: 11234,
            userName: "大哥大的电话",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 2,
            userName: "tencentt",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 3,
            userName: "netyi",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 4,
            userName: "google",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 5,
            userName: "wanyi",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 6,
            userName: "steam",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 7,
            userName: "netflix",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 8,
            userName: "sougou",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 9,
            userName: "souhu",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 10,
            userName: "hub",
            userType: "普通用户",
            recentLogin: "2022-6-28",
            registTime: "2022-6-28",
            email: "yamahadejia@163.com",
        },
        {
            uid: 11,
            userName: "大哥大的电话",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 12,
            userName: "tencentt",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 13,
            userName: "netyi",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 14,
            userName: "google",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 15,
            userName: "wanyi",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 16,
            userName: "steam",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 17,
            userName: "netflix",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 18,
            userName: "sougou",
            userType: "管理员",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 19,
            userName: "souhu",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
        {
            uid: 20,
            userName: "hub",
            userType: "普通用户",
            recentLogin: "2022-6-29",
            registTime: "2022-6-29",
            email: "yamahadejia@163.com",
        },
    ]);

    return (
        <div className="flex flex-col w-full h-full">
            {/* 功能项 */}
            <div className="flex flex-row justify-end mb-1 text-sm select-none">
                <div className="bg-indigo-200 p-1 mx-1 rounded hover:bg-indigo-400 duration-300 cursor-pointer">
                    筛选
                </div>
                <div className="bg-indigo-200 p-1 mx-1 rounded hover:bg-indigo-400 duration-300 cursor-pointer">
                    黑名单
                </div>
                <div className="bg-indigo-200 p-1 mx-1 rounded hover:bg-indigo-400 duration-300 cursor-pointer">
                    添加
                </div>
            </div>
            {/* 展示界面 */}
            <div className="flex flex-col grow m-1">
                {/* 静态数据类型展示 */}
                <div className="flex flex-row py-1 pr-20 bg-gray-200 text-sm select-none">
                    <div className="px-1 mx-2 w-12 shrink-0 cursor-pointer">
                        ID
                    </div>
                    <div className="px-1 mx-2 w-28 shrink-0 cursor-pointer">
                        用户名
                    </div>
                    <div className="px-1 mx-2 w-20 shrink-0 cursor-pointer">
                        用户类型
                    </div>
                    <div className="px-1 mx-2 w-24 shrink-0 cursor-pointer">
                        最近登录时间
                    </div>
                    <div className="px-1 mx-2 w-24 shrink-0 cursor-pointer">
                        注册时间
                    </div>
                    <div className="px-1 mx-2 w-48 shrink-0 cursor-pointer">
                        注册邮箱
                    </div>
                </div>
                <div className="flex flex-col justify-between grow"></div>
                {/* 动态用户数据展示 */}
                <div className="flex flex-col justify-between grow overflow-auto">
                    {/* 用户展示 */}
                    <div>
                        {userData?.map((item) => (
                            <div className="h-8 flex flex-row justify-between items-center py-1">
                                {/* 用户信息 */}
                                <div className="h-full flex flex-row overflow-hidden">
                                    <div className="px-1 mx-2 w-12 shrink-0">
                                        {item.uid}
                                    </div>
                                    <div className="px-1 mx-2 w-28 shrink-0">
                                        {item.userName}
                                    </div>
                                    <div className="px-1 mx-2 w-20 shrink-0">
                                        {item.userType}
                                    </div>
                                    <div className="px-1 mx-2 w-24 shrink-0">
                                        {item.recentLogin}
                                    </div>
                                    <div className="px-1 mx-2 w-24 shrink-0">
                                        {item.registTime}
                                    </div>
                                    <div className="px-1 mx-2 w-48 shrink-0">
                                        {item.email}
                                    </div>
                                </div>
                                {/* 其他功能操作 */}
                                <div className="flex flex-row shrink-0">
                                    {/* 查看详细 */}
                                    <div className="px-1 mx-1 cursor-pointer">
                                        <svg
                                            t="1656497336973"
                                            class="icon"
                                            viewBox="0 0 1024 1024"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            p-id="2272"
                                            width="20"
                                            height="20"
                                        >
                                            <path
                                                d="M97.900291 1023.99928c-25.899982 0.1-50.699964-10.199993-68.899951-28.59998-37.999973-38.199973-37.999973-99.89993 0-138.099903l144.799898-145.099898 78.499945-78.699944c-24.199983-39.599972-41.499971-82.899942-51.299964-128.19991-19.599986-90.299937-8.999994-184.49987 30.399978-267.999812 98.99993-207.499854 347.499756-295.399792 554.99961-196.399862s295.399792 347.499756 196.399862 554.99961c-20.399986 42.69997-47.899966 81.599943-81.299943 114.999919-77.799945 78.399945-183.699871 122.399914-294.199793 122.099914-38.399973 0-76.599946-5.199996-113.49992-15.599989-36.499974-10.299993-71.39995-25.599982-103.699927-45.499968l-78.499945 78.599945-144.699898 144.899898c-18.299987 18.399987-43.09997 28.69998-68.999952 28.59998z m98.599931-243.799829L74.300308 902.699365c-12.999991 13.099991-12.999991 34.199976 0 47.299967 12.999991 12.999991 34.099976 13.099991 47.199967 0.1l0.099999-0.1 122.199915-122.399914-47.299967-47.399967z m93.999934-94.099933l-48.599966 48.699965 47.199967 47.299967 48.599966-48.699966c-4.099997-3.499998-7.999994-6.999995-11.899992-10.499992l-1.599999-1.499999c-4.299997-4.099997-7.899994-7.399995-11.099992-10.699993-3.299998-3.299998-6.499995-6.599995-10.499993-10.899992-0.6-0.7-1.199999-1.299999-1.799999-1.999999l-0.099999-0.1c-3.699997-3.999997-6.999995-7.799995-10.199993-11.499991v-0.1zM607.299933 63.399955c-194.799863 0.6-352.299752 158.999888-351.799753 353.899752 0.2 72.799949 22.899984 143.799899 65.099955 203.099857 5.299996 7.499995 10.999992 14.79999 16.799988 21.799984l1.199999 1.399999c2.799998 3.399998 5.799996 6.799995 8.899994 10.099993 0.4 0.4 0.799999 0.899999 1.199999 1.299999l0.3 0.3c3.499998 3.799997 6.599995 6.999995 9.499993 9.899993 3.199998 3.199998 6.499995 6.299996 10.199993 9.799993l1.099999 1.1c3.599997 3.299998 7.199995 6.499995 10.699992 9.499993l0.4 0.3c7.599995 6.399996 15.599989 12.599991 23.699984 18.299987 0.1 0.1 0.3 0.2 0.399999 0.3l0.3 0.2c159.299888 111.599922 378.799734 72.899949 490.399655-86.39994 41.499971-59.299958 63.799955-129.999909 63.699955-202.399857 0.5-194.199863-156.59989-351.999753-350.799753-352.499753h-1.299999z m0 628.199559c-151.999893 0-275.299806-123.299913-275.299806-275.399807v-4.999996c0.3-17.499988 14.49999-31.499978 31.999977-31.599978h0.6c17.699988 0.3 31.799978 14.999989 31.499977 32.699977-1.399999 116.499918 91.799935 212.099851 208.299854 213.49985 116.499918 1.399999 212.099851-91.799935 213.49985-208.299854 1.099999-86.199939-50.399965-164.399884-130.099909-197.399861-25.399982-10.499993-52.599963-15.999989-80.099943-15.899989-16.299989 0-32.599977 1.899999-48.499966 5.599996-11.599992 2.699998-22.899984 6.399996-33.899976 10.999993-16.399988 6.899995-35.199975-0.899999-41.999971-17.199988-6.899995-16.399988 0.899999-35.199975 17.199988-41.999971 14.29999-5.999996 29.09998-10.799992 44.199969-14.29999 20.699985-4.799997 41.799971-7.299995 63.099956-7.299994 35.799975 0 71.29995 6.999995 104.399926 20.799985 140.899901 57.999959 208.099854 219.199846 150.099895 359.999747-42.39997 103.299927-143.199899 170.79988-254.999821 170.79988z m-171.999879-415.899708c-8.499994 0-16.699988-3.399998-22.699984-9.399993-12.499991-12.599991-12.499991-32.899977 0-45.399968s32.799977-12.499991 45.299968 0c12.499991 12.599991 12.499991 32.899977 0 45.399968-5.899996 5.999996-13.99999 9.399993-22.599984 9.399993z"
                                                fill="#000000"
                                                p-id="2273"
                                            ></path>
                                        </svg>
                                    </div>
                                    {/* 编辑 */}
                                    <div className="px-1 mx-1 cursor-pointer">
                                        <svg
                                            t="1656497386594"
                                            class="icon"
                                            viewBox="0 0 1024 1024"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            p-id="3308"
                                            width="20"
                                            height="20"
                                        >
                                            <path
                                                d="M943.104 216.064q-8.192 9.216-15.36 16.384l-12.288 12.288q-6.144 6.144-11.264 10.24l-138.24-139.264q8.192-8.192 20.48-19.456t20.48-17.408q20.48-16.384 44.032-14.336t37.888 9.216q15.36 8.192 34.304 28.672t29.184 43.008q5.12 14.336 6.656 33.792t-15.872 36.864zM551.936 329.728l158.72-158.72 138.24 138.24q-87.04 87.04-158.72 157.696-30.72 29.696-59.904 58.88t-53.248 52.224-39.424 38.4l-18.432 18.432q-7.168 7.168-16.384 14.336t-20.48 12.288-31.232 12.288-41.472 13.824-40.96 12.288-29.696 6.656q-19.456 2.048-20.992-3.584t1.536-25.088q1.024-10.24 5.12-30.208t8.192-40.448 8.704-38.4 7.68-25.088q5.12-11.264 10.752-19.456t15.872-18.432zM899.072 478.208q21.504 0 40.96 10.24t19.456 41.984l0 232.448q0 28.672-10.752 52.736t-29.184 41.984-41.984 27.648-48.128 9.728l-571.392 0q-24.576 0-48.128-10.752t-41.472-29.184-29.184-43.52-11.264-53.76l0-570.368q0-20.48 11.264-42.496t29.184-39.936 40.448-29.696 45.056-11.776l238.592 0q28.672 0 40.448 20.992t11.776 42.496-11.776 41.472-40.448 19.968l-187.392 0q-21.504 0-34.816 14.848t-13.312 36.352l0 481.28q0 20.48 13.312 34.304t34.816 13.824l474.112 0q21.504 0 36.864-13.824t15.36-34.304l0-190.464q0-14.336 6.656-24.576t16.384-16.384 21.504-8.704 23.04-2.56z"
                                                p-id="3309"
                                                fill="#000000"
                                            ></path>
                                        </svg>
                                    </div>
                                    {/* 删除 */}
                                    <div className="px-1 mx-1 cursor-pointer">
                                        <svg
                                            t="1656497448274"
                                            class="icon"
                                            viewBox="0 0 1024 1024"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            p-id="4315"
                                            width="20"
                                            height="20"
                                        >
                                            <path
                                                d="M1013.76 754.87232c0 126.77632-102.77376 229.54496-229.54496 229.54496s-229.54496-102.77376-229.54496-229.54496 102.77376-229.54496 229.54496-229.54496S1013.76 628.096 1013.76 754.87232z m-264.12032-34.39104h-83.51232c-36.89984 2.176-36.21888 34.39104-36.21888 34.39104s0 32.42496 36.21888 34.39104H899.03616c36.21888-2.06848 36.21888-34.39104 36.21888-34.39104s0-32.10752-36.21888-34.39104h-149.39648z"
                                                fill="#000000"
                                                p-id="4316"
                                            ></path>
                                            <path
                                                d="M725.97504 473.216h-159.11936c32.35328-46.5408 53.92384-107.84768 53.92384-175.95904v-15.89248c69.81632-12.48768 115.22048-32.35328 115.22048-52.21888 0-21.56544-50.51392-41.43616-127.70816-53.92384-3.4048-18.16576-55.62368-165.1712-116.92032-165.1712-27.24352 0-48.8192 14.18752-63.00672 35.75808 0 10.78784-10.78272 21.56544-24.97536 21.56544-12.48768 0-23.2704-9.08288-24.97024-19.8656-12.48768-21.56544-35.7632-38.03136-63.00672-38.03136-59.5968 0-115.2256 135.08608-127.70816 169.14432-66.4064 12.48768-109.54752 30.64832-109.54752 52.21888 0 21.56544 44.84096 39.72608 115.2256 52.21888v15.89248c0 68.11136 19.8656 129.41312 53.92384 175.95904H67.36896l77.19424 126.00832c-57.32864 0-132.82304 78.8992-132.82304 147.57376l1.70496 206.60736c0 34.05824 26.6752 61.30176 61.30176 61.30176 0 0 557.99808 5.5552 589.48096 0-143.6928-71.66976-168.44288-187.12064-168.44288-261.53984 0-148.03968 105.81504-256.41472 230.19008-281.64608z m-367.43168 492.67712h-28.94848l-53.92384-397.32224 112.95744 98.75968-30.08512 298.56256z m123.74016 0h-28.94848l-30.65344-298.56256 113.52064-100.46464s-34.11968 123.33568-37.79584 148.26496c-8.1664 55.31648 3.79392 103.37792 3.79392 103.37792l-19.9168 147.38432z m68.11136-627.2v12.48768h-14.18752s-9.08288 77.19424-57.32864 77.19424c-48.81408 0-57.89184-77.19424-57.89184-77.19424h-32.34816c-7.37792 63.0016-39.7312 77.19424-57.32864 77.19424-43.136 0-55.6288-57.32864-57.32864-77.19424H259.2256v-24.97536h107.84256v12.48768h72.0896v-12.48768h107.84256v12.48768h3.39456z m0 0"
                                                fill="#000000"
                                                p-id="4317"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* 分页模块 */}
                    <div className="flex justify-center items-center">目录</div>
                </div>
            </div>
        </div>
    );
}
