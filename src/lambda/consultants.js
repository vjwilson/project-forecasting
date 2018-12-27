// show object spread works, i.e. babel works
const consultants = getConsultants();

export function handler(event, context, callback) {
  console.log('queryStringParameters', event.queryStringParameters);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: consultants })
  });
}

function getConsultants() {
  return [
    {
      "guid": "3e9e4701-d2a2-4068-9844-d4e859de6096",
      "slug": "karissa-martindale",
      "email": "Karissa.Martindale@insight.com",
      "talents": [
        "SharePoint",
        "JavaScript"
      ],
      "lastName": "Martindale",
      "firstName": "Karissa",
      "title": "Practice Manager",
      "practice": "UX",
      "specialty": "Front-end Developer",
      "city": "Charlotte"
    },
    {
      "guid": "efe73f07-efa2-4e45-999b-4d9b99635803",
      "slug": "lesley-luciano",
      "email": "Lesley.Luciano@insight.com",
      "talents": [
        "Research",
        "User Testing",
        "Accessibility"
      ],
      "lastName": "Luciano",
      "firstName": "Lesley",
      "title": "Principal II",
      "practice": "UX",
      "specialty": "UX Architect",
      "city": "Charlotte"
    },
    {
      "guid": "912d7afd-03bd-4d79-b7bd-d2393468e57f",
      "slug": "matthew-tallman",
      "email": "Matthew.Tallman@insight.com",
      "talents": [
        "SharePoint",
        "Office365"
      ],
      "lastName": "Tallman",
      "firstName": "Matthew",
      "title": "Practice Manager",
      "practice": "Modern Workplace",
      "specialty": "",
      "city": "Cincinnati"
    },
    {
      "guid": "184fef9c-e84d-4a69-be9c-89032c8ade34",
      "slug": "sarah-hudson",
      "email": "Sarah.Hudson@insight.com",
      "talents": [
        "CSS",
        "JavaScript",
        "AngularJS",
        "Angular",
        "Accessibility"
      ],
      "lastName": "Hudson",
      "firstName": "Sarah",
      "title": "Senior II",
      "practice": "UX",
      "specialty": "Front-end Developer",
      "city": "Charlotte"
    },
    {
      "guid": "636d397a-ea75-4798-b56d-32db0332b937",
      "slug": "andria-wiser",
      "email": "Andria.Wiser@insight.com",
      "talents": [
        "HTML",
        "CSS",
        "Sketch"
      ],
      "lastName": "Wiser",
      "firstName": "Andria",
      "title": "Senior I",
      "practice": "UX",
      "specialty": "Designer",
      "city": "Tampa"
    },
    {
      "guid": "3f985e41-1499-4802-ba50-c5100b3189c0",
      "slug": "ariana-sutton",
      "email": "Ariana.Sutton@insight.com",
      "talents": [
        "Sketch",
        "Analytics"
      ],
      "lastName": "Sutton",
      "firstName": "Ariana",
      "title": "Staff II",
      "practice": "UX",
      "specialty": "Designer",
      "city": "Charlotte"
    },
    {
      "guid": "00d9a80b-9fe4-4bcf-be45-dd37315800ff",
      "slug": "ellen-boyette",
      "email": "Ellen.Boyette@insight.com",
      "talents": [
        "Sketch",
        "Invision",
        "Design Systems"
      ],
      "lastName": "Boyette",
      "firstName": "Ellen",
      "title": "Staff II",
      "practice": "UX",
      "specialty": "Front-end Developer",
      "city": "Charlotte"
    },
    {
      "guid": "14698158-c56c-435a-a535-f07456c599c2",
      "slug": "erica-mitchell",
      "email": "Erica.Mitchell@insight.com",
      "talents": [
        "React",
        "JavaScript"
      ],
      "lastName": "Mitchell",
      "firstName": "Erica",
      "title": "Staff I",
      "practice": "UX",
      "specialty": "Front-end Developer",
      "city": "Charlotte"
    },
    {
      "guid": "0cf84361-c929-4c21-b428-78a801f8a8e2",
      "slug": "gary-meyer",
      "email": "Gary.Meyer@insight.com",
      "talents": [
        "Sketch",
        "Invision"
      ],
      "lastName": "Meyer",
      "firstName": "Gary",
      "title": "Staff I",
      "practice": "UX",
      "specialty": "Designer",
      "city": "Raleigh"
    },
      {
      "guid": "db21253f-06ed-4a35-a2f9-825d536dd20d",
      "slug": "kiley-locascio",
      "email": "Kiley.LoCascio@insight.com",
      "talents": [
        "Research",
        "JavaScript"
      ],
      "lastName": "LoCascio",
      "firstName": "Kiley",
      "title": "",
      "practice": "UX",
      "specialty": "",
      "city": "Cincinnati"
    },
    {
      "guid": "ff2abcf2-a6fc-4d7e-908c-2cfd572ca1e5",
      "slug": "leilani-boyce",
      "email": "@insight.com",
      "talents": [
        "SharePoint",
        "JavaScript"
      ],
      "lastName": "Boyce",
      "firstName": "Leilani",
      "title": "Principal I",
      "practice": "UX",
      "specialty": "UX Architect",
      "city": "Charlotte"
    },
    {
      "guid": "3a970c27-7821-47b1-9462-534dc27e6979",
      "slug": "rachael-bisbo",
      "email": "Rachael.Bisbo@insight.com",
      "talents": [
        "User Testing",
        "Analytics"
      ],
      "lastName": "Bisbo",
      "firstName": "Rachael",
      "title": "Staff I",
      "practice": "UX",
      "specialty": "UX Architect",
      "city": "Charlotte"
    },
    {
      "guid": "2b6a3edb-ecd7-4e84-acdd-7ae06b743fb0",
      "slug": "rachel-cowles",
      "email": "Rachel.Cowles@insight.com",
      "talents": [
        "Sketch",
        "Invision",
        "Zeplin"
      ],
      "lastName": "Cowles",
      "firstName": "Rachel",
      "title": "Associate II",
      "practice": "UX",
      "specialty": "Designer",
      "city": "Charlotte"
    },
    {
      "guid": "c3bcc6aa-66f6-4b25-bffe-cd7dc7c57cdf",
      "slug": "sarah-doran",
      "email": "Sarah.Doran@insight.com",
      "talents": [
        "CSS",
        "SASS",
        "Angular",
        "JavaScript"
      ],
      "lastName": "Doran",
      "firstName": "Sarah",
      "title": "Staff II",
      "practice": "UX",
      "specialty": "Front-end Developer",
      "city": "Charlotte"
    },
    {
      "guid": "693572fc-73f2-44ec-8200-fd3b7c61a00d",
      "slug": "van-wilson",
      "email": "Van.Wilson@insight.com",
      "talents": [
        "React",
        "DevOps",
        "JavaScript",
        "Performance"
      ],
      "lastName": "Wilson",
      "firstName": "Van",
      "title": "Senior II",
      "practice": "UX",
      "specialty": "Front-end Developer",
      "city": "Charlotte"
    }
  ];
}
