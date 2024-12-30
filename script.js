// 1. 背景粒子效果：创建粒子并动态移动
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 150; // 控制粒子的数量

// 粒子类
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = 'rgba(0, 255, 0, 0.7)';
  }

  // 更新粒子位置
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // 如果粒子超出边界，重置位置
    if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
    if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
  }

  // 绘制粒子
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// 初始化粒子
function createParticles(event) {
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(event.x, event.y));
  }
}

// 更新和绘制粒子
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除屏幕
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animateParticles); // 不断更新
}

// 鼠标点击产生粒子
canvas.addEventListener('click', (event) => {
  createParticles(event);
});

// 启动粒子动画
animateParticles();

// 2. 背景音乐和音效
const backgroundMusic = new Audio('path/to/background-music.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.2;
backgroundMusic.play();

// 音效 - 点击按钮时播放
const buttonClickSound = new Audio('path/to/button-click.mp3');

// 为进度条添加点击音效
const progressBar = document.querySelectorAll('.progress-bar');

progressBar.forEach(bar => {
  bar.addEventListener('click', () => {
    buttonClickSound.play();  // 播放点击音效
  });
});

// 3. 鼠标悬停时的交互动画
const goals = document.querySelectorAll('.goal');

goals.forEach(goal => {
  goal.addEventListener('mouseenter', () => {
    goal.style.transform = 'scale(1.1)';
    goal.style.boxShadow = '0 0 20px rgba(0, 255, 0, 1)';
  });

  goal.addEventListener('mouseleave', () => {
    goal.style.transform = 'scale(1)';
    goal.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.3)';
  });
});

// 4. 进度条同步滚动：使用 IntersectionObserver 监听页面滚动
const shortTermProgress = document.getElementById('short-progress');
const longTermProgress = document.getElementById('long-progress');

// 观察目标元素是否出现在视口
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 当目标进入视口，启动进度条动画
      shortTermProgress.style.width = '80%';
      longTermProgress.style.width = '50%';
    }
  });
}, {
  threshold: 0.5 // 目标进入视口时触发（50%可见）
});

observer.observe(document.querySelector('.goal')); // 观察目标

// 5. 3D旋转动画：鼠标移动时动态变化标题文字的3D效果
const titleElement = document.querySelector('.neon-header h1');

// 监听鼠标移动，改变文字的3D旋转
document.addEventListener('mousemove', (event) => {
  const xRotation = (event.clientY / window.innerHeight) * 30 - 15; // Y轴旋转
  const yRotation = (event.clientX / window.innerWidth) * 30 - 15;  // X轴旋转

  titleElement.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  titleElement.style.transition = 'transform 0.1s ease-out';
});

// 6. 流光粒子效果：创建流光背景并结合粒子动画
function lightStreamEffect() {
  const lightColor = 'rgba(0, 255, 0, 0.8)';
  const lightWidth = Math.random() * 3 + 2; // 流光大小

  // 随机产生流光位置
  const xPos = Math.random() * canvas.width;
  const yPos = Math.random() * canvas.height;

  ctx.fillStyle = lightColor;
  ctx.fillRect(xPos, yPos, lightWidth, lightWidth);
}

setInterval(lightStreamEffect, 100); // 每100ms绘制一次流光

// 7. 目标文本逐字显示效果
const title = document.getElementById('title');
const text = "梦想宣言";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    title.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // 控制逐字显示的速度
  }
}

typeWriter();

// 8. 动态进度条：通过滚动来同步更新目标进度条
window.onscroll = () => {
  const shortTermProgress = document.getElementById('short-progress');
  const longTermProgress = document.getElementById('long-progress');

  // 获取页面滚动的百分比
  const scrollPercentage = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight;

  // 控制进度条的变化
  shortTermProgress.style.width = `${Math.min(scrollPercentage * 50, 100)}%`;  // 50% 为短期目标的最大进度
  longTermProgress.style.width = `${Math.min(scrollPercentage * 30, 100)}%`;  // 30% 为长期目标的最大进度 
}; 