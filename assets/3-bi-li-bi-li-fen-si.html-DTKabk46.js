import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as a,c as r,b as e,d as i,a as t,f as l}from"./app-COh7VwX0.js";const d={},c=l('<h1 id="持续更新-2023-11-2-金山文档自动获取哔哩哔哩粉丝" tabindex="-1"><a class="header-anchor" href="#持续更新-2023-11-2-金山文档自动获取哔哩哔哩粉丝"><span>[持续更新 2023/11/2]金山文档自动获取哔哩哔哩粉丝</span></a></h1><h1 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h1><ol><li>一个金山文档账号</li></ol><h1 id="开始" tabindex="-1"><a class="header-anchor" href="#开始"><span>开始</span></a></h1>',4),u={href:"https://www.kdocs.cn/",target:"_blank",rel:"noopener noreferrer"},v=e("img",{src:"https://dochub-picture.pages.dev/list/1.webp"},null,-1),m=e("li",null,[i("选择【空白表格】 进入表格界面点击【效率】->【高级开发】->【AirScipt脚本编辑器】 打开【AirScipt脚本编辑器】之后点击【创建脚本】->【文档共享脚本】 "),e("img",{src:"https://dochub-picture.pages.dev/list/2.webp"})],-1),b=e("li",null,"复制以下代码",-1),p=l(`<div class="language-JavaScrip line-numbers-mode" data-ext="JavaScrip" data-title="JavaScrip"><pre class="language-JavaScrip"><code>let fs;
let smtp_host = Application.Range(&quot;G2&quot;).Text;
let smtp_port = parseInt(Application.Range(&quot;G3&quot;).Text);
let smtp_username = Application.Range(&quot;G4&quot;).Text;
let smtp_password = Application.Range(&quot;G5&quot;).Text;
let smtp_secure = Application.Range(&quot;G6&quot;).Text.toLowerCase() === &quot;true&quot;;
let smtp_to = Application.Range(&quot;G7&quot;).Text;
let blibli_uid = parseInt(Application.Range(&quot;G8&quot;).Text);
let config_message = Application.Range(&quot;G9&quot;).Text;
let config_message_send = Application.Range(&quot;G10&quot;).Text;

// 发起GET请求
let url = &quot;https://api.bilibili.com/x/relation/stat?vmid=&quot; + blibli_uid;

let resp = HTTP.get(url);

if (resp.status !== 200) {
  throw new Error(&quot;Error! Status is &quot; + resp.status());
}

let data = resp.json(); // 解析JSON响应

if (data.code === 0) {
  let follower = data.data.follower; // 获取follower数据

  let sheet = Application.ActiveSheet;

  // 寻找第一个空的单元格并记录关注者数量
  let row = 1;
  while (sheet.Range(&#39;B&#39; + row).Value !== &quot;&quot;) {
    row++;
  }
  // 创建一个Date对象
  var currentDate = new Date();

  // 获取当前中国时间
  var options = { timeZone: &#39;Asia/Shanghai&#39; };
  var chinaTime = currentDate.toLocaleDateString(&#39;en-US&#39;, options);

  sheet.Range(&#39;A&#39; + row).Value = chinaTime;
  sheet.Range(&#39;B&#39; + row).Value = follower;
  fs = follower;
  console.log(&quot;粉丝数量：&quot; + fs)
  // 计算A列倒数第一和倒数第二个单元格的差
  let lastRow = row;
  if (lastRow &gt;= 2) {
    let lastFollower = sheet.Range(&#39;B&#39; + (lastRow - 1)).Value;
    let diff = fs - lastFollower;
    zj = diff
    if (config_message_send == &quot;是&quot;) {
      if (diff == 0) {
        console.log(&quot;粉丝不变&quot;)
        if (config_message == &quot;是&quot;) {
          smtp_message()
        }
      } else {
        console.log(&quot;粉丝增加&quot; + diff);
        smtp_message()
      }
    } else {
      console.log(&quot;消息发送已经关闭&quot;)
    }
  }
} else {
  console.error(&quot;API response error: &quot; + data.message);
}

function smtp_message() {
  // 发送邮件通知
  console.log(&quot;发送邮件通知&quot;)
  let mailer = SMTP.login({
    host: smtp_host,
    port: smtp_port,
    username: smtp_username,
    password: smtp_password,
    secure: smtp_secure,
  });

  mailer.send({
    from: smtp_username,
    to: smtp_to,
    subject: &quot;粉丝数通知&quot;,
    html: \`
      &lt;div style=&quot;background-color: #f0f0f0; padding: 20px;&quot;&gt;
        &lt;div style=&quot;background-color: #ffffff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;&quot;&gt;
          &lt;img border=&quot;0&quot; src=&quot;https://space.bilibili.com/favicon.ico&quot; width=&quot;64&quot; height=&quot;64&quot;&gt;
          &lt;h4 style=&quot;color: #333; font-size: 18px;&quot;&gt;哔哩哔哩粉丝数量通知&lt;/h4&gt;
          &lt;p style=&quot;color: #555; font-size: 16px; margin: 0;&quot;&gt;uid: &lt;strong&gt;\${blibli_uid}&lt;/strong&gt;&lt;/p&gt;
          &lt;p style=&quot;color: #555; font-size: 16px; margin: 0;&quot;&gt;当前粉丝数量: &lt;strong&gt;\${fs}&lt;/strong&gt;&lt;/p&gt;
          &lt;p style=&quot;color: #555; font-size: 16px; margin: 0;&quot;&gt;粉丝增加: &lt;strong&gt;\${zj}&lt;/strong&gt;&lt;/p&gt;
          
          &lt;p style=&quot;text-align: center;&quot;&gt;
            &lt;a href=&quot;https://space.bilibili.com/\${blibli_uid}&quot; style=&quot;color: #888; text-decoration: none; border: none; font-style: normal;&quot;&gt;查看主页&lt;/a&gt; | &lt;a href=&quot;https://ymh0000123.github.io/dochub/course/list/3-bi-li-bi-li-fen-si.html&quot; style=&quot;color: #888; text-decoration: none; border: none; font-style: normal;&quot;&gt;关于脚本-脚本作者没用的小废鼠&lt;/a&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    \`,
  });
  console.log(&quot;发送完毕&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g={start:"5"},h={href:"https://kdocs.cn/l/cshyjZHnMGFo",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"如果你有定时获取的需求可以在【效率】->【高级开发】->【定时任务】里设置",-1);function q(_,y){const n=o("ExternalLinkIcon");return a(),r("div",null,[c,e("ol",null,[e("li",null,[i("打开"),e("a",u,[i("金山文档"),t(n)]),i("官网 登录之后点击左上角的【新建】 选择【Office文档】-> 【表格】 "),v]),m,b]),p,e("ol",g,[e("li",null,[i("再按照"),e("a",h,[i("模板"),t(n)]),i("填入信息")])]),f])}const A=s(d,[["render",q],["__file","3-bi-li-bi-li-fen-si.html.vue"]]),T=JSON.parse('{"path":"/course/list/3-bi-li-bi-li-fen-si.html","title":"[持续更新 2023/11/2]金山文档自动获取哔哩哔哩粉丝","lang":"zh-CN","frontmatter":{"description":"[持续更新 2023/11/2]金山文档自动获取哔哩哔哩粉丝 准备工作 一个金山文档账号 开始 打开金山文档官网 登录之后点击左上角的【新建】 选择【Office文档】-> 【表格】 选择【空白表格】 进入表格界面点击【效率】->【高级开发】->【AirScipt脚本编辑器】 打开【AirScipt脚本编辑器】之后点击【创建脚本】->【文档共享脚本】 ...","head":[["meta",{"property":"og:url","content":"https://ymh0000123.github.io/dochub/course/list/3-bi-li-bi-li-fen-si.html"}],["meta",{"property":"og:site_name","content":"没用的小废鼠的综合文档"}],["meta",{"property":"og:title","content":"[持续更新 2023/11/2]金山文档自动获取哔哩哔哩粉丝"}],["meta",{"property":"og:description","content":"[持续更新 2023/11/2]金山文档自动获取哔哩哔哩粉丝 准备工作 一个金山文档账号 开始 打开金山文档官网 登录之后点击左上角的【新建】 选择【Office文档】-> 【表格】 选择【空白表格】 进入表格界面点击【效率】->【高级开发】->【AirScipt脚本编辑器】 打开【AirScipt脚本编辑器】之后点击【创建脚本】->【文档共享脚本】 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-16T04:30:41.000Z"}],["meta",{"property":"article:author","content":"ymh0000123"}],["meta",{"property":"article:modified_time","content":"2024-02-16T04:30:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"[持续更新 2023/11/2]金山文档自动获取哔哩哔哩粉丝\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-16T04:30:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ymh0000123\\",\\"url\\":\\"https://ymh0000123.github.io/ymh0000123/\\"}]}"]]},"headers":[],"git":{"createdTime":1708057841000,"updatedTime":1708057841000,"contributors":[{"name":"没用的小废鼠","email":"107793048+ymh0000123@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.12,"words":637},"filePathRelative":"course/list/3-bi-li-bi-li-fen-si.md","localizedDate":"2024年2月16日","autoDesc":true}');export{A as comp,T as data};
