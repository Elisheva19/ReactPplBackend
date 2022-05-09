using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactPpl5_4.Data
{
  public  class PersonRepo
    {
        private string _connectionstring;
        public PersonRepo(string connect)
        {
            _connectionstring = connect;
        }

       
        public List<Person> GetPpl()
        {
            using var context = new PersonDataContext(_connectionstring);
            return context.People.ToList();
        }

        public void Add(Person person)
        {
            using var context = new PersonDataContext(_connectionstring);
            context.People.Add(person);
            context.SaveChanges();
        }
        public void Delete(int id)
        {
            using var context = new PersonDataContext(_connectionstring);
            context.Database.ExecuteSqlInterpolated($"DELETE FROM PEOPLE WHERE ID = {id}");
        }

        public void Update(Person update)
        {
            using var context = new PersonDataContext(_connectionstring);
            context.People.Update(update);
            context.SaveChanges();
        }

    }
}


