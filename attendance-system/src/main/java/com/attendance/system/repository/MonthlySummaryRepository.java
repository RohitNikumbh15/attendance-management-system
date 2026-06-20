package com.attendance.system.repository;


import com.attendance.system.entity.MonthlySummary;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MonthlySummaryRepository extends JpaRepository<MonthlySummary, Long> {
}