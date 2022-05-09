using Microsoft.EntityFrameworkCore;
using System;

namespace ReactPpl5_4.Data
{
    public class PersonDataContext : DbContext
    {
        private string _connectionString;

        public PersonDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Person> People { get; set; }
    }
}
