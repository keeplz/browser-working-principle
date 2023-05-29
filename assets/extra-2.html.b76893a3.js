import{_ as n,r as s,o as p,a as i,b as e,d as o,F as c,e as r,c as a}from"./app.d393e7b0.js";const h={},d=e("h1",{id:"\u52A0\u9910\u4E8C-\u4EFB\u52A1\u8C03\u5EA6-\u6709\u4E86settimeout-\u4E3A\u4EC0\u4E48\u8FD8\u8981\u4F7F\u7528raf",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u52A0\u9910\u4E8C-\u4EFB\u52A1\u8C03\u5EA6-\u6709\u4E86settimeout-\u4E3A\u4EC0\u4E48\u8FD8\u8981\u4F7F\u7528raf","aria-hidden":"true"},"#"),r(" \u52A0\u9910\u4E8C\uFF5C\u4EFB\u52A1\u8C03\u5EA6\uFF1A\u6709\u4E86setTimeOut\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u8981\u4F7F\u7528rAF\uFF1F")],-1),l=e("p",null,"\u4F60\u597D\uFF0C\u6211\u662F\u674E\u5175\u3002",-1),_=e("p",null,"\u6211\u4EEC\u90FD\u77E5\u9053\uFF0C\u8981\u60F3\u5229\u7528 JavaScript \u5B9E\u73B0\u9AD8\u6027\u80FD\u7684\u52A8\u753B\uFF0C\u90A3\u5C31\u5F97\u4F7F\u7528 requestAnimationFrame \u8FD9\u4E2A API\uFF0C\u6211\u4EEC\u7B80\u79F0 rAF\uFF0C\u90A3\u4E48\u4E3A\u4EC0\u4E48\u90FD\u63A8\u8350\u4F7F\u7528 rAF \u800C\u4E0D\u662F setTimeOut \u5462\uFF1F",-1),g=e("p",null,"\u8981\u89E3\u91CA\u6E05\u695A\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5C31\u8981\u4ECE\u6E32\u67D3\u8FDB\u7A0B\u7684\u4EFB\u52A1\u8C03\u5EA6\u7CFB\u7EDF\u8BB2\u8D77\uFF0C\u7406\u89E3\u4E86\u6E32\u67D3\u8FDB\u7A0B\u4EFB\u52A1\u8C03\u5EA6\u7CFB\u7EDF\uFF0C\u4F60\u81EA\u7136\u5C31\u660E\u767D\u4E86 rAF \u548C setTimeOut \u7684\u533A\u522B\u3002\u5176\u6B21\uFF0C\u5982\u679C\u4F60\u7406\u89E3\u4EFB\u52A1\u8C03\u5EA6\u7CFB\u7EDF\uFF0C\u90A3\u4E48\u4F60\u5C31\u80FD\u5C06\u6E32\u67D3\u6D41\u6C34\u7EBF\u548C\u6D4F\u89C8\u5668\u7CFB\u7EDF\u67B6\u6784\u7B49\u77E5\u8BC6\u4E32\u8D77\u6765\uFF0C\u7406\u89E3\u4E86\u8FD9\u4E9B\u6982\u5FF5\u4E5F\u6709\u52A9\u4E8E\u4F60\u7406\u89E3 Performance \u6807\u7B7E\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u3002",-1),m=e("p",null,"\u8981\u60F3\u4E86\u89E3\u6700\u65B0 Chrome \u7684\u4EFB\u52A1\u8C03\u5EA6\u7CFB\u7EDF\u662F\u600E\u4E48\u5DE5\u4F5C\u7684\uFF0C\u6211\u4EEC\u5F97\u5148\u6765\u56DE\u987E\u4E0B\u4E4B\u524D\u4ECB\u7ECD\u7684\u6D88\u606F\u5FAA\u73AF\u7CFB\u7EDF\uFF0C\u6211\u4EEC\u77E5\u9053\u4E86\u6E32\u67D3\u8FDB\u7A0B\u5185\u90E8\u7684\u5927\u591A\u6570\u4EFB\u52A1\u90FD\u662F\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C\u7684\uFF0C\u8BF8\u5982 JavaScript \u6267\u884C\u3001DOM\u3001CSS\u3001\u8BA1\u7B97\u5E03\u5C40\u3001V8 \u7684\u5783\u573E\u56DE\u6536\u7B49\u4EFB\u52A1\u3002\u8981\u8BA9\u8FD9\u4E9B\u4EFB\u52A1\u80FD\u591F\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6709\u6761\u4E0D\u7D0A\u5730\u8FD0\u884C\uFF0C\u5C31\u9700\u8981\u5F15\u5165\u6D88\u606F\u961F\u5217\u3002",-1),u=r("\u5728\u524D\u9762\u7684\u300A"),f={href:"/guide/16",target:"_blank",rel:"noopener noreferrer"},S=r("16 | WebAPI\uFF1AsetTimeout \u662F\u5982\u4F55\u5B9E\u73B0\u7684\uFF1F"),b=r("\u300B\u8FD9\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u8FD8\u4ECB\u7ECD\u4E86\uFF0C\u4E3B\u7EBF\u7A0B\u7EF4\u62A4\u4E86\u4E00\u4E2A\u666E\u901A\u7684\u6D88\u606F\u961F\u5217\u548C\u4E00\u4E2A\u5EF6\u8FDF\u6D88\u606F\u961F\u5217\uFF0C\u8C03\u5EA6\u6A21\u5757\u4F1A\u6309\u7167\u89C4\u5219\u4F9D\u6B21\u53D6\u51FA\u8FD9\u4E24\u4E2A\u6D88\u606F\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\uFF0C\u5E76\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C\u3002\u4E3A\u4E86\u4E0B\u6587\u8BB2\u8FF0\u65B9\u4FBF\uFF0C\u5728\u8FD9\u91CC\u6211\u628A\u666E\u901A\u7684\u6D88\u606F\u961F\u5217\u548C\u5EF6\u8FDF\u961F\u5217\u90FD\u5F53\u6210\u4E00\u4E2A\u6D88\u606F\u961F\u5217\u3002"),k=a('<p>\u65B0\u7684\u4EFB\u52A1\u90FD\u662F\u88AB\u653E\u8FDB\u6D88\u606F\u961F\u5217\u4E2D\u53BB\u7684\uFF0C\u7136\u540E\u4E3B\u7EBF\u7A0B\u518D\u4F9D\u6B21\u4ECE\u6D88\u606F\u961F\u5217\u4E2D\u53D6\u51FA\u8FD9\u4E9B\u4EFB\u52A1\u6765\u987A\u5E8F\u6267\u884C\u3002\u8FD9\u5C31\u662F\u6211\u4EEC\u4E4B\u524D\u4ECB\u7ECD\u7684\u6D88\u606F\u961F\u5217\u548C\u4E8B\u4EF6\u5FAA\u73AF\u7CFB\u7EDF\u3002</p><h2 id="\u5355\u6D88\u606F\u961F\u5217\u7684\u961F\u5934\u963B\u585E\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5355\u6D88\u606F\u961F\u5217\u7684\u961F\u5934\u963B\u585E\u95EE\u9898" aria-hidden="true">#</a> \u5355\u6D88\u606F\u961F\u5217\u7684\u961F\u5934\u963B\u585E\u95EE\u9898</h2><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u6E32\u67D3\u4E3B\u7EBF\u7A0B\u4F1A\u6309\u7167\u5148\u8FDB\u5148\u51FA\u7684\u987A\u5E8F\u6267\u884C\u6D88\u606F\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\uFF0C\u5177\u4F53\u5730\u8BB2\uFF0C\u5F53\u4EA7\u751F\u4E86\u65B0\u7684\u4EFB\u52A1\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u4F1A\u5C06\u5176\u6DFB\u52A0\u5230\u6D88\u606F\u961F\u5217\u5C3E\u90E8\uFF0C\u5728\u6267\u884C\u4EFB\u52A1\u8FC7\u7A0B\u4E2D\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u4F1A\u987A\u5E8F\u5730\u4ECE\u6D88\u606F\u961F\u5217\u5934\u90E8\u53D6\u51FA\u4EFB\u52A1\u5E76\u4F9D\u6B21\u6267\u884C\u3002</p><p>\u5728\u6700\u521D\uFF0C\u91C7\u7528\u8FD9\u79CD\u65B9\u5F0F\u6CA1\u6709\u592A\u5927\u7684\u95EE\u9898\uFF0C\u56E0\u4E3A\u9875\u9762\u4E2D\u7684\u4EFB\u52A1\u8FD8\u4E0D\u7B97\u592A\u591A\uFF0C\u6E32\u67D3\u4E3B\u7EBF\u7A0B\u4E5F\u4E0D\u662F\u592A\u7E41\u5FD9\u3002\u4E0D\u8FC7\u6D4F\u89C8\u5668\u662F\u5411\u524D\u4E0D\u505C\u8FDB\u5316\u7684\uFF0C\u5176\u8FDB\u5316\u8DEF\u7EBF\u4F53\u73B0\u5728\u67B6\u6784\u7684\u8C03\u6574\u3001\u529F\u80FD\u7684\u589E\u52A0\u4EE5\u53CA\u66F4\u52A0\u7CBE\u7EC6\u7684\u4F18\u5316\u7B56\u7565\u7B49\u65B9\u9762\uFF0C\u8FD9\u4E9B\u53D8\u5316\u8BA9\u6E32\u67D3\u8FDB\u7A0B\u6240\u9700\u8981\u5904\u7406\u7684\u4EFB\u52A1\u53D8\u591A\u4E86\uFF0C\u5BF9\u5E94\u7684\u6E32\u67D3\u8FDB\u7A0B\u7684\u4E3B\u7EBF\u7A0B\u4E5F\u53D8\u5F97\u8D8A\u62E5\u6324\u3002\u4E0B\u56FE\u6240\u5C55\u793A\u7684\u4EC5\u4EC5\u662F\u90E8\u5206\u8FD0\u884C\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u7684\u4EFB\u52A1\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003\u4E0B\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/fa/f4/fa9f5853a5dcad650aaaf39072820ef4.png" alt="\u4EFB\u52A1\u548C\u6D88\u606F\u961F\u5217"></p><p>\u4F60\u53EF\u4EE5\u8BD5\u60F3\u4E00\u4E0B\uFF0C\u5728\u57FA\u4E8E\u8FD9\u79CD\u5355\u6D88\u606F\u961F\u5217\u7684\u67B6\u6784\u4E0B\uFF0C\u5982\u679C\u7528\u6237\u53D1\u51FA\u4E00\u4E2A\u70B9\u51FB\u4E8B\u4EF6\u6216\u8005\u7F29\u653E\u9875\u9762\u7684\u4E8B\u4EF6\uFF0C\u800C\u5728\u6B64\u65F6\uFF0C\u8BE5\u4EFB\u52A1\u524D\u9762\u53EF\u80FD\u8FD8\u6709\u5F88\u591A\u4E0D\u592A\u91CD\u8981\u7684\u4EFB\u52A1\u5728\u6392\u961F\u7B49\u5F85\u7740\u88AB\u6267\u884C\uFF0C\u8BF8\u5982 V8 \u7684\u5783\u573E\u56DE\u6536\u3001DOM \u5B9A\u65F6\u5668\u7B49\u4EFB\u52A1\uFF0C\u5982\u679C\u6267\u884C\u8FD9\u4E9B\u4EFB\u52A1\u9700\u8981\u82B1\u8D39\u7684\u65F6\u95F4\u8FC7\u4E45\u7684\u8BDD\uFF0C\u90A3\u4E48\u5C31\u4F1A\u8BA9\u7528\u6237\u4EA7\u751F\u5361\u987F\u7684\u611F\u89C9\u3002\u4F60\u53EF\u4EE5\u53C2\u770B\u4E0B\u56FE\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/cc/ff/cc7c32fa82207cece9c78015e4b841ff.jpg" alt="\u961F\u5934\u963B\u585E\u95EE\u9898"></p><p>\u56E0\u6B64\uFF0C<strong>\u5728\u5355\u6D88\u606F\u961F\u5217\u67B6\u6784\u4E0B\uFF0C\u5B58\u5728\u7740\u4F4E\u4F18\u5148\u7EA7\u4EFB\u52A1\u4F1A\u963B\u585E\u9AD8\u4F18\u5148\u7EA7\u4EFB\u52A1\u7684\u60C5\u51B5</strong>\uFF0C\u6BD4\u5982\u5728\u4E00\u4E9B\u6027\u80FD\u4E0D\u9AD8\u7684\u624B\u673A\u4E0A\uFF0C\u6709\u65F6\u5019\u6EDA\u52A8\u9875\u9762\u9700\u8981\u7B49\u5F85\u4E00\u79D2\u4EE5\u4E0A\u3002\u8FD9\u50CF\u6781\u4E86\u6211\u4EEC\u5728\u4ECB\u7ECD HTTP \u534F\u8BAE\u65F6\u6240\u8C08\u8BBA\u7684\u961F\u5934\u963B\u585E\u95EE\u9898\uFF0C\u90A3\u4E48\u6211\u4EEC\u4E5F\u628A\u8FD9\u4E2A\u95EE\u9898\u79F0\u4E3A\u6D88\u606F\u961F\u5217\u7684\u961F\u5934\u963B\u585E\u95EE\u9898\u5427\u3002</p><h2 id="chromium-\u662F\u5982\u4F55\u89E3\u51B3\u961F\u5934\u963B\u585E\u95EE\u9898\u7684" tabindex="-1"><a class="header-anchor" href="#chromium-\u662F\u5982\u4F55\u89E3\u51B3\u961F\u5934\u963B\u585E\u95EE\u9898\u7684" aria-hidden="true">#</a> Chromium \u662F\u5982\u4F55\u89E3\u51B3\u961F\u5934\u963B\u585E\u95EE\u9898\u7684\uFF1F</h2><p>\u4E3A\u4E86\u89E3\u51B3\u7531\u4E8E\u5355\u6D88\u606F\u961F\u5217\u800C\u9020\u6210\u7684\u961F\u5934\u963B\u585E\u95EE\u9898\uFF0CChromium \u56E2\u961F\u4ECE 2013 \u5E74\u5230\u73B0\u5728\uFF0C\u82B1\u4E86\u5927\u91CF\u7684\u7CBE\u529B\u5728\u6301\u7EED\u91CD\u6784\u5E95\u5C42\u6D88\u606F\u673A\u5236\u3002\u5728\u63A5\u4E0B\u6765\u7684\u7BC7\u5E45\u91CC\uFF0C\u6211\u4F1A\u6309\u7167 Chromium \u56E2\u961F\u7684\u91CD\u6784\u6D88\u606F\u7CFB\u7EDF\u7684\u601D\u8DEF\uFF0C\u6765\u5E26\u4F60\u5206\u6790\u4E0B\u4ED6\u4EEC\u662F\u5982\u4F55\u89E3\u51B3\u6389\u961F\u5934\u963B\u585E\u95EE\u9898\u7684\u3002</p><h3 id="_1-\u7B2C\u4E00\u6B21\u8FED\u4EE3-\u5F15\u5165\u4E00\u4E2A\u9AD8\u4F18\u5148\u7EA7\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#_1-\u7B2C\u4E00\u6B21\u8FED\u4EE3-\u5F15\u5165\u4E00\u4E2A\u9AD8\u4F18\u5148\u7EA7\u961F\u5217" aria-hidden="true">#</a> 1. \u7B2C\u4E00\u6B21\u8FED\u4EE3\uFF1A\u5F15\u5165\u4E00\u4E2A\u9AD8\u4F18\u5148\u7EA7\u961F\u5217</h3><p>\u9996\u5148\u5728\u6700\u7406\u60F3\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5E0C\u671B\u80FD\u591F\u5FEB\u901F\u8DDF\u8E2A\u9AD8\u4F18\u5148\u7EA7\u4EFB\u52A1\uFF0C\u6BD4\u5982\u5728\u4EA4\u4E92\u9636\u6BB5\uFF0C\u4E0B\u9762\u51E0\u79CD\u4EFB\u52A1\u90FD\u5E94\u8BE5\u89C6\u4E3A\u9AD8\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\uFF1A</p><ul><li><p>\u901A\u8FC7\u9F20\u6807\u89E6\u53D1\u7684\u70B9\u51FB\u4EFB\u52A1\u3001\u6EDA\u52A8\u9875\u9762\u4EFB\u52A1\uFF1B</p></li><li><p>\u901A\u8FC7\u624B\u52BF\u89E6\u53D1\u7684\u9875\u9762\u7F29\u653E\u4EFB\u52A1\uFF1B</p></li><li><p>\u901A\u8FC7 CSS\u3001JavaScript \u7B49\u64CD\u4F5C\u89E6\u53D1\u7684\u52A8\u753B\u7279\u6548\u7B49\u4EFB\u52A1\u3002</p></li></ul><p>\u8FD9\u4E9B\u4EFB\u52A1\u88AB\u89E6\u53D1\u540E\uFF0C\u7528\u6237\u60F3\u7ACB\u5373\u5F97\u5230\u9875\u9762\u7684\u53CD\u9988\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u8BA9\u8FD9\u4E9B\u4EFB\u52A1\u80FD\u591F\u4F18\u5148\u4E0E\u5176\u4ED6\u7684\u4EFB\u52A1\u6267\u884C\u3002\u8981\u5B9E\u73B0\u8FD9\u79CD\u6548\u679C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u589E\u52A0\u4E00\u4E2A\u9AD8\u4F18\u7EA7\u7684\u6D88\u606F\u961F\u5217\uFF0C\u5C06\u9AD8\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\u90FD\u6DFB\u52A0\u5230\u8FD9\u4E2A\u961F\u5217\u91CC\u9762\uFF0C\u7136\u540E\u4F18\u5148\u6267\u884C\u8BE5\u6D88\u606F\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u3002\u6700\u7EC8\u6548\u679C\u5982\u4E0B\u56FE\u6240\u793A:</p><p><img src="https://static001.geekbang.org/resource/image/03/c1/039fdf4c399d20a75d7dea9448cc8fc1.jpg" alt="\u5F15\u5165\u9AD8\u4F18\u5148\u7EA7\u7684\u6D88\u606F\u961F\u5217"></p><p>\u89C2\u5BDF\u4E0A\u56FE\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86\u4E00\u4E2A\u4F18\u5148\u7EA7\u9AD8\u7684\u6D88\u606F\u961F\u5217\u548C\u4E00\u4E2A\u4F18\u5148\u7EA7\u4F4E\u6D88\u606F\u961F\u5217\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u4F1A\u5C06\u5B83\u8BA4\u4E3A\u662F\u7D27\u6025\u7684\u4EFB\u52A1\u6DFB\u52A0\u5230\u9AD8\u4F18\u5148\u7EA7\u961F\u5217\u4E2D\uFF0C\u4E0D\u7D27\u6025\u7684\u4EFB\u52A1\u5C31\u6DFB\u52A0\u5230\u4F4E\u4F18\u5148\u7EA7\u7684\u961F\u5217\u4E2D\u3002\u7136\u540E\u6211\u4EEC\u518D\u5728\u6E32\u67D3\u8FDB\u7A0B\u4E2D\u5F15\u5165\u4E00\u4E2A<strong>\u4EFB\u52A1\u8C03\u5EA6\u5668</strong>\uFF0C\u8D1F\u8D23\u4ECE\u591A\u4E2A\u6D88\u606F\u961F\u5217\u4E2D\u9009\u51FA\u5408\u9002\u7684\u4EFB\u52A1\uFF0C\u901A\u5E38\u5B9E\u73B0\u7684\u903B\u8F91\uFF0C\u5148\u6309\u7167\u987A\u5E8F\u4ECE\u9AD8\u4F18\u5148\u7EA7\u961F\u5217\u4E2D\u53D6\u51FA\u4EFB\u52A1\uFF0C\u5982\u679C\u9AD8\u4F18\u5148\u7EA7\u7684\u961F\u5217\u4E3A\u7A7A\uFF0C\u90A3\u4E48\u518D\u6309\u7167\u987A\u5E8F\u4ECE\u4F4E\u4F18\u7EA7\u961F\u5217\u4E2D\u53D6\u51FA\u4EFB\u52A1\u3002</p><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u66F4\u8FDB\u4E00\u6B65\uFF0C\u5C06\u4EFB\u52A1\u5212\u5206\u4E3A\u591A\u4E2A\u4E0D\u540C\u7684\u4F18\u5148\u7EA7\uFF0C\u6765\u5B9E\u73B0\u66F4\u52A0\u7EC6\u7C92\u5EA6\u7684\u4EFB\u52A1\u8C03\u5EA6\uFF0C\u6BD4\u5982\u53EF\u4EE5\u5212\u5206\u4E3A\u9AD8\u4F18\u5148\u7EA7\uFF0C\u666E\u901A\u4F18\u5148\u7EA7\u548C\u4F4E\u4F18\u5148\u7EA7\uFF0C\u6700\u7EC8\u6548\u679C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/d7/78/d7c71113c6c13047fb79e7d120173b78.jpg" alt="\u589E\u52A0\u591A\u4E2A\u4E0D\u540C\u4F18\u5148\u7EA7\u7684\u6D88\u606F\u961F\u5217"></p><p>\u89C2\u5BDF\u4E0A\u56FE\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E86\u4E09\u4E2A\u4E0D\u540C\u4F18\u5148\u7EA7\u7684\u6D88\u606F\u961F\u5217\uFF0C\u7136\u540E\u53EF\u4EE5\u4F7F\u7528\u4EFB\u52A1\u8C03\u5EA6\u5668\u6765\u7EDF\u4E00\u8C03\u5EA6\u8FD9\u4E09\u4E2A\u4E0D\u540C\u6D88\u606F\u961F\u5217\u4E2D\u7684\u4EFB\u52A1\u3002</p><p>\u597D\u4E86\uFF0C\u73B0\u5728\u6211\u4EEC\u5F15\u5165\u4E86\u591A\u4E2A\u6D88\u606F\u961F\u5217\uFF0C\u7ED3\u5408\u4EFB\u52A1\u8C03\u5EA6\u5668\u6211\u4EEC\u5C31\u53EF\u4EE5\u7075\u6D3B\u5730\u8C03\u5EA6\u4EFB\u52A1\u4E86\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u8BA9\u9AD8\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\u63D0\u524D\u6267\u884C\uFF0C\u91C7\u7528\u8FD9\u79CD\u65B9\u5F0F\u4F3C\u4E4E\u89E3\u51B3\u4E86\u6D88\u606F\u961F\u5217\u7684\u961F\u5934\u963B\u585E\u95EE\u9898\u3002</p><p>\u4E0D\u8FC7\u5927\u591A\u6570\u4EFB\u52A1\u9700\u8981\u4FDD\u6301\u5176\u76F8\u5BF9\u6267\u884C\u987A\u5E8F\uFF0C\u5982\u679C\u5C06\u7528\u6237\u8F93\u5165\u7684\u6D88\u606F\u6216\u8005\u5408\u6210\u6D88\u606F\u6DFB\u52A0\u8FDB\u591A\u4E2A\u4E0D\u540C\u4F18\u5148\u7EA7\u7684\u961F\u5217\u4E2D\uFF0C\u90A3\u4E48\u8FD9\u79CD\u4EFB\u52A1\u7684\u76F8\u5BF9\u6267\u884C\u987A\u5E8F\u5C31\u4F1A\u88AB\u6253\u4E71\uFF0C\u751A\u81F3\u6709\u53EF\u80FD\u51FA\u73B0\u8FD8\u672A\u5904\u7406\u8F93\u5165\u4E8B\u4EF6\uFF0C\u5C31\u5408\u6210\u4E86\u8BE5\u4E8B\u4EF6\u8981\u663E\u793A\u7684\u56FE\u7247\u3002\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u8BA9\u4E00\u4E9B\u76F8\u540C\u7C7B\u578B\u7684\u4EFB\u52A1\u4FDD\u6301\u5176\u76F8\u5BF9\u6267\u884C\u987A\u5E8F\u3002</p><h3 id="_2-\u7B2C\u4E8C\u6B21\u8FED\u4EE3-\u6839\u636E\u6D88\u606F\u7C7B\u578B\u6765\u5B9E\u73B0\u6D88\u606F\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#_2-\u7B2C\u4E8C\u6B21\u8FED\u4EE3-\u6839\u636E\u6D88\u606F\u7C7B\u578B\u6765\u5B9E\u73B0\u6D88\u606F\u961F\u5217" aria-hidden="true">#</a> 2. \u7B2C\u4E8C\u6B21\u8FED\u4EE3\uFF1A\u6839\u636E\u6D88\u606F\u7C7B\u578B\u6765\u5B9E\u73B0\u6D88\u606F\u961F\u5217</h3><p>\u8981\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4E3A\u4E0D\u540C\u7C7B\u578B\u7684\u4EFB\u52A1\u521B\u5EFA\u4E0D\u540C\u4F18\u5148\u7EA7\u7684\u6D88\u606F\u961F\u5217\uFF0C\u6BD4\u5982\uFF1A</p><ul><li><p>\u53EF\u4EE5\u521B\u5EFA\u8F93\u5165\u4E8B\u4EF6\u7684\u6D88\u606F\u961F\u5217\uFF0C\u7528\u6765\u5B58\u653E\u8F93\u5165\u4E8B\u4EF6\u3002</p></li><li><p>\u53EF\u4EE5\u521B\u5EFA\u5408\u6210\u4EFB\u52A1\u7684\u6D88\u606F\u961F\u5217\uFF0C\u7528\u6765\u5B58\u653E\u5408\u6210\u4E8B\u4EF6\u3002</p></li><li><p>\u53EF\u4EE5\u521B\u5EFA\u9ED8\u8BA4\u6D88\u606F\u961F\u5217\uFF0C\u7528\u6765\u4FDD\u5B58\u5982\u8D44\u6E90\u52A0\u8F7D\u7684\u4E8B\u4EF6\u548C\u5B9A\u65F6\u5668\u56DE\u8C03\u7B49\u4E8B\u4EF6\u3002</p></li><li><p>\u8FD8\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u7A7A\u95F2\u6D88\u606F\u961F\u5217\uFF0C\u7528\u6765\u5B58\u653E V8 \u7684\u5783\u573E\u81EA\u52A8\u5783\u573E\u56DE\u6536\u8FD9\u4E00\u7C7B\u5B9E\u65F6\u6027\u4E0D\u9AD8\u7684\u4E8B\u4EF6\u3002</p></li></ul><p>\u6700\u7EC8\u5B9E\u73B0\u6548\u679C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/56/ce/56ec510f7f7d4738e9db83dbd51f3fce.png" alt="\u6839\u636E\u6D88\u606F\u7C7B\u578B\u5B9E\u73B0\u4E0D\u540C\u4F18\u5148\u7EA7\u7684\u6D88\u606F\u961F\u5217"></p><p>\u901A\u8FC7\u8FED\u4EE3\uFF0C\u8FD9\u79CD\u7B56\u7565\u5DF2\u7ECF\u76F8\u5F53\u5B9E\u7528\u4E86\uFF0C\u4F46\u662F\u5B83\u4F9D\u7136\u5B58\u5728\u7740\u95EE\u9898\uFF0C\u90A3\u5C31\u662F\u8FD9\u51E0\u79CD\u6D88\u606F\u961F\u5217\u7684\u4F18\u5148\u7EA7\u90FD\u662F\u56FA\u5B9A\u7684\uFF0C\u4EFB\u52A1\u8C03\u5EA6\u5668\u4F1A\u6309\u7167\u8FD9\u79CD\u56FA\u5B9A\u597D\u7684\u9759\u6001\u7684\u4F18\u5148\u7EA7\u6765\u5206\u522B\u8C03\u5EA6\u4EFB\u52A1\u3002\u90A3\u4E48\u9759\u6001\u4F18\u5148\u7EA7\u4F1A\u5E26\u6765\u4EC0\u4E48\u95EE\u9898\u5462\uFF1F</p>',27),V=r("\u6211\u4EEC\u5728\u300A"),C={href:"/guide/25",target:"_blank",rel:"noopener noreferrer"},y=r("25 | \u9875\u9762\u6027\u80FD\uFF1A\u5982\u4F55\u7CFB\u7EDF\u5730\u4F18\u5316\u9875\u9762\uFF1F"),x=r("\u300B\u8FD9\u8282\u5206\u6790\u8FC7\u9875\u9762\u7684\u751F\u5B58\u5468\u671F\uFF0C\u9875\u9762\u5927\u81F4\u7684\u751F\u5B58\u5468\u671F\u5927\u4F53\u5206\u4E3A\u4E24\u4E2A\u9636\u6BB5\uFF0C\u52A0\u8F7D\u9636\u6BB5\u548C\u4EA4\u4E92\u9636\u6BB5\u3002"),v=a('<p>\u867D\u7136\u5728\u4EA4\u4E92\u9636\u6BB5\uFF0C\u91C7\u7528\u4E0A\u8FF0\u8FD9\u79CD\u9759\u6001\u4F18\u5148\u7EA7\u7684\u7B56\u7565\u6CA1\u6709\u4EC0\u4E48\u592A\u5927\u95EE\u9898\u7684\uFF0C\u4F46\u662F\u5728\u9875\u9762\u52A0\u8F7D\u9636\u6BB5\uFF0C\u5982\u679C\u4F9D\u7136\u8981\u4F18\u5148\u6267\u884C\u7528\u6237\u8F93\u5165\u4E8B\u4EF6\u548C\u5408\u6210\u4E8B\u4EF6\uFF0C\u90A3\u4E48\u9875\u9762\u7684\u89E3\u6790\u901F\u5EA6\u5C06\u4F1A\u88AB\u62D6\u6162\u3002Chromium \u56E2\u961F\u66FE\u6D4B\u8BD5\u8FC7\u8FD9\u79CD\u60C5\u51B5\uFF0C\u4F7F\u7528\u9759\u6001\u4F18\u5148\u7EA7\u7B56\u7565\uFF0C\u7F51\u9875\u7684\u52A0\u8F7D\u901F\u5EA6\u4F1A\u88AB\u62D6\u6162 14%\u3002</p><h3 id="_3-\u7B2C\u4E09\u6B21\u8FED\u4EE3-\u52A8\u6001\u8C03\u5EA6\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_3-\u7B2C\u4E09\u6B21\u8FED\u4EE3-\u52A8\u6001\u8C03\u5EA6\u7B56\u7565" aria-hidden="true">#</a> 3. \u7B2C\u4E09\u6B21\u8FED\u4EE3\uFF1A\u52A8\u6001\u8C03\u5EA6\u7B56\u7565</h3><p>\u53EF\u4EE5\u770B\u51FA\uFF0C\u6211\u4EEC\u6240\u91C7\u7528\u7684\u4F18\u5316\u7B56\u7565\u50CF\u4E2A\u8DF7\u8DF7\u677F\uFF0C\u867D\u7136\u4F18\u5316\u4E86\u9AD8\u4F18\u5148\u7EA7\u4EFB\u52A1\uFF0C\u5374\u62D6\u6162\u4F4E\u4F18\u5148\u7EA7\u4EFB\u52A1\uFF0C\u4E4B\u6240\u4EE5\u4F1A\u8FD9\u6837\uFF0C\u662F\u56E0\u4E3A\u6211\u4EEC\u91C7\u53D6\u4E86\u9759\u6001\u7684\u4EFB\u52A1\u8C03\u5EA6\u7B56\u7565\uFF0C\u5BF9\u4E8E\u5404\u79CD\u4E0D\u540C\u7684\u573A\u666F\uFF0C\u8FD9\u79CD\u9759\u6001\u7B56\u7565\u5C31\u663E\u5F97\u8FC7\u4E8E\u6B7B\u677F\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u8FD8\u5F97\u6839\u636E\u5B9E\u9645\u573A\u666F\u6765\u7EE7\u7EED\u5E73\u8861\u8FD9\u4E2A\u8DF7\u8DF7\u677F\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5728\u4E0D\u540C\u7684\u573A\u666F\u4E0B\uFF0C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\uFF0C\u52A8\u6001\u8C03\u6574\u6D88\u606F\u961F\u5217\u7684\u4F18\u5148\u7EA7\u3002\u4E00\u56FE\u80DC\u8FC7\u5343\u8A00\uFF0C\u6211\u4EEC\u5148\u770B\u4E0B\u56FE\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/3c/f5/3cc95247daae7f90f0dced017d349af5.png" alt="\u52A8\u6001\u8C03\u5EA6\u7B56\u7565"></p><p>\u8FD9\u5F20\u56FE\u5C55\u793A\u4E86 Chromium \u5728\u4E0D\u540C\u7684\u573A\u666F\u4E0B\uFF0C\u662F\u5982\u4F55\u8C03\u6574\u6D88\u606F\u961F\u5217\u4F18\u5148\u7EA7\u7684\u3002\u901A\u8FC7\u8FD9\u79CD\u52A8\u6001\u8C03\u5EA6\u7B56\u7565\uFF0C\u5C31\u53EF\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u573A\u666F\u7684\u6838\u5FC3\u8BC9\u6C42\u4E86\uFF0C\u540C\u65F6\u8FD9\u4E5F\u662F Chromium \u5F53\u524D\u6240\u91C7\u7528\u7684\u4EFB\u52A1\u8C03\u5EA6\u7B56\u7565\u3002</p><p>\u4E0A\u56FE\u5217\u51FA\u4E86\u4E09\u4E2A\u4E0D\u540C\u7684\u573A\u666F\uFF0C\u5206\u522B\u662F\u52A0\u8F7D\u8FC7\u7A0B\uFF0C\u5408\u6210\u8FC7\u7A0B\u4EE5\u53CA\u6B63\u5E38\u72B6\u6001\u3002\u4E0B\u9762\u6211\u4EEC\u5C31\u7ED3\u5408\u8FD9\u4E09\u79CD\u573A\u666F\uFF0C\u6765\u5206\u6790\u4E0B Chromium \u4E3A\u4F55\u505A\u8FD9\u79CD\u8C03\u6574\u3002</p><p>\u9996\u5148\u6211\u4EEC\u6765\u770B\u770B<strong>\u9875\u9762\u52A0\u8F7D\u9636\u6BB5</strong>\u7684\u573A\u666F\uFF0C\u5728\u8FD9\u4E2A\u9636\u6BB5\uFF0C\u7528\u6237\u7684\u6700\u9AD8\u8BC9\u6C42\u662F\u5728\u5C3D\u53EF\u80FD\u77ED\u7684\u65F6\u95F4\u5185\u770B\u5230\u9875\u9762\uFF0C\u81F3\u4E8E\u4EA4\u4E92\u548C\u5408\u6210\u5E76\u4E0D\u662F\u8FD9\u4E2A\u9636\u6BB5\u7684\u6838\u5FC3\u8BC9\u6C42\uFF0C\u56E0\u6B64\u6211\u4EEC\u9700\u8981\u8C03\u6574\u7B56\u7565\uFF0C\u5728\u52A0\u8F7D\u9636\u6BB5\u5C06\u9875\u9762\u89E3\u6790\uFF0CJavaScript \u811A\u672C\u6267\u884C\u7B49\u4EFB\u52A1\u8C03\u6574\u4E3A\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u961F\u5217\uFF0C\u964D\u4F4E\u4EA4\u4E92\u5408\u6210\u8FD9\u4E9B\u961F\u5217\u7684\u4F18\u5148\u7EA7\u3002</p><p>\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\u5C31\u8FDB\u5165\u4E86<strong>\u4EA4\u4E92\u9636\u6BB5</strong>\uFF0C\u5728\u4ECB\u7ECD Chromium \u662F\u5982\u4F55\u8C03\u6574\u4EA4\u4E92\u9636\u6BB5\u7684\u4EFB\u52A1\u8C03\u5EA6\u7B56\u7565\u4E4B\u524D\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u5C94\u5F00\u4E00\u4E0B\uFF0C\u6765\u56DE\u987E\u4E0B\u9875\u9762\u7684\u6E32\u67D3\u8FC7\u7A0B\u3002</p>',9),P=r("\u5728\u300A"),F={href:"/guide/06",target:"_blank",rel:"noopener noreferrer"},A=r("06 | \u6E32\u67D3\u6D41\u7A0B\uFF08\u4E0B\uFF09\uFF1AHTML\u3001CSS \u548C JavaScript\uFF0C\u662F\u5982\u4F55\u53D8\u6210\u9875\u9762\u7684\uFF1F"),O=r("\u300B\u548C\u300A"),T={href:"/guide/24",target:"_blank",rel:"noopener noreferrer"},J=r("24 | \u5206\u5C42\u548C\u5408\u6210\u673A\u5236\uFF1A\u4E3A\u4EC0\u4E48 CSS \u52A8\u753B\u6BD4 JavaScript \u9AD8\u6548\uFF1F"),q=r("\u300B\u8FD9\u4E24\u8282\uFF0C\u6211\u4EEC\u5206\u6790\u4E86\u4E00\u4E2A\u9875\u9762\u662F\u5982\u4F55\u6E32\u67D3\u5E76\u663E\u793A\u51FA\u6765\u7684\u3002"),G=a('<p>\u5728\u663E\u5361\u4E2D\u6709\u4E00\u5757\u53EB\u7740<strong>\u524D\u7F13\u51B2\u533A</strong>\u7684\u5730\u65B9\uFF0C\u8FD9\u91CC\u5B58\u653E\u7740\u663E\u793A\u5668\u8981\u663E\u793A\u7684\u56FE\u50CF\uFF0C\u663E\u793A\u5668\u4F1A\u6309\u7167\u4E00\u5B9A\u7684\u9891\u7387\u6765\u8BFB\u53D6\u8FD9\u5757\u524D\u7F13\u51B2\u533A\uFF0C\u5E76\u5C06\u524D\u7F13\u51B2\u533A\u4E2D\u7684\u56FE\u50CF\u663E\u793A\u5728\u663E\u793A\u5668\u4E0A\uFF0C\u4E0D\u540C\u7684\u663E\u793A\u5668\u8BFB\u53D6\u7684\u9891\u7387\u662F\u4E0D\u540C\u7684\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u662F 60HZ\uFF0C\u4E5F\u5C31\u662F\u8BF4\u663E\u793A\u5668\u4F1A\u6BCF\u95F4\u9694 1/60 \u79D2\u5C31\u8BFB\u53D6\u4E00\u6B21\u524D\u7F13\u51B2\u533A\u3002</p><p>\u5982\u679C\u6D4F\u89C8\u5668\u8981\u66F4\u65B0\u663E\u793A\u7684\u56FE\u7247\uFF0C\u90A3\u4E48\u6D4F\u89C8\u5668\u4F1A\u5C06\u65B0\u751F\u6210\u7684\u56FE\u7247\u63D0\u4EA4\u5230\u663E\u5361\u7684<strong>\u540E\u7F13\u51B2\u533A</strong>\u4E2D\uFF0C\u63D0\u4EA4\u5B8C\u6210\u4E4B\u540E\uFF0CGPU \u4F1A\u5C06\u540E\u7F13\u51B2\u533A\u548C\u524D\u7F13\u51B2\u533A\u4E92\u6362\u4F4D\u7F6E\uFF0C\u4E5F\u5C31\u662F<strong>\u524D\u7F13\u51B2\u533A\u53D8\u6210\u4E86\u540E\u7F13\u51B2\u533A</strong>\uFF0C\u540E\u7F13\u51B2\u533A\u53D8\u6210\u4E86\u524D\u7F13\u51B2\u533A\uFF0C\u8FD9\u5C31\u4FDD\u8BC1\u4E86\u663E\u793A\u5668\u4E0B\u6B21\u80FD\u8BFB\u53D6\u5230 GPU \u4E2D\u6700\u65B0\u7684\u56FE\u7247\u3002</p><p>\u8FD9\u65F6\u5019\u6211\u4EEC\u4F1A\u53D1\u73B0\uFF0C\u663E\u793A\u5668\u4ECE\u524D\u7F13\u51B2\u533A\u8BFB\u53D6\u56FE\u7247\uFF0C\u548C\u6D4F\u89C8\u5668\u751F\u6210\u65B0\u7684\u56FE\u50CF\u5230\u540E\u7F13\u51B2\u533A\u7684\u8FC7\u7A0B\u662F\u4E0D\u540C\u6B65\u7684\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/1c/38/1c3a9d8a0f56b73331041ea603ad3738.png" alt="VSync \u65F6\u949F\u5468\u671F\u548C\u6E32\u67D3\u5F15\u64CE\u751F\u6210\u56FE\u7247\u4E0D\u540C\u6B65\u95EE\u9898"></p><p>\u8FD9\u79CD\u663E\u793A\u5668\u8BFB\u53D6\u56FE\u7247\u548C\u6D4F\u89C8\u5668\u751F\u6210\u56FE\u7247\u4E0D\u540C\u6B65\uFF0C\u5BB9\u6613\u9020\u6210\u4F17\u591A\u95EE\u9898\u3002</p><ul><li><p>\u5982\u679C\u6E32\u67D3\u8FDB\u7A0B\u751F\u6210\u7684\u5E27\u901F\u6BD4\u5C4F\u5E55\u7684\u5237\u65B0\u7387\u6162\uFF0C\u90A3\u4E48\u5C4F\u5E55\u4F1A\u5728\u4E24\u5E27\u4E2D\u663E\u793A\u540C\u4E00\u4E2A\u753B\u9762\uFF0C\u5F53\u8FD9\u79CD\u65AD\u65AD\u7EED\u7EED\u7684\u60C5\u51B5\u6301\u7EED\u53D1\u751F\u65F6\uFF0C\u7528\u6237\u5C06\u4F1A\u5F88\u660E\u663E\u5730\u5BDF\u89C9\u5230\u52A8\u753B\u5361\u4F4F\u4E86\u3002</p></li><li><p>\u5982\u679C\u6E32\u67D3\u8FDB\u7A0B\u751F\u6210\u7684\u5E27\u901F\u7387\u5B9E\u9645\u4E0A\u6BD4\u5C4F\u5E55\u5237\u65B0\u7387\u5FEB\uFF0C\u90A3\u4E48\u4E5F\u4F1A\u51FA\u73B0\u4E00\u4E9B\u89C6\u89C9\u4E0A\u7684\u95EE\u9898\uFF0C\u6BD4\u5982\u5F53\u5E27\u901F\u7387\u5728 100fps \u800C\u5237\u65B0\u7387\u53EA\u6709 60Hz \u7684\u65F6\u5019\uFF0CGPU \u6240\u6E32\u67D3\u7684\u56FE\u50CF\u5E76\u975E\u5168\u90FD\u88AB\u663E\u793A\u51FA\u6765\uFF0C\u8FD9\u5C31\u4F1A\u9020\u6210\u4E22\u5E27\u73B0\u8C61\u3002</p></li><li><p>\u5C31\u7B97\u5C4F\u5E55\u7684\u5237\u65B0\u9891\u7387\u548C GPU \u66F4\u65B0\u56FE\u7247\u7684\u9891\u7387\u4E00\u6837\uFF0C\u7531\u4E8E\u5B83\u4EEC\u662F\u4E24\u4E2A\u4E0D\u540C\u7684\u7CFB\u7EDF\uFF0C\u6240\u4EE5\u5C4F\u5E55\u751F\u6210\u5E27\u7684\u5468\u671F\u548C VSync \u7684\u5468\u671F\u4E5F\u662F\u5F88\u96BE\u540C\u6B65\u8D77\u6765\u7684\u3002</p></li></ul><p>\u6240\u4EE5 VSync \u548C\u7CFB\u7EDF\u7684\u65F6\u949F\u4E0D\u540C\u6B65\u5C31\u4F1A\u9020\u6210\u6389\u5E27\u3001\u5361\u987F\u3001\u4E0D\u8FDE\u8D2F\u7B49\u95EE\u9898\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898\uFF0C\u5C31\u9700\u8981\u5C06\u663E\u793A\u5668\u7684\u65F6\u949F\u540C\u6B65\u5468\u671F\u548C\u6D4F\u89C8\u5668\u751F\u6210\u9875\u9762\u7684\u5468\u671F\u7ED1\u5B9A\u8D77\u6765\uFF0CChromium \u4E5F\u662F\u8FD9\u6837\u5B9E\u73B0\uFF0C\u90A3\u4E48\u4E0B\u9762\u6211\u4EEC\u5C31\u6765\u770B\u770B Chromium \u5177\u4F53\u662F\u600E\u4E48\u5B9E\u73B0\u7684\uFF1F</p><p>**\u5F53\u663E\u793A\u5668\u5C06\u4E00\u5E27\u753B\u9762\u7ED8\u5236\u5B8C\u6210\u540E\uFF0C\u5E76\u5728\u51C6\u5907\u8BFB\u53D6\u4E0B\u4E00\u5E27\u4E4B\u524D\uFF0C\u663E\u793A\u5668\u4F1A\u53D1\u51FA\u4E00\u4E2A\u5782\u76F4\u540C\u6B65\u4FE1\u53F7\uFF08vertical synchronization\uFF09\u7ED9 GPU\uFF0C\u7B80\u79F0 VSync\u3002**\u8FD9\u65F6\u5019\u6D4F\u89C8\u5668\u5C31\u4F1A\u5145\u5206\u5229\u7528\u597D VSync \u4FE1\u53F7\u3002</p><p>\u5177\u4F53\u5730\u8BB2\uFF0C\u5F53 GPU \u63A5\u6536\u5230 VSync \u4FE1\u53F7\u540E\uFF0C\u4F1A\u5C06 VSync \u4FE1\u53F7\u540C\u6B65\u7ED9\u6D4F\u89C8\u5668\u8FDB\u7A0B\uFF0C\u6D4F\u89C8\u5668\u8FDB\u7A0B\u518D\u5C06\u5176\u540C\u6B65\u5230\u5BF9\u5E94\u7684\u6E32\u67D3\u8FDB\u7A0B\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u63A5\u6536\u5230 VSync \u4FE1\u53F7\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u51C6\u5907\u7ED8\u5236\u65B0\u7684\u4E00\u5E27\u4E86\uFF0C\u5177\u4F53\u6D41\u7A0B\u4F60\u53EF\u4EE5\u53C2\u8003\u4E0B\u56FE\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/06/08/06206ed4846e9531351a0cb7d1db6208.png" alt="\u7ED1\u5B9A VSync \u65F6\u949F\u540C\u6B65\u5468\u671F\u548C\u6D4F\u89C8\u5668\u751F\u6210\u9875\u9762\u5468\u671F"></p>',11),I=r("\u4E0A\u9762\u5176\u5B9E\u662F\u975E\u5E38\u7C97\u7565\u7684\u4ECB\u7ECD\uFF0C\u5B9E\u9645\u5B9E\u73B0\u8FC7\u7A0B\u4E5F\u662F\u975E\u5E38\u590D\u6742\u7684\uFF0C\u5982\u679C\u611F\u5174\u8DA3\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003"),U={href:"https://docs.google.com/document/d/16822du6DLKDZ1vQVNWI3gDVYoSqCSezgEmWZ0arvkP8/edit",target:"_blank",rel:"noopener noreferrer"},w=r("\u8FD9\u7BC7\u6587\u7AE0"),B=r("\u3002"),D=a('<p>\u597D\u4E86\uFF0C\u6211\u4EEC\u82B1\u4E86\u5F88\u5927\u7BC7\u5E45\u4ECB\u7ECD\u4E86 VSync \u548C\u9875\u9762\u4E2D\u7684\u4E00\u5E27\u662F\u600E\u4E48\u663E\u793A\u51FA\u6765\uFF0C\u6709\u4E86\u8FD9\u4E9B\u77E5\u8BC6\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u56DE\u5230\u4E3B\u7EBF\u4E86\uFF0C\u6765\u5206\u6790\u4E0B\u6E32\u67D3\u8FDB\u7A0B\u662F\u5982\u4F55\u4F18\u5316\u4EA4\u4E92\u9636\u6BB5\u9875\u9762\u7684\u4EFB\u52A1\u8C03\u5EA6\u7B56\u7565\u7684\uFF1F</p><p>\u4ECE\u4E0A\u56FE\u53EF\u4EE5\u770B\u51FA\uFF0C\u5F53\u6E32\u67D3\u8FDB\u7A0B\u63A5\u6536\u5230\u7528\u6237\u4EA4\u4E92\u7684\u4EFB\u52A1\u540E\uFF0C\u63A5\u4E0B\u6765\u5927\u6982\u7387\u662F\u8981\u8FDB\u884C\u7ED8\u5236\u5408\u6210\u64CD\u4F5C\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E\uFF0C<strong>\u5F53\u5728\u6267\u884C\u7528\u6237\u4EA4\u4E92\u7684\u4EFB\u52A1\u65F6\uFF0C\u5C06\u5408\u6210\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u8C03\u6574\u5230\u6700\u9AD8\u3002</strong></p><p>\u63A5\u4E0B\u6765\uFF0C\u5904\u7406\u5B8C\u6210 DOM\uFF0C\u8BA1\u7B97\u597D\u5E03\u5C40\u548C\u7ED8\u5236\uFF0C\u5C31\u9700\u8981\u5C06\u4FE1\u606F\u63D0\u4EA4\u7ED9\u5408\u6210\u7EBF\u7A0B\u6765\u5408\u6210\u6700\u7EC8\u56FE\u7247\u4E86\uFF0C\u7136\u540E\u5408\u6210\u7EBF\u7A0B\u8FDB\u5165\u5DE5\u4F5C\u72B6\u6001\u3002\u73B0\u5728\u7684\u573A\u666F\u662F\u5408\u6210\u7EBF\u7A0B\u5728\u5DE5\u4F5C\u4E86\uFF0C<strong>\u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u628A\u4E0B\u4E2A\u5408\u6210\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u8C03\u6574\u4E3A\u6700\u4F4E\uFF0C\u5E76\u5C06\u9875\u9762\u89E3\u6790\u3001\u5B9A\u65F6\u5668\u7B49\u4EFB\u52A1\u4F18\u5148\u7EA7\u63D0\u5347\u3002</strong></p><p>\u5728\u5408\u6210\u5B8C\u6210\u4E4B\u540E\uFF0C\u5408\u6210\u7EBF\u7A0B\u4F1A\u63D0\u4EA4\u7ED9\u6E32\u67D3\u4E3B\u7EBF\u7A0B\u63D0\u4EA4\u5B8C\u6210\u5408\u6210\u7684\u6D88\u606F\uFF0C\u5982\u679C\u5F53\u524D\u5408\u6210\u64CD\u4F5C\u6267\u884C\u7684\u975E\u5E38\u5FEB\uFF0C\u6BD4\u5982\u4ECE\u7528\u6237\u53D1\u51FA\u6D88\u606F\u5230\u5B8C\u6210\u5408\u6210\u64CD\u4F5C\u53EA\u82B1\u4E86 8 \u6BEB\u79D2\uFF0C\u56E0\u4E3A VSync \u540C\u6B65\u5468\u671F\u662F 16.66\uFF081/60\uFF09\u6BEB\u79D2\uFF0C\u90A3\u4E48\u8FD9\u4E2A VSync \u65F6\u949F\u5468\u671F\u5185\u5C31\u4E0D\u9700\u8981\u518D\u6B21\u751F\u6210\u65B0\u7684\u9875\u9762\u4E86\u3002\u90A3\u4E48\u4ECE\u5408\u6210\u7ED3\u675F\u5230\u4E0B\u4E2A VSync \u5468\u671F\u5185\uFF0C\u5C31\u8FDB\u5165\u4E86\u4E00\u4E2A\u7A7A\u95F2\u65F6\u95F4\u9636\u6BB5\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u5728\u8FD9\u6BB5\u7A7A\u95F2\u65F6\u95F4\u5185\u6267\u884C\u4E00\u4E9B\u4E0D\u90A3\u4E48\u7D27\u6025\u7684\u4EFB\u52A1\uFF0C\u6BD4\u5982 V8 \u7684\u5783\u573E\u56DE\u6536\uFF0C\u6216\u8005\u901A\u8FC7 window.requestIdleCallback() \u8BBE\u7F6E\u7684\u56DE\u8C03\u4EFB\u52A1\u7B49\uFF0C\u90FD\u4F1A\u5728\u8FD9\u6BB5\u7A7A\u95F2\u65F6\u95F4\u5185\u6267\u884C\u3002</p><h3 id="_4-\u7B2C\u56DB\u6B21\u8FED\u4EE3-\u4EFB\u52A1\u997F\u6B7B" tabindex="-1"><a class="header-anchor" href="#_4-\u7B2C\u56DB\u6B21\u8FED\u4EE3-\u4EFB\u52A1\u997F\u6B7B" aria-hidden="true">#</a> 4. \u7B2C\u56DB\u6B21\u8FED\u4EE3\uFF1A\u4EFB\u52A1\u997F\u6B7B</h3><p>\u597D\u4E86\uFF0C\u4EE5\u4E0A\u65B9\u6848\u770B\u4E0A\u53BB\u4F3C\u4E4E\u975E\u5E38\u5B8C\u7F8E\u4E86\uFF0C\u4E0D\u8FC7\u4F9D\u7136\u5B58\u5728\u4E00\u4E2A\u95EE\u9898\uFF0C\u90A3\u5C31\u662F\u5728\u67D0\u4E2A\u72B6\u6001\u4E0B\uFF0C\u4E00\u76F4\u6709\u65B0\u7684\u9AD8\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\u52A0\u5165\u5230\u961F\u5217\u4E2D\uFF0C\u8FD9\u6837\u5C31\u4F1A\u5BFC\u81F4\u5176\u4ED6\u4F4E\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\u5F97\u4E0D\u5230\u6267\u884C\uFF0C\u8FD9\u79F0\u4E3A\u4EFB\u52A1\u997F\u6B7B\u3002</p><p>Chromium \u4E3A\u4E86\u89E3\u51B3\u4EFB\u52A1\u997F\u6B7B\u7684\u95EE\u9898\uFF0C\u7ED9\u6BCF\u4E2A\u961F\u5217\u8BBE\u7F6E\u4E86\u6267\u884C\u6743\u91CD\uFF0C\u4E5F\u5C31\u662F\u5982\u679C\u8FDE\u7EED\u6267\u884C\u4E86\u4E00\u5B9A\u4E2A\u6570\u7684\u9AD8\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\uFF0C\u90A3\u4E48\u4E2D\u95F4\u4F1A\u6267\u884C\u4E00\u6B21\u4F4E\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\uFF0C\u8FD9\u6837\u5C31\u7F13\u89E3\u4E86\u4EFB\u52A1\u997F\u6B7B\u7684\u60C5\u51B5\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u597D\u4E86\uFF0C\u672C\u8282\u7684\u5185\u5BB9\u5C31\u4ECB\u7ECD\u5230\u8FD9\u91CC\uFF0C\u4E0B\u9762\u6211\u6765\u603B\u7ED3\u4E0B\u672C\u6587\u7684\u4E3B\u8981\u5185\u5BB9\uFF1A</p><p>\u9996\u5148\u6211\u4EEC\u5206\u6790\u4E86\u57FA\u4E8E\u5355\u6D88\u606F\u961F\u5217\u4F1A\u5F15\u8D77\u961F\u5934\u963B\u585E\u7684\u95EE\u9898\uFF0C\u4E3A\u4E86\u89E3\u51B3\u961F\u5934\u963B\u585E\u95EE\u9898\uFF0C\u6211\u4EEC\u5F15\u5165\u4E86\u591A\u4E2A\u4E0D\u540C\u4F18\u7EA7\u7684\u6D88\u606F\u961F\u5217\uFF0C\u5E76\u5C06\u7D27\u6025\u7684\u4EFB\u52A1\u6DFB\u52A0\u5230\u9AD8\u4F18\u5148\u7EA7\u961F\u5217\uFF0C\u4E0D\u8FC7\u5927\u591A\u6570\u4EFB\u52A1\u9700\u8981\u4FDD\u6301\u5176\u76F8\u5BF9\u6267\u884C\u987A\u5E8F\uFF0C\u5982\u679C\u5C06\u7528\u6237\u8F93\u5165\u7684\u6D88\u606F\u6216\u8005\u5408\u6210\u6D88\u606F\u6DFB\u52A0\u8FDB\u591A\u4E2A\u4E0D\u540C\u4F18\u5148\u7EA7\u7684\u961F\u5217\u4E2D\uFF0C\u90A3\u4E48\u8FD9\u79CD\u4EFB\u52A1\u7684\u76F8\u5BF9\u6267\u884C\u987A\u5E8F\u5C31\u4F1A\u88AB\u6253\u4E71\uFF0C\u6240\u4EE5\u6211\u4EEC\u53C8\u8FED\u4EE3\u4E86\u7B2C\u4E8C\u4E2A\u7248\u672C\u3002</p><p>\u5728\u7B2C\u4E8C\u4E2A\u7248\u672C\u4E2D\uFF0C\u6309\u7167\u4E0D\u540C\u7684\u4EFB\u52A1\u7C7B\u578B\u6765\u5212\u5206\u4EFB\u52A1\u4F18\u5148\u7EA7\uFF0C\u4E0D\u8FC7\u7531\u4E8E\u91C7\u7528\u7684\u9759\u6001\u4F18\u5148\u7EA7\u7B56\u7565\uFF0C\u5BF9\u4E8E\u5176\u4ED6\u4E00\u4E9B\u573A\u666F\uFF0C\u8FD9\u79CD\u9759\u6001\u8C03\u5EA6\u7684\u7B56\u7565\u5E76\u4E0D\u662F\u592A\u9002\u5408\uFF0C\u6240\u4EE5\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u53C8\u8FED\u4EE3\u4E86\u7B2C\u4E09\u7248\u3002</p><p>\u7B2C\u4E09\u4E2A\u7248\u672C\uFF0C\u57FA\u4E8E\u4E0D\u540C\u7684\u573A\u666F\u6765\u52A8\u6001\u8C03\u6574\u6D88\u606F\u961F\u5217\u7684\u4F18\u5148\u7EA7\uFF0C\u5230\u4E86\u8FD9\u91CC\u5DF2\u7ECF\u975E\u5E38\u5B8C\u7F8E\u4E86\uFF0C\u4E0D\u8FC7\u4F9D\u7136\u5B58\u5728\u7740\u4EFB\u52A1\u997F\u6B7B\u7684\u95EE\u9898\uFF0C\u4E3A\u4E86\u89E3\u51B3\u4EFB\u52A1\u997F\u6B7B\u7684\u95EE\u9898\uFF0C\u6211\u4EEC\u7ED9\u6BCF\u4E2A\u961F\u5217\u4E00\u4E2A\u6743\u91CD\uFF0C\u5982\u679C\u8FDE\u7EED\u6267\u884C\u4E86\u4E00\u5B9A\u4E2A\u6570\u7684\u9AD8\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\uFF0C\u90A3\u4E48\u4E2D\u95F4\u4F1A\u6267\u884C\u4E00\u6B21\u4F4E\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u5B8C\u6210\u4E86 Chromium \u7684\u4EFB\u52A1\u6539\u9020\u3002</p><p>\u901A\u8FC7\u6574\u4E2A\u8FC7\u7A0B\u7684\u5206\u6790\uFF0C\u6211\u4EEC\u5E94\u8BE5\u80FD\u7406\u89E3\uFF0C\u5728\u5F00\u53D1\u4E00\u4E2A\u9879\u76EE\u65F6\uFF0C\u4E0D\u8981\u8BD5\u56FE\u53BB\u627E\u6700\u5B8C\u7F8E\u7684\u65B9\u6848\uFF0C\u5B8C\u7F8E\u7684\u65B9\u6848\u5F80\u5F80\u662F\u4E0D\u5B58\u5728\u7684\uFF0C\u6211\u4EEC\u9700\u8981\u6839\u636E\u5B9E\u9645\u7684\u573A\u666F\u6765\u5BFB\u627E\u6700\u9002\u5408\u6211\u4EEC\u7684\u65B9\u6848\u3002</p><h2 id="\u601D\u8003\u9898" tabindex="-1"><a class="header-anchor" href="#\u601D\u8003\u9898" aria-hidden="true">#</a> \u601D\u8003\u9898</h2><p>\u6211\u4EEC\u77E5\u9053 CSS \u52A8\u753B\u662F\u7531\u6E32\u67D3\u8FDB\u7A0B\u81EA\u52A8\u5904\u7406\u7684\uFF0C\u6240\u4EE5\u6E32\u67D3\u8FDB\u7A0B\u4F1A\u8BA9 CSS \u6E32\u67D3\u6BCF\u5E27\u52A8\u753B\u7684\u8FC7\u7A0B\u4E0E VSync \u7684\u65F6\u949F\u4FDD\u6301\u4E00\u81F4, \u8FD9\u6837\u5C31\u80FD\u4FDD\u8BC1 CSS \u52A8\u753B\u7684\u9AD8\u6548\u7387\u6267\u884C\u3002</p><p>\u4F46\u662F JavaScript \u662F\u7531\u7528\u6237\u63A7\u5236\u7684\uFF0C\u5982\u679C\u91C7\u7528 setTimeout \u6765\u89E6\u53D1\u52A8\u753B\u6BCF\u5E27\u7684\u7ED8\u5236\uFF0C\u90A3\u4E48\u5176\u7ED8\u5236\u65F6\u673A\u662F\u5F88\u96BE\u548C VSync \u65F6\u949F\u4FDD\u6301\u4E00\u81F4\u7684\uFF0C\u6240\u4EE5 JavaScript \u4E2D\u53C8\u5F15\u5165\u4E86 window.requestAnimationFrame\uFF0C\u7528\u6765\u548C VSync \u7684\u65F6\u949F\u5468\u671F\u540C\u6B65\uFF0C\u90A3\u4E48\u6211\u7559\u7ED9\u4F60\u7684\u95EE\u9898\u662F\uFF1A\u4F60\u77E5\u9053 requestAnimationFrame \u56DE\u8C03\u51FD\u6570\u7684\u6267\u884C\u65F6\u673A\u5417\uFF1F</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2><p>\u4E0B\u9762\u662F\u6211\u53C2\u8003\u7684\u4E00\u4E9B\u8D44\u6599\uFF1A</p>',18),N={href:"https://chromium.googlesource.com/chromium/src/+/refs/tags/80.0.3968.1/third_party/blink/renderer/platform/scheduler/",target:"_blank",rel:"noopener noreferrer"},z=r("Blink Scheduler"),E={href:"https://docs.google.com/presentation/d/1V09Qq08_jOucvOFs-C7P4Hz2Vsswa6imqLxAf7ONomQ/edit#slide=id.g3ef47b745_0104",target:"_blank",rel:"noopener noreferrer"},H=r("Blink Scheduler PPT"),L={href:"https://chromium.googlesource.com/chromium/src/third_party/+/master/blink/public/platform/task_type.h",target:"_blank",rel:"noopener noreferrer"},j=r("Chrome \u7684\u6D88\u606F\u7C7B\u578B"),M={href:"https://chromium.googlesource.com/chromium/src/base/+/refs/heads/master/task/sequence_manager/task_queue.h",target:"_blank",rel:"noopener noreferrer"},W=r("Chrome \u6D88\u606F\u4F18\u5148\u7EA7"),Q={href:"https://docs.google.com/presentation/d/1OnvR0S2s8yrn0KWAJaFEgOasrSnwR_I7JFzTB6f-G3U/htmlpresent",target:"_blank",rel:"noopener noreferrer"},Z=r("\u65E0\u5934\u6D4F\u89C8\u5668"),K=e("p",null,"\u6B22\u8FCE\u5728\u7559\u8A00\u533A\u5206\u4EAB\u4F60\u7684\u60F3\u6CD5\u3002\u611F\u8C22\u9605\u8BFB\uFF0C\u5982\u679C\u4F60\u89C9\u5F97\u8FD9\u7BC7\u6587\u7AE0\u5BF9\u4F60\u6709\u5E2E\u52A9\u7684\u8BDD\uFF0C\u4E5F\u6B22\u8FCE\u628A\u5B83\u5206\u4EAB\u7ED9\u66F4\u591A\u7684\u670B\u53CB\u3002",-1);function R(Y,X){const t=s("ExternalLinkIcon");return p(),i(c,null,[d,l,_,g,m,e("p",null,[u,e("a",f,[S,o(t)]),b]),k,e("p",null,[V,e("a",C,[y,o(t)]),x]),v,e("p",null,[P,e("a",F,[A,o(t)]),O,e("a",T,[J,o(t)]),q]),G,e("p",null,[I,e("a",U,[w,o(t)]),B]),D,e("p",null,[e("a",N,[z,o(t)])]),e("p",null,[e("a",E,[H,o(t)])]),e("p",null,[e("a",L,[j,o(t)])]),e("p",null,[e("a",M,[W,o(t)])]),e("p",null,[e("a",Q,[Z,o(t)])]),K],64)}var ee=n(h,[["render",R],["__file","extra-2.html.vue"]]);export{ee as default};
