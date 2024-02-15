import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as l,c,b as t,d as e,a as n,f as a}from"./app-CpMwt6Ni.js";const p={},h=t("h1",{id:"minecraft联机教程",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#minecraft联机教程"},[t("span",null,"minecraft联机教程")])],-1),d=t("div",{class:"hint-container info"},[t("p",{class:"hint-container-title"},"使用须知"),t("p",null,"这个方法小白可能不太好上手，并且需要一定的网络知识，所以请有一定网络知识的人使用")],-1),g=["src"],m=a('<h2 id="_1-同局域网" tabindex="-1"><a class="header-anchor" href="#_1-同局域网"><span>1. 同局域网</span></a></h2><p>同局域网联机基本上点击多人游戏就会显示（服务器除外） 应该不需要过多赘述</p><h2 id="_2-内网穿透" tabindex="-1"><a class="header-anchor" href="#_2-内网穿透"><span>2. 内网穿透</span></a></h2><h3 id="locyanfrp" tabindex="-1"><a class="header-anchor" href="#locyanfrp"><span>LoCyanFrp</span></a></h3>',4),f={href:"https://locyanfrp.cn/",target:"_blank",rel:"noopener noreferrer"},_=a('<div class="hint-container warning"><p class="hint-container-title">注意</p><p><mark><strong>LoCyanFrp注册完需要实名认证才能正常使用</strong></mark><br><mark><strong>LoCyanFrp注册完需要实名认证才能正常使用</strong></mark><br><mark><strong>LoCyanFrp注册完需要实名认证才能正常使用</strong></mark></p></div><ol><li>创建隧道<br> 打开LoCyanFrp官网，点击导航栏的隧道操作，点击添加隧道，选择合适的节点。</li></ol><div class="hint-container tip"><p class="hint-container-title">节点的选择</p><p>正常情况下<strong>建议选择离你最近的节点</strong>，<strong>如果选择离你较远的节点，可能会导致延迟较高</strong>，选择前<strong>建议先看看节点状态再选择</strong>。</p></div><p><strong>配置：</strong><br> 隧道名：任意<br> 穿透协议：java版选择<strong>TCP</strong><br> 内网端口：游戏正在使用的端口<br> 远程端口：直接点击旁边的随机端口<br> 点击<strong>创建</strong></p><ol start="2"><li>启动<strong>LoCyanFrp</strong>客户端<br> 在 隧道操作 &gt; 隧道列表<br> 点击网页卡片的 <strong>一键启动</strong> 按钮<br> 然后点击 <strong>『没安装...』</strong> 按钮<br> 安装之后再点击<strong>一键启动</strong>按钮然后点击 <strong>『已经安装好了』</strong> 按钮</li><li>启动<strong>Minecraft</strong><br> 打开Minecraft，点击多人游戏，选择<strong>服务器</strong>，输入<strong>内网穿透的远程端口</strong>，点击<strong>加入服务器</strong></li></ol><h2 id="wireguard" tabindex="-1"><a class="header-anchor" href="#wireguard"><span>WireGuard</span></a></h2><h3 id="tailscale" tabindex="-1"><a class="header-anchor" href="#tailscale"><span>Tailscale</span></a></h3>',7),u={href:"https://tailscale.com/",target:"_blank",rel:"noopener noreferrer"},b=a('<ol><li>注册并登录Tailscale</li><li>下载客户端<br> 到官网下载对应的客户端</li><li>安装客户端<br> （应该不需要描述）</li><li>登录客户端<br> 运行之后右键托盘图标进行登录</li><li>打开Tailscale管理面板<br> 找到刚才添加的设备点击 <strong>『···』</strong> 旁边的 <strong>『Share』</strong> 进行分享设备</li><li>让好友添加这个设备</li><li>启动Minecraft<br> 打开Minecraft，点击多人游戏，选择<strong>服务器</strong>，输入<strong>分享设备的地址</strong>，点击<strong>加入服务器</strong></li></ol><div class="hint-container caution"><p class="hint-container-title">警告</p><p><mark>不要把分享链接给任意人，因为他们可以访问设备的所以端口</mark></p></div><h2 id="ipv6" tabindex="-1"><a class="header-anchor" href="#ipv6"><span>IPv6</span></a></h2>',3),v={href:"https://www.test-ipv6.com/",target:"_blank",rel:"noopener noreferrer"},y=t("br",null,null,-1),k=t("strong",null,"IPv6 状况评分",-1),w=t("strong",null,"10/10",-1),x=t("div",{class:"hint-container caution"},[t("p",{class:"hint-container-title"},"注意"),t("p",null,[t("mark",null,"双方必须都有IPv6地址，不然无法连接"),t("br"),t("mark",null,"双方必须都有IPv6地址，不然无法连接"),t("br"),t("mark",null,"双方必须都有IPv6地址，不然无法连接")])],-1);function T(o,C){const r=s("ExternalLinkIcon");return l(),c("div",null,[h,d,t("iframe",{src:o.$withBase("/course/list/6.html"),width:"100%",height:"400",frameborder:"0",scrolling:"No",leftmargin:"0",topmargin:"0"},null,8,g),m,t("p",null,[e("官网："),t("a",f,[e("乐青映射 | LoCyanFrp"),n(r)])]),_,t("p",null,[e("官网："),t("a",u,[e("Tailscale · Best VPN Service for Secure Networks"),n(r)])]),b,t("p",null,[e("IPv6测试："),t("a",v,[e("www.test-ipv6.com"),n(r)]),y,e(" 如果显示 "),k,e(" 是 "),w,e(" 那么是最佳的")]),x])}const N=i(p,[["render",T],["__file","6-minecraft-online.html.vue"]]),I=JSON.parse('{"path":"/course/list/6-minecraft-online.html","title":"minecraft联机教程","lang":"zh-CN","frontmatter":{"icon":"fa-solid fa-gamepad","description":"minecraft联机教程 使用须知 这个方法小白可能不太好上手，并且需要一定的网络知识，所以请有一定网络知识的人使用 ","head":[["meta",{"property":"og:url","content":"https://ymh0000123.github.io/dochub/course/list/6-minecraft-online.html"}],["meta",{"property":"og:site_name","content":"没用的小废鼠的综合文档"}],["meta",{"property":"og:title","content":"minecraft联机教程"}],["meta",{"property":"og:description","content":"minecraft联机教程 使用须知 这个方法小白可能不太好上手，并且需要一定的网络知识，所以请有一定网络知识的人使用 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-15T05:59:49.000Z"}],["meta",{"property":"article:author","content":"ymh0000123"}],["meta",{"property":"article:modified_time","content":"2024-02-15T05:59:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"minecraft联机教程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-15T05:59:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ymh0000123\\",\\"url\\":\\"https://ymh0000123.github.io/ymh0000123/\\"}]}"]]},"headers":[{"level":2,"title":"1. 同局域网","slug":"_1-同局域网","link":"#_1-同局域网","children":[]},{"level":2,"title":"2. 内网穿透","slug":"_2-内网穿透","link":"#_2-内网穿透","children":[{"level":3,"title":"LoCyanFrp","slug":"locyanfrp","link":"#locyanfrp","children":[]}]},{"level":2,"title":"WireGuard","slug":"wireguard","link":"#wireguard","children":[{"level":3,"title":"Tailscale","slug":"tailscale","link":"#tailscale","children":[]}]},{"level":2,"title":"IPv6","slug":"ipv6","link":"#ipv6","children":[]}],"git":{"createdTime":1707976789000,"updatedTime":1707976789000,"contributors":[{"name":"没用的小废鼠","email":"107793048+ymh0000123@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.18,"words":654},"filePathRelative":"course/list/6-minecraft-online.md","localizedDate":"2024年2月15日","autoDesc":true}');export{N as comp,I as data};
