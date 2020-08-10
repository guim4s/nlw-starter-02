const database = require("./db");
const createProffy = require("./createProffy");

database.then(async (db) => {
  // inserir dados no banco
  proffyValue = {
    name: "Guilherme Wendt",
    avatar:
      "https://avatars2.githubusercontent.com/u/1280059?s=460&u=11341a9cc288073e794e08305a01b1d9759d88f8&v=4",
    whatsapp: "51019238091283",
    bio: "Instrutor de Física",
  };

  classValue = {
    subject: 1,
    cost: "20",
  };

  classScheduleValues = [
    // o class_id virá automaticamente pelo banco de dados
    {
      weekday: 0,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 2,
      time_from: 520,
      time_to: 1220,
    },
  ];

  //   await createProffy(db, { proffyValue, classValue, classScheduleValues });

  // consultar os dados inseridos
  const selectedProffys = await db.all("SELECT * FROM proffys");
  //   console.log(selectedProffys);

  // consultar as classes de um determinado professor
  // e trazer junto os dados dele também

  const selectClassesAndProffys = await db.all(`
      SELECT classes.*, proffys.*
      FROM proffys
      JOIN classes ON (classes.proffy_id = proffys.id) 
      WHERE classes.proffy_id = 1
  `);

  //   console.log(selectClassesAndProffys);

  // o horario que a pessoa trabalha por exemplo, é das 8h as 18h
  // o horario do time_from (8h) precisa ser menor ou igual ao horario solicitado
  // o time_to precisa ser acima

  const selectClassesSchedules = await db.all(`
      SELECT class_schedule.*
      FROM class_schedule
      WHERE class_schedule.class_id = 1
      AND class_schedule.weekday = "0"
      AND class_schedule.time_from <= "1320"
      AND class_schedule.time_to > "1320"
  `);

  console.log(selectClassesSchedules);
});
