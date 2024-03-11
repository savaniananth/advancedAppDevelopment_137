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

import com.example.demo.Model.AddPreimumJobs;
import com.example.demo.Model.AddUserResume;

import com.example.demo.Service.AddUserResumeService;

@CrossOrigin("*")
@RestController
public class AddUserResumeControllerRepo {
        @Autowired
    AddUserResumeService service;

    @PostMapping("/user/resume/postresume")
	public AddUserResume add(@RequestBody AddUserResume Jobpost ) {
		return service.addResume(Jobpost);
	}
	
	@GetMapping("/user/resume/gettresume")
	public java.util.List<AddUserResume> read(){
		return service.getReusme();
	}
	@DeleteMapping("/user/resume/deleteresume/{id}")
	public String delete(@PathVariable int id) {
		return service.DeleteResumeById(id);
	}
	@PutMapping("/user/resume/updateresume")
	public String putMethodName( @RequestBody AddUserResume entity) {
		return service.updateResume(entity);
	}
	
}
