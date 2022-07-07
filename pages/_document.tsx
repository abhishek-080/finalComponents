import { NextPage } from 'next'
import { Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script';
import { useState,useEffect } from 'react';

const Document:NextPage=()=> {

  return (
    <Html>
    <Head>
     <title></title>
     <meta charSet="utf-8" />
		<title>Metronic - the world's #1 selling Bootstrap Admin Theme Ecosystem for HTML, Vue, React, Angular &amp; Laravel by Keenthemes</title>
	


    <meta name="description" content="The most advanced Bootstrap Admin Theme on Themeforest trusted by 94,000 beginners and professionals. Multi-demo, Dark Mode, RTL support and complete React, Angular, Vue &amp; Laravel versions. Grab your copy now and get life-time updates for free." />
		<meta name="keywords" content="Metronic, bootstrap, bootstrap 5, Angular, VueJs, React, Laravel, admin themes, web design, figma, web development, free templates, free admin themes, bootstrap theme, bootstrap template, bootstrap dashboard, bootstrap dak mode, bootstrap button, bootstrap datepicker, bootstrap timepicker, fullcalendar, datatables, flaticon" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="article" />
		<meta property="og:title" content="Metronic - Bootstrap 5 HTML, VueJS, React, Angular &amp; Laravel Admin Dashboard Theme" />
		<meta property="og:url" content="https://keenthemes.com/metronic" />
		<meta property="og:site_name" content="Keenthemes | Metronic" />
		<link rel="canonical" href="https://preview.keenthemes.com/metronic8" />
		<link rel="shortcut icon" href="assets/media/logos/favicon.ico" />
		{/* <!--begin::Fonts--> */}
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
		{/* <!--end::Fonts--> */}
		{/* <!--begin::Page Vendor Stylesheets(used by this page)--> */}
		<link href="assets/plugins/custom/datatables/datatables.bundle.css" rel="stylesheet" type="text/css" />
		{/* <!--end::Page Vendor Stylesheets-->
		<!--begin::Global Stylesheets Bundle(used by all pages)--> */}
		<link href="assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
		<link href="assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
{/* 
     <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="https://goinggenius.com.np/gg-front/assets/img/favicon.png" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
      <link  href="/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
      <link  href="/assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
      <script  src="/assets/plugins/global/plugins.bundle.js"></script>
      <script  src="/assets/js/scripts.bundle.js"></script> */}
    </Head>
      <body  id="kt_body" className="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed  bg-white">
        <Main />
        <NextScript />

        {/* <Script src="/assets/plugins/global/plugins.bundle.js" strategy="lazyOnload" />
        <Script src="/assets/js/scripts.bundle.js" strategy="lazyOnload"  /> */}
        {/* <script  src="/assets/plugins/global/plugins.bundle.js" id="plugin_bundle_script"   ></script>
        <script  src="/assets/js/scripts.bundle.js" id="compiled_script"   ></script> */}
      
        <script>var hostUrl = "assets/";</script>
		{/* <!--begin::Global Javascript Bundle(used by all pages)--> */}
	  	<script src="assets/plugins/global/plugins.bundle.js"></script>
		  <script src="assets/js/scripts.bundle.js"></script>
		{ /* <!--end::Global Javascript Bundle-->
		<!--begin::Page Custom Javascript(used by this page)--> */}
		  <script src="assets/js/custom/utilities/modals/create-account.js"></script>
      <script src="assets/js/custom/utilities/modals/new-card.js"></script>

      </body>
    </Html>
  )
}
export default Document;