// show object spread works, i.e. babel works
const hours = getHours();

export function handler(event, context, callback) {
  console.log('queryStringParameters', event.queryStringParameters);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: hours })
  });
}

function getHours() {
  return {
    "3e9e4701-d2a2-4068-9844-d4e859de6096": {
      "2019-03-04": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ],
      "2019-03-06": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ],
      "2019-03-07": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ],
      "2019-03-08": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ],
      "2019-03-11": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ],
      "2019-03-13": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ],
      "2019-03-14": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ],
      "2019-03-15": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ],
      "2019-03-18": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        }
      ],
      "2019-03-19": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        }
      ],
      "2019-03-20": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        }
      ],
      "2019-03-21": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        }
      ],
      "2019-03-22": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        }
      ]
    },
    "efe73f07-efa2-4e45-999b-4d9b99635803": {
      "2019-03-04": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-07": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-08": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-09": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-11": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-13": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-14": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-15": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-18": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-19": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-20": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-21": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-22": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-25": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-26": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-27": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-28": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-03-29": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-01": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-02": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-03": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        },
      ],
      "2019-04-04": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-05": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-08": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-09": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-10": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-11": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-12": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-15": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-16": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-17": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-18": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-19": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-22": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-23": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-24": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-25": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2019-04-26": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ]
    },
    "184fef9c-e84d-4a69-be9c-89032c8ade34": {
      "2019-03-04": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-07": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-08": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-09": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-11": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-13": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-14": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-15": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-18": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-19": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-20": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-21": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-22": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-25": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-26": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-27": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-28": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-29": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-01": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-02": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-03": [
        {
          "project": "Duke Idealab",
          "hours": 8
        },
      ],
      "2019-04-04": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-05": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-08": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-09": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-10": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-11": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-12": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-15": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-16": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-17": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-18": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-19": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-22": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-23": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-24": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-25": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-26": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ]
    },
    "3f985e41-1499-4802-ba50-c5100b3189c0": {
      "2019-03-04": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-07": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-08": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-09": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-11": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-13": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-14": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-15": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-18": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-19": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-20": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-21": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-22": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-25": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-26": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-27": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-28": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-03-29": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-04-01": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-04-02": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-04-03": [
        {
          "project": "Canteen",
          "hours": 8
        },
      ],
      "2019-04-04": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-04-05": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-04-08": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-04-09": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-04-10": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-04-11": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-04-12": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-04-15": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-04-16": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-04-17": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-04-18": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-04-19": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-04-22": [
        {
          "project": "Canteen",
          "hours": 4
        }
      ],
      "2019-04-23": [
        {
          "project": "Canteen",
          "hours": 4
        }
      ],
      "2019-04-24": [
        {
          "project": "Canteen",
          "hours": 4
        }
      ],
      "2019-04-25": [
        {
          "project": "Canteen",
          "hours": 4
        }
      ],
      "2019-04-26": [
        {
          "project": "Canteen",
          "hours": 4
        }
      ]
    },
    "00d9a80b-9fe4-4bcf-be45-dd37315800ff": {
      "2019-03-04": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-07": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-08": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-09": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-11": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-13": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-14": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-15": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-18": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-03-19": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-03-20": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-03-21": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-03-22": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-03-25": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-03-26": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-03-27": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-03-28": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-03-29": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-01": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-02": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-03": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        },
      ],
      "2019-04-04": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-05": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-08": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-09": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-10": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-11": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-12": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-15": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-16": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-17": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-18": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-19": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-22": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-23": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-24": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-25": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ],
      "2019-04-26": [
        {
          "project": "Ally Investors Site",
          "hours": 8
        }
      ]
    },
    "14698158-c56c-435a-a535-f07456c599c2": {
      "2019-03-04": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-07": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-08": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-09": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-11": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-13": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-14": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-15": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-18": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-19": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-20": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-21": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-22": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-25": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-26": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-27": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-28": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-03-29": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-04-01": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-04-02": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-04-03": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        },
      ],
      "2019-04-04": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-04-05": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-04-08": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-04-09": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-04-10": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-04-11": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-04-12": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-04-15": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-04-16": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-04-17": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-04-18": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-04-19": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-04-22": [
        {
          "project": "WIMS Internal Site",
          "hours": 4
        }
      ],
      "2019-04-23": [
        {
          "project": "WIMS Internal Site",
          "hours": 4
        }
      ],
      "2019-04-24": [
        {
          "project": "WIMS Internal Site",
          "hours": 4
        }
      ],
      "2019-04-25": [
        {
          "project": "WIMS Internal Site",
          "hours": 4
        }
      ],
      "2019-04-26": [
        {
          "project": "WIMS Internal Site",
          "hours": 4
        }
      ]
    },
    "0cf84361-c929-4c21-b428-78a801f8a8e2": {
      "2019-03-04": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ],
      "2019-03-07": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ],
      "2019-03-08": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ],
      "2019-03-09": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ],
      "2019-03-11": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ],
      "2019-03-13": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ],
      "2019-03-14": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ],
      "2019-03-15": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ],
      "2019-03-25": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-03-26": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-03-27": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-03-28": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-03-29": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-01": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-02": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-03": [
        {
          "project": "Ericsson",
          "hours": 8
        },
      ],
      "2019-04-04": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-05": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-08": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-09": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-10": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-11": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-12": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-15": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-16": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-17": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-18": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-19": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-22": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-23": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-24": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-25": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ],
      "2019-04-26": [
        {
          "project": "Ericsson",
          "hours": 8
        }
      ]
    },
    "ff2abcf2-a6fc-4d7e-908c-2cfd572ca1e5": {
      "2019-03-04": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ],
      "2019-03-07": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ],
      "2019-03-08": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ],
      "2019-03-09": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ],
      "2019-03-11": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ],
      "2019-03-13": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ],
      "2019-03-14": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ],
      "2019-03-15": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ],
      "2019-03-25": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-03-26": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-03-27": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-03-28": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-03-29": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-01": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-02": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-03": [
        {
          "project": "Food Buy",
          "hours": 8
        },
      ],
      "2019-04-04": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-05": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-08": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-09": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-10": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-11": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-12": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-15": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-16": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-17": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-18": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-19": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-22": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-23": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-24": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-25": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ],
      "2019-04-26": [
        {
          "project": "Food Buy",
          "hours": 8
        }
      ]
    },
    "3a970c27-7821-47b1-9462-534dc27e6979": {
      "2019-03-04": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-07": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-08": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-09": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-11": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-13": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-14": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-15": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-03-18": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-19": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-20": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-21": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-22": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-25": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-26": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-27": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-28": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-29": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-01": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-02": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-03": [
        {
          "project": "Duke Idealab",
          "hours": 8
        },
      ],
      "2019-04-04": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-05": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-08": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-09": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-10": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-11": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-12": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-15": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-16": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-17": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-18": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-19": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-22": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-23": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-24": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-25": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-26": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ]
    },
    "2b6a3edb-ecd7-4e84-acdd-7ae06b743fb0": {
      "2019-03-04": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-07": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-08": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-09": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-11": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-13": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-14": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-15": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-18": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-19": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-20": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-21": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-22": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-25": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-26": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-27": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-28": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-29": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-01": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-02": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-03": [
        {
          "project": "Duke Idealab",
          "hours": 8
        },
      ],
      "2019-04-04": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-05": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-08": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-09": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-10": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-11": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-12": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-15": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-16": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-17": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-18": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-19": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-22": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-23": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-24": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-25": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-26": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ]
    },
    "c3bcc6aa-66f6-4b25-bffe-cd7dc7c57cdf": {
      "2019-03-04": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-07": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-08": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-09": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-11": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-13": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-14": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-15": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-18": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-19": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-20": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-21": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-22": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-25": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-26": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-27": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-28": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-03-29": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-01": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-02": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-03": [
        {
          "project": "Duke Idealab",
          "hours": 8
        },
      ],
      "2019-04-04": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-05": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-08": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-09": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-10": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-11": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-12": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-15": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-16": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-17": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-18": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-19": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-22": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-23": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-24": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-25": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-04-26": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ]
    },
    "693572fc-73f2-44ec-8200-fd3b7c61a00d": {
      "2019-03-11": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-03-13": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-03-14": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-03-15": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-03-18": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-03-19": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-03-20": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-03-21": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-03-22": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-03-25": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-03-26": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-03-27": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-03-28": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-03-29": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-01": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-02": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-03": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        },
      ],
      "2019-04-04": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-05": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-08": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-09": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-10": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-11": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-12": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-15": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-16": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-17": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-18": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-19": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-22": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-23": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-24": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-25": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-04-26": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ]
    }
  };
}
