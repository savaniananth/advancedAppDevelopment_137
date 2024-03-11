package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.AddUserResume;
import com.example.demo.Model.UserAppliedJob;
import com.example.demo.Repository.UserAppliedJobRepo;




@Service
public class UserAppliedService {

  @Autowired
    UserAppliedJobRepo repository;
    
    public UserAppliedJob addUserAppliedJob(UserAppliedJob Jobpost) {
		return repository.save(Jobpost);
		
	}
    public List<UserAppliedJob> getUserAppliedJob(){
		return repository.findAll();
	}
    public String DeleteJobById(int id) {
		repository.deleteById(id);;
		return "deleted";
	}
   public String updateResume(UserAppliedJob UserAppliedJob){
		Optional<UserAppliedJob> admin = repository.findById(UserAppliedJob.getJobId());
		if(admin.isEmpty()){
			return "No user Exist";
		}
		admin.get().setJobTitle(UserAppliedJob.getJobTitle());
		admin.get().setJobLocation(UserAppliedJob.getJobLocation());
		admin.get().setJobType(UserAppliedJob.getJobType());
		return "update success";
   }
}
