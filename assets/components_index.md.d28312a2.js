import{_ as s,o as a,c as n,O as e}from"./chunks/framework.9d3c1fa3.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/index.md","filePath":"components/index.md","lastUpdated":1685437903000}'),p={name:"components/index.md"},l=e(`<h3 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>@wocwin/t-ui-plus 基于 vue3 + ts + Element-plus 再次封装的基础组件</p></div><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@wocwin/t-ui-plus</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span></span>
<span class="line"><span style="color:#E1E4E8;">&amp;</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@wocwin/t-ui-plus</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@wocwin/t-ui-plus</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span></span>
<span class="line"><span style="color:#24292E;">&amp;</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@wocwin/t-ui-plus</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span></span></code></pre></div><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// main.ts</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> TuiPlus </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@wocwin/t-ui-plus&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@wocwin/t-ui-plus/lib/style.css&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(TuiPlus)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// main.ts</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> TuiPlus </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@wocwin/t-ui-plus&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@wocwin/t-ui-plus/lib/style.css&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App)</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(TuiPlus)</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h3 id="docs文档结构目录" tabindex="-1">docs文档结构目录 <a class="header-anchor" href="#docs文档结构目录" aria-label="Permalink to &quot;docs文档结构目录&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">├─ examples               # VPDemo组件自动解析此文件夹下的所有.vue文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ components             # .md文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ public                 # 静态资源文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ .vitepress</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ config              # 插件配置</span></span>
<span class="line"><span style="color:#e1e4e8;">|  │  ├─ global.ts        # 全局变量定义</span></span>
<span class="line"><span style="color:#e1e4e8;">|  │  └─ plugins.ts       # 自定义.md文件渲染</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ theme               # 主题配置</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ utils               # 文档展开隐藏代码高亮</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ vitepress</span></span>
<span class="line"><span style="color:#e1e4e8;">|  │  ├─ vp-demo          # VPDemo组件源码</span></span>
<span class="line"><span style="color:#e1e4e8;">|  │  ├─ style            # VPDemo组件样式</span></span>
<span class="line"><span style="color:#e1e4e8;">|  │  └─ index.ts         # 暴露VPDemo组件</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─ config.ts           # vitepress配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ index.md               # 文档home页面</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ tsconfig.json          # typescript 全局配置</span></span>
<span class="line"><span style="color:#e1e4e8;">└─ vite.config.ts         # vite 全局配置文件（支持tsx）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">├─ examples               # VPDemo组件自动解析此文件夹下的所有.vue文件</span></span>
<span class="line"><span style="color:#24292e;">├─ components             # .md文件</span></span>
<span class="line"><span style="color:#24292e;">├─ public                 # 静态资源文件</span></span>
<span class="line"><span style="color:#24292e;">├─ .vitepress</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ config              # 插件配置</span></span>
<span class="line"><span style="color:#24292e;">|  │  ├─ global.ts        # 全局变量定义</span></span>
<span class="line"><span style="color:#24292e;">|  │  └─ plugins.ts       # 自定义.md文件渲染</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ theme               # 主题配置</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ utils               # 文档展开隐藏代码高亮</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ vitepress</span></span>
<span class="line"><span style="color:#24292e;">|  │  ├─ vp-demo          # VPDemo组件源码</span></span>
<span class="line"><span style="color:#24292e;">|  │  ├─ style            # VPDemo组件样式</span></span>
<span class="line"><span style="color:#24292e;">|  │  └─ index.ts         # 暴露VPDemo组件</span></span>
<span class="line"><span style="color:#24292e;">│  └─ config.ts           # vitepress配置文件</span></span>
<span class="line"><span style="color:#24292e;">├─ index.md               # 文档home页面</span></span>
<span class="line"><span style="color:#24292e;">├─ tsconfig.json          # typescript 全局配置</span></span>
<span class="line"><span style="color:#24292e;">└─ vite.config.ts         # vite 全局配置文件（支持tsx）</span></span></code></pre></div><h3 id="vue2基础组件" tabindex="-1">vue2基础组件 <a class="header-anchor" href="#vue2基础组件" aria-label="Permalink to &quot;vue2基础组件&quot;">​</a></h3><blockquote><p>基于 vue2 + Element-ui 和 ant-design-vue 二次封装的基础组件</p></blockquote><hr><h4 id="vue2-基础组件文档地址" tabindex="-1"><a href="https://wocwin.github.io/t-ui/" target="_blank" rel="noreferrer">Vue2 基础组件文档地址</a> <a class="header-anchor" href="#vue2-基础组件文档地址" aria-label="Permalink to &quot;[Vue2 基础组件文档地址](https://wocwin.github.io/t-ui/)&quot;">​</a></h4><hr><h4 id="vue2-基础组件码云地址" tabindex="-1"><a href="https://gitee.com/wocwin/t-ui" target="_blank" rel="noreferrer">Vue2 基础组件码云地址</a> <a class="header-anchor" href="#vue2-基础组件码云地址" aria-label="Permalink to &quot;[Vue2 基础组件码云地址](https://gitee.com/wocwin/t-ui)&quot;">​</a></h4><hr><h4 id="vue2-基础组件github地址" tabindex="-1"><a href="https://github.com/wocwin/t-ui" target="_blank" rel="noreferrer">Vue2 基础组件GitHub地址</a> <a class="header-anchor" href="#vue2-基础组件github地址" aria-label="Permalink to &quot;[Vue2 基础组件GitHub地址](https://github.com/wocwin/t-ui)&quot;">​</a></h4>`,16),o=[l];function t(c,r,i,y,u,d){return a(),n("div",null,o)}const m=s(p,[["render",t]]);export{E as __pageData,m as default};