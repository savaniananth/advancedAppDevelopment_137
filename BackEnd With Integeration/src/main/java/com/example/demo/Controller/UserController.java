package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.AdminJob;
import com.example.demo.Model.UserAppliedJob;
import com.example.demo.Service.UserAppliedService;

@CrossOrigin("*")
@RestController
public class UserController {
        @Autowired
    UserAppliedService service;

    @PostMapping("/user/postJob")
	public UserAppliedJob add(@RequestBody UserAppliedJob Jobpost ) {
		System.out.println(Jobpost);
		return service.addUserAppliedJob(Jobpost);
	}
	
	@GetMapping("/user/getJob")
	public java.util.List<UserAppliedJob> read(){
		return service.getUserAppliedJob();
	}
	@DeleteMapping("/user/jobpost/{id}")
	public String delete(@PathVariable int id) {
		return service.DeleteJobById(id);
	}
	@PutMapping("/user/updatepostJob/{id}")
	public String putMethodName( @RequestBody UserAppliedJob entity) {
		return service.updateResume(entity);
	}
}	
