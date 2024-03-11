package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AdminJob {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int JobId;
    private String JobTitle;
    private String JobDescription;
    private String Email;
    private String UserName;
    private String Industry;
    private String JobType;
    private String CarrerLevel;
    private String Experience;
    private String City;
    private String Qualification;
    private String Specialisms;
    private int Salary;
    private String DeadLine;

    public int getJobId() {
        return JobId;
    }
    public void setJobId(int jobId) {
        this.JobId = jobId;
    }
    
    @Override
    public String toString() {
        return "AdminJob [JobId=" + JobId + ", JobTitle=" + JobTitle + ", JobDescription=" + JobDescription + ", Email="
                + Email + ", UserName=" + UserName + ", Industry=" + Industry + ", JobType=" + JobType
                + ", CarrerLevel=" + CarrerLevel + ", Experience=" + Experience + ", City=" + City + ", Qualification="
                + Qualification + ", Specialisms=" + Specialisms + ", Salary=" + Salary + ", DeadLine=" + DeadLine
                + "]";
    }
    public String getJobTitle() {
        return JobTitle;
    }
    public void setJobTitle(String jobTitle) {
        this.JobTitle = jobTitle;
    }
    public String getJobDescription() {
        return JobDescription;
    }
    public void setJobDescription(String jobDescription) {
       this.JobDescription = jobDescription;
    }
    public String getEmail() {
        return Email;
    }
    public void setEmail(String email) {
       this.Email = email;
    }
    public String getUserName() {
        return UserName;
    }
    public void setUserName(String userName) {
        this.UserName = userName;
    }
    public String getIndustry() {
        return Industry;
    }
    public void setIndustry(String industry) {
        this.Industry = industry;
    }
    public String getJobType() {
        return JobType;
    }
    public void setJobType(String jobType) {
        this.JobType = jobType;
    }
    public String getCarrerLevel() {
        return CarrerLevel;
    }
    public void setCarrerLevel(String carrerLevel) {
        this.CarrerLevel = carrerLevel;
    }
    public String getExperience() {
        return Experience;
    }
    public void setExperience(String experience) {
        this.Experience = experience;
    }
    public String getCity() {
        return City;
    }
    public void setCity(String city) {
        this.City = city;
    }
    public String getQualification() {
        return Qualification;
    }
    public void setQualification(String qualification) {
        this.Qualification = qualification;
    }
    public String getSpecialisms() {
        return Specialisms;
    }
    public void setSpecialisms(String specialisms) {
        this.Specialisms = specialisms;
    }
    public int getSalary() {
        return Salary;
    }
    public void setSalary(int salary) {
        this.Salary = salary;
    }
    public String getDeadLine() {
        return DeadLine;
    }
    public void setDeadLine(String deadLine) {
       this.DeadLine = deadLine;
    }
    public AdminJob(int jobId, String jobTitle, String jobDescription, String email, String userName, String industry,
            String jobType, String carrerLevel, String experience, String city, String qualification,
            String specialisms, int salary, String deadLine) {
        JobId = jobId;
        JobTitle = jobTitle;
        JobDescription = jobDescription;
        Email = email;
        UserName = userName;
        Industry = industry;
        JobType = jobType;
        CarrerLevel = carrerLevel;
        Experience = experience;
        City = city;
        Qualification = qualification;
        Specialisms = specialisms;
        Salary = salary;
        DeadLine = deadLine;
    }


    public AdminJob() {

    }
    
}
