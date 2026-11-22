// Projects tab data.
//
// Completed: one card per project. `image` is the card picture and `poster` the full poster
// shown when the picture is clicked, both in public/project-images/.
// Source posters and the ongoing-projects slide are kept in project-files/projects/ (not published).

export interface CompletedProject {
  title: string;
  /** Short line under the title */
  subtitle?: string;
  description: string;
  area: 'Robotics & Drones' | 'AI & Machine Learning' | 'Communication & Sensing' | 'Embedded Hardware';
  team?: string;
  supervisor?: string;
  image: string;
  poster: string;
  alt: string;
}

export const completedProjects: CompletedProject[] = [
  {
    title: 'Low-cost Rapid 3D Scanner',
    subtitle: 'Multi-angle imaging to 3D model',
    description:
      'A rotating turntable with two cameras captures an object from many angles, and a pipeline turns the images into cleaned sparse and dense point clouds, with mesh generation in progress.',
    area: 'AI & Machine Learning',
    team: 'Harsh Rai, Patil Pranav Pravin, Adarsh Pillalavil',
    image: '3d-reconstruction.webp',
    poster: '3d-reconstruction-poster.webp',
    alt: 'Turntable rig with two cameras on a curved mount',
  },
  {
    title: 'RadioVision',
    subtitle: 'Device-free human sensing with Wi-Fi',
    description:
      'A low-cost ESP32-S3 platform that senses people from changes in Wi-Fi signals, with no camera or wearable. It recognises five hand gestures with 81% accuracy and locates a person to within about 24 cm.',
    area: 'Communication & Sensing',
    team: 'Snehal Gupta, Parth Agarwal',
    supervisor: 'Prof. Amartansh Dubey',
    image: 'radiovision.webp',
    poster: 'radiovision-poster.webp',
    alt: 'ESP32-S3 Wi-Fi sensing boards in the lab and the receiver layout around the sensing area',
  },
  {
    title: 'Robotic Smart Snake',
    subtitle: 'A 10-motor snake robot for tight spaces',
    description:
      'Built to slide through rubble and pipes where wheels and legs get stuck. Draw a path on the web app or use a game controller and the snake follows it, with a 3D simulator to test moves first.',
    area: 'Robotics & Drones',
    team: 'Bhavesh Banshiwal, Shashank Jangir, Mahima Chotiya',
    supervisor: 'Prof. Amartansh Dubey',
    image: 'smart-snake.webp',
    poster: 'smart-snake-poster.webp',
    alt: 'Snake robot raised up on a lab bench',
  },
  {
    title: 'VIPER',
    subtitle: 'A 12-DOF serpentine robot',
    description:
      'A snake robot made from 12 serial-bus servos and 3D-printed parts, with seven selectable gaits, fault-tolerant control and browser control over Wi-Fi from a Raspberry Pi.',
    area: 'Robotics & Drones',
    team: 'Shreevatsa Singh, Tatsat Mishra, Suryaanshu Gupta',
    supervisor: 'Prof. Amartansh Dubey',
    image: 'viper.webp',
    poster: 'viper-poster.webp',
    alt: 'VIPER serpentine robot lying on the floor',
  },
  {
    title: 'NoirTron',
    subtitle: 'Hexapod mobile manipulator',
    description:
      'A 3D-printed six-legged robot carrying a 5-DOF arm and gripper. A Raspberry Pi plans a tripod gait to walk to a target, then positions the arm to pick up or move objects, driving 24 servos in all.',
    area: 'Robotics & Drones',
    supervisor: 'Prof. Amartansh Dubey',
    image: 'noirtron.webp',
    poster: 'noirtron-poster.webp',
    alt: 'CAD render of the six-legged robot with its arm and gripper',
  },
  {
    title: 'Hand Gesture Controlled Robot Car',
    description:
      'A four-wheeled robot driven by tilting your hand. An MPU6050 motion sensor on the wrist maps gestures to commands and sends them wirelessly between two ESP32 boards to the car.',
    area: 'Robotics & Drones',
    team: 'Atharva Deshmukh, Shazia Perween',
    supervisor: 'Prof. Amartansh Dubey',
    image: 'hand-gesture-car.webp',
    poster: 'hand-gesture-car-poster.webp',
    alt: 'Four-wheeled robot car with yellow wheels and exposed wiring',
  },
  {
    title: 'Smart Camera Bot',
    subtitle: 'Real-time person detection and tracking',
    description:
      'A mini security robot that detects people with YOLO on a Raspberry Pi and turns its pan-tilt camera to keep them in view, instead of just recording a fixed scene.',
    area: 'AI & Machine Learning',
    team: 'Divya Bhardwaj, Shivani Singh, Nimisha Sangwan',
    image: 'smart-camera-bot.webp',
    poster: 'smart-camera-bot-poster.webp',
    alt: 'Live camera feed with bounding boxes around detected people and objects',
  },
  {
    title: 'Deepfake Detection System',
    description:
      'Detects deepfake videos from frequency-domain (FFT) features using a Spectral Mini Transformer and a Vision Transformer, and tests how well detection holds up across cultures and languages.',
    area: 'AI & Machine Learning',
    team: 'Arpita Dey, Suvodeep Banerjee, Anurag Paul',
    image: 'deepfake-detection.webp',
    poster: 'deepfake-detection-poster.webp',
    alt: 'Model diagram combining a frequency-domain branch and a spatial branch into a real-or-fake classifier',
  },
  {
    title: 'Can We Predict the Stock Market?',
    description:
      'Compares 14 machine-learning models on 16 years of daily prices under strict no-leakage testing. Price direction proved unpredictable, but next-day volatility can be forecast better than chance.',
    area: 'AI & Machine Learning',
    image: 'stock-prediction.webp',
    poster: 'stock-prediction-poster.webp',
    alt: 'Charts of predicted and actual stock prices and volatility',
  },
  {
    title: 'Astral',
    subtitle: 'Custom flight controller for a tilt-rotor VTOL',
    description:
      'An STM32H743 flight controller on a 4-layer PCB, with its schematic and power stage designed and simulated in-house, built to fly a tilt-rotor VTOL running ArduPilot.',
    area: 'Embedded Hardware',
    team: 'Anmol Sehgal',
    supervisor: 'Prof. Ankesh Jain',
    image: 'astral.webp',
    poster: 'astral-poster.webp',
    alt: 'Render of the custom flight controller circuit board',
  },
  {
    title: 'EEG/EOG Data Acquisition System',
    description:
      'A single-channel ADS1299 front end with an ESP32-S3 that streams brainwave (EEG) and eye-blink (EOG) signals over Wi-Fi to a real-time dashboard with filtering and spectral analysis.',
    area: 'Embedded Hardware',
    team: 'Aditya',
    image: 'eeg-eog.webp',
    poster: 'eeg-eog-poster.webp',
    alt: 'Real-time dashboard showing signal waveforms, a power spectrum and a spectrogram',
  },
  {
    title: 'Security Analysis of QKD',
    subtitle: 'Quantum key distribution with BB84',
    description:
      'Studies the security of quantum key distribution using the BB84 protocol, where keys are carried by polarised photons and any eavesdropping can be detected.',
    area: 'Communication & Sensing',
    team: 'Ayank Aryan',
    supervisor: 'Prof. Aditya Nema',
    image: 'qkd-bb84.webp',
    poster: 'qkd-bb84-poster.webp',
    alt: 'Illustration of laser beams passing through polarisers with quantum keys',
  },
];

