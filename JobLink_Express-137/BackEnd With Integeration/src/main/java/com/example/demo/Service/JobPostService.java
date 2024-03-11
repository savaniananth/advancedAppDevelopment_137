package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.AdminJob;
import com.example.demo.Repository.JobPostRepo;

@Service
public class JobPostService {

    @Autowired
    JobPostRepo repository;
    
    public AdminJob addJob(AdminJob Jobpost) {
		return repository.save(Jobpost);
		
	}
    public List<AdminJob> getJob(){
		return repository.findAll();
	}
    public String DeleteJobById(int id) {
		repository.deleteById(id);;
		return "deleted";
	}
	public String updateJob(AdminJob adminJob){
		Optional<AdminJob> admin = repository.findById(adminJob.getJobId());
		if(admin.isEmpty()){
			return "No user Exist";
		}
		if(adminJob.getCarrerLevel()!=null)
		admin.get().setCarrerLevel(adminJob.getCarrerLevel());
		if(adminJob.getJobTitle()!=null)
		admin.get().setJobTitle(adminJob.getJobTitle());
		if(adminJob.getJobDescription()!=null)
		admin.get().setJobDescription(adminJob.getJobDescription());
		if(adminJob.getEmail()!=null)
		admin.get().setEmail(adminJob.getEmail());
		if(adminJob.getUserName()!=null)
		admin.get().setUserName(adminJob.getUserName());
		if(adminJob.getIndustry()!=null)
		admin.get().setIndustry(adminJob.getIndustry());
		if(adminJob.getJobType()!=null)
		admin.get().setJobType(adminJob.getJobType());
		if(adminJob.getExperience()!=null)
		admin.get().setExperience(adminJob.getExperience());
		if(adminJob.getCity()!=null)
		admin.get().setCity(adminJob.getCity());
		if(adminJob.getQualification()!=null)
		admin.get().setQualification(adminJob.getQualification());
		if(adminJob.getSpecialisms()!=null)
		admin.get().setSpecialisms(adminJob.getSpecialisms());
		if(adminJob.getSalary()!=0	)
		admin.get().setSalary(adminJob.getSalary());
		if(adminJob.getDeadLine()!=null)
		admin.get().setDeadLine(adminJob.getDeadLine());
		repository.save(admin.get());
		return "Updated Successfully";
	}

	public Optional<AdminJob> getJobById(int id) {
        return repository.findById(id);
    }
    

}
