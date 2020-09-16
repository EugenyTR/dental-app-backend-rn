const express = require('express');
const cors = require('cors');

const db = require('./core/db');
const {
    patientValidation,
    appointmentValidation
} = require('./utils/validation');
const {
    PatientCtrl,
    AppointmentCtrl
} = require('./controllers');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/patients', PatientCtrl.all);
app.post('/patients', patientValidation.create, PatientCtrl.create);

app.get('/appointments', AppointmentCtrl.all);
app.post('/appointments', appointmentValidation.create, PatientCtrl.create);

app.listen(6666, function (err) {
    if (err) {
        return console.log(err);
    }

    console.log('Server runned!')
});