import{_ as s,r as t,o as d,c as r,b as e,d as n,e as l,f as a}from"./app-22a390d1.js";const o={},v=e("h1",{id:"持续更新-2023-10-29-金山文档自动获取哔哩哔哩粉丝",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#持续更新-2023-10-29-金山文档自动获取哔哩哔哩粉丝","aria-hidden":"true"},"#"),n(" [持续更新 2023/10/29]金山文档自动获取哔哩哔哩粉丝")],-1),u={href:"https://www.kdocs.cn/",target:"_blank",rel:"noopener noreferrer"},c=e("img",{src:"https://slink.ltd/raw.githubusercontent.com/ymh0000123/tu/main/1.png"},null,-1),m=e("li",null,[n("选择【空白表格】 进入表格界面点击【效率】->【高级开发】->【AirScipt脚本编辑器】 打开【AirScipt脚本编辑器】之后点击【创建脚本】->【文档共享脚本】 "),e("img",{src:"https://slink.ltd/raw.githubusercontent.com/ymh0000123/tu/main/2.png"})],-1),b=e("li",null,"复制以下代码",-1),p=a(`<div class="language-JavaScrip line-numbers-mode" data-ext="JavaScrip"><pre class="language-JavaScrip"><code>let fs;
let smtp_host = Application.Range(&quot;G2&quot;).Text;
let smtp_port = parseInt(Application.Range(&quot;G3&quot;).Text);
let smtp_username = Application.Range(&quot;G4&quot;).Text;
let smtp_password = Application.Range(&quot;G5&quot;).Text;
let smtp_secure = Application.Range(&quot;G6&quot;).Text.toLowerCase() === &quot;true&quot;;
let smtp_to = Application.Range(&quot;G7&quot;).Text;
let blibli_uid = parseInt(Application.Range(&quot;G8&quot;).Text);

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
    if (diff == 0) {
      console.log(&quot;粉丝不变&quot;)
    } else {
      console.log(&quot;粉丝增加&quot; + diff);
      smtp_message()
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
          &lt;h4 style=&quot;color: #333; font-size: 18px;&quot;&gt;哔哩哔哩粉丝数量通知&lt;/h4&gt;
          &lt;p style=&quot;color: #555; font-size: 16px; margin: 0;&quot;&gt;当前粉丝数量: &lt;strong&gt;\${fs}&lt;/strong&gt;&lt;/p&gt;
          &lt;p style=&quot;color: #555; font-size: 16px; margin: 0;&quot;&gt;粉丝增加: &lt;strong&gt;\${zj}&lt;/strong&gt;&lt;/p&gt;
          
          &lt;p style=&quot;text-align: center;&quot;&gt;
            &lt;a href=&quot;https://space.bilibili.com/\${blibli_uid}&quot; style=&quot;color: #888; text-decoration: none; border: none; font-style: normal;&quot;&gt;查看主页&lt;/a&gt;
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    \`,
  });
  console.log(&quot;发送完毕&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g={start:"5"},f={href:"https://kdocs.cn/l/cshyjZHnMGFo",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"如果你有定时获取的需求可以在【效率】->【高级开发】->【定时任务】里设置",-1);function q(h,w){const i=t("ExternalLinkIcon");return d(),r("div",null,[v,e("ol",null,[e("li",null,[n("打开"),e("a",u,[n("金山文档"),l(i)]),n("官网 登录之后点击左上角的【新建】 选择【Office文档】-> 【表格】 "),c]),m,b]),p,e("ol",g,[e("li",null,[n("再按照"),e("a",f,[n("模板"),l(i)]),n("填入信息")])]),_])}const A=s(o,[["render",q],["__file","3-bi-li-bi-li-fen-si.html.vue"]]);export{A as default};
