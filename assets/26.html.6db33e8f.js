import{_ as M,r as p,o as n,a as o,b as a,d as i,F as c,c as r,e}from"./app.d393e7b0.js";const d={},D=r('<h1 id="_26-\u865A\u62DFdom-\u865A\u62DFdom\u548C\u5B9E\u9645\u7684dom\u6709\u4F55\u4E0D\u540C" tabindex="-1"><a class="header-anchor" href="#_26-\u865A\u62DFdom-\u865A\u62DFdom\u548C\u5B9E\u9645\u7684dom\u6709\u4F55\u4E0D\u540C" aria-hidden="true">#</a> 26 | \u865A\u62DFDOM\uFF1A\u865A\u62DFDOM\u548C\u5B9E\u9645\u7684DOM\u6709\u4F55\u4E0D\u540C\uFF1F</h1><p>\u865A\u62DF DOM \u662F\u6700\u8FD1\u975E\u5E38\u706B\u7684\u6280\u672F\uFF0C\u4E24\u5927\u8457\u540D\u524D\u7AEF\u6846\u67B6 React \u548C Vue \u90FD\u4F7F\u7528\u4E86\u865A\u62DF DOM\uFF0C\u6240\u4EE5\u6211\u89C9\u5F97\u975E\u5E38\u6709\u5FC5\u8981\u7ED3\u5408\u6D4F\u89C8\u5668\u7684\u5DE5\u4F5C\u673A\u5236\u5BF9\u865A\u62DF DOM \u8FDB\u884C\u4E00\u6B21\u5206\u6790\u3002\u5F53\u7136\u4E86\uFF0CReact \u548C Vue \u6846\u67B6\u672C\u8EAB\u6240\u8574\u542B\u7684\u77E5\u8BC6\u70B9\u975E\u5E38\u591A\uFF0C\u800C\u4E14\u4E5F\u4E0D\u662F\u6211\u4EEC\u4E13\u680F\u7684\u91CD\u70B9\uFF0C\u6240\u4EE5\u5728\u8FD9\u91CC\u6211\u4EEC\u8FD8\u662F\u628A\u91CD\u5FC3\u805A\u7126\u5728\u865A\u62DF DOM \u4E0A\u3002</p><p>\u5728\u672C\u6587\u6211\u4EEC\u4F1A\u5148\u804A\u804A DOM \u7684\u4E00\u4E9B\u7F3A\u9677\uFF0C\u7136\u540E\u5728\u6B64\u57FA\u7840\u4E0A\u4ECB\u7ECD\u865A\u62DF DOM \u662F\u5982\u4F55\u89E3\u51B3\u8FD9\u4E9B\u7F3A\u9677\u7684\uFF0C\u6700\u540E\u518D\u7AD9\u5728\u53CC\u7F13\u5B58\u548C MVC \u7684\u89C6\u89D2\u6765\u804A\u804A\u865A\u62DF DOM\u3002\u7406\u89E3\u4E86\u8FD9\u4E9B\u4F1A\u8BA9\u4F60\u5BF9\u76EE\u524D\u7684\u524D\u7AEF\u6846\u67B6\u6709\u4E00\u4E2A\u66F4\u52A0\u5E95\u5C42\u7684\u8BA4\u8BC6\uFF0C\u8FD9\u4E5F\u6709\u52A9\u4E8E\u4F60\u66F4\u597D\u5730\u7406\u89E3\u8FD9\u4E9B\u524D\u7AEF\u6846\u67B6\u3002</p><h2 id="dom-\u7684\u7F3A\u9677" tabindex="-1"><a class="header-anchor" href="#dom-\u7684\u7F3A\u9677" aria-hidden="true">#</a> DOM \u7684\u7F3A\u9677</h2><p>\u901A\u8FC7\u524D\u9762\u4E00\u7CFB\u5217\u6587\u7AE0\u7684\u5B66\u4E60\uFF0C\u4F60\u5BF9 DOM \u7684\u751F\u6210\u8FC7\u7A0B\u5E94\u8BE5\u5DF2\u7ECF\u6709\u4E86\u6BD4\u8F83\u6DF1\u523B\u7684\u7406\u89E3\uFF0C\u5E76\u4E14\u4E5F\u77E5\u9053\u4E86\u901A\u8FC7 JavaScript \u64CD\u7EB5 DOM \u662F\u4F1A\u5F71\u54CD\u5230\u6574\u4E2A\u6E32\u67D3\u6D41\u6C34\u7EBF\u7684\u3002\u53E6\u5916\uFF0CDOM \u8FD8\u63D0\u4F9B\u4E86\u4E00\u7EC4 JavaScript \u63A5\u53E3\u7528\u6765\u904D\u5386\u6216\u8005\u4FEE\u6539\u8282\u70B9\uFF0C\u8FD9\u5957\u63A5\u53E3\u5305\u542B\u4E86 getElementById\u3001removeChild\u3001appendChild \u7B49\u65B9\u6CD5\u3002</p><p>\u6BD4\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8C03\u7528document.body.appendChild(node)\u5F80 body \u8282\u70B9\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20\uFF0C\u8C03\u7528\u8BE5 API \u4E4B\u540E\u4F1A\u5F15\u53D1\u4E00\u7CFB\u5217\u7684\u8FDE\u9501\u53CD\u5E94\u3002\u9996\u5148\u6E32\u67D3\u5F15\u64CE\u4F1A\u5C06 node \u8282\u70B9\u6DFB\u52A0\u5230 body \u8282\u70B9\u4E4B\u4E0A\uFF0C\u7136\u540E\u89E6\u53D1\u6837\u5F0F\u8BA1\u7B97\u3001\u5E03\u5C40\u3001\u7ED8\u5236\u3001\u6805\u683C\u5316\u3001\u5408\u6210\u7B49\u4EFB\u52A1\uFF0C\u6211\u4EEC\u628A\u8FD9\u4E00\u8FC7\u7A0B\u79F0\u4E3A<strong>\u91CD\u6392</strong>\u3002\u9664\u4E86\u91CD\u6392\u4E4B\u5916\uFF0C\u8FD8\u6709\u53EF\u80FD\u5F15\u8D77<strong>\u91CD\u7ED8</strong>\u6216\u8005<strong>\u5408\u6210</strong>\u64CD\u4F5C\uFF0C\u5F62\u8C61\u5730\u7406\u89E3\u5C31\u662F\u201C<strong>\u7275\u4E00\u53D1\u800C\u52A8\u5168\u8EAB</strong>\u201D\u3002\u53E6\u5916\uFF0C\u5BF9\u4E8E DOM \u7684\u4E0D\u5F53\u64CD\u4F5C\u8FD8\u6709\u53EF\u80FD\u5F15\u53D1<strong>\u5F3A\u5236\u540C\u6B65\u5E03\u5C40</strong>\u548C<strong>\u5E03\u5C40\u6296\u52A8</strong>\u7684\u95EE\u9898\uFF0C\u8FD9\u4E9B\u64CD\u4F5C\u90FD\u4F1A\u5927\u5927\u964D\u4F4E\u6E32\u67D3\u6548\u7387\u3002\u56E0\u6B64\uFF0C\u5BF9\u4E8E DOM \u7684\u64CD\u4F5C\u6211\u4EEC\u65F6\u523B\u90FD\u9700\u8981\u975E\u5E38\u5C0F\u5FC3\u8C28\u614E\u3002</p><p>\u5F53\u7136\uFF0C\u5BF9\u4E8E\u7B80\u5355\u7684\u9875\u9762\u6765\u8BF4\uFF0C\u5176 DOM \u7ED3\u6784\u8FD8\u662F\u6BD4\u8F83\u7B80\u5355\u7684\uFF0C\u6240\u4EE5\u4EE5\u4E0A\u8FD9\u4E9B\u64CD\u4F5C DOM \u7684\u95EE\u9898\u5E76\u4E0D\u4F1A\u5BF9\u7528\u6237\u4F53\u9A8C\u4EA7\u751F\u592A\u591A\u5F71\u54CD\u3002\u4F46\u662F\u5BF9\u4E8E\u4E00\u4E9B\u590D\u6742\u7684\u9875\u9762\u6216\u8005\u76EE\u524D\u4F7F\u7528\u975E\u5E38\u591A\u7684\u5355\u9875\u5E94\u7528\u6765\u8BF4\uFF0C\u5176 DOM \u7ED3\u6784\u662F\u975E\u5E38\u590D\u6742\u7684\uFF0C\u800C\u4E14\u8FD8\u9700\u8981\u4E0D\u65AD\u5730\u53BB\u4FEE\u6539 DOM \u6811\uFF0C\u6BCF\u6B21\u64CD\u4F5C DOM \u6E32\u67D3\u5F15\u64CE\u90FD\u9700\u8981\u8FDB\u884C\u91CD\u6392\u3001\u91CD\u7ED8\u6216\u8005\u5408\u6210\u7B49\u64CD\u4F5C\uFF0C\u56E0\u4E3A DOM \u7ED3\u6784\u590D\u6742\uFF0C\u6240\u751F\u6210\u7684\u9875\u9762\u7ED3\u6784\u4E5F\u4F1A\u5F88\u590D\u6742\uFF0C\u5BF9\u4E8E\u8FD9\u4E9B\u590D\u6742\u7684\u9875\u9762\uFF0C\u6267\u884C\u4E00\u6B21\u91CD\u6392\u6216\u8005\u91CD\u7ED8\u64CD\u4F5C\u90FD\u662F\u975E\u5E38\u8017\u65F6\u7684\uFF0C\u8FD9\u5C31\u7ED9\u6211\u4EEC\u5E26\u6765\u4E86\u771F\u6B63\u7684\u6027\u80FD\u95EE\u9898\u3002</p><p>\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u6709\u4E00\u79CD\u65B9\u5F0F\u6765\u51CF\u5C11 JavaScript \u5BF9 DOM \u7684\u64CD\u4F5C\uFF0C\u8FD9\u65F6\u5019\u865A\u62DF DOM \u5C31\u4E0A\u573A\u4E86\u3002</p><h2 id="\u4EC0\u4E48\u662F\u865A\u62DF-dom" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u865A\u62DF-dom" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u865A\u62DF DOM</h2><p>\u5728\u8C08\u8BBA\u4EC0\u4E48\u662F\u865A\u62DF DOM \u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u770B\u770B\u865A\u62DF DOM \u5230\u5E95\u8981\u89E3\u51B3\u54EA\u4E9B\u4E8B\u60C5\u3002</p><ul><li><p>\u5C06\u9875\u9762\u6539\u53D8\u7684\u5185\u5BB9\u5E94\u7528\u5230\u865A\u62DF DOM \u4E0A\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u5E94\u7528\u5230 DOM \u4E0A\u3002</p></li><li><p>\u53D8\u5316\u88AB\u5E94\u7528\u5230\u865A\u62DF DOM \u4E0A\u65F6\uFF0C\u865A\u62DF DOM \u5E76\u4E0D\u6025\u7740\u53BB\u6E32\u67D3\u9875\u9762\uFF0C\u800C\u4EC5\u4EC5\u662F\u8C03\u6574\u865A\u62DF DOM \u7684\u5185\u90E8\u72B6\u6001\uFF0C\u8FD9\u6837\u64CD\u4F5C\u865A\u62DF DOM \u7684\u4EE3\u4EF7\u5C31\u53D8\u5F97\u975E\u5E38\u8F7B\u4E86\u3002</p></li><li><p>\u5728\u865A\u62DF DOM \u6536\u96C6\u5230\u8DB3\u591F\u7684\u6539\u53D8\u65F6\uFF0C\u518D\u628A\u8FD9\u4E9B\u53D8\u5316\u4E00\u6B21\u6027\u5E94\u7528\u5230\u771F\u5B9E\u7684 DOM \u4E0A\u3002</p></li></ul><p>\u57FA\u4E8E\u4EE5\u4E0A\u4E09\u70B9\uFF0C\u6211\u4EEC\u518D\u6765\u770B\u770B\u4EC0\u4E48\u662F\u865A\u62DF DOM\u3002\u4E3A\u4E86\u76F4\u89C2\u7406\u89E3\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003\u4E0B\u56FE\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/cf/90/cf2089ad62af94881757c2f2de277890.png" alt="\u865A\u62DF DOM \u6267\u884C\u6D41\u7A0B"></p><p>\u8BE5\u56FE\u662F\u6211\u7ED3\u5408 React \u6D41\u7A0B\u753B\u7684\u4E00\u5F20\u865A\u62DF DOM \u6267\u884C\u6D41\u7A0B\u56FE\uFF0C\u4E0B\u9762\u6211\u4EEC\u5C31\u7ED3\u5408\u8FD9\u5F20\u56FE\u6765\u5206\u6790\u4E0B\u865A\u62DF DOM \u5230\u5E95\u600E\u4E48\u8FD0\u884C\u7684\u3002</p><ul><li><p><strong>\u521B\u5EFA\u9636\u6BB5</strong>\u3002\u9996\u5148\u4F9D\u636E JSX \u548C\u57FA\u7840\u6570\u636E\u521B\u5EFA\u51FA\u6765\u865A\u62DF DOM\uFF0C\u5B83\u53CD\u6620\u4E86\u771F\u5B9E\u7684 DOM \u6811\u7684\u7ED3\u6784\u3002\u7136\u540E\u7531\u865A\u62DF DOM \u6811\u521B\u5EFA\u51FA\u771F\u5B9E DOM \u6811\uFF0C\u771F\u5B9E\u7684 DOM \u6811\u751F\u6210\u5B8C\u540E\uFF0C\u518D\u89E6\u53D1\u6E32\u67D3\u6D41\u6C34\u7EBF\u5F80\u5C4F\u5E55\u8F93\u51FA\u9875\u9762\u3002</p></li><li><p><strong>\u66F4\u65B0\u9636\u6BB5</strong>\u3002\u5982\u679C\u6570\u636E\u53D1\u751F\u4E86\u6539\u53D8\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u6839\u636E\u65B0\u7684\u6570\u636E\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u865A\u62DF DOM \u6811\uFF1B\u7136\u540E React \u6BD4\u8F83\u4E24\u4E2A\u6811\uFF0C\u627E\u51FA\u53D8\u5316\u7684\u5730\u65B9\uFF0C\u5E76\u628A\u53D8\u5316\u7684\u5730\u65B9\u4E00\u6B21\u6027\u66F4\u65B0\u5230\u771F\u5B9E\u7684 DOM \u6811\u4E0A\uFF1B\u6700\u540E\u6E32\u67D3\u5F15\u64CE\u66F4\u65B0\u6E32\u67D3\u6D41\u6C34\u7EBF\uFF0C\u5E76\u751F\u6210\u65B0\u7684\u9875\u9762\u3002</p></li></ul><p>\u65E2\u7136\u804A\u5230\u865A\u62DF DOM \u7684\u66F4\u65B0\uFF0C\u90A3\u6211\u4EEC\u5C31\u4E0D\u5F97\u4E0D\u804A\u804A\u6700\u65B0\u7684 <strong>React Fiber \u66F4\u65B0\u673A\u5236</strong>\u3002\u901A\u8FC7\u4E0A\u56FE\u6211\u4EEC\u77E5\u9053\uFF0C\u5F53\u6709\u6570\u636E\u66F4\u65B0\u65F6\uFF0CReact \u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u865A\u62DF DOM\uFF0C\u7136\u540E\u62FF\u65B0\u7684\u865A\u62DF DOM \u548C\u4E4B\u524D\u7684\u865A\u62DF DOM \u8FDB\u884C\u6BD4\u8F83\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u4F1A\u627E\u51FA\u53D8\u5316\u7684\u8282\u70B9\uFF0C\u7136\u540E\u518D\u5C06\u53D8\u5316\u7684\u8282\u70B9\u5E94\u7528\u5230 DOM \u4E0A\u3002</p><p>\u8FD9\u91CC\u6211\u4EEC\u91CD\u70B9\u5173\u6CE8\u4E0B\u6BD4\u8F83\u8FC7\u7A0B\uFF0C\u6700\u5F00\u59CB\u7684\u65F6\u5019\uFF0C\u6BD4\u8F83\u4E24\u4E2A\u865A\u62DF DOM \u7684\u8FC7\u7A0B\u662F\u5728\u4E00\u4E2A\u9012\u5F52\u51FD\u6570\u91CC\u6267\u884C\u7684\uFF0C\u5176<strong>\u6838\u5FC3\u7B97\u6CD5\u662F reconciliation</strong>\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A\u6BD4\u8F83\u8FC7\u7A0B\u6267\u884C\u5F97\u5F88\u5FEB\uFF0C\u4E0D\u8FC7\u5F53\u865A\u62DF DOM \u6BD4\u8F83\u590D\u6742\u7684\u65F6\u5019\uFF0C\u6267\u884C\u6BD4\u8F83\u51FD\u6570\u5C31\u6709\u53EF\u80FD\u5360\u636E\u4E3B\u7EBF\u7A0B\u6BD4\u8F83\u4E45\u7684\u65F6\u95F4\uFF0C\u8FD9\u6837\u5C31\u4F1A\u5BFC\u81F4\u5176\u4ED6\u4EFB\u52A1\u7684\u7B49\u5F85\uFF0C\u9020\u6210\u9875\u9762\u5361\u987F\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CReact \u56E2\u961F\u91CD\u5199\u4E86 reconciliation \u7B97\u6CD5\uFF0C\u65B0\u7684\u7B97\u6CD5\u79F0\u4E3A Fiber reconciler\uFF0C\u4E4B\u524D\u8001\u7684\u7B97\u6CD5\u79F0\u4E3A Stack reconciler\u3002</p>',17),O=e("\u5728\u524D\u9762"),s={href:"/guide/20",target:"_blank",rel:"noopener noreferrer"},l=e("\u300A20 | async/await\uFF1A\u4F7F\u7528\u540C\u6B65\u7684\u65B9\u5F0F\u53BB\u5199\u5F02\u6B65\u4EE3\u7801\u300B"),h=e("\u90A3\u7BC7\u6587\u7AE0\u4E2D\u6211\u4EEC\u4ECB\u7ECD\u4E86\u534F\u7A0B\uFF0C\u5176\u5B9E\u534F\u7A0B\u7684\u53E6\u5916\u4E00\u4E2A\u79F0\u547C\u5C31\u662F Fiber\uFF0C\u6240\u4EE5\u5728\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u628A Fiber \u548C\u534F\u7A0B\u5173\u8054\u8D77\u6765\uFF0C\u90A3\u4E48\u6240\u8C13\u7684 Fiber reconciler \u76F8\u4FE1\u4F60\u4E5F\u5F88\u6E05\u695A\u4E86\uFF0C\u5C31\u662F\u5728\u6267\u884C\u7B97\u6CD5\u7684\u8FC7\u7A0B\u4E2D\u51FA\u8BA9\u4E3B\u7EBF\u7A0B\uFF0C\u8FD9\u6837\u5C31\u89E3\u51B3\u4E86 Stack reconciler \u51FD\u6570\u5360\u7528\u65F6\u95F4\u8FC7\u4E45\u7684\u95EE\u9898\u3002\u81F3\u4E8E\u5177\u4F53\u7684\u5B9E\u73B0\u8FC7\u7A0B\u5728\u8FD9\u91CC\u6211\u5C31\u4E0D\u8BE6\u7EC6\u5206\u6790\u4E86\uFF0C\u5982\u679C\u611F\u5174\u8DA3\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u81EA\u884C\u67E5\u9605\u76F8\u5173\u8D44\u6599\u8FDB\u884C\u5B66\u4E60\u3002"),g=r('<p>\u4E86\u89E3\u5B8C\u865A\u62DF DOM \u7684\u5927\u81F4\u6267\u884C\u6D41\u7A0B\uFF0C\u4F60\u5E94\u8BE5\u4E5F\u5C31\u77E5\u9053\u4E3A\u4F55\u9700\u8981\u865A\u62DF DOM \u4E86\u3002\u4E0D\u8FC7\u4EE5\u4E0A\u90FD\u4ECE\u5355\u7EAF\u7684\u6280\u672F\u89C6\u89D2\u6765\u5206\u6790\u865A\u62DF DOM \u7684\uFF0C\u90A3\u63A5\u4E0B\u6765\u6211\u4EEC\u518D\u4ECE\u53CC\u7F13\u5B58\u548C MVC \u6A21\u578B\u8FD9\u4E24\u4E2A\u89C6\u89D2\u6765\u804A\u804A\u865A\u62DF DOM\u3002</p><h2 id="_1-\u53CC\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_1-\u53CC\u7F13\u5B58" aria-hidden="true">#</a> 1. \u53CC\u7F13\u5B58</h2><p>\u5728\u5F00\u53D1\u6E38\u620F\u6216\u8005\u5904\u7406\u5176\u4ED6\u56FE\u50CF\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5C4F\u5E55\u4ECE\u524D\u7F13\u51B2\u533A\u8BFB\u53D6\u6570\u636E\u7136\u540E\u663E\u793A\u3002\u4F46\u662F\u5F88\u591A\u56FE\u5F62\u64CD\u4F5C\u90FD\u5F88\u590D\u6742\u4E14\u9700\u8981\u5927\u91CF\u7684\u8FD0\u7B97\uFF0C\u6BD4\u5982\u4E00\u5E45\u5B8C\u6574\u7684\u753B\u9762\uFF0C\u53EF\u80FD\u9700\u8981\u8BA1\u7B97\u591A\u6B21\u624D\u80FD\u5B8C\u6210\uFF0C\u5982\u679C\u6BCF\u6B21\u8BA1\u7B97\u5B8C\u4E00\u90E8\u5206\u56FE\u50CF\uFF0C\u5C31\u5C06\u5176\u5199\u5165\u7F13\u51B2\u533A\uFF0C\u90A3\u4E48\u5C31\u4F1A\u9020\u6210\u4E00\u4E2A\u540E\u679C\uFF0C\u90A3\u5C31\u662F\u5728\u663E\u793A\u4E00\u4E2A\u7A0D\u5FAE\u590D\u6742\u70B9\u7684\u56FE\u50CF\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F60\u770B\u5230\u7684\u9875\u9762\u6548\u679C\u53EF\u80FD\u662F\u4E00\u90E8\u5206\u4E00\u90E8\u5206\u5730\u663E\u793A\u51FA\u6765\uFF0C\u56E0\u6B64\u5728\u5237\u65B0\u9875\u9762\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u8BA9\u7528\u6237\u611F\u53D7\u5230\u754C\u9762\u7684\u95EA\u70C1\u3002</p><p>\u800C\u4F7F\u7528\u53CC\u7F13\u5B58\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u5148\u5C06\u8BA1\u7B97\u7684\u4E2D\u95F4\u7ED3\u679C\u5B58\u653E\u5728\u53E6\u4E00\u4E2A\u7F13\u51B2\u533A\u4E2D\uFF0C\u7B49\u5168\u90E8\u7684\u8BA1\u7B97\u7ED3\u675F\uFF0C\u8BE5\u7F13\u51B2\u533A\u5DF2\u7ECF\u5B58\u50A8\u4E86\u5B8C\u6574\u7684\u56FE\u5F62\u4E4B\u540E\uFF0C\u518D\u5C06\u8BE5\u7F13\u51B2\u533A\u7684\u56FE\u5F62\u6570\u636E\u4E00\u6B21\u6027\u590D\u5236\u5230\u663E\u793A\u7F13\u51B2\u533A\uFF0C\u8FD9\u6837\u5C31\u4F7F\u5F97\u6574\u4E2A\u56FE\u50CF\u7684\u8F93\u51FA\u975E\u5E38\u7A33\u5B9A\u3002</p><p>\u5728\u8FD9\u91CC\uFF0C\u4F60\u53EF\u4EE5\u628A\u865A\u62DF DOM \u770B\u6210\u662F DOM \u7684\u4E00\u4E2A buffer\uFF0C\u548C\u56FE\u5F62\u663E\u793A\u4E00\u6837\uFF0C\u5B83\u4F1A\u5728\u5B8C\u6210\u4E00\u6B21\u5B8C\u6574\u7684\u64CD\u4F5C\u4E4B\u540E\uFF0C\u518D\u628A\u7ED3\u679C\u5E94\u7528\u5230 DOM \u4E0A\uFF0C\u8FD9\u6837\u5C31\u80FD\u51CF\u5C11\u4E00\u4E9B\u4E0D\u5FC5\u8981\u7684\u66F4\u65B0\uFF0C\u540C\u65F6\u8FD8\u80FD\u4FDD\u8BC1 DOM \u7684\u7A33\u5B9A\u8F93\u51FA\u3002</p><h2 id="_2-mvc-\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-mvc-\u6A21\u5F0F" aria-hidden="true">#</a> 2. MVC \u6A21\u5F0F</h2><p>\u5230\u8FD9\u91CC\u6211\u4EEC\u4E86\u89E3\u4E86\u865A\u62DF DOM \u662F\u4E00\u79CD\u7C7B\u4F3C\u53CC\u7F13\u5B58\u7684\u5B9E\u73B0\u3002\u4E0D\u8FC7\u5982\u679C\u7AD9\u5728\u6280\u672F\u89D2\u5EA6\u6765\u7406\u89E3\u865A\u62DF\u7F13\u5B58\uFF0C\u4F9D\u7136\u4E0D\u80FD\u5168\u9762\u7406\u89E3\u5176\u542B\u4E49\u3002\u90A3\u4E48\u63A5\u4E0B\u6765\u6211\u4EEC\u518D\u6765\u770B\u770B\u865A\u62DF DOM \u5728 MVC \u6A21\u5F0F\u4E2D\u6240\u626E\u6F14\u7684\u89D2\u8272\u3002</p><p>\u5728\u5404\u5927\u8BBE\u8BA1\u6A21\u5F0F\u5F53\u4E2D\uFF0CMVC \u662F\u4E00\u4E2A\u975E\u5E38\u91CD\u8981\u4E14\u5E94\u7528\u5E7F\u6CDB\u7684\u6A21\u5F0F\uFF0C\u56E0\u4E3A\u5B83\u80FD\u5C06\u6570\u636E\u548C\u89C6\u56FE\u8FDB\u884C\u5206\u79BB\uFF0C\u5728\u6D89\u53CA\u5230\u4E00\u4E9B\u590D\u6742\u7684\u9879\u76EE\u65F6\uFF0C\u80FD\u591F\u5927\u5927\u51CF\u8F7B\u9879\u76EE\u7684\u8026\u5408\u5EA6\uFF0C\u4F7F\u5F97\u7A0B\u5E8F\u6613\u4E8E\u7EF4\u62A4\u3002</p><p>\u5173\u4E8E MVC \u7684\u57FA\u7840\u7ED3\u6784\uFF0C\u4F60\u53EF\u4EE5\u5148\u53C2\u8003\u4E0B\u56FE\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/4c/a6/4c03b5882878dcce2df01c1e2e8db8a6.png" alt="MVC \u57FA\u7840\u7ED3\u6784"></p><p>\u901A\u8FC7\u4E0A\u56FE\u4F60\u53EF\u4EE5\u53D1\u73B0\uFF0CMVC \u7684\u6574\u4F53\u7ED3\u6784\u6BD4\u8F83\u7B80\u5355\uFF0C\u7531\u6A21\u578B\u3001\u89C6\u56FE\u548C\u63A7\u5236\u5668\u7EC4\u6210\uFF0C\u5176<strong>\u6838\u5FC3\u601D\u60F3\u5C31\u662F\u5C06\u6570\u636E\u548C\u89C6\u56FE\u5206\u79BB</strong>\uFF0C\u4E5F\u5C31\u662F\u8BF4\u89C6\u56FE\u548C\u6A21\u578B\u4E4B\u95F4\u662F\u4E0D\u5141\u8BB8\u76F4\u63A5\u901A\u4FE1\u7684\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u7684\u901A\u4FE1\u90FD\u662F\u901A\u8FC7\u63A7\u5236\u5668\u6765\u5B8C\u6210\u7684\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\u7684\u901A\u4FE1\u8DEF\u5F84\u662F\u89C6\u56FE\u53D1\u751F\u4E86\u6539\u53D8\uFF0C\u7136\u540E\u901A\u77E5\u63A7\u5236\u5668\uFF0C\u63A7\u5236\u5668\u518D\u6839\u636E\u60C5\u51B5\u5224\u65AD\u662F\u5426\u9700\u8981\u66F4\u65B0\u6A21\u578B\u6570\u636E\u3002\u5F53\u7136\u8FD8\u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u7684\u901A\u4FE1\u8DEF\u5F84\u548C\u63A7\u5236\u5668\u4E0D\u540C\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u57FA\u4E8E MVC \u53C8\u80FD\u884D\u751F\u51FA\u5F88\u591A\u5176\u4ED6\u7684\u6A21\u5F0F\uFF0C\u5982 MVP\u3001MVVM \u7B49\uFF0C\u4E0D\u8FC7\u4E07\u53D8\u4E0D\u79BB\u5176\u5B97\uFF0C\u5B83\u4EEC\u7684\u57FA\u7840\u9AA8\u67B6\u90FD\u662F\u57FA\u4E8E MVC \u800C\u6765\u3002</p><p>\u6240\u4EE5\u5728\u5206\u6790\u57FA\u4E8E React \u6216\u8005 Vue \u8FD9\u4E9B\u524D\u7AEF\u6846\u67B6\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u91CD\u70B9\u628A\u63E1\u5927\u7684 MVC \u9AA8\u67B6\u7ED3\u6784\uFF0C\u7136\u540E\u518D\u91CD\u70B9\u67E5\u770B\u901A\u4FE1\u65B9\u5F0F\u548C\u63A7\u5236\u5668\u7684\u5177\u4F53\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u80FD\u4ECE\u67B6\u6784\u7684\u89C6\u89D2\u6765\u7406\u89E3\u8FD9\u4E9B\u524D\u7AEF\u6846\u67B6\u4E86\u3002\u6BD4\u5982\u5728\u5206\u6790 React \u9879\u76EE\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A React \u7684\u90E8\u5206\u770B\u6210\u662F\u4E00\u4E2A MVC \u4E2D\u7684\u89C6\u56FE\uFF0C\u5728\u9879\u76EE\u4E2D\u7ED3\u5408 Redux \u5C31\u53EF\u4EE5\u6784\u5EFA\u4E00\u4E2A MVC \u7684\u6A21\u578B\u7ED3\u6784\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/e0/03/e024ba6c212a1d6bfa01b327e987e103.png" alt="\u57FA\u4E8E React \u548C Redux \u6784\u5EFA MVC \u6A21\u578B"></p><p>\u5728\u8BE5\u56FE\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u865A\u62DF DOM \u770B\u6210\u662F MVC \u7684\u89C6\u56FE\u90E8\u5206\uFF0C\u5176\u63A7\u5236\u5668\u548C\u6A21\u578B\u90FD\u662F\u7531 Redux \u63D0\u4F9B\u7684\u3002\u5176\u5177\u4F53\u5B9E\u73B0\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><ul><li><p>\u56FE\u4E2D\u7684\u63A7\u5236\u5668\u662F\u7528\u6765\u76D1\u63A7 DOM \u7684\u53D8\u5316\uFF0C\u4E00\u65E6 DOM \u53D1\u751F\u53D8\u5316\uFF0C\u63A7\u5236\u5668\u4FBF\u4F1A\u901A\u77E5\u6A21\u578B\uFF0C\u8BA9\u5176\u66F4\u65B0\u6570\u636E\uFF1B</p></li><li><p>\u6A21\u578B\u6570\u636E\u66F4\u65B0\u597D\u4E4B\u540E\uFF0C\u63A7\u5236\u5668\u4F1A\u901A\u77E5\u89C6\u56FE\uFF0C\u544A\u8BC9\u5B83\u6A21\u578B\u7684\u6570\u636E\u53D1\u751F\u4E86\u53D8\u5316\uFF1B</p></li><li><p>\u89C6\u56FE\u63A5\u6536\u5230\u66F4\u65B0\u6D88\u606F\u4E4B\u540E\uFF0C\u4F1A\u6839\u636E\u6A21\u578B\u6240\u63D0\u4F9B\u7684\u6570\u636E\u6765\u751F\u6210\u65B0\u7684\u865A\u62DF DOM\uFF1B</p></li><li><p>\u65B0\u7684\u865A\u62DF DOM \u751F\u6210\u597D\u4E4B\u540E\uFF0C\u5C31\u9700\u8981\u4E0E\u4E4B\u524D\u7684\u865A\u62DF DOM \u8FDB\u884C\u6BD4\u8F83\uFF0C\u627E\u51FA\u53D8\u5316\u7684\u8282\u70B9\uFF1B</p></li><li><p>\u6BD4\u8F83\u51FA\u53D8\u5316\u7684\u8282\u70B9\u4E4B\u540E\uFF0CReact \u5C06\u53D8\u5316\u7684\u865A\u62DF\u8282\u70B9\u5E94\u7528\u5230 DOM \u4E0A\uFF0C\u8FD9\u6837\u5C31\u4F1A\u89E6\u53D1 DOM \u8282\u70B9\u7684\u66F4\u65B0\uFF1B</p></li><li><p>DOM \u8282\u70B9\u7684\u53D8\u5316\u53C8\u4F1A\u89E6\u53D1\u540E\u7EED\u4E00\u7CFB\u5217\u6E32\u67D3\u6D41\u6C34\u7EBF\u7684\u53D8\u5316\uFF0C\u4ECE\u800C\u5B9E\u73B0\u9875\u9762\u7684\u66F4\u65B0\u3002</p></li></ul><p>\u5728\u5B9E\u9645\u5DE5\u7A0B\u9879\u76EE\u4E2D\uFF0C\u4F60\u9700\u8981\u5B66\u4F1A\u5206\u6790\u51FA\u8FD9\u5404\u4E2A\u6A21\u5757\uFF0C\u5E76\u68B3\u7406\u51FA\u5B83\u4EEC\u4E4B\u95F4\u7684\u901A\u4FE1\u5173\u7CFB\uFF0C\u8FD9\u6837\u5BF9\u4E8E\u4EFB\u4F55\u6846\u67B6\u4F60\u90FD\u80FD\u8F7B\u677E\u4E0A\u624B\u4E86\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u597D\u4E86\uFF0C\u4ECA\u5929\u5C31\u4ECB\u7ECD\u5230\u8FD9\u91CC\uFF0C\u4E0B\u9762\u6211\u6765\u603B\u7ED3\u4E0B\u672C\u6587\u7684\u4E3B\u8981\u5185\u5BB9\u3002</p><p>\u9996\u5148\u6211\u4EEC\u5206\u6790\u4E86\u76F4\u63A5\u64CD\u4F5C DOM \u4F1A\u89E6\u53D1\u6E32\u67D3\u6D41\u6C34\u7EBF\u7684\u4E00\u7CFB\u5217\u53CD\u5E94\uFF0C\u5982\u679C\u5BF9 DOM \u64CD\u4F5C\u4E0D\u5F53\u7684\u8BDD\u751A\u81F3\u8FD8\u4F1A\u89E6\u53D1\u5F3A\u5236\u540C\u6B65\u5E03\u5C40\u548C\u5E03\u5C40\u6296\u52A8\u7684\u95EE\u9898\uFF0C\u8FD9\u4E5F\u662F\u6211\u4EEC\u5728\u64CD\u4F5C DOM \u65F6\u9700\u8981\u975E\u5E38\u5C0F\u5FC3\u8C28\u614E\u7684\u539F\u56E0\u3002</p><p>\u5728\u6B64\u5206\u6790\u7684\u57FA\u7840\u4E0A\uFF0C\u6211\u4EEC\u4ECB\u7ECD\u4E86\u865A\u62DF DOM \u662F\u600E\u4E48\u89E3\u51B3\u76F4\u63A5\u64CD\u4F5C DOM \u6240\u5E26\u6765\u7684\u95EE\u9898\u4EE5\u53CA React Fiber \u66F4\u65B0\u673A\u5236\u3002</p><p>\u8981\u804A\u524D\u7AEF\u6846\u67B6\uFF0C\u5C31\u7ED5\u4E0D\u5F00\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u6240\u4EE5\u63A5\u4E0B\u6765\u6211\u4EEC\u53C8\u4ECE\u53CC\u7F13\u5B58\u548C MVC \u89D2\u5EA6\u5206\u6790\u4E86\u865A\u62DF DOM\u3002\u53CC\u7F13\u5B58\u662F\u4E00\u79CD\u7ECF\u5178\u7684\u601D\u8DEF\uFF0C\u5E94\u7528\u5728\u5F88\u591A\u573A\u5408\uFF0C\u80FD\u89E3\u51B3\u9875\u9762\u65E0\u6548\u5237\u65B0\u548C\u95EA\u5C4F\u7684\u95EE\u9898\uFF0C\u865A\u62DF DOM \u5C31\u662F\u53CC\u7F13\u5B58\u601D\u60F3\u7684\u4E00\u79CD\u4F53\u73B0\u3002\u800C\u57FA\u4E8E MVC \u7684\u8BBE\u8BA1\u601D\u60F3\u4E5F\u5E7F\u6CDB\u5730\u6E17\u900F\u5230\u5404\u79CD\u573A\u5408\uFF0C\u5E76\u4E14\u57FA\u4E8E MVC \u53C8\u884D\u751F\u51FA\u4E86\u5F88\u591A\u5176\u4ED6\u6A21\u5F0F\uFF08\u5982 MVP\u3001MVVM \u7B49\uFF09\uFF0C\u4E0D\u8FC7\u4E07\u53D8\u4E0D\u79BB\u5176\u5B97\uFF0C\u5B83\u4EEC\u7684\u57FA\u7840\u9AA8\u67B6\u90FD\u662F\u57FA\u4E8E MVC \u800C\u6765\u3002\u7AD9\u5728 MVC \u89C6\u89D2\u6765\u7406\u89E3\u865A\u62DF DOM \u80FD\u8BA9\u4F60\u770B\u5230\u66F4\u4E3A\u201C\u5E7F\u9614\u7684\u4E16\u754C\u201D\u3002</p><h2 id="\u601D\u8003\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u601D\u8003\u65F6\u95F4" aria-hidden="true">#</a> \u601D\u8003\u65F6\u95F4</h2><p>\u4ECA\u5929\u7559\u7ED9\u4F60\u7684\u601D\u8003\u9898\u662F\uFF1A\u865A\u62DF DOM \u90FD\u89E3\u51B3\u4E86\u54EA\u4E9B\u95EE\u9898\uFF1F</p><p>\u6B22\u8FCE\u5728\u7559\u8A00\u533A\u4E0E\u6211\u5206\u4EAB\u4F60\u7684\u60F3\u6CD5\uFF0C\u4E5F\u6B22\u8FCE\u4F60\u5728\u7559\u8A00\u533A\u8BB0\u5F55\u4F60\u7684\u601D\u8003\u8FC7\u7A0B\u3002\u611F\u8C22\u9605\u8BFB\uFF0C\u5982\u679C\u4F60\u89C9\u5F97\u8FD9\u7BC7\u6587\u7AE0\u5BF9\u4F60\u6709\u5E2E\u52A9\u7684\u8BDD\uFF0C\u4E5F\u6B22\u8FCE\u628A\u5B83\u5206\u4EAB\u7ED9\u66F4\u591A\u7684\u670B\u53CB\u3002</p>',24);function _(V,u){const t=p("ExternalLinkIcon");return n(),o(c,null,[D,a("p",null,[O,a("a",s,[l,i(t)]),h]),g],64)}var b=M(d,[["render",_],["__file","26.html.vue"]]);export{b as default};
