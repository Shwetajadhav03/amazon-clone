<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page import="java.sql.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<% 
String email=request.getParameter("email");
String password=request.getParameter("password");
Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/amazon","root","root");
String sql="select * from user where email=? and password=?";
PreparedStatement ps=con.prepareStatement(sql);
ps.setString(1,email);
ps.setString(2,password);
ResultSet rs=ps.executeQuery();
if(rs.next()){
session.setAttribute("email",rs.getString(1));
session.setAttribute("password",rs.getString(2));
%>
<script>
alert("success");
location.href="index.html";
</script>
<%}else{%>
<script>
alert("fail");
location.href="retsignin.html";
</script>
<%}%>

</body>
</html>