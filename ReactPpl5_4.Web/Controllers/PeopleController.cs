using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactPpl5_4.Data;

namespace ReactPpl5_4.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        public readonly string _connectionstring;
        public PeopleController(IConfiguration configuration)
        {
            _connectionstring = configuration.GetConnectionString("ConStr");
        }

        [Route("getppl")]
        public List<Person> GetPpl()
        {
            var repo = new PersonRepo(_connectionstring);
            return repo.GetPpl();
        }
        [Route("addperson")]
        [HttpPost]
         public void AddPerson(Person add)
        {
            var repo = new PersonRepo(_connectionstring);
            repo.Add(add);
        }
        [Route("delete")]

        [HttpPost]
        public void Delete(DeleteId Di)
        {
            var repo = new PersonRepo(_connectionstring);
            repo.Delete(Di.Id);
        }

        [Route("update")]
        [HttpPost]
        public void Update(Person update)
        {
            var repo = new PersonRepo(_connectionstring);
            repo.Update(update);
        }

    }
}
