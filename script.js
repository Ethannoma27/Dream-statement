// 动态文本逐字显示（模拟命令行输入效果）
document.addEventListener("DOMContentLoaded", function() {
    const text1 = "兴趣，梦想，学习提升和责任是我的驱动！";
    const text2 = "希望最大化发挥我的潜能！";
    const manifestoElement = document.querySelector('.scrolling-text');
  
    function typeText(text, index, callback) {
      if (index < text.length) {
        manifestoElement.innerHTML += text[index++];
        setTimeout(() => typeText(text, index, callback), 100);
      } else {
        if (callback) callback();
      }
    }
  
    typeText(text1, 0, function() {
      setTimeout(() => {
        manifestoElement.innerHTML += '<br>';
        typeText(text2, 0);
      }, 1000);  // 等待一秒后显示第二行文字
    });
  });
  
  // 动态更新进度条
  window.addEventListener('scroll', function() {
    let shortTerm = document.querySelector('.short-term-progress');
    let longTerm = document.querySelector('.long-term-progress');
    let scrollY = window.scrollY;
  
    // 短期目标进度条（滚动到一定位置后增加）
    if (scrollY > 100 && scrollY < 600) {
      let progress = Math.min((scrollY - 100) / 500 * 100, 100);
      shortTerm.style.width = progress + '%';
    }
  
    // 长期目标进度条（滚动到一定位置后增加）
    if (scrollY > 600) {
      let progress = Math.min((scrollY - 600) / 400 * 100, 100);
      longTerm.style.width = progress + '%';
    }
  
    // 进度条的数字显示
    document.querySelector('.short-term-progress-number').innerText = Math.floor(shortTerm.style.width.replace('%', '')) + '%';
    document.querySelector('.long-term-progress-number').innerText = Math.floor(longTerm.style.width.replace('%', '')) + '%';
  });
  
  // 模拟CRT屏幕过渡效果（页面加载时的闪烁效果）
  document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector('body');
    body.classList.add('loading');  // 添加 loading 类来启动闪烁效果
  
    setTimeout(() => {
      body.classList.remove('loading');  // 延迟后移除 loading 类，完成闪烁效果
    }, 3000);  // 3秒钟后去除闪烁
  });
  
  // 闪烁屏幕效果的CSS
  const style = document.createElement('style');
  style.innerHTML = `
    .loading {
      animation: flicker 0.2s infinite;
    }
    @keyframes flicker {
      0% { background-color: black; }
      50% { background-color: #0f0; }
      100% { background-color: black; }
    }
  `;
  document.head.appendChild(style);
  