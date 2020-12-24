package com.market.app.db;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@RunWith(SpringJUnit4ClassRunner.class)
public class ConnectionTest {
    private static final String DRIVER = "com.mysql.jdbc.Driver";
    private static final String URL = "jdbc:mysql://127.0.0.1:3306/market?serverTimezone=UTC&useUnicode=true&characterEncoding=utf8&useSSL=false";
    private static final String USER ="root";
    private static final String PW = "";

    @Test
    public void 커넥션_테스트() throws ClassNotFoundException {
        Class.forName(DRIVER);

        try(Connection con = DriverManager.getConnection(URL, USER, PW)) {
            System.out.println("커넥션 성공!");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}