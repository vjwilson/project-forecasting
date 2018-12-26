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
      "lastName": "Martindale",
      "firstName": "Karissa",
      "title": "Practice Manager",
      "practice": "UX",
      "specialty": "Front-end Developer",
      "city": "Charlotte"
    },
    {
      "lastName": "Luciano",
      "firstName": "Lesley",
      "title": "Principal II",
      "practice": "UX",
      "specialty": "UX Architect",
      "city": "Charlotte"
    },
    {
      "lastName": "Tallman",
      "firstName": "Matthew",
      "title": "Practice Manager",
      "practice": "UX",
      "specialty": "",
      "city": "Cincinnati"
    },
    {
      "lastName": "Hudson",
      "firstName": "Sarah",
      "title": "Senior II",
      "practice": "UX",
      "specialty": "Front-end Developer",
      "city": "Charlotte"
    },
    {
      "lastName": "Wiser",
      "firstName": "Andria",
      "title": "Senior I",
      "practice": "UX",
      "specialty": "Designer",
      "city": "Tampa"
    },
    {
      "lastName": "Sutton",
      "firstName": "Ariana",
      "title": "Staff II",
      "practice": "UX",
      "specialty": "Designer",
      "city": "Charlotte"
    },
    {
      "lastName": "Boyette",
      "firstName": "Ellen",
      "title": "Staff II",
      "practice": "UX",
      "specialty": "Front-end Developer",
      "city": "Charlotte"
    },
    {
      "lastName": "Mitchell",
      "firstName": "Erica",
      "title": "Staff I",
      "practice": "UX",
      "specialty": "Front-end Developer",
      "city": "Charlotte"
    },
    {
      "lastName": "Meyer",
      "firstName": "Gary",
      "title": "Staff I",
      "practice": "UX",
      "specialty": "Designer",
      "city": "Raleigh"
    },
      {
      "lastName": "LoCascio",
      "firstName": "Kiley",
      "title": "",
      "practice": "UX",
      "specialty": "",
      "city": "Cincinnati"
    },
    {
      "lastName": "Boyce",
      "firstName": "Leilani",
      "title": "Principal I",
      "practice": "UX",
      "specialty": "UX Architect",
      "city": "Charlotte"
    },
    {
      "lastName": "Bisbo",
      "firstName": "Rachael",
      "title": "Staff I",
      "practice": "UX",
      "specialty": "UX Architect",
      "city": "Charlotte"
    },
    {
      "lastName": "Cowles",
      "firstName": "Rachel",
      "title": "Associate II",
      "practice": "UX",
      "specialty": "Designer",
      "city": "Charlotte"
    },
    {
      "lastName": "Doran",
      "firstName": "Sarah",
      "title": "Staff II",
      "practice": "UX",
      "specialty": "Front-end Developer",
      "city": "Charlotte"
    },
    {
      "lastName": "Wilson",
      "firstName": "Van",
      "title": "Senior II",
      "practice": "UX",
      "specialty": "Front-end Developer",
      "city": "Charlotte"
    }
  ];
}
