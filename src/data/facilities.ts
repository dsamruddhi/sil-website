export interface FacilityImage {
  /** File name inside public/facilities/ */
  src: string;
  /** Short caption shown on the image */
  caption: string;
  alt: string;
  credit: { author: string; license: string; source: string };
  /** CSS object-position for cropping inside the box (default: centre) */
  position?: string;
}

export interface Facility {
  name: string;
  description: string;
  /** Column span on large screens (6-column grid) */
  span: 'wide' | 'narrow' | 'full' | 'half';
  images: FacilityImage[];
}

export const facilities: Facility[] = [
  {
    name: 'Robotics and Automation Zone',
    description:
      'Legged, humanoid, and bio-inspired robot platforms for research in locomotion, manipulation, sensing, and autonomy.',
    span: 'wide',
    images: [
      {
        src: 'robotics-quadruped.webp',
        caption: 'Quadruped',
        alt: 'Yellow four-legged quadruped robot walking on a forest trail',
        credit: { author: 'Jonte', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Spot_by_Boston_Dynamics.jpg' },
      },
      {
        src: 'robotics-humanoid.webp',
        caption: 'Humanoid',
        alt: 'Unitree G1 humanoid robot with a glowing blue face visor',
        credit: { author: 'Sayanesy', license: 'CC0', source: 'https://commons.wikimedia.org/wiki/File:Unitree_G1.jpg' },
        position: 'center 10%',
      },
      {
        src: 'robotics-snake.webp',
        caption: 'Snake robot',
        alt: 'Modular snake robot raising its head off the ground',
        credit: { author: 'Wikimedia Commons', license: 'Public domain', source: 'https://commons.wikimedia.org/wiki/File:SnakeBot3.jpg' },
      },
      {
        src: 'robotics-spider.webp',
        caption: 'Spider bot',
        alt: 'Multi-legged spider robot with exposed servos and electronics',
        credit: { author: 'VIA Gallery', license: 'CC BY 2.0', source: 'https://commons.wikimedia.org/wiki/File:Spider_Robot_(2824359096).jpg' },
      },
    ],
  },
  {
    name: 'AI & Computing Workspace',
    description:
      'Workstations for machine learning, computer vision, and simulation, backed by a GPU cluster for training large models.',
    span: 'narrow',
    images: [
      {
        src: 'ai-gpu-cluster.webp',
        caption: 'GPU cluster',
        alt: 'Rows of server racks in a GPU computing cluster',
        credit: { author: 'CSIRO', license: 'CC BY 3.0', source: 'https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_11313_The_CSIRO_GPU_cluster_at_the_data_centre.jpg' },
      },
    ],
  },
  {
    name: 'Electronics & Prototyping Area',
    description:
      'Rapid fabrication for enclosures, mechanisms, and parts: additive manufacturing, laser cutting and engraving, and permanent laser marking.',
    span: 'full',
    images: [
      {
        src: 'fab-3d-printer.webp',
        caption: 'Bambu Lab H2D 3D printer',
        alt: 'Enclosed Bambu Lab 3D printer with a small printed boat on its build plate',
        credit: { author: 'Andrew Kirk', license: 'Public domain', source: 'https://commons.wikimedia.org/wiki/File:3d_printer_Bambu_Lab_H2S.jpg' },
      },
      {
        src: 'fab-laser-cutter.webp',
        caption: 'Laser cutter',
        alt: 'Blue CO2 laser cutting machine in a makerspace',
        credit: { author: 'Mbrickn', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Library_laser_cutter.jpg' },
      },
      {
        src: 'fab-fiber-marker.webp',
        caption: 'Fiber laser marker',
        alt: 'Fiber laser marking machine with a control computer',
        credit: { author: 'Rht bd', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Laser_engraving_machine.jpg' },
      },
    ],
  },
  {
    name: 'Circuit Design and Prototyping',
    description:
      'Schematic capture, PCB layout, and breadboard testing to take circuits from idea to working board.',
    span: 'half',
    images: [
      {
        src: 'circuit-pcb.webp',
        caption: 'PCB',
        alt: 'Close-up of a populated printed circuit board',
        credit: { author: 'Ashley Pomeroy', license: 'CC BY 4.0', source: 'https://commons.wikimedia.org/wiki/File:Printed_Circuit_Board_9990.jpg' },
      },
      {
        src: 'circuit-breadboard.webp',
        caption: 'Breadboarding',
        alt: 'Prototype circuit wired on a breadboard',
        credit: { author: 'MikeRun', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Time-delay-circuit-on-breadboard.jpg' },
      },
    ],
  },
  {
    name: 'Soldering & Assembly Stations',
    description:
      'Temperature-controlled soldering stations and instrumented benches for assembling, testing, and debugging hardware.',
    span: 'half',
    images: [
      {
        src: 'solder-station.webp',
        caption: 'Soldering station and fume extractor',
        alt: 'Temperature-controlled soldering station with iron in its stand',
        credit: { author: 'PtiGaby', license: 'CC BY-SA 4.0', source: 'https://commons.wikimedia.org/wiki/File:Le_fer_%C3%A0_souder_%C3%A9lectronique.jpg' },
      },
      {
        src: 'solder-bench.webp',
        caption: 'Assembly bench',
        alt: 'Electronics workbench with oscilloscope, multimeters, and tools',
        credit: { author: 'James Bastow', license: 'CC BY-SA 2.0', source: 'https://commons.wikimedia.org/wiki/File:Electronics_workbench.jpg' },
      },
    ],
  },
];
