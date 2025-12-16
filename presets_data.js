const algo1PresetData = {
  "obstacle": "O",
  "number_of_robots": 2,
  "number_of_colors": 3,
  "visibility_range": 1,
  "all_color_letters": [
    "F",
    "L",
    "R"
  ],
  "leader_colors": [
    "L",
    "R"
  ],
  "existing_algorithm_path": "/src/data/algorithms_data.json",
  "generation_mode": {
    "ProgressiveValidationByLevels": 5
  },
  "opacity": false,
  "is_obstacle_opaque": true,
  "max_combined_goals_execution_length": null,
  "web_algo_colors": "  F: 255\n  L: 16711680\n  R: 32768\n  O: 16753920",
  "web_algo_initial_configuration": "...........\n.WWWWWWWWW.\n.W.......W.\n.W.......W.\n.W.F.L...W.\n.W...O...W.\n.W.......W.\n.W.......W.\n.W.......W.\n.WWWWWWWWW.\n...........",
  "web_algo_walls": [[0, 0], [11, 11]],
  "moving_on_space_pattern": [
    [["R", 0, 0], ["F", -1, 0]],
    [["L", 0, 0], ["F", -1, 0]]
  ],
  "initial_configurations": [
    [[["O", 0, 0], ["R", 1, 1], ["F", 0, 1]], false],
    [[["O", 0, 0], ["R", 0, 1], ["F", -1, 1]], true],
    [[["O", 0, 0], ["R", 2, 0], ["F", 1, 0]], false],
    [[["O", 0, 0], ["R", -1, 0], ["F", -2, 0]], true],
    [[["O", 0, 0], ["R", 1, -1], ["F", 0, -1]], false],
    [[["O", 0, 0], ["R", 0, -1], ["F", -1, -1]], true],
    [[["O", 0, 0], ["L", 1, 1], ["F", 0, 1]], false],
    [[["O", 0, 0], ["L", 0, 1], ["F", -1, 1]], true],
    [[["O", 0, 0], ["L", 2, 0], ["F", 1, 0]], false],
    [[["O", 0, 0], ["L", -1, 0], ["F", -2, 0]], true],
    [[["O", 0, 0], ["L", 1, -1], ["F", 0, -1]], false],
    [[["O", 0, 0], ["L", 0, -1], ["F", -1, -1]], true]
  ],
  "number_of_goals": 8,
  "goals": [
    {
      "initial_positions": [["R", 0, 1], ["F", -1, 1], ["O", 0, 0]],
      "targets": [[2, [["R", 2, 1], ["F", 1, 1], ["O", 0, 0]], [], []]],
      "boundary": [-2, 3, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["R", 0, -1], ["F", -1, -1], ["O", 0, 0]],
      "targets": [[2, [["R", 2, -1], ["F", 1, -1], ["O", 0, 0]], [], []]],
      "boundary": [-2, 3, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["L", 0, 1], ["F", -1, 1], ["O", 0, 0]],
      "targets": [[2, [["L", 2, 1], ["F", 1, 1], ["O", 0, 0]], [], []]],
      "boundary": [-2, 3, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["L", 0, -1], ["F", -1, -1], ["O", 0, 0]],
      "targets": [[2, [["L", 2, -1], ["F", 1, -1], ["O", 0, 0]], [], []]],
      "boundary": [-2, 3, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["R", -1, 0], ["F", -2, 0], ["O", 0, 0]],
      "targets": [[3, [["F", -2, 0], ["L", -3, 0], ["O", 0, 0]], [], []]],
      "boundary": [-4, 1, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["L", -1, 0], ["F", -2, 0], ["O", 0, 0]],
      "targets": [[4, [["L", 2, 1], ["F", 1, 1], ["O", 0, 0]], [], []]],
      "boundary": [-3, 3, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["R", -2, 0], ["F", -1, 0], ["O", 0, 0]],
      "targets": [[1, [["O", 0, 0], ["F", -2, 0], ["R", -3, 0]], [], []]],
      "boundary": [-4, 1, -1, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["L", -2, 0], ["F", -1, 0], ["O", 0, 0]],
      "targets": [[1, [["L", -3, 0], ["F", -2, 0], ["O", 0, 0]], [], []]],
      "boundary": [-4, 1, -1, 1],
      "wall": [null, null]
    }
  ]
};


