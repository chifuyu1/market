package com.market.app.db;

import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

@Slf4j
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class ConnectionTest {
    @Autowired
    private SqlSessionFactory sqlSessionFactory;

    @Test
    public void 커넥션_테스트(){
        try(Connection con = sqlSessionFactory.openSession().getConnection()){
            log.info("커넥션 성공 !");
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
    @Test
    public void 마이바티스_테스트(){
        try(SqlSession sqlSession = sqlSessionFactory.openSession()){
            sqlSession.selectList("com.market.app.db.selectTest");
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}