var express = require('express');
var router = express.Router();

const passport = require('passport');

require('./../middleware/passport')(passport);

const BlogController = require('../controllers/employee.controller');
// const UserAccountController = require('../controllers/userAccount.controller');
// router.post('/login', UserAccountController.login);
// router.post('/refreshToken', UserAccountController.refreshToken);

router.post('/getAllBlogs', BlogController.getAllBlogs);

// router.post('/createBankDetails', EmployeeController.createBankDetails);
// router.post('/getBankDetails', EmployeeController.getBankDetails);
// router.get('/getAllBank', EmployeeController.getAllBank);

// router.post('/createEmployee', EmployeeController.createEmployee);
// router.get('/getDesignation', EmployeeController.getDesignation);
// router.get('/getRole', EmployeeController.getRole);
// router.get('/getDepartment', EmployeeController.getDepartment);
// router.get('/getEmployees', EmployeeController.getEmployees);
// router.post('/postFile', EmployeeController.postFile);
// router.post('/getEmployeeDetails', EmployeeController.getEmployeeDetails);

// router.post('/deleteEmployee', EmployeeController.deleteEmployee);

// router.post('/getEmployee', EmployeeController.getEmployee);
// router.post('/updateEmployee', EmployeeController.updateEmployee);

module.exports = router;
