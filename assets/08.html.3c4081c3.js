import{_ as p,r as e,o as t,a as c,b as a,d as r,F as o,e as n,c as i}from"./app.d393e7b0.js";const l={},u=a("h1",{id:"_08-\u8C03\u7528\u6808-\u4E3A\u4EC0\u4E48javascript\u4EE3\u7801\u4F1A\u51FA\u73B0\u6808\u6EA2\u51FA",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_08-\u8C03\u7528\u6808-\u4E3A\u4EC0\u4E48javascript\u4EE3\u7801\u4F1A\u51FA\u73B0\u6808\u6EA2\u51FA","aria-hidden":"true"},"#"),n(" 08 | \u8C03\u7528\u6808\uFF1A\u4E3A\u4EC0\u4E48JavaScript\u4EE3\u7801\u4F1A\u51FA\u73B0\u6808\u6EA2\u51FA\uFF1F")],-1),d=n("\u5728"),g={href:"/guide/07",target:"_blank",rel:"noopener noreferrer"},k=n("\u4E0A\u7BC7\u6587\u7AE0"),b=n("\u4E2D\uFF0C\u6211\u4EEC\u8BB2\u5230\u4E86\uFF0C\u5F53\u4E00\u6BB5\u4EE3\u7801\u88AB\u6267\u884C\u65F6\uFF0CJavaScript \u5F15\u64CE\u5148\u4F1A\u5BF9\u5176\u8FDB\u884C\u7F16\u8BD1\uFF0C\u5E76\u521B\u5EFA\u6267\u884C\u4E0A\u4E0B\u6587\u3002\u4F46\u662F\u5E76\u6CA1\u6709\u660E\u786E\u8BF4\u660E\u5230\u5E95\u4EC0\u4E48\u6837\u7684\u4EE3\u7801\u624D\u7B97\u7B26\u5408\u89C4\u8303\u3002"),m=i(`<p>\u90A3\u4E48\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u6765\u660E\u786E\u4E0B\uFF0C\u54EA\u4E9B\u60C5\u51B5\u4E0B\u4EE3\u7801\u624D\u7B97\u662F\u201C\u4E00\u6BB5\u201D\u4EE3\u7801\uFF0C\u624D\u4F1A\u5728\u6267\u884C\u4E4B\u524D\u5C31\u8FDB\u884C\u7F16\u8BD1\u5E76\u521B\u5EFA\u6267\u884C\u4E0A\u4E0B\u6587\u3002\u4E00\u822C\u8BF4\u6765\uFF0C\u6709\u8FD9\u4E48\u4E09\u79CD\u60C5\u51B5\uFF1A</p><ol><li><p>\u5F53 JavaScript \u6267\u884C\u5168\u5C40\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u4F1A\u7F16\u8BD1\u5168\u5C40\u4EE3\u7801\u5E76\u521B\u5EFA\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u800C\u4E14\u5728\u6574\u4E2A\u9875\u9762\u7684\u751F\u5B58\u5468\u671F\u5185\uFF0C\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u53EA\u6709\u4E00\u4EFD\u3002</p></li><li><p>\u5F53\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u51FD\u6570\u4F53\u5185\u7684\u4EE3\u7801\u4F1A\u88AB\u7F16\u8BD1\uFF0C\u5E76\u521B\u5EFA\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u51FD\u6570\u6267\u884C\u7ED3\u675F\u4E4B\u540E\uFF0C\u521B\u5EFA\u7684\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u4F1A\u88AB\u9500\u6BC1\u3002</p></li><li><p>\u5F53\u4F7F\u7528 eval \u51FD\u6570\u7684\u65F6\u5019\uFF0Ceval \u7684\u4EE3\u7801\u4E5F\u4F1A\u88AB\u7F16\u8BD1\uFF0C\u5E76\u521B\u5EFA\u6267\u884C\u4E0A\u4E0B\u6587\u3002</p></li></ol><p>\u597D\u4E86\uFF0C\u53C8\u8FDB\u4E00\u6B65\u7406\u89E3\u4E86\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u90A3\u672C\u8282\u6211\u4EEC\u5C31\u5728\u8FD9\u57FA\u7840\u4E4B\u4E0A\u7EE7\u7EED\u6DF1\u5165\uFF0C\u4E00\u8D77\u804A\u804A<strong>\u8C03\u7528\u6808</strong>\u3002\u5B66\u4E60\u8C03\u7528\u6808\u81F3\u5C11\u6709\u4EE5\u4E0B\u4E09\u70B9\u597D\u5904\uFF1A</p><ol><li><p>\u53EF\u4EE5\u5E2E\u52A9\u4F60\u4E86\u89E3 JavaScript \u5F15\u64CE\u80CC\u540E\u7684\u5DE5\u4F5C\u539F\u7406\uFF1B</p></li><li><p>\u8BA9\u4F60\u6709\u8C03\u8BD5 JavaScript \u4EE3\u7801\u7684\u80FD\u529B\uFF1B</p></li><li><p>\u5E2E\u52A9\u4F60\u641E\u5B9A\u9762\u8BD5\uFF0C\u56E0\u4E3A\u9762\u8BD5\u8FC7\u7A0B\u4E2D\uFF0C\u8C03\u7528\u6808\u4E5F\u662F\u51FA\u5883\u7387\u975E\u5E38\u9AD8\u7684\u9898\u76EE\u3002</p></li></ol><p>\u6BD4\u5982\u4F60\u5728\u5199 JavaScript \u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u6709\u65F6\u5019\u53EF\u80FD\u4F1A\u9047\u5230\u6808\u6EA2\u51FA\u7684\u9519\u8BEF\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/0c/70/0c9e2c4f7ee8ca59cfa99a6f51510470.png" alt="img"></p><p>\u90A3\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u8FD9\u79CD\u9519\u8BEF\u5462\uFF1F\u8FD9\u5C31\u6D89\u53CA\u5230\u4E86<strong>\u8C03\u7528\u6808</strong>\u7684\u5185\u5BB9\u3002\u4F60\u5E94\u8BE5\u77E5\u9053 JavaScript \u4E2D\u6709\u5F88\u591A\u51FD\u6570\uFF0C\u7ECF\u5E38\u4F1A\u51FA\u73B0\u5728\u4E00\u4E2A\u51FD\u6570\u4E2D\u8C03\u7528\u53E6\u5916\u4E00\u4E2A\u51FD\u6570\u7684\u60C5\u51B5\uFF0C<strong>\u8C03\u7528\u6808\u5C31\u662F\u7528\u6765\u7BA1\u7406\u51FD\u6570\u8C03\u7528\u5173\u7CFB\u7684\u4E00\u79CD\u6570\u636E\u7ED3\u6784</strong>\u3002\u56E0\u6B64\u8981\u8BB2\u6E05\u695A\u8C03\u7528\u6808\uFF0C\u4F60\u8FD8\u8981\u5148\u5F04\u660E\u767D<strong>\u51FD\u6570\u8C03\u7528</strong>\u548C<strong>\u6808\u7ED3\u6784</strong>\u3002</p><h2 id="\u4EC0\u4E48\u662F\u51FD\u6570\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u51FD\u6570\u8C03\u7528" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u51FD\u6570\u8C03\u7528</h2><p>\u51FD\u6570\u8C03\u7528\u5C31\u662F\u8FD0\u884C\u4E00\u4E2A\u51FD\u6570\uFF0C\u5177\u4F53\u4F7F\u7528\u65B9\u5F0F\u662F\u4F7F\u7528\u51FD\u6570\u540D\u79F0\u8DDF\u7740\u4E00\u5BF9\u5C0F\u62EC\u53F7\u3002\u4E0B\u9762\u6211\u4EEC\u770B\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">10</span>
  <span class="token keyword">return</span> a<span class="token operator">+</span>b
<span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u6BB5\u4EE3\u7801\u5F88\u7B80\u5355\uFF0C\u5148\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A add \u51FD\u6570\uFF0C\u63A5\u7740\u5728\u4EE3\u7801\u7684\u6700\u4E0B\u9762\u53C8\u8C03\u7528\u4E86\u8BE5\u51FD\u6570\u3002</p><p>\u90A3\u4E48\u4E0B\u9762\u6211\u4EEC\u5C31\u5229\u7528\u8FD9\u6BB5\u7B80\u5355\u7684\u4EE3\u7801\u6765\u89E3\u91CA\u4E0B\u51FD\u6570\u8C03\u7528\u7684\u8FC7\u7A0B\u3002</p><p>\u5728\u6267\u884C\u5230\u51FD\u6570 add() \u4E4B\u524D\uFF0CJavaScript \u5F15\u64CE\u4F1A\u4E3A\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u521B\u5EFA\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u5305\u542B\u4E86\u58F0\u660E\u7684\u51FD\u6570\u548C\u53D8\u91CF\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003\u4E0B\u56FE\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/7f/da/7fa2ed18e702861890d767ea547533da.png" alt="img"></p><p>\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u4EE3\u7801\u4E2D\u5168\u5C40\u53D8\u91CF\u548C\u51FD\u6570\u90FD\u4FDD\u5B58\u5728\u5168\u5C40\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF\u73AF\u5883\u4E2D\u3002</p><p>\u6267\u884C\u4E0A\u4E0B\u6587\u51C6\u5907\u597D\u4E4B\u540E\uFF0C\u4FBF\u5F00\u59CB\u6267\u884C\u5168\u5C40\u4EE3\u7801\uFF0C\u5F53\u6267\u884C\u5230 add \u8FD9\u513F\u65F6\uFF0CJavaScript \u5224\u65AD\u8FD9\u662F\u4E00\u4E2A\u51FD\u6570\u8C03\u7528\uFF0C\u90A3\u4E48\u5C06\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</p><ul><li><p>\u9996\u5148\uFF0C\u4ECE<strong>\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587</strong>\u4E2D\uFF0C\u53D6\u51FA add \u51FD\u6570\u4EE3\u7801\u3002</p></li><li><p>\u5176\u6B21\uFF0C\u5BF9 add \u51FD\u6570\u7684\u8FD9\u6BB5\u4EE3\u7801\u8FDB\u884C\u7F16\u8BD1\uFF0C\u5E76\u521B\u5EFA<strong>\u8BE5\u51FD\u6570\u7684\u6267\u884C\u4E0A\u4E0B\u6587</strong>\u548C<strong>\u53EF\u6267\u884C\u4EE3\u7801</strong>\u3002</p></li><li><p>\u6700\u540E\uFF0C\u6267\u884C\u4EE3\u7801\uFF0C\u8F93\u51FA\u7ED3\u679C\u3002</p></li></ul><p>\u5B8C\u6574\u6D41\u7A0B\u4F60\u53EF\u4EE5\u53C2\u8003\u4E0B\u56FE\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/53/ca/537efd9e96771dc50737117e615533ca.png" alt="img"></p><p>\u5C31\u8FD9\u6837\uFF0C\u5F53\u6267\u884C\u5230 add \u51FD\u6570\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u6709\u4E86\u4E24\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\u4E86\u2014\u2014\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u548C add \u51FD\u6570\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u3002</p><p>\u4E5F\u5C31\u662F\u8BF4\u5728\u6267\u884C JavaScript \u65F6\uFF0C\u53EF\u80FD\u4F1A\u5B58\u5728\u591A\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u90A3\u4E48 JavaScript \u5F15\u64CE\u662F\u5982\u4F55\u7BA1\u7406\u8FD9\u4E9B\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u5462\uFF1F</p><p>\u7B54\u6848\u662F<strong>\u901A\u8FC7\u4E00\u79CD\u53EB\u6808\u7684\u6570\u636E\u7ED3\u6784\u6765\u7BA1\u7406\u7684</strong>\u3002\u90A3\u4EC0\u4E48\u662F\u6808\u5462\uFF1F\u5B83\u53C8\u662F\u5982\u4F55\u7BA1\u7406\u8FD9\u4E9B\u6267\u884C\u4E0A\u4E0B\u6587\u5462\uFF1F</p><h2 id="\u4EC0\u4E48\u662F\u6808" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u6808" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u6808</h2><p>\u5173\u4E8E\u6808\uFF0C\u4F60\u53EF\u4EE5\u7ED3\u5408\u8FD9\u4E48\u4E00\u4E2A\u8D34\u5207\u7684\u4F8B\u5B50\u6765\u7406\u89E3\uFF0C\u4E00\u6761\u5355\u8F66\u9053\u7684\u5355\u884C\u7EBF\uFF0C\u4E00\u7AEF\u88AB\u5835\u4F4F\u4E86\uFF0C\u800C\u53E6\u4E00\u7AEF\u5165\u53E3\u5904\u6CA1\u6709\u4EFB\u4F55\u63D0\u793A\u4FE1\u606F\uFF0C\u5835\u4F4F\u4E4B\u540E\u5C31\u53EA\u80FD\u540E\u8FDB\u53BB\u7684\u8F66\u5B50\u5148\u51FA\u6765\uFF0C\u8FD9\u65F6\u8FD9\u4E2A\u5835\u4F4F\u7684\u5355\u884C\u7EBF\u5C31\u53EF\u4EE5\u88AB\u770B\u4F5C\u662F\u4E00\u4E2A<strong>\u6808\u5BB9\u5668</strong>\uFF0C\u8F66\u5B50\u5F00\u8FDB\u5355\u884C\u7EBF\u7684\u64CD\u4F5C\u53EB\u505A<strong>\u5165\u6808</strong>\uFF0C\u8F66\u5B50\u5012\u51FA\u53BB\u7684\u64CD\u4F5C\u53EB\u505A<strong>\u51FA\u6808</strong>\u3002</p><p>\u5728\u8F66\u6D41\u91CF\u8F83\u5927\u7684\u573A\u666F\u4E2D\uFF0C\u5C31\u4F1A\u53D1\u751F\u53CD\u590D\u7684\u5165\u6808\u3001\u6808\u6EE1\u3001\u51FA\u6808\u3001\u7A7A\u6808\u548C\u518D\u6B21\u5165\u6808\uFF0C\u4E00\u76F4\u5FAA\u73AF\u3002</p><p>\u6240\u4EE5\uFF0C\u6808\u5C31\u662F\u7C7B\u4F3C\u4E8E\u4E00\u7AEF\u88AB\u5835\u4F4F\u7684\u5355\u884C\u7EBF\uFF0C\u8F66\u5B50\u7C7B\u4F3C\u4E8E\u6808\u4E2D\u7684\u5143\u7D20\uFF0C\u6808\u4E2D\u7684\u5143\u7D20\u6EE1\u8DB3<strong>\u540E\u8FDB\u5148\u51FA</strong>\u7684\u7279\u70B9\u3002\u4F60\u53EF\u4EE5\u53C2\u770B\u4E0B\u56FE\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/5e/05/5e2bb65019053abfd5e7710e41d1b405.png" alt="img"></p><h2 id="\u4EC0\u4E48\u662F-javascript-\u7684\u8C03\u7528\u6808" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-javascript-\u7684\u8C03\u7528\u6808" aria-hidden="true">#</a> \u4EC0\u4E48\u662F JavaScript \u7684\u8C03\u7528\u6808</h2><p>JavaScript \u5F15\u64CE\u6B63\u662F\u5229\u7528\u6808\u7684\u8FD9\u79CD\u7ED3\u6784\u6765\u7BA1\u7406\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u3002\u5728\u6267\u884C\u4E0A\u4E0B\u6587\u521B\u5EFA\u597D\u540E\uFF0CJavaScript \u5F15\u64CE\u4F1A\u5C06\u6267\u884C\u4E0A\u4E0B\u6587\u538B\u5165\u6808\u4E2D\uFF0C\u901A\u5E38\u628A\u8FD9\u79CD\u7528\u6765\u7BA1\u7406\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u6808\u79F0\u4E3A<strong>\u6267\u884C\u4E0A\u4E0B\u6587\u6808</strong>\uFF0C\u53C8\u79F0<strong>\u8C03\u7528\u6808</strong>\u3002</p><p>\u4E3A\u4FBF\u4E8E\u4F60\u66F4\u597D\u5730\u7406\u89E3\u8C03\u7528\u6808\uFF0C\u4E0B\u9762\u6211\u4EEC\u518D\u6765\u770B\u6BB5\u7A0D\u5FAE\u590D\u6742\u70B9\u7684\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">b<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> b<span class="token operator">+</span>c
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">addAll</span><span class="token punctuation">(</span><span class="token parameter">b<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token number">10</span>
  result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span>
  <span class="token keyword">return</span> a<span class="token operator">+</span>result<span class="token operator">+</span>d
<span class="token punctuation">}</span>
<span class="token function">addAll</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5728\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u770B\u5230\u5B83\u662F\u5728 addAll \u51FD\u6570\u4E2D\u8C03\u7528\u4E86 add \u51FD\u6570\uFF0C\u90A3\u5728\u6574\u4E2A\u4EE3\u7801\u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u8C03\u7528\u6808\u662F\u600E\u4E48\u53D8\u5316\u7684\u5462\uFF1F</p><p>\u4E0B\u9762\u6211\u4EEC\u5C31\u4E00\u6B65\u6B65\u5730\u5206\u6790\u5728\u4EE3\u7801\u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u8C03\u7528\u6808\u7684\u72B6\u6001\u53D8\u5316\u60C5\u51B5\u3002</p><p><strong>\u7B2C\u4E00\u6B65\uFF0C\u521B\u5EFA\u5168\u5C40\u4E0A\u4E0B\u6587\uFF0C\u5E76\u5C06\u5176\u538B\u5165\u6808\u5E95</strong>\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/a5/1d/a5d7ec1f8f296412acc045835b85431d.png" alt="img"></p><p>\u4ECE\u56FE\u4E2D\u4F60\u4E5F\u53EF\u4EE5\u770B\u51FA\uFF0C\u53D8\u91CF a\u3001\u51FD\u6570 add \u548C addAll \u90FD\u4FDD\u5B58\u5230\u4E86\u5168\u5C40\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF\u73AF\u5883\u5BF9\u8C61\u4E2D\u3002</p><p>\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u538B\u5165\u5230\u8C03\u7528\u6808\u540E\uFF0CJavaScript \u5F15\u64CE\u4FBF\u5F00\u59CB\u6267\u884C\u5168\u5C40\u4EE3\u7801\u4E86\u3002\u9996\u5148\u4F1A\u6267\u884C a=2 \u7684\u8D4B\u503C\u64CD\u4F5C\uFF0C\u6267\u884C\u8BE5\u8BED\u53E5\u4F1A\u5C06\u5168\u5C40\u4E0A\u4E0B\u6587\u53D8\u91CF\u73AF\u5883\u4E2D a \u7684\u503C\u8BBE\u7F6E\u4E3A 2\u3002\u8BBE\u7F6E\u540E\u7684\u5168\u5C40\u4E0A\u4E0B\u6587\u7684\u72B6\u6001\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/1d/1d/1d50269dbc5b4c69f83662ecdd977b1d.png" alt="img"></p><p>\u63A5\u4E0B\u6765\uFF0C<strong>\u7B2C\u4E8C\u6B65\u662F\u8C03\u7528 addAll \u51FD\u6570</strong>\u3002\u5F53\u8C03\u7528\u8BE5\u51FD\u6570\u65F6\uFF0CJavaScript \u5F15\u64CE\u4F1A\u7F16\u8BD1\u8BE5\u51FD\u6570\uFF0C\u5E76\u4E3A\u5176\u521B\u5EFA\u4E00\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u6700\u540E\u8FD8\u5C06\u8BE5\u51FD\u6570\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u538B\u5165\u6808\u4E2D\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/7d/52/7d6c4c45db4ef9b900678092e6c53652.png" alt="img"></p><p>addAll \u51FD\u6570\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u521B\u5EFA\u597D\u4E4B\u540E\uFF0C\u4FBF\u8FDB\u5165\u4E86\u51FD\u6570\u4EE3\u7801\u7684\u6267\u884C\u9636\u6BB5\u4E86\uFF0C\u8FD9\u91CC\u5148\u6267\u884C\u7684\u662F d=10 \u7684\u8D4B\u503C\u64CD\u4F5C\uFF0C\u6267\u884C\u8BED\u53E5\u4F1A\u5C06 addAll \u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u7684 d \u7531 undefined \u53D8\u6210\u4E86 10\u3002</p><p>\u7136\u540E\u63A5\u7740\u5F80\u4E0B\u6267\u884C\uFF0C<strong>\u7B2C\u4E09\u6B65\uFF0C\u5F53\u6267\u884C\u5230 add \u51FD\u6570</strong>\u8C03\u7528\u8BED\u53E5\u65F6\uFF0C\u540C\u6837\u4F1A\u4E3A\u5176\u521B\u5EFA\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u5E76\u5C06\u5176\u538B\u5165\u8C03\u7528\u6808\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/cc/37/ccfe41d906040031a7df1e4f1bce5837.png" alt="img"></p><p>\u5F53 add \u51FD\u6570\u8FD4\u56DE\u65F6\uFF0C\u8BE5\u51FD\u6570\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u5C31\u4F1A\u4ECE\u6808\u9876\u5F39\u51FA\uFF0C\u5E76\u5C06 result \u7684\u503C\u8BBE\u7F6E\u4E3A add \u51FD\u6570\u7684\u8FD4\u56DE\u503C\uFF0C\u4E5F\u5C31\u662F 9\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/03/96/03ca801a5372f941bf17d6088fee0f96.png" alt="img"></p><p>\u7D27\u63A5\u7740 addAll \u6267\u884C\u6700\u540E\u4E00\u4E2A\u76F8\u52A0\u64CD\u4F5C\u540E\u5E76\u8FD4\u56DE\uFF0CaddAll \u7684\u6267\u884C\u4E0A\u4E0B\u6587\u4E5F\u4F1A\u4ECE\u6808\u9876\u90E8\u5F39\u51FA\uFF0C\u6B64\u65F6\u8C03\u7528\u6808\u4E2D\u5C31\u53EA\u5269\u4E0B\u5168\u5C40\u4E0A\u4E0B\u6587\u4E86\u3002\u6700\u7EC8\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/d0/7b/d0ac1d6e77735338fa97cc9a3f6c717b.png" alt="img"></p><p>\u81F3\u6B64\uFF0C\u6574\u4E2A JavaScript \u6D41\u7A0B\u6267\u884C\u7ED3\u675F\u4E86\u3002</p><p>\u597D\u4E86\uFF0C\u73B0\u5728\u4F60\u5E94\u8BE5\u77E5\u9053\u4E86<strong>\u8C03\u7528\u6808\u662F JavaScript \u5F15\u64CE\u8FFD\u8E2A\u51FD\u6570\u6267\u884C\u7684\u4E00\u4E2A\u673A\u5236</strong>\uFF0C\u5F53\u4E00\u6B21\u6709\u591A\u4E2A\u51FD\u6570\u88AB\u8C03\u7528\u65F6\uFF0C\u901A\u8FC7\u8C03\u7528\u6808\u5C31\u80FD\u591F\u8FFD\u8E2A\u5230\u54EA\u4E2A\u51FD\u6570\u6B63\u5728\u88AB\u6267\u884C\u4EE5\u53CA\u5404\u51FD\u6570\u4E4B\u95F4\u7684\u8C03\u7528\u5173\u7CFB\u3002</p><h2 id="\u5728\u5F00\u53D1\u4E2D-\u5982\u4F55\u5229\u7528\u597D\u8C03\u7528\u6808" tabindex="-1"><a class="header-anchor" href="#\u5728\u5F00\u53D1\u4E2D-\u5982\u4F55\u5229\u7528\u597D\u8C03\u7528\u6808" aria-hidden="true">#</a> \u5728\u5F00\u53D1\u4E2D\uFF0C\u5982\u4F55\u5229\u7528\u597D\u8C03\u7528\u6808</h2><p>\u9274\u4E8E\u8C03\u7528\u6808\u7684\u91CD\u8981\u6027\u548C\u5B9E\u7528\u6027\uFF0C\u90A3\u4E48\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u4E00\u8D77\u6765\u770B\u770B\u5728\u5B9E\u9645\u5DE5\u4F5C\u4E2D\uFF0C\u5E94\u8BE5\u5982\u4F55\u67E5\u770B\u548C\u5229\u7528\u597D\u8C03\u7528\u6808\u3002</p><h3 id="_1-\u5982\u4F55\u5229\u7528\u6D4F\u89C8\u5668\u67E5\u770B\u8C03\u7528\u6808\u7684\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_1-\u5982\u4F55\u5229\u7528\u6D4F\u89C8\u5668\u67E5\u770B\u8C03\u7528\u6808\u7684\u4FE1\u606F" aria-hidden="true">#</a> 1. \u5982\u4F55\u5229\u7528\u6D4F\u89C8\u5668\u67E5\u770B\u8C03\u7528\u6808\u7684\u4FE1\u606F</h3><p>\u5F53\u4F60\u6267\u884C\u4E00\u6BB5\u590D\u6742\u7684\u4EE3\u7801\u65F6\uFF0C\u4F60\u53EF\u80FD\u5F88\u96BE\u4ECE\u4EE3\u7801\u6587\u4EF6\u4E2D\u5206\u6790\u5176\u8C03\u7528\u5173\u7CFB\uFF0C\u8FD9\u65F6\u5019\u4F60\u53EF\u4EE5\u5728\u4F60\u60F3\u8981\u67E5\u770B\u7684\u51FD\u6570\u4E2D\u52A0\u5165\u65AD\u70B9\uFF0C\u7136\u540E\u5F53\u6267\u884C\u5230\u8BE5\u51FD\u6570\u65F6\uFF0C\u5C31\u53EF\u4EE5\u67E5\u770B\u8BE5\u51FD\u6570\u7684\u8C03\u7528\u6808\u4E86\u3002</p><p>\u8FD9\u4E48\u8BF4\u53EF\u80FD\u6709\u70B9\u62BD\u8C61\uFF0C\u8FD9\u91CC\u6211\u4EEC\u62FF\u4E0A\u9762\u7684\u90A3\u6BB5\u4EE3\u7801\u505A\u4E2A\u6F14\u793A\uFF0C\u4F60\u53EF\u4EE5\u6253\u5F00\u201C\u5F00\u53D1\u8005\u5DE5\u5177\u201D\uFF0C\u70B9\u51FB\u201CSource\u201D\u6807\u7B7E\uFF0C\u9009\u62E9 JavaScript \u4EE3\u7801\u7684\u9875\u9762\uFF0C\u7136\u540E\u5728\u7B2C 3 \u884C\u52A0\u4E0A\u65AD\u70B9\uFF0C\u5E76\u5237\u65B0\u9875\u9762\u3002\u4F60\u53EF\u4EE5\u770B\u5230\u6267\u884C\u5230 add \u51FD\u6570\u65F6\uFF0C\u6267\u884C\u6D41\u7A0B\u5C31\u6682\u505C\u4E86\uFF0C\u8FD9\u65F6\u53EF\u4EE5\u901A\u8FC7\u53F3\u8FB9\u201Ccall stack\u201D\u6765\u67E5\u770B\u5F53\u524D\u7684\u8C03\u7528\u6808\u7684\u60C5\u51B5\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/c0/a2/c0d303a289a535b87a6c445ba7f34fa2.png" alt="img"></p><p>\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u53F3\u8FB9\u7684\u201Ccall stack\u201D\u4E0B\u9762\u663E\u793A\u51FA\u6765\u4E86\u51FD\u6570\u7684\u8C03\u7528\u5173\u7CFB\uFF1A\u6808\u7684\u6700\u5E95\u90E8\u662F anonymous\uFF0C\u4E5F\u5C31\u662F\u5168\u5C40\u7684\u51FD\u6570\u5165\u53E3\uFF1B\u4E2D\u95F4\u662F addAll \u51FD\u6570\uFF1B\u9876\u90E8\u662F add \u51FD\u6570\u3002\u8FD9\u5C31\u6E05\u6670\u5730\u53CD\u6620\u4E86\u51FD\u6570\u7684\u8C03\u7528\u5173\u7CFB\uFF0C\u6240\u4EE5\u5728<strong>\u5206\u6790\u590D\u6742\u7ED3\u6784\u4EE3\u7801\uFF0C\u6216\u8005\u68C0\u67E5 Bug \u65F6\uFF0C\u8C03\u7528\u6808\u90FD\u662F\u975E\u5E38\u6709\u7528\u7684</strong>\u3002</p><p>\u9664\u4E86\u901A\u8FC7\u65AD\u70B9\u6765\u67E5\u770B\u8C03\u7528\u6808\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u4F7F\u7528 console.trace() \u6765\u8F93\u51FA\u5F53\u524D\u7684\u51FD\u6570\u8C03\u7528\u5173\u7CFB\uFF0C\u6BD4\u5982\u5728\u793A\u4F8B\u4EE3\u7801\u4E2D\u7684 add \u51FD\u6570\u91CC\u9762\u52A0\u4E0A\u4E86 console.trace()\uFF0C\u4F60\u5C31\u53EF\u4EE5\u770B\u5230\u63A7\u5236\u53F0\u8F93\u51FA\u7684\u7ED3\u679C\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/ab/ce/abfba06cd23a7704a6eb148cff443ece.png" alt="img"></p><h3 id="_2-\u6808\u6EA2\u51FA-stack-overflow" tabindex="-1"><a class="header-anchor" href="#_2-\u6808\u6EA2\u51FA-stack-overflow" aria-hidden="true">#</a> 2. \u6808\u6EA2\u51FA\uFF08Stack Overflow\uFF09</h3><p>\u73B0\u5728\u4F60\u77E5\u9053\u4E86\u8C03\u7528\u6808\u662F\u4E00\u79CD\u7528\u6765\u7BA1\u7406\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u7B26\u5408\u540E\u8FDB\u5148\u51FA\u7684\u89C4\u5219\u3002\u4E0D\u8FC7\u8FD8\u6709\u4E00\u70B9\u4F60\u8981\u6CE8\u610F\uFF0C<strong>\u8C03\u7528\u6808\u662F\u6709\u5927\u5C0F\u7684</strong>\uFF0C\u5F53\u5165\u6808\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u8D85\u8FC7\u4E00\u5B9A\u6570\u76EE\uFF0CJavaScript \u5F15\u64CE\u5C31\u4F1A\u62A5\u9519\uFF0C\u6211\u4EEC\u628A\u8FD9\u79CD\u9519\u8BEF\u53EB\u505A<strong>\u6808\u6EA2\u51FA</strong>\u3002</p><p>\u7279\u522B\u662F\u5728\u4F60\u5199\u9012\u5F52\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u5C31\u5F88\u5BB9\u6613\u51FA\u73B0\u6808\u6EA2\u51FA\u7684\u60C5\u51B5\u3002\u6BD4\u5982\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">division</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">division</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">division</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5F53\u6267\u884C\u65F6\uFF0C\u5C31\u4F1A\u629B\u51FA\u6808\u6EA2\u51FA\u9519\u8BEF\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/b4/4d/b4f7196077d9ef4eac1ca6a279f2054d.png" alt="img"></p><p>\u4ECE\u4E0A\u56FE\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u629B\u51FA\u7684\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A\u8D85\u8FC7\u4E86\u6700\u5927\u6808\u8C03\u7528\u5927\u5C0F\uFF08Maximum call stack size exceeded\uFF09\u3002</p><p>\u90A3\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1F\u8FD9\u662F\u56E0\u4E3A\u5F53 JavaScript \u5F15\u64CE\u5F00\u59CB\u6267\u884C\u8FD9\u6BB5\u4EE3\u7801\u65F6\uFF0C\u5B83\u9996\u5148\u8C03\u7528\u51FD\u6570 division\uFF0C\u5E76\u521B\u5EFA\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u538B\u5165\u6808\u4E2D\uFF1B\u7136\u800C\uFF0C\u8FD9\u4E2A\u51FD\u6570\u662F<strong>\u9012\u5F52\u7684\uFF0C\u5E76\u4E14\u6CA1\u6709\u4EFB\u4F55\u7EC8\u6B62\u6761\u4EF6</strong>\uFF0C\u6240\u4EE5\u5B83\u4F1A\u4E00\u76F4\u521B\u5EFA\u65B0\u7684\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u5E76\u53CD\u590D\u5C06\u5176\u538B\u5165\u6808\u4E2D\uFF0C\u4F46\u6808\u662F\u6709\u5BB9\u91CF\u9650\u5236\u7684\uFF0C\u8D85\u8FC7\u6700\u5927\u6570\u91CF\u540E\u5C31\u4F1A\u51FA\u73B0\u6808\u6EA2\u51FA\u7684\u9519\u8BEF\u3002</p><p>\u7406\u89E3\u4E86\u6808\u6EA2\u51FA\u539F\u56E0\u540E\uFF0C\u4F60\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E9B\u65B9\u6CD5\u6765\u907F\u514D\u6216\u8005\u89E3\u51B3\u6808\u6EA2\u51FA\u7684\u95EE\u9898\uFF0C\u6BD4\u5982\u628A\u9012\u5F52\u8C03\u7528\u7684\u5F62\u5F0F\u6539\u9020\u6210\u5176\u4ED6\u5F62\u5F0F\uFF0C\u6216\u8005\u4F7F\u7528\u52A0\u5165\u5B9A\u65F6\u5668\u7684\u65B9\u6CD5\u6765\u628A\u5F53\u524D\u4EFB\u52A1\u62C6\u5206\u4E3A\u5176\u4ED6\u5F88\u591A\u5C0F\u4EFB\u52A1\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u597D\u4E86\uFF0C\u4ECA\u5929\u7684\u5185\u5BB9\u5C31\u8BB2\u5230\u8FD9\u91CC\uFF0C\u4E0B\u9762\u6765\u603B\u7ED3\u4E0B\u4ECA\u5929\u7684\u5185\u5BB9\u3002</p><ul><li><p>\u6BCF\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\uFF0CJavaScript \u5F15\u64CE\u4F1A\u4E3A\u5176\u521B\u5EFA\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u5E76\u628A\u8BE5\u6267\u884C\u4E0A\u4E0B\u6587\u538B\u5165\u8C03\u7528\u6808\uFF0C\u7136\u540E JavaScript \u5F15\u64CE\u5F00\u59CB\u6267\u884C\u51FD\u6570\u4EE3\u7801\u3002</p></li><li><p>\u5982\u679C\u5728\u4E00\u4E2A\u51FD\u6570 A \u4E2D\u8C03\u7528\u4E86\u53E6\u5916\u4E00\u4E2A\u51FD\u6570 B\uFF0C\u90A3\u4E48 JavaScript \u5F15\u64CE\u4F1A\u4E3A B \u51FD\u6570\u521B\u5EFA\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u5E76\u5C06 B \u51FD\u6570\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u538B\u5165\u6808\u9876\u3002</p></li><li><p>\u5F53\u524D\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u540E\uFF0CJavaScript \u5F15\u64CE\u4F1A\u5C06\u8BE5\u51FD\u6570\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u5F39\u51FA\u6808\u3002</p></li><li><p>\u5F53\u5206\u914D\u7684\u8C03\u7528\u6808\u7A7A\u95F4\u88AB\u5360\u6EE1\u65F6\uFF0C\u4F1A\u5F15\u53D1\u201C\u5806\u6808\u6EA2\u51FA\u201D\u95EE\u9898\u3002</p></li></ul><p>\u6808\u662F\u4E00\u79CD\u975E\u5E38\u91CD\u8981\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u4E0D\u5149\u5E94\u7528\u5728 JavaScript \u8BED\u8A00\u4E2D\uFF0C\u5176\u4ED6\u7684\u7F16\u7A0B\u8BED\u8A00\uFF0C\u5982 C/C++\u3001Java\u3001Python \u7B49\u8BED\u8A00\uFF0C\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u4E5F\u90FD\u4F7F\u7528\u4E86\u6808\u6765\u7BA1\u7406\u51FD\u6570\u4E4B\u95F4\u7684\u8C03\u7528\u5173\u7CFB\u3002\u6240\u4EE5\u6808\u662F\u975E\u5E38\u57FA\u7840\u4E14\u91CD\u8981\u7684\u77E5\u8BC6\u70B9\uFF0C\u4F60\u5FC5\u987B\u5F97\u638C\u63E1\u3002</p><h2 id="\u601D\u8003\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u601D\u8003\u65F6\u95F4" aria-hidden="true">#</a> \u601D\u8003\u65F6\u95F4</h2><p>\u6700\u540E\uFF0C\u6211\u7ED9\u4F60\u7559\u4E2A\u601D\u8003\u9898\uFF0C\u4F60\u53EF\u4EE5\u770B\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">runStack</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">runStack</span><span class="token punctuation">(</span> n<span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">runStack</span><span class="token punctuation">(</span><span class="token number">50000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u662F\u4E00\u6BB5\u9012\u5F52\u4EE3\u7801\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F20\u5165\u53C2\u6570 n\uFF0C\u8BA9\u4EE3\u7801\u9012\u5F52\u6267\u884C n \u6B21\uFF0C\u4E5F\u5C31\u610F\u5473\u7740\u8C03\u7528\u6808\u7684\u6DF1\u5EA6\u80FD\u8FBE\u5230 n\uFF0C\u5F53\u8F93\u5165\u4E00\u4E2A\u8F83\u5927\u7684\u6570\u65F6\uFF0C\u6BD4\u5982 50000\uFF0C\u5C31\u4F1A\u51FA\u73B0\u6808\u6EA2\u51FA\u7684\u95EE\u9898\uFF0C\u90A3\u4E48\u4F60\u80FD\u4F18\u5316\u4E0B\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4EE5\u89E3\u51B3\u6808\u6EA2\u51FA\u7684\u95EE\u9898\u5417\uFF1F</p><p>\u6B22\u8FCE\u5728\u7559\u8A00\u533A\u4E0E\u6211\u5206\u4EAB\u4F60\u7684\u60F3\u6CD5\uFF0C\u4E5F\u6B22\u8FCE\u4F60\u5728\u7559\u8A00\u533A\u8BB0\u5F55\u4F60\u7684\u601D\u8003\u8FC7\u7A0B\u3002\u611F\u8C22\u9605\u8BFB\uFF0C\u5982\u679C\u4F60\u89C9\u5F97\u8FD9\u7BC7\u6587\u7AE0\u5BF9\u4F60\u6709\u5E2E\u52A9\u7684\u8BDD\uFF0C\u4E5F\u6B22\u8FCE\u628A\u5B83\u5206\u4EAB\u7ED9\u66F4\u591A\u7684\u670B\u53CB\u3002</p>`,76);function h(v,f){const s=e("ExternalLinkIcon");return t(),c(o,null,[u,a("p",null,[d,a("a",g,[k,r(s)]),b]),m],64)}var S=p(l,[["render",h],["__file","08.html.vue"]]);export{S as default};
