package com.attendance.system.service;

import java.time.Duration;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.attendance.system.entity.AttendanceRecord;
import com.attendance.system.repository.AttendanceRepository;

@Service
public class AttendanceService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    public AttendanceRecord saveAttendance(
            AttendanceRecord attendance
    ) {

        LocalTime inTime =
                attendance.getInTime();

        LocalTime outTime =
                attendance.getOutTime();

        // TOTAL WORKING HOURS

        double totalHours =
                Duration.between(
                        inTime,
                        outTime
                ).toMinutes() / 60.0;

        attendance.setTotalHours(totalHours);

        // OVERTIME HOURS

        double overtime = 0;

        if (totalHours > 8) {

            overtime = totalHours - 8;
        }

        attendance.setOvertimeHours(overtime);

        // DAILY SALARY

        double hourlyRate = 65.97;

        double salary =
                totalHours * hourlyRate;

        attendance.setDailySalary(salary);

        return attendanceRepository
                .save(attendance);
    }

    public List<AttendanceRecord>
    getAllAttendance() {

        return attendanceRepository.findAll();
    }
}