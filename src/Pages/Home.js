import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
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
                                <li class="nav-item pcoded-menu-caption">
                                    <label>Navigation</label>
                                </li>
                                <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" class="nav-item active">
                                    <a href="index.html" class="nav-link "><span class="pcoded-micon"><i class="feather icon-home"></i></span><span class="pcoded-mtext">Dashboard</span></a>
                                </li>
                                <li class="nav-item pcoded-menu-caption">
                                    <label>Pages</label>
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
                                <li class="nav-item pcoded-menu-caption">
                                    <label>Example section</label>
                                </li>
                                <li data-username="" class="nav-item">
                                    <a href="###" class="nav-link "><span class="pcoded-micon"><i class="feather icon-file-text"></i></span><span class="pcoded-mtext">Example section 1</span></a>
                                </li>
                                <li data-username="" class="nav-item">
                                    <a href="###" class="nav-link "><span class="pcoded-micon"><i class="feather icon-server"></i></span><span class="pcoded-mtext">Example section 2</span></a>
                                </li>
                                <li data-username="" class="nav-item"><a href="###" class="nav-link "><span class="pcoded-micon"><i class="feather icon-map"></i></span><span class="pcoded-mtext">Example section 3</span></a></li>
                                <li class="nav-item pcoded-menu-caption">
                                    <label>Functions</label>
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



                 <header class="navbar pcoded-header navbar-expand-lg navbar-light">
                    <div class="m-header">
                        <a className="mobile-menu" id="mobile-collapse1" href="javascript:"><span></span></a>
                        <a href="index.html" class="b-brand">
                            <div class="b-bg">
                                <i class="feather icon-trending-up"></i>
                            </div>
                            <span class="b-title">Akij ESOL</span>
                        </a>
                    </div>
                    <a class="mobile-menu" id="mobile-header" href="javascript:">
                        <i class="feather icon-more-horizontal"></i>
                    </a>
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav mr-auto">
                            <li><a href="javascript:" class="full-screen" onclick="javascript:toggleFullScreen()"><i
                                class="feather icon-maximize"></i></a></li>
                            
                            
                        </ul>
                        <ul class="navbar-nav ml-auto">
                            <li>
                                <div class="dropdown">
                                    <a class="dropdown-toggle" href="javascript:" data-toggle="dropdown"><i class="icon feather icon-bell"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right notification">
                                        <div class="noti-head">
                                            <h6 class="d-inline-block m-b-0">Notifications</h6>
                                            <div class="float-right">
                                                <a href="javascript:" class="m-r-10">mark as read</a>
                                                <a href="javascript:">clear all</a>
                                            </div>
                                        </div>
                                        <ul class="noti-body">
                                            <li class="n-title">
                                                <p class="m-b-0">NEW</p>
                                            </li>
                                            <li class="notification">
                                                <div class="media">
                                                    <img class="img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image"/>
                                                        <div class="media-body">
                                                            <p><strong>Person Example</strong><span class="n-time text-muted"><i class="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                                            <p>New person </p>
                                                        </div>
                                                </div>
                                            </li>
                                            
                                            <li class="notification">
                                                <div class="media">
                                                    <img class="img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/>
                                                        <div class="media-body">
                                                            <p><strong>Person 1</strong><span class="n-time text-muted"><i class="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                                            <p>Prchace New Theme</p>
                                                        </div>
                                                </div>
                                            </li>
                                            <li class="notification">
                                                <div class="media">
                                                    <img class="img-radius" src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image"/>
                                                        <div class="media-body">
                                                            <p><strong>Sara Soudein</strong><span class="n-time text-muted"><i class="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                                            <p>currently login</p>
                                                        </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="noti-footer">
                                            <a href="javascript:">show all</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown drp-user">
                                    <a href="javascript:" class="dropdown-toggle" data-toggle="dropdown">
                                        <i class="icon feather icon-settings"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right profile-notification">
                                        <div class="pro-head">
                                            <img src="assets/images/user/avatar-1.jpg" class="img-radius" alt="User-Profile-Image"/>
                                                <span>Example Person</span>
                                                <a href="auth-signin.html" class="dud-logout" title="Logout">
                                                    <i class="feather icon-log-out"></i>
                                                </a>
                                        </div>
                                        <ul class="pro-body">
                                            <li><a href="javascript:" class="dropdown-item"><i class="feather icon-settings"></i> Settings</a></li>
                                            <li><a href="javascript:" class="dropdown-item"><i class="feather icon-user"></i> Profile</a></li>
                                            <li><a href="message.html" class="dropdown-item"><i class="feather icon-mail"></i> My Messages</a></li>
                                            <li><a href="auth-signin.html" class="dropdown-item"><i class="feather icon-lock"></i> Lock Screen</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </header> 


                
                <div class="pcoded-main-container">
                    <div class="pcoded-wrapper">
                        <div class="pcoded-content">
                            <div class="pcoded-inner-content">

                                <div class="main-body">
                                    <div class="page-wrapper">

                                        <div class="container bg-danger" >
                                            <h1 class="text-center pt-2">Main Content Section</h1>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  




            </div>
        );
    }
}

export default Home;