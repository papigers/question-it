export default {
  users: [
    {
      username: 'User1',
      email: 'user1@email.com',
      password: 'abc123',
      bio: 'bio1 biooooo',
      birthDate: {
        value: new Date('1993/08/01'),
        public: false,
      },
      name: {
        value: 'Gershon Papi',
        public: false,
      },
    },
    {
      username: 'User2',
      email: 'user2@email.com',
      password: 'abc123',
      bio: 'bio2 biooooo',
      name: {
        value: 'Gershon Papi',
        public: true,
      },
    },
    {
      username: 'User3',
      email: 'user3@email.com',
      password: 'abc123',
      bio: 'bio3 biooooo',
      birthDate: {
        value: new Date('1993/08/01'),
        public: true,
      },
      name: {
        value: 'Gershon Papi',
        public: true,
      },
    },
    {
      username: 'User4',
      email: 'user4@email.com',
      password: 'abc123',
      bio: 'bio4 biooooo',
      birthDate: {
        value: new Date('1993/08/01'),
        public: true,
      },
      name: {
        value: 'Gershon Papi',
        public: false,
      },
    },
    {
      username: 'User5',
      email: 'user5@email.com',
      password: 'abc123',
      bio: 'bio5 biooooo',
    },
  ],

  polls: [
    {
      title: 'Poll1',
      multi: false,
      options: [
        'Poll1 option1',
        'Poll1 option2',
        'Poll1 option3',
        'Poll1 option4',
      ],
      author: 1,
    },
    {
      title: 'Poll2',
      options: [
        'Poll2 option1',
        'Poll2 option2',
      ],
      author: 1,
    },
    {
      title: 'Poll3',
      multi: true,
      options: [
        'Poll3 option1',
        'Poll3 option2',
        'Poll3 option3',
        'Poll3 option4',
        'Poll3 option5',
      ],
      author: 3,
    },
    {
      title: 'Poll4',
      multi: false,
      options: [
        'Poll4 option1',
        'Poll4 option2',
        'Poll4 option3',
        'Poll4 option4',
        'Poll4 option5',
        'Poll4 option6',
      ],
      author: 4,
    },
    {
      title: 'Poll5',
      options: [
        'Poll5 option1',
        'Poll5 option2',
        'Poll5 option3',
      ],
      author: 5,
    },
    {
      title: 'Poll6',
      multi: true,
      options: [
        'Poll6 option1',
        'Poll6 option2',
        'Poll6 option3',
        'Poll6 option4',
      ],
      author: 5,
    },
    {
      title: 'Poll7',
      options: [
        'Poll7 option1',
        'Poll7 option2',
        'Poll7 option3',
        'Poll7 option4',
      ],
      author: 3,
    },
    {
      title: 'Poll8',
      options: [
        'Poll8 option1',
        'Poll8 option2',
        'Poll8 option3',
        'Poll8 option4',
      ],
      author: 1,
    },
    {
      title: 'Poll9',
      multi: true,
      options: [
        'Poll9 option1',
        'Poll9 option2',
        'Poll9 option3',
        'Poll9 option4',
        'Poll9 option5',
        'Poll9 option6',
        'Poll9 option7',
      ],
      author: 5,
    },
    {
      title: 'Poll10',
      options: [
        'Poll10 option1',
        'Poll10 option2',
        'Poll10 option3',
        'Poll10 option4',
      ],
      author: 4,
    },
    {
      title: 'Poll11',
      options: [
        'Poll11 option1',
        'Poll11 option2',
        'Poll11 option3',
        'Poll11 option4',
        'Poll11 option5',
      ],
      author: 5,
    },
  ],

  votes: [
    {
      poll: 1,
      user: 5,
      options: [2],
    },
    {
      poll: 4,
      user: 3,
      options: [0],
    },
    {
      poll: 9,
      user: 1,
      options: [1],
    },
    {
      poll: 10,
      user: 2,
      options: [3],
    },
    {
      poll: 5,
      user: 5,
      options: [2],
    },
    {
      poll: 1,
      user: 1,
      options: [0],
    },
    {
      poll: 6,
      user: 2,
      options: [1],
    },
    {
      poll: 4,
      user: 4,
      options: [5],
    },
    {
      poll: 3,
      user: 1,
      options: [2, 4],
    },
    {
      poll: 7,
      user: 3,
      options: [3],
    },
    {
      poll: 8,
      user: 4,
      options: [3],
    },
    {
      poll: 2,
      user: 2,
      options: [0],
    },
    {
      poll: 5,
      user: 3,
      options: [0],
      timestamp: 1467254149056,
    },
    {
      poll: 5,
      user: 2,
      options: [1],
    },
    {
      poll: 1,
      user: 4,
      options: [0],
    },
    {
      poll: 3,
      user: 2,
      options: [1, 3],
    },
    {
      poll: 6,
      user: 5,
      options: [1],
    },
    {
      poll: 10,
      user: 1,
      options: [1],
    },
  ],
};
