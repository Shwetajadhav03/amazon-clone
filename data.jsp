<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import="java.sql.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<% 
String name=request.getParameter("name");
String email=request.getParameter("EmailID");
String password=request.getParameter("password");
String cpassword=request.getParameter("cpassword");
Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/amazon","root","root");
String sql="insert into signin(Name,Email_Id,Password,Confirm_password)values(?,?,?,?)";
PreparedStatement ps=con.prepareStatement(sql);
ps.setString(1,name);
ps.setString(2,email);
ps.setString(6,password);
ps.setString(7,cpassword);
int done=ps.executeUpdate();
if(done>0){%>
<script>
alert("success");
location.href="register.html";
</script>
<%}else{%>
<script>
alert("fail");
location.href="login.html";
</script>
<%} %>
</body>
</html>