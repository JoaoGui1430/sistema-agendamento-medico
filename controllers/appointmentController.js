const { appointments } = require('../data/db');

exports.createAppointment = (req, res) => {
  const { patientName, date, time, doctor } = req.body;
  const appointment = {
    id: Date.now(),
    patientName,
    date,
    time,
    doctor,
    userId: req.user.id,
  };
  appointments.push(appointment);
  res.json(appointment);
};

exports.getAppointments = (req, res) => {
  const userAppointments = appointments.filter(a => a.userId === req.user.id);
  res.json(userAppointments);
};

exports.deleteAppointment = (req, res) => {
  const index = appointments.findIndex(a => a.id == req.params.id && a.userId === req.user.id);
  if (index === -1) return res.status(404).json({ msg: 'Agendamento não encontrado' });
  appointments.splice(index, 1);
  res.json({ msg: 'Agendamento removido' });
};
