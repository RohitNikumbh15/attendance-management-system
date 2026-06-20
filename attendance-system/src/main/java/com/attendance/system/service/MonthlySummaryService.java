package com.attendance.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.attendance.system.entity.MonthlySummary;
import com.attendance.system.repository.MonthlySummaryRepository;

@Service
public class MonthlySummaryService {

    @Autowired
    private MonthlySummaryRepository monthlySummaryRepository;

    public MonthlySummary saveSummary(MonthlySummary summary) {
        return monthlySummaryRepository.save(summary);
    }

    public List<MonthlySummary> getAllSummary() {
        return monthlySummaryRepository.findAll();
    }
}