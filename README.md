# MandstarChinese 官网（重制版）

纯静态网站（HTML + CSS + 原生 JS），无需任何构建工具，可直接用 GitHub Pages 免费托管。

## 一、文件结构说明

```
mandstar-website/
├── index.html          首页（Hero、数据条、关于我们、讲师预览、常见困扰、误解澄清、对比表、预约流程、客户评价、页脚）
├── teachers.html        讲师介绍页（内容由 js/teachers-data.js 自动生成）
├── lessons.html          授业について（A/B课程模式对比表 + 常见问题）
├── pricing.html         料金プラン（A/B模式各3档价格卡片）
├── pinyin-course.html    ピンイン講座（独立课程销售页，详见第八节）
├── css/
│   └── style.css         全站唯一样式文件，紫粉白低饱和配色变量都在顶部 :root 里
├── js/
│   ├── config.js          ★ 予約リンク・联系方式・SNS链接的唯一配置入口
│   ├── teachers-data.js   ★ 讲师数据（增删讲师只改这个文件）
│   ├── render-teachers.js 讲师卡片自动渲染逻辑（一般不需要改）
│   └── main.js            移动端菜单、把 config.js 的链接写入按钮（一般不需要改）
├── images/
│   ├── teacher-tong.svg          讲师占位图（需替换成真实照片）
│   ├── teacher-vita.svg
│   ├── teacher-uken.svg
│   ├── teacher-placeholder.svg   讲师照片加载失败时的自动备用图（无需理会）
│   ├── decor-star.svg            四角星（✨风格）装饰插画，全站右上角浮动小图案
│   ├── decor-circle.svg          圆相（禅意线条圆圈）装饰插画
│   ├── decor-wave.svg            波浪线装饰插画
│   ├── decor-lines.svg           斜线装饰插画
│   ├── bg-starfield.svg          浩瀚星空背景图（自动生成，用于所有深紫色区块的默认背景，无需理会）
│   └── logo.png / bg-*.jpg / photo-*.jpg / customer-*.jpg
│                                  ★ 你要添加的真实照片放在这里，文件名见第六节表格
├── videos/                （需要自己新建）放 about.mp4，首页"MandstarChineseについて"区域的视频，见第六节说明
├── .nojekyll             告诉 GitHub Pages 不要用 Jekyll 处理（保留即可，无需理会）
└── README.md             本说明文件
```

## 二、最常用的 3 个修改点

### 1. 修改「レッスン予約」按钮的链接（对接你已做好的问卷+预约页面）

打开 `js/config.js`，把这一行的网址换成你的问卷/预约页面 URL：

```js
reservationUrl: "https://forms.gle/XXXXXXXXXXXXXXXX",
```

保存后，全站所有「レッスン予約」按钮（导航栏、首页大按钮、预约流程、料金プラン页底部）都会自动生效，不需要逐个页面修改。

### 2. 增加/删除/修改讲师

打开 `js/teachers-data.js`，`TEACHERS` 是一个数组，每位老师是一个 `{ }` 对象：

```js
{
  id: "tong",                          // 唯一英文ID，用作页内锚点
  name: "童（TONG）先生",
  tagline: "大学院言語学専攻・7年間の中国語講師経験・人気教師NO.1",
  photo: "images/teacher-tong.svg",    // 换成真实照片路径，如 images/teacher-li.jpg
  bio: [
    "第一段自我介绍……",
    "第二段自我介绍……"
  ]
}
```

- **新增讲师**：复制一整段 `{ ... }`，粘贴到数组里，改内容即可，首页预览和讲师页会自动出现（首页最多展示前3位）。
- **删除讲师**：直接删掉对应的 `{ ... }` 块。
- **替换照片**：把真实照片文件（建议 3:4 竖版，尺寸约 800x1000px，JPG 或 PNG）放进 `images/` 文件夹，再把 `photo` 字段改成对应文件名。

### 3. 修改课程内容 / 价格

- `lessons.html`：直接编辑 `<table class="pattern-table">` 里的文字，或复制 `<details class="faq-item">` 区块增加/删除常见问题。
- `pricing.html`：每个价格档位是一个 `<div class="price-card">` 区块，复制/删除/编辑里面的文字、`<li>` 权益条目和 `<span class="price-value">` 价格即可。

