"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5764],{51782:function(c,s,n){n.r(s);var _=n(2143),m=n(50250),Z=n(59378),p=n(78190),a=n(74775),l=n(5937),v=n(2068),g=n(74399),f=n(46004),x=n(35708),h=n(30138),P=n(56140),o=n(5388),E=n(49545),A=n(92169),D=n(13140),B=n(95127),C=n(74418),u=n(22130),d=n(67294),e=n(13946);function i(){var r=(0,u.eL)(),t=r.texts;return(0,e.tZ)(u.dY,null,(0,e.tZ)(d.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t[0].value),(0,e.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,t[1].value),(0,e.tZ)("li",null,t[2].value)),(0,e.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,e.tZ)(o.Z,{items:[{demo:{id:"components-message-demo-hooks"},previewerProps:{title:"Hooks \u8C03\u7528\uFF08\u63A8\u8350\uFF09",filename:"components/message/demo/hooks.tsx",jsx:`import React from 'react';
import { Button, message } from 'antd';
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info('Hello, Ant Design!');
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7 <code>message.useMessage</code> \u521B\u5EFA\u652F\u6301\u8BFB\u53D6 context \u7684 <code>contextHolder</code>\u3002\u8BF7\u6CE8\u610F\uFF0C\u6211\u4EEC\u63A8\u8350\u901A\u8FC7\u9876\u5C42\u6CE8\u518C\u7684\u65B9\u5F0F\u4EE3\u66FF <code>message</code> \u9759\u6001\u65B9\u6CD5\uFF0C\u56E0\u4E3A\u9759\u6001\u65B9\u6CD5\u65E0\u6CD5\u6D88\u8D39\u4E0A\u4E0B\u6587\uFF0C\u56E0\u800C ConfigProvider \u7684\u6570\u636E\u4E5F\u4E0D\u4F1A\u751F\u6548\u3002</p>"}},{demo:{id:"components-message-demo-other"},previewerProps:{title:"\u5176\u4ED6\u63D0\u793A\u7C7B\u578B",filename:"components/message/demo/other.tsx",jsx:`import React from 'react';
import { Button, message, Space } from 'antd';
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message',
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
    </>
  );
};
export default App;
`,description:"<p>\u5305\u62EC\u6210\u529F\u3001\u5931\u8D25\u3001\u8B66\u544A\u3002</p>"}},{demo:{id:"components-message-demo-duration"},previewerProps:{title:"\u4FEE\u6539\u5EF6\u65F6",filename:"components/message/demo/duration.tsx",jsx:`import React from 'react';
import { Button, message } from 'antd';
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message for success, and it will disappear in 10 seconds',
      duration: 10,
    });
  };
  return (
    <>
      {contextHolder}
      <Button onClick={success}>Customized display duration</Button>
    </>
  );
};
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u65F6\u957F <code>10s</code>\uFF0C\u9ED8\u8BA4\u65F6\u957F\u4E3A <code>3s</code>\u3002</p>"}},{demo:{id:"components-message-demo-loading"},previewerProps:{title:"\u52A0\u8F7D\u4E2D",filename:"components/message/demo/loading.tsx",jsx:`import React from 'react';
import { Button, message } from 'antd';
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });
    // Dismiss manually and asynchronously
    setTimeout(messageApi.destroy, 2500);
  };
  return (
    <>
      {contextHolder}
      <Button onClick={success}>Display a loading indicator</Button>
    </>
  );
};
export default App;
`,description:"<p>\u8FDB\u884C\u5168\u5C40 loading\uFF0C\u5F02\u6B65\u81EA\u884C\u79FB\u9664\u3002</p>"}},{demo:{id:"components-message-demo-thenable"},previewerProps:{title:"Promise \u63A5\u53E3",filename:"components/message/demo/thenable.tsx",jsx:`import React from 'react';
import { Button, message } from 'antd';
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi
      .open({
        type: 'loading',
        content: 'Action in progress..',
        duration: 2.5,
      })
      .then(() => message.success('Loading finished', 2.5))
      .then(() => message.info('Loading finished', 2.5));
  };
  return (
    <>
      {contextHolder}
      <Button onClick={success}>Display sequential messages</Button>
    </>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u901A\u8FC7 then \u63A5\u53E3\u5728\u5173\u95ED\u540E\u8FD0\u884C callback \u3002\u4EE5\u4E0A\u7528\u4F8B\u5C06\u5728\u6BCF\u4E2A message \u5C06\u8981\u7ED3\u675F\u65F6\u901A\u8FC7 then \u663E\u793A\u65B0\u7684 message \u3002</p>"}},{demo:{id:"components-message-demo-custom-style"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u6837\u5F0F",filename:"components/message/demo/custom-style.tsx",jsx:`import React from 'react';
import { Button, message } from 'antd';
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message with custom className and style',
      className: 'custom-class',
      style: {
        marginTop: '20vh',
      },
    });
  };
  return (
    <>
      {contextHolder}
      <Button onClick={success}>Customized style</Button>
    </>
  );
};
export default App;
`,description:"<p>\u4F7F\u7528 <code>style</code> \u548C <code>className</code> \u6765\u5B9A\u4E49\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-message-demo-update"},previewerProps:{title:"\u66F4\u65B0\u6D88\u606F\u5185\u5BB9",filename:"components/message/demo/update.tsx",jsx:`import React from 'react';
import { Button, message } from 'antd';
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Loaded!',
        duration: 2,
      });
    }, 1000);
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openMessage}>
        Open the message box
      </Button>
    </>
  );
};
export default App;
`,description:"<p>\u53EF\u4EE5\u901A\u8FC7\u552F\u4E00\u7684 <code>key</code> \u6765\u66F4\u65B0\u5185\u5BB9\u3002</p>"}},{demo:{id:"components-message-demo-info"},previewerProps:{title:"\u666E\u901A\u63D0\u793A",filename:"components/message/demo/info.tsx",jsx:`import React from 'react';
import { Button, message } from 'antd';
const info = () => {
  message.info('This is a normal message');
};
const App = () => (
  <Button type="primary" onClick={info}>
    Display normal message
  </Button>
);
export default App;
`,description:"<p>\u4FE1\u606F\u63D0\u9192\u53CD\u9988\u3002</p>"}},{demo:{id:"components-message-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/message/demo/render-panel.tsx",jsx:`import React from 'react';
import { message } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = message;
export default () => <InternalPanel content="Hello World!" type="error" />;
`,description:"<p>\u8C03\u8BD5\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u52FF\u76F4\u63A5\u4F7F\u7528\u3002</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("p",null,t[3].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[4].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[5].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[6].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[7].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[8].value),t[9].value),(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[10].value))),(0,e.tZ)(l.Z,null,(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[11].value),(0,e.tZ)("th",null,t[12].value),(0,e.tZ)("th",null,t[13].value),(0,e.tZ)("th",null,t[14].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[15].value),(0,e.tZ)("td",null,t[16].value),(0,e.tZ)("td",null,t[17].value),(0,e.tZ)("td",null,t[18].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[19].value),(0,e.tZ)("td",null,t[20].value),(0,e.tZ)("td",null,t[21].value),(0,e.tZ)("td",null,t[22].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[23].value),(0,e.tZ)("td",null,t[24].value),(0,e.tZ)("td",null,t[25].value),(0,e.tZ)("td",null,t[26].value)))),(0,e.tZ)("p",null,t[27].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[28].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[29].value))),(0,e.tZ)("p",null,t[30].value,(0,e.tZ)("code",null,t[31].value),t[32].value,(0,e.tZ)("code",null,t[33].value),t[34].value),(0,e.tZ)("p",null,t[35].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[36].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[37].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[38].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[39].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[40].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[41].value),t[42].value),(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[43].value))),(0,e.tZ)("p",null,(0,e.tZ)("code",null,t[44].value),t[45].value),(0,e.tZ)(l.Z,null,(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[46].value),(0,e.tZ)("th",null,t[47].value),(0,e.tZ)("th",null,t[48].value),(0,e.tZ)("th",null,t[49].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[50].value),(0,e.tZ)("td",null,t[51].value),(0,e.tZ)("td",null,t[52].value),(0,e.tZ)("td",null,t[53].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[54].value),(0,e.tZ)("td",null,t[55].value),(0,e.tZ)("td",null,t[56].value),(0,e.tZ)("td",null,t[57].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[58].value),(0,e.tZ)("td",null,t[59].value),(0,e.tZ)("td",null,t[60].value),(0,e.tZ)("td",null,t[61].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[62].value),(0,e.tZ)("td",null,t[63].value),(0,e.tZ)("td",null,t[64].value),(0,e.tZ)("td",null,t[65].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[66].value),(0,e.tZ)("td",null,t[67].value),(0,e.tZ)("td",null,t[68].value),(0,e.tZ)("td",null,t[69].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[70].value),(0,e.tZ)("td",null,t[71].value),(0,e.tZ)("td",null,(0,e.tZ)("a",{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794"},t[72].value)),(0,e.tZ)("td",null,t[73].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[74].value),(0,e.tZ)("td",null,t[75].value),(0,e.tZ)("td",null,t[76].value),(0,e.tZ)("td",null,t[77].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[78].value),(0,e.tZ)("td",null,t[79].value),(0,e.tZ)("td",null,t[80].value),(0,e.tZ)("td",null,t[81].value)))),(0,e.tZ)("h3",{id:"\u5168\u5C40\u65B9\u6CD5"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5168\u5C40\u65B9\u6CD5"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u5168\u5C40\u65B9\u6CD5"),(0,e.tZ)("p",null,t[82].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[83].value)),(0,e.tZ)("li",null,(0,e.tZ)("code",null,t[84].value))),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,t[85].value,(0,e.tZ)("code",null,t[86].value),t[87].value)),(0,e.tZ)("h4",{id:"messageconfig"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#messageconfig"},(0,e.tZ)("span",{className:"icon icon-link"})),"message.config"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,t[88].value,(0,e.tZ)("code",null,t[89].value),t[90].value),(0,e.tZ)("p",null,t[91].value)),(0,e.tZ)(a.Z,{lang:"js"},t[92].value),(0,e.tZ)(l.Z,null,(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[93].value),(0,e.tZ)("th",null,t[94].value),(0,e.tZ)("th",null,t[95].value),(0,e.tZ)("th",null,t[96].value),(0,e.tZ)("th",null,t[97].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[98].value),(0,e.tZ)("td",null,t[99].value),(0,e.tZ)("td",null,t[100].value),(0,e.tZ)("td",null,t[101].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[102].value),(0,e.tZ)("td",null,t[103].value),(0,e.tZ)("td",null,t[104].value),(0,e.tZ)("td",null,t[105].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[106].value),(0,e.tZ)("td",null,t[107].value),(0,e.tZ)("td",null,t[108].value),(0,e.tZ)("td",null,t[109].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[110].value),(0,e.tZ)("td",null,t[111].value),(0,e.tZ)("td",null,t[112].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[113].value)),(0,e.tZ)("td",null,t[114].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[115].value),(0,e.tZ)("td",null,t[116].value),(0,e.tZ)("td",null,t[117].value),(0,e.tZ)("td",null,t[118].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[119].value),(0,e.tZ)("td",null,t[120].value),(0,e.tZ)("td",null,t[121].value),(0,e.tZ)("td",null,t[122].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h2",{id:"faq"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,e.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,e.tZ)("h3",{id:"\u4E3A\u4EC0\u4E48-message-\u4E0D\u80FD\u83B7\u53D6-contextredux-\u7684\u5185\u5BB9\u548C-configprovider-\u7684-localeprefixcls-\u914D\u7F6E"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4EC0\u4E48-message-\u4E0D\u80FD\u83B7\u53D6-contextredux-\u7684\u5185\u5BB9\u548C-configprovider-\u7684-localeprefixcls-\u914D\u7F6E"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4E3A\u4EC0\u4E48 message \u4E0D\u80FD\u83B7\u53D6 context\u3001redux \u7684\u5185\u5BB9\u548C ConfigProvider \u7684 ",(0,e.tZ)("code",null,t[123].value)," \u914D\u7F6E\uFF1F"),(0,e.tZ)("p",null,t[124].value,(0,e.tZ)("code",null,t[125].value),t[126].value),(0,e.tZ)("p",null,t[127].value,(0,e.tZ)("code",null,t[128].value),t[129].value,(0,e.tZ)("code",null,t[130].value),t[131].value,(0,e.tZ)("code",null,t[132].value),t[133].value),(0,e.tZ)(a.Z,{lang:"tsx"},t[134].value),(0,e.tZ)("p",null,t[135].value,(0,e.tZ)("code",null,t[136].value),t[137].value),(0,e.tZ)("h3",{id:"\u9759\u6001\u65B9\u6CD5\u5982\u4F55\u8BBE\u7F6E-prefixcls-"},(0,e.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u9759\u6001\u65B9\u6CD5\u5982\u4F55\u8BBE\u7F6E-prefixcls-"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u9759\u6001\u65B9\u6CD5\u5982\u4F55\u8BBE\u7F6E prefixCls \uFF1F"),(0,e.tZ)("p",null,t[138].value,(0,e.tZ)(u.rU,{to:"/components/config-provider/#ConfigProvider.config()-4.13.0+"},(0,e.tZ)("code",null,t[139].value)),t[140].value))))}s.default=i}}]);