const algo2PresetData0 = {
  "obstacle": "O",
  "number_of_robots": 2,
  "number_of_colors": 2,
  "visibility_range": 2,
  "all_color_letters": [
    "F",
    "L"
  ],
  "leader_colors": [
    "L"
  ],
  "existing_algorithm_path": "/src/data/algorithms_data2.json",
  "generation_mode": {
    "ProgressiveValidationByLevels": 4
  },
  "opacity": true,
  "is_obstacle_opaque": true,
  "max_combined_goals_execution_length": null,
  "web_algo_colors": "  F: 255\n  L: 16711680\n  O: 16753920",
  "web_algo_initial_configuration": ".................\n.WWWWWWWWWWWWWWW.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W....F.L......W.\n.W......O......W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.WWWWWWWWWWWWWWW.\n.................",
  "web_algo_walls": [[0, 0], [17, 17]],
  "moving_on_space_pattern": [
    [["L", 0, 0], ["F", -1, 0]],
    [["L", 0, 0], ["F", -2, 0]]
  ],
  "initial_configurations": [
    [[["O", 0, 0], ["L", 1, 2], ["F", 0, 2]], false],
    [[["O", 0, 0], ["L", 0, 2], ["F", -1, 2]], true],
    [[["O", 0, 0], ["L", 2, 1], ["F", 1, 1]], false],
    [[["O", 0, 0], ["L", 1, 1], ["F", 0, 1]], false],
    [[["O", 0, 0], ["L", 0, 1], ["F", -1, 1]], false],
    [[["O", 0, 0], ["L", -1, 1], ["F", -2, 1]], true],
    [[["O", 0, 0], ["L", 3, 0], ["F", 2, 0]], false],
    [[["O", 0, 0], ["L", 2, 0], ["F", 1, 0]], false],
    [[["O", 0, 0], ["L", -1, 0], ["F", -2, 0]], false],
    [[["O", 0, 0], ["L", -2, 0], ["F", -3, 0]], true],
    [[["O", 0, 0], ["L", 2, -1], ["F", 1, -1]], false],
    [[["O", 0, 0], ["L", 1, -1], ["F", 0, -1]], false],
    [[["O", 0, 0], ["L", 0, -1], ["F", -1, -1]], false],
    [[["O", 0, 0], ["L", -1, -1], ["F", -2, -1]], true],
    [[["O", 0, 0], ["L", 1, -2], ["F", 0, -2]], false],
    [[["O", 0, 0], ["L", 0, -2], ["F", -1, -2]], true],
    [[["O", 0, 0], ["L", 2, 2], ["F", 0, 2]], false],
    [[["O", 0, 0], ["L", 0, 2], ["F", -2, 2]], true],
    [[["O", 0, 0], ["L", 3, 1], ["F", 1, 1]], false],
    [[["O", 0, 0], ["L", 2, 1], ["F", 0, 1]], false],
    [[["O", 0, 0], ["L", 1, 1], ["F", -1, 1]], false],
    [[["O", 0, 0], ["L", 0, 1], ["F", -2, 1]], false],
    [[["O", 0, 0], ["L", -1, 1], ["F", -3, 1]], true],
    [[["O", 0, 0], ["L", 4, 0], ["F", 2, 0]], false],
    [[["O", 0, 0], ["L", 3, 0], ["F", 1, 0]], false],
    [[["O", 0, 0], ["L", -1, 0], ["F", -3, 0]], false],
    [[["O", 0, 0], ["L", -2, 0], ["F", -4, 0]], true],
    [[["O", 0, 0], ["L", 3, -1], ["F", 1, -1]], false],
    [[["O", 0, 0], ["L", 2, -1], ["F", 0, -1]], false],
    [[["O", 0, 0], ["L", 1, -1], ["F", -1, -1]], false],
    [[["O", 0, 0], ["L", 0, -1], ["F", -2, -1]], false],
    [[["O", 0, 0], ["L", -1, -1], ["F", -3, -1]], true],
    [[["O", 0, 0], ["L", 2, -2], ["F", 0, -2]], false],
    [[["O", 0, 0], ["L", 0, -2], ["F", -2, -2]], true]
  ],
  "number_of_goals": 11,
  "goals": [
    {
      "initial_positions": [["O", 0, 0], ["L", 0, 2], ["F", -2, 2]],
      "targets": [[3, [["L", 3, 2], ["F", 1, 2], ["O", 0, 0]], [], []]],
      "boundary": [-3, 4, -1, 3],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 0, -2], ["F", -2, -2]],
      "targets": [[3, [["O", 0, 0], ["L", 3, -2], ["F", 1, -2]], [], []]],
      "boundary": [-3, 4, -3, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["L", -1, 1], ["O", 0, 0], ["F", -3, 1]],
      "targets": [[5, [["F", 2, 1], ["L", 4, 1], ["O", 0, 0]], [], []]],
      "boundary": [-4, 5, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", -1, -1], ["F", -3, -1]],
      "targets": [[5, [["L", 4, -1], ["F", 2, -1], ["O", 0, 0]], [], []]],
      "boundary": [-4, 5, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 0, 2], ["F", -1, 2]],
      "targets": [[2, [["O", 0, 0], ["F", 1, 2], ["L", 2, 2]], [], []]],
      "boundary": [-2, 3, -1, 3],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 0, -2], ["F", -1, -2]],
      "targets": [[2, [["O", 0, 0], ["F", 1, -2], ["L", 2, -2]], [], []]],
      "boundary": [-2, 3, -3, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", -1, 1], ["F", -2, 1]],
      "targets": [[4, [["O", 0, 0], ["F", 2, 1], ["L", 3, 1]], [], []]],
      "boundary": [-3, 4, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["F", -2, -1], ["L", -1, -1]],
      "targets": [[4, [["O", 0, 0], ["L", 3, -1], ["F", 2, -1]], [], []]],
      "boundary": [-3, 4, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["F", -4, 0], ["L", -2, 0]],
      "targets": [[2, [["O", 0, 0], ["L", -1, 1], ["F", -3, 1]], [], [[-1, 0]]]],
      "boundary": [-5, 1, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", -2, 0], ["F", -3, 0]],
      "targets": [[4, [["O", 0, 0], ["F", -3, 0], ["L", -5, 0]], [], []]],
      "boundary": [-6, 1, -1, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["F", -2, 0], ["L", -1, 0]],
      "targets": [[2, [["O", 0, 0], ["F", -1, 1], ["L", -2, 1]], [], []]],
      "boundary": [-3, 1, -1, 2],
      "wall": [null, null]
    }
  ]
};

