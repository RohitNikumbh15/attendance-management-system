package com.attendance.system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.attendance.system.entity.AttendanceRecord;
import com.attendance.system.service.AttendanceService;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin("*")
public class AttendanceController {

    @Autowired
    private AttendanceService attendanceService;

    @PostMapping
    public AttendanceRecord markAttendance(@RequestBody AttendanceRecord attendance) {
        return attendanceService.saveAttendance(attendance);
    }

    @GetMapping
    public List<AttendanceRecord> getAllAttendance() {
        return attendanceService.getAllAttendance();
    }
}