## 三、部署到 GitHub Pages（全部免费）详细步骤

### 第一步：注册 / 登录 GitHub

打开 https://github.com ，如果还没有账号，点击 "Sign up" 免费注册一个。

### 第二步：新建仓库（Repository）

1. 登录后点右上角 "+" → "New repository"
2. Repository name 填写，例如：`mandstar-website`
3. 选择 **Public**（公开，GitHub Pages 免费版必须是公开仓库）
4. 不要勾选 "Add a README file"（我们已经有自己的文件）
5. 点击 "Create repository"

### 第三步：上传网站文件

最简单的方式（不需要装任何软件）：

1. 进入刚创建的空仓库页面，点击 "uploading an existing file" 链接
2. 把本文件夹 `mandstar-website` 里的**所有文件和子文件夹**（index.html、teachers.html、lessons.html、pricing.html、css/、js/、images/、.nojekyll）一次性拖拽到浏览器上传区域
   - 注意：请保持文件夹结构不变（比如 css 文件夹里的 style.css 要作为 css/style.css 上传，直接把整个 mandstar-website 文件夹里的内容拖进去，浏览器会保留子文件夹结构）
3. 页面下方 "Commit changes" 直接点击绿色按钮提交

（如果你熟悉 git 命令行，也可以用以下方式，效果相同）：

```bash
cd mandstar-website
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/你的用户名/mandstar-website.git
git push -u origin main
```

### 第四步：开启 GitHub Pages

1. 进入仓库页面，点击顶部 "Settings"
2. 左侧菜单找到 "Pages"
3. "Source" 选择 "Deploy from a branch"
4. Branch 选择 `main`，文件夹选择 `/ (root)`，点击 "Save"
5. 等待约1-2分钟，刷新页面，顶部会出现绿色提示网址，形如：
   `https://你的用户名.github.io/mandstar-website/`

这个网址就是你的正式官网地址，可以直接分享给学生，也可以在微信/LINE/YouTube简介里使用。

### 第五步（可选）：绑定自己的域名

如果你已经购买了域名（如 mandstarchinese.com）：

1. 在域名服务商后台，添加一条 CNAME 记录，指向 `你的用户名.github.io`
2. 在仓库 Settings → Pages → Custom domain 里填入你的域名，保存
3. 等待DNS生效（几分钟到几小时不等）

## 四、日后更新网站内容的方法

网站上线后，如果想改文字/价格/讲师/链接：

1. 打开仓库对应文件（例如 `js/teachers-data.js`）
2. 点击文件右上角的铅笔图标（Edit this file）
3. 直接在网页里修改文字
4. 拉到底部点击绿色 "Commit changes"
5. 大约1分钟后，网站自动更新，无需任何额外操作

## 五、本地预览（上传前先自己看效果）

不需要服务器，直接双击 `index.html` 用浏览器打开即可预览整个网站（讲师页/课程页/价格页可通过顶部导航切换）。

## 六、如何添加/替换图片（完全不用改代码）

网站已经在每个页面的合适位置留好了「图片占位框」（虚线边框、写着"ここに写真を追加できます"）。你只需要把图片文件放进 `images/` 文件夹，**文件名对上，图片就会自动替换掉占位框**，不需要打开任何代码文件。

### 操作方法

1. 准备好照片（JPG 或 PNG 格式）
2. 把文件重命名成下表里指定的文件名（大小写、后缀 `.jpg` 都要完全一致）
3. 拖进 `images/` 文件夹（本地预览）或上传到 GitHub 仓库的 `images/` 目录（线上更新，路径同样是 `images/文件名`）
4. 刷新网页，占位框会自动消失，替换为你的照片

### 各页面的图片位置一览

