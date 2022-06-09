import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    AreaChartOutlined,
    CalendarOutlined,
    HomeOutlined,
    LogoutOutlined,
    LoginOutlined
} from '@ant-design/icons';

const SideMenu = () => {

    const { Sider } = Layout;
    const { SubMenu } = Menu;



    return (
        <nav class="pcoded-navbar">
            <div class="navbar-wrapper">


                <div class="navbar-brand header-logo">
                    <a href="index.html" class="b-brand">
                        <div class="b-bg">
                            <i class="feather icon-trending-up"></i>
                        </div>
                        <span class="b-title">Akij ESOL</span>
                    </a>

                    <a class="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
                </div>

                <div class="navbar-content scroll-div">
                    <ul class="nav pcoded-inner-navbar">
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" class="nav-item active">
                            <a href="index.html" class="nav-link "><span class="pcoded-micon"><i class="feather icon-home"></i></span><span class="pcoded-mtext">Dashboard</span></a>
                        </li>
                        <li data-username="" class="nav-item pcoded-hasmenu">
                            <a href="javascript:" class="nav-link "><span class="pcoded-micon"><i class="feather icon-box"></i></span><span class="pcoded-mtext">Admin</span></a>
                            <ul class="pcoded-submenu">

                                <li class=""><a href="###" class="">Test page 1</a></li>
                                <li class=""><a href="###" class="">Test page 2</a></li>
                                <li class=""><a href="###" class="">Test page 3</a></li>
                                <li class=""><a href="###" class="">Test page 4</a></li>

                                <li class=""><a href="icon-feather.html" class="">Test page 5<span class="pcoded-badge label label-danger">NEW</span></a></li>
                            </ul>
                        </li>
                        <li data-username="" class="nav-item pcoded-hasmenu">
                            <a href="###" class="nav-link "><span class="pcoded-micon"><i class="feather icon-lock"></i></span><span class="pcoded-mtext">Authentication</span></a>
                            <ul class="pcoded-submenu">
                                <li class=""><a href="###" class="" target="_blank">Sign up</a></li>
                                <li class=""><a href="###" class="" target="_blank">Sign in</a></li>
                            </ul>
                        </li>
                        <li data-username="Sample Page" class="nav-item"><a href="sample-page.html" class="nav-link"><span class="pcoded-micon"><i class="feather icon-sidebar"></i></span><span class="pcoded-mtext">Sample page</span></a></li>
                        <li data-username="Disabled Menu" class="nav-item disabled"><a href="javascript:" class="nav-link"><span class="pcoded-micon"><i class="feather icon-power"></i></span><span class="pcoded-mtext">Disabled menu</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default SideMenu;
