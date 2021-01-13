db = db.getSiblingDB("programme_db");

db.programme_tb.insertMany([
    {
        "course_code": 100,
        "course_name": "Data Mining",
        "semester": "first",
        "type" : "mandatory"
    },
    {
        "course_code": 101,
        "course_name": "Python Language",
        "semester": "first",
        "type" : "mandatory"
    },
    {
        "course_code": 102,
        "course_name": "Machine Learning Methods and Algorithms",
        "semester": "first",
        "type" : "mandatory"
    },
    {
        "course_code": 103,
        "course_name": "Database Management",
        "semester": "first",
        "type" : "mandatory"
    },
    {
        "course_code": 200,
        "course_name": "Big Data Tools",
        "semester": "second",
        "type" : "mandatory"
    },
    {
        "course_code": 201,
        "course_name": "Machine Learning Practice",
        "semester": "second",
        "type" : "mandatory"
    },
    {
        "course_code": 202,
        "course_name": "Big Data Analytics Applications",
        "semester": "second",
        "type" : "mandatory"
    },
    {
        "course_code": 203,
        "course_name": "Business Process Analytics",
        "semester": "second",
        "type" : "mandatory"
    },
]);
