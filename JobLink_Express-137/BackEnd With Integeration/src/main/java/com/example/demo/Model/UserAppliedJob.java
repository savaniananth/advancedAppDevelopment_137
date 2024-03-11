package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserAppliedJob {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int JobId;
    private String JobTitle;
    private String JobLocation;
    private String JobType;
    public int getJobId() {
        return JobId;
    }
    @Override
    public String toString() {
        return "UserAppliedJob [JobId=" + JobId + ", JobTitle=" + JobTitle + ", JobLocation=" + JobLocation
                + ", JobType=" + JobType + "]";
    }
    public void setJobId(int jobId) {
        JobId = jobId;
    }
    public String getJobTitle() {
        return JobTitle;
    }
    public void setJobTitle(String jobTitle) {
        JobTitle = jobTitle;
    }
    public String getJobLocation() {
        return JobLocation;
    }
    public void setJobLocation(String jobLocation) {
        JobLocation = jobLocation;
    }
    public String getJobType() {
        return JobType;
    }
    public void setJobType(String jobType) {
        JobType = jobType;
    }
}
