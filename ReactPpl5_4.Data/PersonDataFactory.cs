using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactPpl5_4.Data
{
  public  class PersonContextFactory : IDesignTimeDbContextFactory<PersonDataContext>
    {
       
        
            public PersonDataContext CreateDbContext(string[] args)
            {
                var config = new ConfigurationBuilder()
                    .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}ReactPpl5_4.Web"))
                    .AddJsonFile("appsettings.json")
                    .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

                return new PersonDataContext(config.GetConnectionString("ConStr"));
            }
      
    }
}