const algo2PresetData2 = {
  "obstacle": "O",
  "number_of_robots": 2,
  "number_of_colors": 2,
  "visibility_range": 2,
  "all_color_letters": [
    "F",
    "L"
  ],
  "leader_colors": [
    "L"
  ],
  "existing_algorithm_path": "/src/data/algorithms_data2.json",
  "generation_mode": {
    "ProgressiveValidationByLevels": 4
  },
  "opacity": true,
  "is_obstacle_opaque": false,
  "max_combined_goals_execution_length": null,
  "web_algo_colors": "  F: 255\n  L: 16711680\n  O: 16753920",
  "web_algo_initial_configuration": ".................\n.WWWWWWWWWWWWWWW.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W....F.L......W.\n.W......O......W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.WWWWWWWWWWWWWWW.\n.................",
  "web_algo_walls": [[0, 0], [17, 17]],
  "moving_on_space_pattern": [
    [["L", 0, 0], ["F", -1, 0]],
    [["L", 0, 0], ["F", -2, 0]]
  ],
  "initial_configurations": [
    [[["O", 0, 0], ["L", 1, 2], ["F", 0, 2]], false],
    [[["O", 0, 0], ["L", 0, 2], ["F", -1, 2]], true],
    [[["O", 0, 0], ["L", 2, 1], ["F", 1, 1]], false],
    [[["O", 0, 0], ["L", 1, 1], ["F", 0, 1]], false],
    [[["O", 0, 0], ["L", 0, 1], ["F", -1, 1]], false],
    [[["O", 0, 0], ["L", -1, 1], ["F", -2, 1]], true],
    [[["O", 0, 0], ["L", 3, 0], ["F", 2, 0]], false],
    [[["O", 0, 0], ["L", 2, 0], ["F", 1, 0]], false],
    [[["O", 0, 0], ["L", -1, 0], ["F", -2, 0]], false],
    [[["O", 0, 0], ["L", -2, 0], ["F", -3, 0]], true],
    [[["O", 0, 0], ["L", 2, -1], ["F", 1, -1]], false],
    [[["O", 0, 0], ["L", 1, -1], ["F", 0, -1]], false],
    [[["O", 0, 0], ["L", 0, -1], ["F", -1, -1]], false],
    [[["O", 0, 0], ["L", -1, -1], ["F", -2, -1]], true],
    [[["O", 0, 0], ["L", 1, -2], ["F", 0, -2]], false],
    [[["O", 0, 0], ["L", 0, -2], ["F", -1, -2]], true],
    [[["O", 0, 0], ["L", 2, 2], ["F", 0, 2]], false],
    [[["O", 0, 0], ["L", 0, 2], ["F", -2, 2]], true],
    [[["O", 0, 0], ["L", 3, 1], ["F", 1, 1]], false],
    [[["O", 0, 0], ["L", 2, 1], ["F", 0, 1]], false],
    [[["O", 0, 0], ["L", 1, 1], ["F", -1, 1]], false],
    [[["O", 0, 0], ["L", 0, 1], ["F", -2, 1]], false],
    [[["O", 0, 0], ["L", -1, 1], ["F", -3, 1]], true],
    [[["O", 0, 0], ["L", 4, 0], ["F", 2, 0]], false],
    [[["O", 0, 0], ["L", 3, 0], ["F", 1, 0]], false],
    [[["O", 0, 0], ["L", 1, 0], ["F", -1, 0]], false],
    [[["O", 0, 0], ["L", -1, 0], ["F", -3, 0]], false],
    [[["O", 0, 0], ["L", -2, 0], ["F", -4, 0]], true],
    [[["O", 0, 0], ["L", 3, -1], ["F", 1, -1]], false],
    [[["O", 0, 0], ["L", 2, -1], ["F", 0, -1]], false],
    [[["O", 0, 0], ["L", 1, -1], ["F", -1, -1]], false],
    [[["O", 0, 0], ["L", 0, -1], ["F", -2, -1]], false],
    [[["O", 0, 0], ["L", -1, -1], ["F", -3, -1]], true],
    [[["O", 0, 0], ["L", 2, -2], ["F", 0, -2]], false],
    [[["O", 0, 0], ["L", 0, -2], ["F", -2, -2]], true]
  ],
  "number_of_goals": 12,
  "goals": [
    {
      "initial_positions": [["O", 0, 0], ["L", 0, 2], ["F", -2, 2]],
      "targets": [[3, [["L", 3, 2], ["F", 1, 2], ["O", 0, 0]], [], []]],
      "boundary": [-3, 4, -1, 3],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 0, -2], ["F", -2, -2]],
      "targets": [[3, [["O", 0, 0], ["L", 3, -2], ["F", 1, -2]], [], []]],
      "boundary": [-3, 4, -3, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["L", -1, 1], ["O", 0, 0], ["F", -3, 1]],
      "targets": [[5, [["F", 2, 1], ["L", 4, 1], ["O", 0, 0]], [], []]],
      "boundary": [-4, 5, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", -1, -1], ["F", -3, -1]],
      "targets": [[5, [["L", 4, -1], ["F", 2, -1], ["O", 0, 0]], [], []]],
      "boundary": [-4, 5, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 0, 2], ["F", -1, 2]],
      "targets": [[2, [["O", 0, 0], ["F", 1, 2], ["L", 2, 2]], [], []]],
      "boundary": [-2, 3, -1, 3],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 0, -2], ["F", -1, -2]],
      "targets": [[2, [["O", 0, 0], ["F", 1, -2], ["L", 2, -2]], [], []]],
      "boundary": [-2, 3, -3, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", -1, 1], ["F", -2, 1]],
      "targets": [[4, [["O", 0, 0], ["F", 2, 1], ["L", 3, 1]], [], []]],
      "boundary": [-3, 4, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["F", -2, -1], ["L", -1, -1]],
      "targets": [[4, [["O", 0, 0], ["L", 3, -1], ["F", 2, -1]], [], []]],
      "boundary": [-3, 4, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["F", -4, 0], ["L", -2, 0]],
      "targets": [[2, [["O", 0, 0], ["L", -1, 1], ["F", -3, 1]], [], [[-1, 0]]]],
      "boundary": [-5, 1, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", -2, 0], ["F", -3, 0]],
      "targets": [[4, [["O", 0, 0], ["F", -3, 0], ["L", -5, 0]], [], []]],
      "boundary": [-6, 1, -1, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["F", -2, 0], ["L", -1, 0]],
      "targets": [[2, [["O", 0, 0], ["F", -1, 1], ["L", -2, 1]], [], []]],
      "boundary": [-3, 1, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 1, 0], ["F", -1, 0]],
      "targets": [[5, [["O", 0, 0], ["L", 1, 1], ["F", -1, 1]], [], []]],
      "boundary": [-2, 2, -1, 2],
      "wall": [null, null]
    }
  ]
};