| 页面 | 文件名（放入 images/ 文件夹） | 建议比例 | 建议内容 |
|---|---|---|---|
| 导航栏（全部4个页面） | `logo.png` | 正方形 1:1 | 品牌 Logo，建议透明背景 PNG，约200×200px |
| 首页 index.html | `bg-hero.jpg` | 横版，1920×1080px | 顶部标题区域的整版背景图（上方叠加一层低透明度黑色遮罩，保证文字清晰可读） |
| 首页 index.html | `photo-about.jpg`（可选，作为视频封面图） | 16:9 | "MandstarChineseについて"旁边视频区域的封面图（视频加载前显示），不放也不影响视频播放 |
| 首页 index.html | `photo-flow.jpg` | 竖版 3:4 | "ご予約の流れ"旁边的配图，オンラインレッスンの様子 |
| 首页 index.html | `poster-1.jpg` ～ `poster-4.jpg` | 横版 21:9，建议1760×760px | "選ぶ理由"和"ご予約の流れ"之间的自动轮播海报（4张循环播放，可增减张数） |
| 首页 index.html | `customer-1.jpg` ～ `customer-4.jpg` | 正方形 1:1 | "お客様の声"里4位学员的头像照片（圆形显示） |
| 首页 index.html | `photo-myths.jpg` | 竖版，建议比文字块更高一些 | "よくある誤解"右侧配图，无阴影/悬浮效果，已整体加高并向右偏移 |
| 讲师紹介/授业について/料金プラン 共用 | `bg-page-hero.jpg` | 横版，1920×600px | 这3个页面顶部横幅的共用背景图，放一张即可同时应用到3页 |
| 讲师紹介 teachers.html | 每位老师单独设置，见下方说明 | 竖版 3:4 | 讲师本人照片 |
| 授业について lessons.html | `photo-lessons.jpg` | 横版 16:9 | "レッスンの雰囲気"旁边的配图 |
| 料金プラン pricing.html | `photo-pricing.jpg` | 横版 21:9 | 页面**最下方**（价格方案与预约按钮之后、页脚之前）的通栏图 |
| ピンイン講座 pinyin-course.html | `photo-pinyin-1.jpg` ～ `photo-pinyin-3.jpg` | 横版 21:9，建议1760×760px | 页面顶部（页面大标题正下方）的自动轮播海报（3张循环播放，可仿照首页轮播增减张数） |

关于 `logo.png`、`bg-hero.jpg`、`bg-page-hero.jpg`：这几张是"锦上添花"的可选图，不放的话页面会自动使用现在的纯色/渐变样式，不会露出破图或空白，可以随时补充。

### 如何添加视频（首页"MandstarChineseについて"区域）

这个区域已经从图片改成了视频占位框，操作方式和图片一样简单：

1. 准备好视频文件（MP4 格式，横版 16:9 推荐）
2. 文件重命名为 `about.mp4`
3. 在网站根目录新建一个 `videos` 文件夹（如果还没有），把文件放进去，路径为 `videos/about.mp4`
4. 刷新网页，占位框会自动消失，替换为可播放的视频（自带播放控制条）

如果想同时提供一张封面图（视频还没点击播放时显示），把图片放进 `images/photo-about.jpg` 即可，非必需。

### 讲师照片单独说明

讲师照片不用改 HTML，但需要多一步：打开 `js/teachers-data.js`，把对应老师的 `photo` 字段改成你放进 `images/` 文件夹的文件名，例如：

```js
photo: "images/teacher-tong.jpg",   // 原本是 images/teacher-tong.svg 占位图
```

**注意**：`pinyin-course.html`（ピンイン講座页）里的「担当講師」宇軒先生照片是单独写死的一张图（不跟随 `teachers-data.js` 自动同步），已经设置为优先读取 `images/teacher-uken.jpg`，只要把这张照片放进 `images/` 文件夹（文件名 `teacher-uken.jpg`）就会自动生效，不需要再改这个页面的代码。

### 如果暂时没有照片

不用担心，占位框本身就是设计好的视觉元素（虚线框 + 提示文字），风格统一、不会显得像"没做完"，完全可以先上线，之后随时补图。

### 免费可商用图片素材推荐（如果没有自己的照片）

如果想用免费的网络图片而不是自己拍摄的照片，可以去这些网站搜索下载（均可免费商用，无需注册也能下载，下载后按上表重命名放入 images/ 文件夹即可）：

