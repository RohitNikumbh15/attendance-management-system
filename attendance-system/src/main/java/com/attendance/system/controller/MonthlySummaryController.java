package com.attendance.system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.attendance.system.entity.MonthlySummary;
import com.attendance.system.service.MonthlySummaryService;

@RestController
@RequestMapping("/api/monthly-summary")
@CrossOrigin("*")
public class MonthlySummaryController {

    @Autowired
    private MonthlySummaryService monthlySummaryService;

    @PostMapping
    public MonthlySummary saveSummary(@RequestBody MonthlySummary summary) {
        return monthlySummaryService.saveSummary(summary);
    }

    @GetMapping
    public List<MonthlySummary> getAllSummary() {
        return monthlySummaryService.getAllSummary();
    }
}