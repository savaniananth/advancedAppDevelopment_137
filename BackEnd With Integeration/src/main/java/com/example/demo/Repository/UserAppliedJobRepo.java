package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.UserAppliedJob;

@Repository
public interface UserAppliedJobRepo extends JpaRepository<UserAppliedJob,Integer> {

}

    
