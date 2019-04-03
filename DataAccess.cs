using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Dal
{
    public class DataAccsess
    {
        //protected string table_name;
        //protected string primarykey;
        //protected SqlConnection _conn;
        //protected SqlTransaction _trans;


        //function to return result set
        public static DataTable GetData(String SQLQuery)
        {
            SqlConnection conn = connection.GetConnection();

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(SQLQuery, conn);
                cmd.CommandTimeout = 120;
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataTable dt = new DataTable();

                da.Fill(dt);
                da.Dispose();

                return dt;
            }
            catch (SqlException SQLEx)
            {
                throw SQLEx;
            }
            finally
            {
                conn.Close();
                conn.Dispose();
            }
        }


    

        public static int ExecuteActionQuery(String SQLQuery)
        {

            SqlConnection conn = connection.GetConnection();

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(SQLQuery, conn);
                int result = Convert.ToInt32(cmd.ExecuteNonQuery());

                return result;
            }
            catch (SqlException SQLEx)
            {
                throw SQLEx;
            }
            finally
            {
                conn.Close();
                conn.Dispose();
            }
        }

        public static SqlDataReader SelectData(String SQLQuery)
        {
            SqlConnection conn = connection.GetConnection();

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(SQLQuery, conn);
                cmd.CommandTimeout = 10000;
                SqlDataReader rd = cmd.ExecuteReader();
                return rd;
            }
            catch (SqlException SQLEx)
            {
                throw SQLEx;
            }
            finally
            {
                //conn.Close();
                //conn.Dispose();
            }
        }
        public static int ExecuteScalar(String SQLQuery)
        {

            SqlConnection conn = connection.GetConnection();

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(SQLQuery, conn);
                cmd.CommandTimeout = 120;
                int result = Convert.ToInt32(cmd.ExecuteScalar());

                return result;
            }
            catch (SqlException SQLEx)
            {
                throw SQLEx;
            }
            finally
            {
                conn.Close();
                conn.Dispose();
            }
        }
    }
}