- [Unsplash](https://unsplash.com) — 搜索关键词如 "study desk"、"notebook"、"online class"、"japan minimal"
- [Pexels](https://www.pexels.com) — 搜索关键词如 "language learning"、"video call laptop"
- [Pixabay](https://pixabay.com) — 素材类型更丰富，也有插画类

选图建议：优先选**低饱和度、光线柔和、留白多**的照片，才能跟网站紫粉白的极简基调统一。

## 八、新增页面：ピンイン講座（pinyin-course.html）

这是根据你提供的"ピンイン講座"销售页截图重新设计的独立课程页，风格与主站保持一致（同一套导航栏、页脚、配色和组件），可以理解为"官网 + 一个课程详情页"的结构，而不是另起一个独立小站。

### 与主站的连接方式（已做，无需再操作）

1. **导航栏 / 页脚**：4个原有页面（首页、讲师紹介、授业について、料金プラン）的顶部导航和页脚都新增了「ピンイン講座」入口，用户在任何页面都能点进来。
2. **首页推荐卡片**：首页"お客様の声"和页脚之间新增了一个课程推荐横幅（`.course-promo`），文案+按钮直达 `pinyin-course.html`。
3. **课程页底部「公式サイトを見る」按钮**：ピンイン講座页面底部有一张深色卡片（含7年以上/1,000名以上/満足度98%数据），点击"公式サイトを見る"直接跳回首页 `index.html`。

这样两边互相有入口，用户无论先看到哪个页面都能方便地找到另一边，同时两页视觉风格统一，不会有"跳到另一个网站"的违和感。

### 页面结构

顶部大标题 → 讲义/课堂自动轮播照片（3张循环播放）→ 3个痛点卡片（问题加粗+分隔线+回答，层次分明的独立样式 `.pain-card`）→ 选ばれる6つの理由（数字卡片）→ カリキュラム表格（10回，详见下方）→ 担当講師（宇軒/UKEN先生，与 `teachers-data.js` 内容一致）→ 料金・お申し込み（价格阶梯 + LINE咨询说明）→ MandstarChineseについて（连回首页）→ 页脚。

### ⚠️ 需要你补充的内容

截图中只能看到「カリキュラム」表格第1～5回的内容，第6～10回目前统一显示为「公開待ち」（斜体灰字，两个单元格合并成一个）。等内容确定后，打开 `pinyin-course.html`，搜索 `placeholder-row`，把对应行的 `<td colspan="2">公開待ち</td>` 改成两个单元格 `<td>テーマ</td><td class="cell-left">学習内容</td>`（格式参照第1～5回），再删掉 `<tr>` 上的 `class="placeholder-row"` 即可。

### 视觉更新：星星装饰 + 浩瀚星空背景

全站右上角原本浮动的樱花图案已换成四角星（✨）装饰（`images/decor-star.svg`）；所有深紫色区块（首页Hero、About、预约流程、各页面顶部横幅、本页底部的"MandstarChineseについて"卡片）默认背景也换成了统一的浩瀚星空图（`images/bg-starfield.svg`，程序生成的矢量图，不会失真、无需更换）。首页Hero如果你之后上传了 `bg-hero.jpg` 真实照片，会自动盖在星空背景之上，两者互不冲突。

### 关于「無料体験に申し込む」按钮

这个课程的咨询方式和主站的「レッスン予約」不同——原截图里是引导用户添加公式LINE后发送关键词"ピンイン"。因此这个按钮直接使用了 `data-social="line"` （跳转到 `js/config.js` 里配置的LINE链接），按钮下方保留了完整的操作说明文字，你只需要在 `config.js` 里填好真实的LINE链接即可生效，无需改动此页面代码。

## 九、待办事项清单（上线前请确认）

- [ ] 在 `js/config.js` 中填入真实的预约页面 URL
- [ ] 在 `js/config.js` 中填入真实的 YouTube / TikTok / LINE / WeChat 链接
- [ ] 按上方表格，在各页面的图片占位框位置放入真实照片
- [ ] （可选）放入 `images/logo.png` 品牌 Logo，`images/bg-hero.jpg`、`images/bg-page-hero.jpg` 背景图
- [ ] 用真实讲师照片替换 `images/` 里的占位 SVG，并更新 `js/teachers-data.js` 的 `photo` 路径
- [ ] 在 `lessons.html` 的「授業のキャンセル方法」FAQ 中填入真实的取消规约链接
- [ ] 在 `pinyin-course.html` 中补齐カリキュラム第6～10回的内容（见第八节说明）
