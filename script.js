document.addEventListener("DOMContentLoaded", function() {
    // 逐字显示文本的初始化
    const texts = document.querySelectorAll('.dynamic-text');
    texts.forEach((text, index) => {
      let content = text.innerHTML;
      text.innerHTML = ''; // 清空原来的文本
      let i = 0;
      let interval = setInterval(() => {
        text.innerHTML += content[i]; // 逐字显示
        i++;
        if (i === content.length) {
          clearInterval(interval); // 动画结束
          if (index === texts.length - 1) {
            // 当最后一段文字显示完，执行其他动作
            onTextAnimationComplete();
          }
        }
      }, 100); // 100ms 显示一个字符
    });
  
    // 初始化区块链魔方点击事件
    const blockchainCube = document.getElementById('blockchainCube');
    blockchainCube.addEventListener('click', () => {
      // 点击魔方时触发旋转并改变颜色
      blockchainCube.style.animation = 'rotateCube 5s infinite linear';
      blockchainCube.style.backgroundColor = getRandomColor(); // 随机改变颜色
      console.log("区块链魔方被点击了！");
      playClickSound();  // 播放点击音效
    });
  });
  
  // 获取随机颜色函数
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // 区块链魔方的旋转和颜色变化效果
  document.getElementById('blockchainCube').addEventListener('click', function() {
    this.style.animation = 'rotateCube 5s infinite linear'; // 重新开始旋转
    this.style.backgroundColor = getRandomColor(); // 每次点击改变魔方的背景颜色
  });
  
  // 文本逐字显示完成后的回调函数
  function onTextAnimationComplete() {
    console.log('所有文本显示完成！');
  
    // 执行其他后续操作：例如，目标区域进入动画
    const goals = document.querySelector('.goals');
    goals.classList.add('fade-in');  // 添加 fade-in 动画类
    document.body.style.background = 'linear-gradient(135deg, #8e2de2, #4a00e0)'; // 改变背景颜色
  
    // 播放背景音乐（可选）
    playBackgroundMusic();
  }
  
  // 目标区域动画：添加一个 fade-in 动画效果
  document.querySelector('.goals').style.opacity = 0;
  document.querySelector('.goals').style.transition = 'opacity 1s ease';
  
  function playBackgroundMusic() {
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // 示例音频链接
    audio.loop = true;  // 循环播放
    audio.play();
  }
  
  // 播放点击音效（可选）
  function playClickSound() {
    const clickSound = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'); // 示例点击音效
    clickSound.play();
  }
  