const algo2PresetData1 = {
  "obstacle": "O",
  "number_of_robots": 2,
  "number_of_colors": 2,
  "visibility_range": 2,
  "all_color_letters": [
    "F",
    "L"
  ],
  "leader_colors": [
    "L"
  ],
  "existing_algorithm_path": "/src/data/algorithms_data2.json",
  "generation_mode": {
    "ProgressiveValidationByLevels": 4
  },
  "opacity": true,
  "is_obstacle_opaque": true,
  "max_combined_goals_execution_length": null,
  "web_algo_colors": "  F: 255\n  L: 16711680\n  O: 16753920",
  "web_algo_initial_configuration": ".................\n.WWWWWWWWWWWWWWW.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W....F.L......W.\n.W......O......W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.WWWWWWWWWWWWWWW.\n.................",
  "web_algo_walls": [[0, 0], [17, 17]],
  "moving_on_space_pattern": [
    [["L", 0, 0], ["F", -1, 0]],
    [["L", 0, 0], ["F", -2, 0]]
  ],
  "initial_configurations": [
    [[["O", 0, 0], ["L", 1, 2], ["F", 0, 2]], false],
    [[["O", 0, 0], ["L", 0, 2], ["F", -1, 2]], true],
    [[["O", 0, 0], ["L", 2, 1], ["F", 1, 1]], false],
    [[["O", 0, 0], ["L", 1, 1], ["F", 0, 1]], false],
    [[["O", 0, 0], ["L", 0, 1], ["F", -1, 1]], false],
    [[["O", 0, 0], ["L", -1, 1], ["F", -2, 1]], true],
    [[["O", 0, 0], ["L", 3, 0], ["F", 2, 0]], false],
    [[["O", 0, 0], ["L", 2, 0], ["F", 1, 0]], false],
    [[["O", 0, 0], ["L", -1, 0], ["F", -2, 0]], false],
    [[["O", 0, 0], ["L", -2, 0], ["F", -3, 0]], true],
    [[["O", 0, 0], ["L", 2, -1], ["F", 1, -1]], false],
    [[["O", 0, 0], ["L", 1, -1], ["F", 0, -1]], false],
    [[["O", 0, 0], ["L", 0, -1], ["F", -1, -1]], false],
    [[["O", 0, 0], ["L", -1, -1], ["F", -2, -1]], true],
    [[["O", 0, 0], ["L", 1, -2], ["F", 0, -2]], false],
    [[["O", 0, 0], ["L", 0, -2], ["F", -1, -2]], true],
    [[["O", 0, 0], ["L", 2, 2], ["F", 0, 2]], false],
    [[["O", 0, 0], ["L", 0, 2], ["F", -2, 2]], true],
    [[["O", 0, 0], ["L", 3, 1], ["F", 1, 1]], false],
    [[["O", 0, 0], ["L", 2, 1], ["F", 0, 1]], false],
    [[["O", 0, 0], ["L", 1, 1], ["F", -1, 1]], false],
    [[["O", 0, 0], ["L", 0, 1], ["F", -2, 1]], false],
    [[["O", 0, 0], ["L", -1, 1], ["F", -3, 1]], true],
    [[["O", 0, 0], ["L", 4, 0], ["F", 2, 0]], false],
    [[["O", 0, 0], ["L", 3, 0], ["F", 1, 0]], false],
    [[["O", 0, 0], ["L", -1, 0], ["F", -3, 0]], false],
    [[["O", 0, 0], ["L", -2, 0], ["F", -4, 0]], true],
    [[["O", 0, 0], ["L", 3, -1], ["F", 1, -1]], false],
    [[["O", 0, 0], ["L", 2, -1], ["F", 0, -1]], false],
    [[["O", 0, 0], ["L", 1, -1], ["F", -1, -1]], false],
    [[["O", 0, 0], ["L", 0, -1], ["F", -2, -1]], false],
    [[["O", 0, 0], ["L", -1, -1], ["F", -3, -1]], true],
    [[["O", 0, 0], ["L", 2, -2], ["F", 0, -2]], false],
    [[["O", 0, 0], ["L", 0, -2], ["F", -2, -2]], true]
  ],
  "number_of_goals": 11,
  "goals": [
    {
      "initial_positions": [["L", -1, 1], ["O", 0, 0], ["F", -3, 1]],
      "targets": [[5, [["F", 2, 1], ["L", 4, 1], ["O", 0, 0]], [], []]],
      "boundary": [-4, 5, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", -1, -1], ["F", -3, -1]],
      "targets": [[5, [["L", 4, -1], ["F", 2, -1], ["O", 0, 0]], [], []]],
      "boundary": [-4, 5, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", -1, 1], ["F", -2, 1]],
      "targets": [[4, [["O", 0, 0], ["F", 2, 1], ["L", 3, 1]], [], []]],
      "boundary": [-3, 4, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["F", -2, -1], ["L", -1, -1]],
      "targets": [[4, [["O", 0, 0], ["L", 3, -1], ["F", 2, -1]], [], []]],
      "boundary": [-3, 4, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", -2, 0], ["F", -3, 0]],
      "targets": [[4, [["O", 0, 0], ["F", -3, 0], ["L", -5, 0]], [], []]],
      "boundary": [-6, 1, -1, 1],
      "wall": [null, null]
    }, {
      "initial_positions": [["O", 0, 0], ["L", 0, 2], ["F", -1, 2]],
      "targets": [[2, [["O", 0, 0], ["F", 1, 2], ["L", 2, 2]], [], []]],
      "boundary": [-2, 3, -1, 3],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 0, -2], ["F", -1, -2]],
      "targets": [[2, [["O", 0, 0], ["F", 1, -2], ["L", 2, -2]], [], []]],
      "boundary": [-2, 3, -3, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["F", -2, 0], ["L", -1, 0]],
      "targets": [[2, [["O", 0, 0], ["F", -1, 1], ["L", -2, 1]], [], []]],
      "boundary": [-3, 1, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 0, 2], ["F", -2, 2]],
      "targets": [[3, [["L", 3, 2], ["F", 1, 2], ["O", 0, 0]], [], []]],
      "boundary": [-3, 4, -1, 3],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 0, -2], ["F", -2, -2]],
      "targets": [[3, [["O", 0, 0], ["L", 3, -2], ["F", 1, -2]], [], []]],
      "boundary": [-3, 4, -3, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["F", -4, 0], ["L", -2, 0]],
      "targets": [[2, [["O", 0, 0], ["L", -1, 1], ["F", -3, 1]], [], [[-1, 0]]]],
      "boundary": [-5, 1, -1, 2],
      "wall": [null, null]
    }
  ]
};
const algo2PresetData3 = {
  "obstacle": "O",
  "number_of_robots": 2,
  "number_of_colors": 2,
  "visibility_range": 2,
  "all_color_letters": [
    "F",
    "L"
  ],
  "leader_colors": [
    "L"
  ],
  "existing_algorithm_path": "/src/data/algorithms_data2.json",
  "generation_mode": {
    "ProgressiveValidationByLevels": 4
  },
  "opacity": true,
  "is_obstacle_opaque": true,
  "max_combined_goals_execution_length": null,
  "web_algo_colors": "  F: 255\n  L: 16711680\n  O: 16753920",
  "web_algo_initial_configuration": ".................\n.WWWWWWWWWWWWWWW.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W....F.L......W.\n.W......O......W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.WWWWWWWWWWWWWWW.\n.................",
  "web_algo_walls": [[0, 0], [17, 17]],
  "moving_on_space_pattern": [
    [["L", 0, 0], ["F", -1, 0]],
    [["L", 0, 0], ["F", -2, 0]]
  ],
  "initial_configurations": [
    [[["O", 0, 0], ["L", 1, 2], ["F", 0, 2]], false],
    [[["O", 0, 0], ["L", 0, 2], ["F", -1, 2]], true],
    [[["O", 0, 0], ["L", 2, 1], ["F", 1, 1]], false],
    [[["O", 0, 0], ["L", 1, 1], ["F", 0, 1]], false],
    [[["O", 0, 0], ["L", 0, 1], ["F", -1, 1]], false],
    [[["O", 0, 0], ["L", -1, 1], ["F", -2, 1]], true],
    [[["O", 0, 0], ["L", 3, 0], ["F", 2, 0]], false],
    [[["O", 0, 0], ["L", 2, 0], ["F", 1, 0]], false],
    [[["O", 0, 0], ["L", -1, 0], ["F", -2, 0]], false],
    [[["O", 0, 0], ["L", -2, 0], ["F", -3, 0]], true],
    [[["O", 0, 0], ["L", 2, -1], ["F", 1, -1]], false],
    [[["O", 0, 0], ["L", 1, -1], ["F", 0, -1]], false],
    [[["O", 0, 0], ["L", 0, -1], ["F", -1, -1]], false],
    [[["O", 0, 0], ["L", -1, -1], ["F", -2, -1]], true],
    [[["O", 0, 0], ["L", 1, -2], ["F", 0, -2]], false],
    [[["O", 0, 0], ["L", 0, -2], ["F", -1, -2]], true],
    [[["O", 0, 0], ["L", 2, 2], ["F", 0, 2]], false],
    [[["O", 0, 0], ["L", 0, 2], ["F", -2, 2]], true],
    [[["O", 0, 0], ["L", 3, 1], ["F", 1, 1]], false],
    [[["O", 0, 0], ["L", 2, 1], ["F", 0, 1]], false],
    [[["O", 0, 0], ["L", 1, 1], ["F", -1, 1]], false],
    [[["O", 0, 0], ["L", 0, 1], ["F", -2, 1]], false],
    [[["O", 0, 0], ["L", -1, 1], ["F", -3, 1]], true],
    [[["O", 0, 0], ["L", 4, 0], ["F", 2, 0]], false],
    [[["O", 0, 0], ["L", 3, 0], ["F", 1, 0]], false],
    [[["O", 0, 0], ["L", -1, 0], ["F", -3, 0]], false],
    [[["O", 0, 0], ["L", -2, 0], ["F", -4, 0]], true],
    [[["O", 0, 0], ["L", 3, -1], ["F", 1, -1]], false],
    [[["O", 0, 0], ["L", 2, -1], ["F", 0, -1]], false],
    [[["O", 0, 0], ["L", 1, -1], ["F", -1, -1]], false],
    [[["O", 0, 0], ["L", 0, -1], ["F", -2, -1]], false],
    [[["O", 0, 0], ["L", -1, -1], ["F", -3, -1]], true],
    [[["O", 0, 0], ["L", 2, -2], ["F", 0, -2]], false],
    [[["O", 0, 0], ["L", 0, -2], ["F", -2, -2]], true]
  ],
  "number_of_goals": 11,
  "goals": [
    {
      "initial_positions": [["O", 0, 0], ["L", 0, 2], ["F", -2, 2]],
      "targets": [[3, [["L", 3, 2], ["F", 1, 2], ["O", 0, 0]], [], []]],
      "boundary": [-3, 4, -1, 3],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 0, -2], ["F", -2, -2]],
      "targets": [[3, [["O", 0, 0], ["L", 3, -2], ["F", 1, -2]], [], []]],
      "boundary": [-3, 4, -3, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["L", -1, 1], ["O", 0, 0], ["F", -3, 1]],
      "targets": [[5, [["F", 2, 1], ["L", 4, 1], ["O", 0, 0]], [], []]],
      "boundary": [-4, 5, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", -1, -1], ["F", -3, -1]],
      "targets": [[5, [["L", 4, -1], ["F", 2, -1], ["O", 0, 0]], [], []]],
      "boundary": [-4, 5, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 0, 2], ["F", -1, 2]],
      "targets": [[2, [["O", 0, 0], ["F", 1, 2], ["L", 2, 2]], [], []]],
      "boundary": [-2, 3, -1, 3],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 0, -2], ["F", -1, -2]],
      "targets": [[2, [["O", 0, 0], ["F", 1, -2], ["L", 2, -2]], [], []]],
      "boundary": [-2, 3, -3, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", -1, 1], ["F", -2, 1]],
      "targets": [[4, [["O", 0, 0], ["F", 2, 1], ["L", 3, 1]], [], []]],
      "boundary": [-3, 4, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["F", -2, -1], ["L", -1, -1]],
      "targets": [[4, [["O", 0, 0], ["L", 3, -1], ["F", 2, -1]], [], []]],
      "boundary": [-3, 4, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["F", -4, 0], ["L", -2, 0]],
      "targets": [[2, [["O", 0, 0], ["L", -1, 1], ["F", -3, 1]], [], [[-1, 0]]]],
      "boundary": [-5, 1, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", -2, 0], ["F", -3, 0]],
      "targets": [[4, [["O", 0, 0], ["F", -3, 0], ["L", -5, 0]], [], []]],
      "boundary": [-6, 1, -1, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["F", -2, 0], ["L", -1, 0]],
      "targets": [[2, [["O", 0, 0], ["L", -1, 1], ["F", -2, 1]], [], []]],
      "boundary": [-3, 1, -1, 2],
      "wall": [null, null]
    }
  ]
};
const algo2PresetData4 = {
  "obstacle": "O",
  "number_of_robots": 2,
  "number_of_colors": 2,
  "visibility_range": 2,
  "all_color_letters": [
    "F",
    "L"
  ],
  "leader_colors": [
    "L"
  ],
  "existing_algorithm_path": "/src/data/algorithms_data2.json",
  "generation_mode": {
    "ProgressiveValidationByLevels": 4
  },
  "opacity": true,
  "is_obstacle_opaque": true,
  "max_combined_goals_execution_length": null,
  "web_algo_colors": "  F: 255\n  L: 16711680\n  O: 16753920",
  "web_algo_initial_configuration": ".................\n.WWWWWWWWWWWWWWW.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W....F.L......W.\n.W......O......W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.W.............W.\n.WWWWWWWWWWWWWWW.\n.................",
  "web_algo_walls": [[0, 0], [17, 17]],
  "moving_on_space_pattern": [
    [["L", 0, 0], ["F", -1, 0]],
    [["L", 0, 0], ["F", -2, 0]]
  ],
  "initial_configurations": [
    [[["O", 0, 0], ["L", 1, 2], ["F", 0, 2]], false],
    [[["O", 0, 0], ["L", 0, 2], ["F", -1, 2]], true],
    [[["O", 0, 0], ["L", 2, 1], ["F", 1, 1]], false],
    [[["O", 0, 0], ["L", 1, 1], ["F", 0, 1]], false],
    [[["O", 0, 0], ["L", 0, 1], ["F", -1, 1]], false],
    [[["O", 0, 0], ["L", -1, 1], ["F", -2, 1]], true],
    [[["O", 0, 0], ["L", 3, 0], ["F", 2, 0]], false],
    [[["O", 0, 0], ["L", 2, 0], ["F", 1, 0]], false],
    [[["O", 0, 0], ["L", -1, 0], ["F", -2, 0]], false],
    [[["O", 0, 0], ["L", -2, 0], ["F", -3, 0]], true],
    [[["O", 0, 0], ["L", 2, -1], ["F", 1, -1]], false],
    [[["O", 0, 0], ["L", 1, -1], ["F", 0, -1]], false],
    [[["O", 0, 0], ["L", 0, -1], ["F", -1, -1]], false],
    [[["O", 0, 0], ["L", -1, -1], ["F", -2, -1]], true],
    [[["O", 0, 0], ["L", 1, -2], ["F", 0, -2]], false],
    [[["O", 0, 0], ["L", 0, -2], ["F", -1, -2]], true],
    [[["O", 0, 0], ["L", 2, 2], ["F", 0, 2]], false],
    [[["O", 0, 0], ["L", 0, 2], ["F", -2, 2]], true],
    [[["O", 0, 0], ["L", 3, 1], ["F", 1, 1]], false],
    [[["O", 0, 0], ["L", 2, 1], ["F", 0, 1]], false],
    [[["O", 0, 0], ["L", 1, 1], ["F", -1, 1]], false],
    [[["O", 0, 0], ["L", 0, 1], ["F", -2, 1]], false],
    [[["O", 0, 0], ["L", -1, 1], ["F", -3, 1]], true],
    [[["O", 0, 0], ["L", 4, 0], ["F", 2, 0]], false],
    [[["O", 0, 0], ["L", 3, 0], ["F", 1, 0]], false],
    [[["O", 0, 0], ["L", -1, 0], ["F", -3, 0]], false],
    [[["O", 0, 0], ["L", -2, 0], ["F", -4, 0]], true],
    [[["O", 0, 0], ["L", 3, -1], ["F", 1, -1]], false],
    [[["O", 0, 0], ["L", 2, -1], ["F", 0, -1]], false],
    [[["O", 0, 0], ["L", 1, -1], ["F", -1, -1]], false],
    [[["O", 0, 0], ["L", 0, -1], ["F", -2, -1]], false],
    [[["O", 0, 0], ["L", -1, -1], ["F", -3, -1]], true],
    [[["O", 0, 0], ["L", 2, -2], ["F", 0, -2]], false],
    [[["O", 0, 0], ["L", 0, -2], ["F", -2, -2]], true]
  ],
  "number_of_goals": 11,
  "goals": [
    {
      "initial_positions": [["O", 0, 0], ["L", 0, 2], ["F", -2, 2]],
      "targets": [[3, [["L", 3, 2], ["F", 1, 2], ["O", 0, 0]], [], []]],
      "boundary": [-3, 4, -1, 3],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 0, -2], ["F", -2, -2]],
      "targets": [[3, [["O", 0, 0], ["L", 3, -2], ["F", 1, -2]], [], []]],
      "boundary": [-3, 4, -3, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["L", -1, 1], ["O", 0, 0], ["F", -3, 1]],
      "targets": [[5, [["F", 2, 1], ["L", 4, 1], ["O", 0, 0]], [], []]],
      "boundary": [-4, 5, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", -1, -1], ["F", -3, -1]],
      "targets": [[5, [["L", 4, -1], ["F", 2, -1], ["O", 0, 0]], [], []]],
      "boundary": [-4, 5, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 0, 2], ["F", -1, 2]],
      "targets": [[2, [["O", 0, 0], ["F", 1, 2], ["L", 2, 2]], [], []]],
      "boundary": [-2, 3, -1, 3],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", 0, -2], ["F", -1, -2]],
      "targets": [[2, [["O", 0, 0], ["F", 1, -2], ["L", 2, -2]], [], []]],
      "boundary": [-2, 3, -3, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", -1, 1], ["F", -2, 1]],
      "targets": [[4, [["O", 0, 0], ["F", 2, 1], ["L", 3, 1]], [], []]],
      "boundary": [-3, 4, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["F", -2, -1], ["L", -1, -1]],
      "targets": [[4, [["O", 0, 0], ["L", 3, -1], ["F", 2, -1]], [], []]],
      "boundary": [-3, 4, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["F", -4, 0], ["L", -2, 0]],
      "targets": [[4, [["O", 0, 0], ["F", -1, 1], ["L", 1, 1]], [], [[-1, 0]]]],
      "boundary": [-5, 2, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["L", -2, 0], ["F", -3, 0]],
      "targets": [[4, [["O", 0, 0], ["F", -3, 0], ["L", -5, 0]], [], []]],
      "boundary": [-6, 1, -1, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["O", 0, 0], ["F", -2, 0], ["L", -1, 0]],
      "targets": [[3, [["O", 0, 0], ["L", -3, 1], ["F", -2, 1]], [], []]],
      "boundary": [-4, 1, -1, 2],
      "wall": [null, null]
    }
  ]
};
const algo3PresetData = {
  "obstacle": "O",
  "number_of_robots": 3,
  "number_of_colors": 1,
  "visibility_range": 2,
  "all_color_letters": [
    "F",
    "L",
    "R"
  ],
  "leader_colors": [
    "L",
    "R"
  ],
  "existing_algorithm_path": "/src/data/algorithms_data3.json",
  "generation_mode": {
    "ProgressiveValidationByLevels": 4
  },
  "opacity": false,
  "is_obstacle_opaque": true,
  "max_combined_goals_execution_length": null,
  "web_algo_colors": "  F: 255\n  L: 16711680\n  R: 32768\n  O: 16753920",
  "web_algo_initial_configuration": "...........\n.WWWWWWWWW.\n.W.......W.\n.W.......W.\n.W.F.L...W.\n.W...O...W.\n.W.......W.\n.W.......W.\n.W.......W.\n.WWWWWWWWW.\n...........",
  "web_algo_walls": [[0, 0], [11, 11]],
  "moving_on_space_pattern": [
    [["R", 0, 0], ["F", -1, 0]],
    [["L", 0, 0], ["F", -1, 0]]
  ],
  "initial_configurations": [
    [[["O", 0, 0], ["R", 1, 1], ["F", 0, 1]], false],
    [[["O", 0, 0], ["R", 0, 1], ["F", -1, 1]], true],
    [[["O", 0, 0], ["R", 2, 0], ["F", 1, 0]], false],
    [[["O", 0, 0], ["R", -1, 0], ["F", -2, 0]], true],
    [[["O", 0, 0], ["R", 1, -1], ["F", 0, -1]], false],
    [[["O", 0, 0], ["R", 0, -1], ["F", -1, -1]], true],
    [[["O", 0, 0], ["L", 1, 1], ["F", 0, 1]], false],
    [[["O", 0, 0], ["L", 0, 1], ["F", -1, 1]], true],
    [[["O", 0, 0], ["L", 2, 0], ["F", 1, 0]], false],
    [[["O", 0, 0], ["L", -1, 0], ["F", -2, 0]], true],
    [[["O", 0, 0], ["L", 1, -1], ["F", 0, -1]], false],
    [[["O", 0, 0], ["L", 0, -1], ["F", -1, -1]], true]
  ],
  "number_of_goals": 8,
  "goals": [
    {
      "initial_positions": [["R", 0, 1], ["F", -1, 1], ["O", 0, 0]],
      "targets": [[2, [["R", 2, 1], ["F", 1, 1], ["O", 0, 0]], [], []]],
      "boundary": [-2, 3, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["R", 0, -1], ["F", -1, -1], ["O", 0, 0]],
      "targets": [[2, [["R", 2, -1], ["F", 1, -1], ["O", 0, 0]], [], []]],
      "boundary": [-2, 3, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["L", 0, 1], ["F", -1, 1], ["O", 0, 0]],
      "targets": [[2, [["L", 2, 1], ["F", 1, 1], ["O", 0, 0]], [], []]],
      "boundary": [-2, 3, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["L", 0, -1], ["F", -1, -1], ["O", 0, 0]],
      "targets": [[2, [["L", 2, -1], ["F", 1, -1], ["O", 0, 0]], [], []]],
      "boundary": [-2, 3, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["R", -1, 0], ["F", -2, 0], ["O", 0, 0]],
      "targets": [[3, [["F", -2, 0], ["L", -3, 0], ["O", 0, 0]], [], []]],
      "boundary": [-4, 1, -2, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["L", -1, 0], ["F", -2, 0], ["O", 0, 0]],
      "targets": [[4, [["L", 2, 1], ["F", 1, 1], ["O", 0, 0]], [], []]],
      "boundary": [-3, 3, -1, 2],
      "wall": [null, null]
    },
    {
      "initial_positions": [["R", -2, 0], ["F", -1, 0], ["O", 0, 0]],
      "targets": [[1, [["O", 0, 0], ["F", -2, 0], ["R", -3, 0]], [], []]],
      "boundary": [-4, 1, -1, 1],
      "wall": [null, null]
    },
    {
      "initial_positions": [["L", -2, 0], ["F", -1, 0], ["O", 0, 0]],
      "targets": [[1, [["L", -3, 0], ["F", -2, 0], ["O", 0, 0]], [], []]],
      "boundary": [-4, 1, -1, 1],
      "wall": [null, null]
    }
  ]
};

