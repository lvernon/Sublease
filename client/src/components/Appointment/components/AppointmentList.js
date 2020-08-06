import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import axios from 'axios'
import { deleteAppointment } from '../actions/AppointmentsActions';

class AppointmentList extends Component {
    onDeleteAppointment = (appointmentId) => {
        this.props.deleteAppointment(appointmentId.startTime);
    }

    renderAppointment = (appointment) => {
        let startTime1 = moment.unix(appointment.startTime).format('MMMM Do, YYYY (hh:mm a)');
        let endTime1 = moment.unix(appointment.endTime).format('MMMM Do, YYYY (hh:mm a)');

        return (
            <li key={appointment.startTime} className="list-group-item">
                <strong>Patient ID: </strong>
                <span>{appointment.patientId}</span>
                <strong> Patient name: </strong>
                <span>{appointment.name}</span>
                <strong> Starting Time: </strong>
                <span>{startTime1}</span>
                <span> - </span>
                <strong> Ending Time: </strong>
                <span>{endTime1}</span>
                <button onClick={this.onDeleteAppointment.bind(this, appointment)} className="btn btn-sm btn-warning float-right">Delete</button>
            </li>
        );
    }

    render() {
        return (
            <ul className="list-group">
                {console.log("Appointments from AppointmentList.js", this.props.appointments)}
                {this.props.appointments.map((element) => {console.log("Appointment mapping called"); return this.renderAppointment(element)})}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        appointments: state.appointments.items
    }
};

export default connect(mapStateToProps, {
    deleteAppointment
})(AppointmentList);