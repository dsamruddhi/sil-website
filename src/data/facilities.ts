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
      'Legged, humanoid, wheeled, aerial, and bio-inspired robots and robotic arms for research in locomotion, manipulation, sensing, and autonomy.',
    span: 'wide',
    images: [
      {
        src: 'lab-quadruped.webp',
        caption: 'Quadruped',
        alt: 'Four-legged quadruped robot from the SIL lab, seen from above',
        credit: { author: 'SIL, IIT Delhi', license: 'Own photo', source: '' },
      },
      {
        src: 'lab-humanoid.webp',
        caption: 'Humanoid',
        alt: 'Black servo-driven humanoid robot standing on a lab bench',
        credit: { author: 'SIL, IIT Delhi', license: 'Own photo', source: '' },
      },
      {
        src: 'lab-hexapod.webp',
        caption: 'Hexapod',
        alt: 'Six-legged hexapod robot standing on a lab table',
        credit: { author: 'SIL, IIT Delhi', license: 'Own photo', source: '' },
      },
      {
        src: 'lab-arm.webp',
        caption: 'Robotic arm',
        alt: 'Six-axis robotic arm mounted on a lab bench',
        credit: { author: 'SIL, IIT Delhi', license: 'Own photo', source: '' },
      },
      {
        src: 'lab-drones.webp',
        caption: 'Drones',
        alt: 'Three drones and their controllers on a lab bench, seen at an angle',
        credit: { author: 'SIL, IIT Delhi', license: 'Own photo', source: '' },
      },
      {
        src: 'lab-rover.webp',
        caption: 'Rover',
        alt: 'Four-wheeled rover robot with a camera turret',
        credit: { author: 'SIL, IIT Delhi', license: 'Own photo', source: '' },
      },
      {
        src: 'lab-rover-limo.webp',
        caption: 'LIMO rover',
        alt: 'AgileX LIMO mobile robot on a desk',
        credit: { author: 'SIL, IIT Delhi', license: 'Own photo', source: '' },
      },
      {
        src: 'robotics-snake.webp',
        caption: 'Snake robot',
        alt: 'Modular snake robot raising its head off the ground',
        credit: { author: 'Wikimedia Commons', license: 'Public domain', source: 'https://commons.wikimedia.org/wiki/File:SnakeBot3.jpg' },
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
      'Rapid fabrication for enclosures, mechanisms, and parts: FDM and resin 3D printing, laser cutting and engraving, and permanent laser marking.',
    span: 'full',
    images: [
      {
        src: 'lab-3d-printers.webp',
        caption: 'Bambu Lab H2D 3D printers',
        alt: 'Row of enclosed 3D printers on a counter in the SIL lab',
        credit: { author: 'SIL, IIT Delhi', license: 'Own photo', source: '' },
      },
      {
        src: 'lab-resin-printer.webp',
        caption: 'Resin 3D printer',
        alt: 'UniFormation GK3 Ultra resin 3D printer with a green UV-blocking cover',
        credit: { author: 'SIL, IIT Delhi', license: 'Own photo', source: '' },
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
        src: 'lab-soldering-station.webp',
        caption: 'Soldering station and fume extractor',
        alt: 'Soldering stations and fume extractors on an ESD mat at a lab bench',
        credit: { author: 'SIL, IIT Delhi', license: 'Own photo', source: '' },
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