const algorithmPresets = [
  {
    title: "Exec1 | Algo1 | Obstacle:opaque | Goals1 | Main",
    description: "2 robots with visibility range 1, using colors F, L, R. Leader-based algorithm with an opaque obstacle.",
    data: algo1PresetData
  },
  {
    title: "Exec2 | Algo2 | Obstacle:opaque | Goals1 | Main",
    description: "Algorithm 2 with opaque obstacle and first goal set as the main execution.",
    data: algo2PresetData0
  },
    {
    title: "Exec3 | Algo2 | Obstacle:opaque | Goals1:Reordered",
    description: "Algorithm 2 with opaque obstacle and reordered goals from the first goal set.",
    data: algo2PresetData1
  },
  {
    title: "Exec4 | Algo2 | Obstacle:transparent | Goals1",
    description: "Algorithm 2 with transparent obstacle and first goal set.",
    data: algo2PresetData2
  },

  {
    title: "Exec5 | Algo2 | Obstacle:opaque | Goals2",
    description: "Algorithm 2 with opaque obstacle and second goal set.",
    data: algo2PresetData3
  },
  {
    title: "Exec6 | Algo2 | Obstacle:opaque | Goals3",
    description: "Algorithm 2 with opaque obstacle and third goal set.",
    data: algo2PresetData4
  },
];

