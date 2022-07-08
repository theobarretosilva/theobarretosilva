package cadastro;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class AcessoBD {
    
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
 
    public static void salvar (Usuario usuario){
        try{
            Connection con = AcessoBD.getConnection();
            PreparedStatement ps = con.prepareStatement("INSERT INTO usuario1 (login, senha, nome) values(?, ?, ?)");
            ps.setString(1, usuario.getLogin());
            ps.setString(2, usuario.getSenha());
            ps.setString(3, usuario.getNome());
            ps.execute();
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void deleta(String login){
        try{
            Connection con = AcessoBD.getConnection();
            PreparedStatement ps = con.prepareStatement("Delete FROM usuario1 WHERE login = ?");
            ps.setString(1, login);
            ps.executeUpdate();
            }
        catch (SQLException e) {
                e.printStackTrace();
            }
    }
    
    public static void mudaUser(Usuario usuario){
        deleta(usuario.getLogin());
        salvar(usuario);
    }
    
    public static void update_senha (Usuario usuario){
        try{
            Connection con = AcessoBD.getConnection();
            PreparedStatement ps = con.prepareStatement("Update usuario1 set senha = ? where login = ?");
            ps.setString(1, usuario.getSenha());
            ps.setString(2, usuario.getLogin());
            ps.executeUpdate();
        } 
        catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
    public static void visualiza_tabela(String tabela, String... atributos){
        try{
            Connection con = AcessoBD.getConnection();
            PreparedStatement ps = con.prepareStatement("select * from " + tabela);
            ResultSet res = ps.executeQuery();
            
            String selectfrom = ""; 
            
            while(res.next()){ // Varrer as linhas da tabela
               
                /*System.err.print(res.getString("login") + " - ");
                System.err.print(res.getString("senha") + " - ");
                System.err.print(res.getString("nome"));*/
                
                for(String i : atributos){ // Varrendo as colunas
                    selectfrom = selectfrom + " - " + res.getString(i);
                    
                }
                selectfrom = selectfrom + "\n";
                
            }
            System.out.println(selectfrom);
            
        } catch(Exception e){
            e.printStackTrace();
        }
         
    }
    
    public static boolean logar(String login, String senha){
        try{
            Connection con = AcessoBD.getConnection();
            PreparedStatement ps = con.prepareStatement("select * from usuario1");
            ResultSet res = ps.executeQuery();
            
            while(res.next()){ // Varrer as linhas da tabela
                String lg = res.getString("login");
                String sh = res.getString("senha");
                
                if(lg.equals(login) && sh.equals(senha)){
                    return true;
                }
            }
            
            
        } catch(Exception e){
            e.printStackTrace();
        }
        return false;
    }
}
