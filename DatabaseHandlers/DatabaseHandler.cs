using System;
using System.Data.SqlClient;

namespace pracchal
{
    public abstract class DatabaseHandler
    {
        public static string GetConnectionString()
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                builder.DataSource = "pracchal.database.windows.net";
                builder.UserID = "pracchal";
                builder.Password = "Skylines33!";
                builder.InitialCatalog = "pracchal"; //database name
                return builder.ConnectionString;
            }
            catch (Exception e)
            {
                throw new Exception("Error in GetConnectionString(): " + e.Message);
            }
        }
    }
}