// Ongoing: SuRGE-SIL 2026 research and product development projects, as listed on the slide
// in project-files/projects/Ongoing Projects.pptx (an exact repeat within a category removed).
export const ongoingProjects: { category: string; items: string[] }[] = [
  {
    category: 'Robotics & Drones',
    items: [
      '3D Printed Robotic Arm',
      'Hand Gesture-controlled Bot (4-Wheeled)',
      'Hand Gesture-controlled Drone',
      'Hexapod Robot',
      'SLAM Enabled Drone',
      'Line Follower with Robotic Arm',
      'Cleaner Swarm Robot',
      'Autonomous Cricket Bowling Bot',
      'Micro-Drones',
      'Bio-inspired Transforming Drone',
      'Implementing SLAM Drone',
      'Hexapod + Robotic Arm',
      'Implementing SLAM on Hexapod',
      'Robotic Cleaner Swarm',
      'SLAM on the Line Follower Bot',
    ],
  },
  {
    category: 'AI & Machine Learning',
    items: [
      'LLM & VLM Interpretability',
      'Stock Price Prediction using Machine Learning',
      'Market Analysis & Portfolio Optimization',
      'AI-based Fault Imaging & Detection',
      'Computer Vision for Ball Tracking & Trajectory Prediction',
      'Multi Camera 3D Scanner',
      'Computer Vision System',
      'Prompt based MANIM Engine',
      'Revisiting LLM-as-a-Judge for Model Evaluation',
      'Robotic Classroom Infrastructure (Audio/Video Intelligence)',
      'Voice Controlled Room Lighting (Alexa Equivalent)',
      'Wi-Fi based Imaging & Sensing',
    ],
  },
  {
    category: 'Communication & Sensing',
    items: [
      'Li-Fi Communication System',
      'Long Range (LoRa) Enabled Drone',
      'Wi-Fi based Passive Radar',
      'Antenna Array Based Angle of Arrival Estimation',
      'Privacy & Security in VLMs',
      'Wi-Fi based Imaging & Sensing',
      'LLM and VLM Interpretability',
      'Voice Controlled Room Lighting (Alexa Equivalent)',
      'Line Follower with CV Capabilities',
      'Wi-Fi based Passive Radar (AoA via Antenna Array)',
      'Autonomous Hexapod (SLAM on Prebuilt Hexapod)',
    ],
  },
  {
    category: 'Other EE, ECE & CSE Applications',
    items: [
      'AI-driven Power Management System',
      'All-in-one Smart Home - Water Management',
      'Smart Air Purifier (Industry Grade DIY)',
      'Domestic Appliance Health Monitoring',
      'Mental Health Support using Domain-specific LLMs',
      'Cost-effective Industry-grade DIY Modular Smart Air Purifier',
      'Designing Domain-specific LLMs for Mental Health Professionals',
      'Autonomous Appliance Health Monitoring',
      'Bio-inspired Transforming Drone (Applications)',
      'Cost-effective DIY Air Purifier',
    ],
  },
];
