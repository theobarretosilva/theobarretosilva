package estocar;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AcessoBDestocar {
    
    private static Connection connection;
   
    public static Connection getConnection(){
        if(connection == null){
            try{
                Class.forName("org.postgresql.Driver");
                String host = "localhost";
                String port = "5432";
                String database = "postgres";
                String user = "postgres";
                String pass = "postgres";
                String url = "jdbc:postgresql://"+host+":"+port+"/"+database;
                connection = DriverManager.getConnection(url, user, pass);                
               
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return connection;
    }
    
    public static void close(){
        if (connection == null){
            throw new RuntimeException("Nenhuma conexão aberta!");
        }
        else{
            try{
                connection.close();
            }
            catch (SQLException e){
                e.printStackTrace();
            }
        }
    }
    
    
    
}
