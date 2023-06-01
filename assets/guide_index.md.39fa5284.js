import{_ as s,o as n,c as e,O as a}from"./chunks/framework.190c9c01.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md","lastUpdated":null}'),p={name:"guide/index.md"},l=a(`<h3 id="docs-文档结构目录" tabindex="-1">docs 文档结构目录 <a class="header-anchor" href="#docs-文档结构目录" aria-label="Permalink to &quot;docs 文档结构目录&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">├─ examples               # VPDemo组件自动解析此文件夹下的所有.vue文件</span></span>
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
<span class="line"><span style="color:#24292e;">└─ vite.config.ts         # vite 全局配置文件（支持tsx）</span></span></code></pre></div>`,2),o=[l];function t(c,i,r,d,y,m){return n(),e("div",null,o)}const g=s(p,[["render",t]]);export{u as __pageData,g as default};
