// 1. **全屏背景视频设置**
const setupBackgroundVideo = () => {
  const video = document.createElement('video');
  video.src = 'background-video.mp4'; // 设置背景视频的路径
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.style.position = 'fixed';
  video.style.top = 0;
  video.style.left = 0;
  video.style.width = '100%';
  video.style.height = '100%';
  video.style.objectFit = 'cover';
  video.style.zIndex = -1;
  document.body.appendChild(video);
};

// 2. **动态文本（Typed.js）**
const setupDynamicText = () => {
  new Typed('.tagline', {
    strings: [
      '梦想，学习提升和责任是我的驱动！',
      '希望最大化发挥我的潜能！',
      'AI自动化是我的未来！'
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
  });
};

// 3. **3D 动画（Three.js）**
const setup3DAnimation = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
};

// 4. **实时数据展示（Chart.js）**
const setupChart = () => {
  const ctx = document.getElementById('myChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: '销售数据',
        data: [10, 25, 50, 70, 85],
        borderColor: '#00bcd4',
        fill: false
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: { display: true, text: '月份' }
        },
        y: {
          title: { display: true, text: '销售额' }
        }
      }
    }
  });
};

// 5. **语音识别（Web Speech API）**
const setupVoiceRecognition = () => {
  const recognition = new window.SpeechRecognition();
  recognition.lang = "zh-CN";
  recognition.start();

  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    console.log("User said: " + transcript);
  };
};

// 6. **区块链模拟（Web3.js）**
const setupBlockchainSimulation = async () => {
  if (typeof window.ethereum !== 'undefined') {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();
    const userAddress = accounts[0];
    console.log('User address: ', userAddress);
  } else {
    console.log('Ethereum not detected!');
  }
};

// 7. **聊天机器人（Botpress）**
const setupChatBot = () => {
  const bot = new BotpressBot({
    apiKey: 'YOUR_BOTPRESS_API_KEY',
    containerId: 'chatbot-container'
  });
};

// 8. **初始化函数：调用所有功能**
const init = () => {
  setupBackgroundVideo();
  setupDynamicText();
  setup3DAnimation();
  setupChart();
  setupVoiceRecognition();
  setupBlockchainSimulation();
  setupChatBot();
};

// 执行初始化函数
init();
