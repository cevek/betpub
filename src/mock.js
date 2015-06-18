export let json = {
  "positions": [
    {
      "id": 1,
      "name": "F"
    },
    {
      "id": 2,
      "name": "C"
    },
    {
      "id": 3,
      "name": "G"
    },
    {
      "id": 4,
      "name": "P"
    }
  ],
  "contestTypes": [
    {
      "id": 1,
      "name": "50/50 (Top 50% Win)",
      "maxEntries": 20,
      "entryFee": 1
    },
    {
      "id": 2,
      "name": "Top 6 Win 3$",
      "maxEntries": 20,
      "entryFee": 5
    }
  ],

  "teams": [
    {
      "id": 1,
      "name": "Houston Rockets",
      "playerIds": [6, 3, 10, 11, 5, 2, 8, 7, 9, 4, 1]
    },
    {
      "id": 2,
      "name": "Golden State Warriors",
      "playerIds": [2, 11, 7, 3, 8, 5, 6, 1, 10, 4, 9]
    },
    {
      "id": 3,
      "name": "Chicago Bulls",
      "playerIds": [3, 2, 10, 8, 6, 11, 9, 1, 4, 7, 5]
    },
    {
      "id": 4,
      "name": "Philadelphia 76e",
      "playerIds": [10, 3, 7, 8, 2, 4, 11, 1, 9, 6, 5]
    },
    {
      "id": 5,
      "name": "New York Rangers",
      "playerIds": [8, 7, 4, 1, 9, 11, 10, 2, 3, 5, 6]
    },
    {
      "id": 6,
      "name": "Tampa Bay Lighting",
      "playerIds": [11, 9, 5, 1, 10, 7, 2, 8, 3, 6, 4]
    }
  ],
  "players": [
    {
      "id": 1,
      "points": 2,
      "position": 1,
      "name": "Marreese Speights"
    },
    {
      "id": 2,
      "points": 4,
      "position": 1,
      "name": "Andre Iguodala"
    },
    {
      "id": 3,
      "points": 5,
      "position": 2,
      "name": "Justin Holiday"
    },
    {
      "id": 4,
      "points": 13,
      "position": 2,
      "name": "Shaun Livingston"
    },
    {
      "id": 5,
      "points": 22,
      "position": 3,
      "name": "James Harden"
    },
    {
      "id": 6,
      "points": 12,
      "position": 3,
      "name": "Marreese Speights"
    },
    {
      "id": 7,
      "points": 5,
      "name": "Josh Smith"
    },
    {
      "id": 8,
      "points": 17,
      "name": "Clint Capela"
    },
    {
      "id": 9,
      "points": 11,
      "name": "Trevor Ariza"
    },
    {
      "id": 10,
      "points": 29,
      "name": "Jason Terry"
    },
    {
      "id": 11,
      "points": 26,
      "name": "Pablo Prigioni"
    }
  ],
  "leagueEvents": [
    {
      "id": 1,
      "name": "Playoffs",
      "leagueId": 1
    },
    {
      "id": 2,
      "name": "Eastern Conference Final",
      "leagueId": 2
    }
  ],
  "leagues": [
    {
      "id": 1,
      "name": "NBA",
      "positions": [1,1,1,2,2,3]
    },
    {
      "id": 2,
      "name": "NHL",
      "positions": [1,2,3,4,4]
    }
  ]
};