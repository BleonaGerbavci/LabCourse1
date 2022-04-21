using Lab1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Lab1.Controllers

{
    [Route("api/[controller]")]
    [ApiController]
    public class KompaniaController : ControllerBase
    {
        private static List <Kompania> kompanite = new List<Kompania>
        {
                new Kompania
                {
                    Id = 1,
                    Name="htravel",
                    Adress = "Rr. A Presheva",
                    City = "Gjilan",
                    Email = "htravel@gmail.com",
                    ContactNumber= "123456788"
                },
                 new Kompania
                 {
                    Id = 2,
                    Name="Name2",
                    Adress = "Adress2",
                    City = "Prishtine",
                    Email = "name2@gmail.com",
                    ContactNumber= "045354468"
                 }

        };


        [HttpGet]
        public async Task<ActionResult<List<Kompania>>> Get()
        {
           
            return Ok(kompanite);
        }
        //Get a single Company by id
        [HttpGet("{id}")]
        public async Task<ActionResult<Kompania>> Get(int id)
        {
            var kompania = kompanite.Find(k => k.Id == id);
            if (kompania == null)
                return BadRequest("Company not found.");
            return Ok(kompania);
        }

        //Create a Company 
        [HttpPost]
        public async Task<ActionResult<List<Kompania>>> AddCompany(Kompania kompania)
        {
            kompanite.Add(kompania);
            return Ok(kompanite);
        }

        //Update a Company
        [HttpPut]

        public async Task<ActionResult<List<Kompania>>> UpdateCompany(Kompania request)
        {
            var kompania = kompanite.Find(k => k.Id == request.Id);
            if (kompania == null)
                return BadRequest("Company not found.");

            kompania.Name = request.Name;
            kompania.Adress= request.Adress;
            kompania.City = request.City;
            kompania.Email = request.Email;
            kompania.ContactNumber = request.ContactNumber;

            return Ok(kompanite);
        }

        //Delete a Company
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Kompania>>> Delete(int id)
        {
            var kompania = kompanite.Find(k => k.Id == id);
            if (kompania == null)
                return BadRequest("Company not found.");

            kompanite.Remove(kompania);
            return Ok(kompanite);
        }




    }
}
