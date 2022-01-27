package calculator;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Calc
 */
@WebServlet("/calc")
public class Calc extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	  resp.setCharacterEncoding("utf-8");
	  resp.setContentType("text/html charset:utf-8");
	  
	  String x_ = req.getParameter("x");
	  String y_ = req.getParameter("y");
	  String btn_ =req.getParameter("btn");
	  
	  int x = 0;
	  int y = 0;
	  int result = 0;
	  if(!x_.equals("")) { x = Integer.parseInt(x_);
	  
	  }
	  if(!y_.equals("")) { y = Integer.parseInt(y_);
	  }
	  if(btn_.equals("plus")) {
		result = x + y;  
	  }
	  if(btn_.equals("minus")) {
		  result = x - y;
	  }
	  PrintWriter out = resp.getWriter();
	  out.println(result);
	}
}
