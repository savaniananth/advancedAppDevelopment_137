package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AddUserResume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    private String firstName;
    private String middleName;
    private String lastName;
    private int age;
    private String preferingjob;
    private String language;
    private String aboutinfo;
    private String facebook;
    private String linkedin;
    private String twitter;
    private String googleplus;
    private String country;
    private String state;
    private String fulladdress;
    private String latitude;
    private String longitude;
    
    public int getUserId() {
        return userId;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getMiddleName() {
        return middleName;
    }
    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public String getPreferingjob() {
        return preferingjob;
    }
    public void setPreferingjob(String preferingjob) {
        this.preferingjob = preferingjob;
    }
    public String getLanguage() {
        return language;
    }
    public void setLanguage(String language) {
        this.language = language;
    }
    public String getAboutinfo() {
        return aboutinfo;
    }
    public void setAboutinfo(String aboutinfo) {
        this.aboutinfo = aboutinfo;
    }
    public String getFacebook() {
        return facebook;
    }
    public void setFacebook(String facebook) {
        this.facebook = facebook;
    }
    public String getLinkedin() {
        return linkedin;
    }
    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }
    public String getTwitter() {
        return twitter;
    }
    public void setTwitter(String twitter) {
        this.twitter = twitter;
    }
    public String getGoogleplus() {
        return googleplus;
    }
    public void setGoogleplus(String googleplus) {
        this.googleplus = googleplus;
    }
    public String getCountry() {
        return country;
    }
    public void setCountry(String country) {
        this.country = country;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public String getFulladdress() {
        return fulladdress;
    }
    public void setFulladdress(String fulladdress) {
        this.fulladdress = fulladdress;
    }
    public String getLatitude() {
        return latitude;
    }
    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }
    public String getLongitude() {
        return longitude;
    }
    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }
    @Override
    public String toString() {
        return "AddUserResume [userId=" + userId + ", firstName=" + firstName + ", middleName=" + middleName
                + ", lastName=" + lastName + ", age=" + age + ", preferingjob=" + preferingjob + ", language="
                + language + ", aboutinfo=" + aboutinfo + ", facebook=" + facebook + ", linkedin=" + linkedin
                + ", twitter=" + twitter + ", googleplus=" + googleplus + ", country=" + country + ", state=" + state
                + ", fulladdress=" + fulladdress + ", latitude=" + latitude + ", longitude=" + longitude + "]";
    }
}
