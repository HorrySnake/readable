# 更好读 · Reader for Safari 网站

纯 HTML、CSS 与 JavaScript，沿用 Route 落地页风格，包含中英双语首页、隐私政策、用户协议及支持页面。

GitHub Pages：Settings → Pages → Deploy from a branch → main / (root)。
正式地址：https://horrysnake.github.io/readable/
本地预览：在本目录执行 `python3 -m http.server 8083`。

App 已上架。首页及文档页下载入口指向 App Store（ID 6821259436）。所有页面通过 apple-itunes-app meta 标签启用 Safari Smart App Banner；显示由 Safari 和设备状态决定，iOS 模拟器不显示原生横幅。

法律文档版本 1.0，生效日期 2026-10-10；开发与维护：CoherentStudio；联系邮箱：CoherentStudio@hotmail.com。依据当前代码的数据处理方式编写；功能或数据处理变化时请同步更新。

2026-10-18：更新正式下载入口、系统深浅色及移动端布局。原生横幅仅设置 app-id；未设置未经 App 处理的 app-argument。

2026-10-18 样式修订：统一深色页面、固定悬浮胶囊导航、Apple 图标 + 下载按钮、简洁大圆角页脚。语言切换移至页脚。保留 Safari Smart App Banner。

Apple glyph: Bootstrap Icons 1.11.3, https://github.com/twbs/icons (MIT).
Copyright (c) 2019-2024 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

2026-10-18 桌面适配修订：首页居中、桌面胶囊 940px / 76px、手机胶囊 68px。桌面页脚收紧居中；仅 iPhone 与 iPad 已上架，Mac 仍在优化中，支持说明与隐私政策平台范围已修正。
