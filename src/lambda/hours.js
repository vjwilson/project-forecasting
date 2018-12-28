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
      "2018-12-24": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ],
      "2018-12-26": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ],
      "2018-12-27": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ],
      "2018-12-28": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ],
      "2018-12-31": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ],
      "2019-01-02": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ],
      "2019-01-03": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ],
      "2019-01-04": [
        {
          "project": "Duke Sharepoint",
          "hours": 2
        },
        {
          "project": "BOFA Sitecore",
          "hours": 2
        }
      ]
    },
    "efe73f07-efa2-4e45-999b-4d9b99635803": {
      "2018-12-24": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2018-12-26": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2018-12-27": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2018-12-28": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "2018-12-31": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "201-01-02": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "201-01-03": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ],
      "201-01-04": [
        {
          "project": "Ally Investment Site",
          "hours": 8
        }
      ]
    },
    "184fef9c-e84d-4a69-be9c-89032c8ade34": {
      "2018-12-24": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2018-12-26": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2018-12-27": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2018-12-28": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2018-12-31": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-01-02": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-01-03": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-01-04": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ]
    },
    "3f985e41-1499-4802-ba50-c5100b3189c0": {
      "2018-12-24": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2018-12-26": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2018-12-27": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2018-12-28": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2018-12-31": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-01-02": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-01-03": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ],
      "2019-01-04": [
        {
          "project": "Canteen",
          "hours": 8
        }
      ]
    },
    "00d9a80b-9fe4-4bcf-be45-dd37315800ff": {
      "2018-12-24": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2018-12-26": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2018-12-27": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2018-12-28": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2018-12-31": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-01-02": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-01-03": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-01-04": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ]
    },
    "14698158-c56c-435a-a535-f07456c599c2": {
      "2018-12-24": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2018-12-26": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2018-12-27": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2018-12-28": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2018-12-31": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-01-02": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-01-03": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ],
      "2019-01-04": [
        {
          "project": "WIMS Internal Site",
          "hours": 8
        }
      ]
    },
    "0cf84361-c929-4c21-b428-78a801f8a8e2": {
      "2018-12-24": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ],
      "2018-12-26": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ],
      "2018-12-27": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ],
      "2018-12-28": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ],
      "2018-12-31": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ],
      "2019-01-02": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ],
      "2019-01-03": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ],
      "2019-01-04": [
        {
          "project": "NC DOT Employee Site",
          "hours": 8
        }
      ]
    },
    "ff2abcf2-a6fc-4d7e-908c-2cfd572ca1e5": {
      "2018-12-24": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ],
      "2018-12-26": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ],
      "2018-12-27": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ],
      "2018-12-28": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ],
      "2018-12-31": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ],
      "2019-01-02": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ],
      "2019-01-03": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ],
      "2019-01-04": [
        {
          "project": "Family Dollar Tracker Mobile App",
          "hours": 8
        }
      ]
    },
    "3a970c27-7821-47b1-9462-534dc27e6979": {
      "2018-12-24": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2018-12-26": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2018-12-27": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2018-12-28": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2018-12-31": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-01-02": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-01-03": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ],
      "2019-01-04": [
        {
          "project": "Ally Microsite",
          "hours": 8
        }
      ]
    },
    "2b6a3edb-ecd7-4e84-acdd-7ae06b743fb0": {
      "2018-12-24": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2018-12-26": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2018-12-27": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2018-12-28": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2018-12-31": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-01-02": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-01-03": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-01-04": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ]
    },
    "c3bcc6aa-66f6-4b25-bffe-cd7dc7c57cdf": {
      "2018-12-24": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2018-12-26": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2018-12-27": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2018-12-28": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2018-12-31": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-01-02": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-01-03": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ],
      "2019-01-04": [
        {
          "project": "Duke Idealab",
          "hours": 8
        }
      ]
    },
    "693572fc-73f2-44ec-8200-fd3b7c61a00d": {
      "2018-12-31": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-01-02": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-01-03": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-01-04": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-01-07": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-01-08": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-01-09": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-01-10": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-01-11": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-01-14": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-01-15": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-01-16": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-01-17": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ],
      "2019-01-18": [
        {
          "project": "EPRI Member Center",
          "hours": 8
        }
      ]
    }
  };
}
