// People shown in the Donors and Team sections.
// `tag` is the short highlight shown above the name; `roles` are listed below it.
// `photo` is a path relative to public/.

export interface Person {
  name: string;
  tag: string;
  roles: string[];
  photo: string;
}

export const donors: Person[] = [
  {
    name: 'Navin Chaddha',
    tag: 'Donor & Alumnus',
    roles: ['Managing Partner, Mayfield Fund, California, USA', 'Alumnus of EE, IIT Delhi', 'Generous donor to SIL'],
    photo: 'team/naveen-chadda.webp',
  },
];

export const teamMembers: Person[] = [
  {
    name: 'Amartansh Dubey',
    tag: 'Lab In-charge',
    roles: ['Assistant Professor, EE, IIT Delhi', 'Lab In-charge, SIL'],
    photo: 'team/amartansh-dubey.webp',
  },
  {
    name: 'Shankar Prakriya',
    tag: 'Head of Department',
    roles: ['Professor and HoD, EE, IIT Delhi'],
    photo: 'team/shankar-prakriya.webp',
  },
];
